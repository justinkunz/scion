var mongoose = require("mongoose");
var email = require("../email/email");
var db = require("../models");
var hash = require("../hash");
var jwt = require("jsonwebtoken");
var compareSurvey = require("../logic/compareThisShit");
var request = require("request");
var faker = require("faker");
var email = require("../email/email");
var converter = require("../logic/fakerCompare");
require('dotenv').config()

mongoose.connect("mongodb://localhost/happyFamily");

function apiRoutes(app) {
  app.get("/api/get", function(req, res) {
    db.users.find().then(function(data, err) {
      if (err) throw err;
      console.log(data);
      res.json(data);
    });
  });

  app.get("/api/email", function(req, res){
  
  })

  app.post("/api/email/gcs/conf", function(req, res) {
    email.submissionThanksGCS(req.body);
    res.json("success");
  });

  //determining zip code by lattitude and longitude on sign up page
  app.get("/api/get/zip/:lat/:long", function(req, res) {
    request(
      "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
        req.params.lat +
        "," +
        req.params.long +
        "&key=" + process.env.GMAP_APIKEY,
      function(error, response, body) {
        if (error) res.json("error");
        try {
          results = JSON.parse(response.body).results[0].address_components;
          var toReturn = "error";
          for (i = 0; i < results.length; i++) {
            if (results[i].types[0] === "postal_code") {
              toReturn = results[i].short_name;
              break;
            }
          }
          res.json(toReturn);
        } catch (err) {
          res.json("error");
        }
      }
    );
  });

  app.get("/api/delete", function(req, res) {
    db.users.remove().then(function(d, e) {
      res.json(d);
    });
  });

  app.get("/api/faker/:count", function(req, res) {

    for(i=0; i<parseInt(req.params.count); i++){
    
    var rand = Math.random();
    var type = "GC";
    if (rand > 0.5) {
      type = "IP";
    }
    const education_lvl = [
      "N/A",
      "High School Diploma",
      "Some College",
      "Associates Degree",
      "Bachelors Degree",
      "Masters Degree",
      "PhD"
    ];
    const religions = [
      "Not Religous/Agnostic/Atheist",
      "Christian",
      "Jewish",
      "Buddist",
      "Islamic"
    ];
    const embr_ct = ["1-3", "4-6", "7-10", ">10"];
    const relationshipStatus = ["Single", "Married", "Commmon Law Married"];
    const desiredCompensation = [
      "< $20,000",
      "$21,000 - 49,000",
      "$50,000 - 75,000",
      "$75,000 - $100,000",
      "> $100,000"
    ];
    const how_soon = [
      "0-3 months",
      "3-6 months",
      "6-12 months",
      "1-2 years",
      "2+ years from now"
    ];
    function yesNo() {
      if(Math.random()>0.5){
        return "Yes"
      }
      return "No"
    }
    function PLPC() {
      if(Math.random()>0.5){
        return "Pro Life"
      }
      return "Pro Choice"
    }
    var survey_res = {
      signedIn: true,
      degree_type: education_lvl[Math.floor(Math.random()*education_lvl.length)],
      PL_PC: PLPC(),
      religion: religions[Math.floor(Math.random()*religions.length)],
      embryos_count: embr_ct[Math.floor(Math.random()*embr_ct.length)],
      birthCenter: yesNo(),
      hospital: yesNo(),
      implant_timeline: how_soon[Math.floor(Math.random()*how_soon.length)],
      location: yesNo(),
      haveChildren: yesNo(),
      previous_gc: yesNo(),
      relationshipStatus: relationshipStatus[Math.floor(Math.random()*relationshipStatus.length)],
      desiredCompensation: desiredCompensation[Math.floor(Math.random()*desiredCompensation.length)],
      insurance: yesNo(),
    }


    db.users
      .create({
        email: faker.internet.email().toLowerCase(),
        password: "$2b$10$71a572gQNwnao9er1mIk8OU.TY0iarGMle.SBMb9h4xLoqWOGywle",
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        phone_num: faker.phone.phoneNumber(),
        user_type: type,
        created_at: new Date(),
        zipcode: faker.address.zipCode(),
        answered_survey: true,
        numerical_survery:  converter(survey_res),
        survey_results: survey_res
      })
      .then(function(err, data) {
        // res.send({"Completed": "Signed up fake user" });
        console.log(data);
      });
    };
    
    res.send({"Completed": "Signed up " + req.params.count + " fake user(s)" })

    function zeroToFive() {
       return Math.floor(Math.random()*6)
    };
    function zeroOrFive() {
        if( Math.random()*0.5){
            return 5
        }
        return 0
     };

  });

  app.get("/api/get/results/:id", function(req, res) {
    db.users.find({ _id: req.params.id }).then(function(user, err) {
      if (err) throw err;

      search_type = "IP";
      if (user[0].user_type === "IP") search_type = "GC";

      db.users.find({ user_type: search_type }).then(function(compareTo, err) {
        if (err) throw err;
        console.log("l");
        console.log(user[0].numerical_survery);
        res.json(compareSurvey(user[0].numerical_survery, compareTo));
      });
    });
  });
  app.post("/api/post/survey", function(req, res) {
    console.log(req.body);

    var decoded = jwt.decode(req.body.token);
    console.log(decoded);

    //if data exists, return user data
    if (decoded.data) {
      db.users
        .update(
          { _id: decoded.data },
          {
            survery_answered: true,
            survey_results: req.body.text,
            numerical_survery: req.body.numerical
          }
        )
        .then(function(err, data) {
          email.matched({firstName: data[0].first_name, lastName: data[0].last_name, email: data[0].email});
          console.log(err);
          console.log(data);
        });
    }
  });

  //SIGN IN OR SIGN UP OPTIONS

  //call for protected pages to find if user / which user is currently logged in
  app.post("/api/currentUser", function(req, res) {
    var token = req.body.token;
    console.log(token);

    //decode token
    var decoded = jwt.decode(token);

    //test if token is expired
    // if(new Date > decoded.exp){
    //     res.json("redirect")
    // };
    console.log(decoded);

    //if data exists, return user data
    if (decoded.data) {
      db.users.find({ _id: decoded.data }).then(function(data, err) {
        if (err) throw err;
        console.log(data);
        res.json(data);
      });
    }

    //if data can not be extracted, return redirect command
    else {
      res.json("redirect");
    }
  });

  //call to sign in users
  app.post("/api/signIn", function(req, res) {
    //hash pw
    var hashedInput = hash.hashThis(req.body.password);

    db.users
      .find({ email: req.body.username.toLowerCase() })
      .then(function(data, err) {
        if (err || data.length === 0) res.send("error");

        if (hashedInput === data[0].password) {
          //create token
          var token = jwt.sign(
            {
              exp: Math.floor(Date.now() / 1000) + 60 * 60,
              data: data[0]._id
            },
            "secret"
          );

          res.send({ message: "success", token: token });
        } else {
          res.send("error");
        }
      });
  });
  app.get("/api/delete", function(req, res) {
    db.users.remove().then(function(err, data) {
      res.json(data);
    });
  });
  //creating new accounts
  app.post("/api/new/user", function(req, res) {
    var userInfo = req.body;

    //data validation

    //email check
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    isEmail = re.test(String(userInfo.email).toLowerCase());
    if (!isEmail) {
      res.send({ error: "Could not sign up user" });
      return;
    }

    //missing fields
    if (
      userInfo.first_name === "" ||
      userInfo.last_name === "" ||
      userInfo.email === "" ||
      userInfo.phone_num === "" ||
      userInfo.confirm_pw === "" ||
      userInfo.password === "" ||
      userInfo.type === "" ||
      userInfo.zipcode === ""
    ) {
      res.send({ error: "Could not sign up user" });
      return;
    }

    //phone number not a number
    if (isNaN(userInfo.phone_num)) {
      res.send({ error: "Could not sign up user" });
      return;
    }

    //passwords dont match
    if (userInfo.confirm_pw !== userInfo.password) {
      res.send({ error: "Could not sign up user" });
      return;
    }

    //passwords less than 6 chars
    if (userInfo.password.length < 6) {
      res.send({ error: "Could not sign up user" });
      return;
    }

    //find existing accounts with that username
    db.users
      .find({ email: userInfo.email.toLowerCase() })
      .then(function(data, err) {
        if (data.length === 0) {
          //get hashed pw
          var hashPW = hash.hashThis(req.body.password);

          db.users
            .create({
              email: userInfo.email.toLowerCase(),
              password: hashPW,
              first_name:
                userInfo.first_name.charAt(0).toUpperCase() +
                userInfo.first_name.slice(1),
              last_name:
                userInfo.last_name.charAt(0).toUpperCase() +
                userInfo.last_name.slice(1),
              phone_num: userInfo.phone_num,
              user_type: userInfo.type,
              created_at: new Date(),
              zipcode: userInfo.zipcode,
              answered_survey: false
            })
            .then(function(err, data) {
              
              if (err){
                res.send({ error: "Could not sign up user" });
                return
              }
              res
              .status(200)
              .send({ success: "Successfully created user account" });
              return;
              console.log(data);
            });
            
            email.acctCreated({firstName: userInfo.first_name, lastName: userInfo.last_name, email: userInfo.email});
            res
              .status(200)
              .send({ success: "Successfully created user account" });
          return;
        }

        //existing username
        res.send({ error: "existing user" });
        return;
      });
  });
}

module.exports = apiRoutes;
