var mongoose = require('mongoose');
var email = require("../email/email");
var db = require('../models');
var hash = require('../hash');
var jwt = require('jsonwebtoken');

mongoose.connect("mongodb://localhost/generalDb");

function apiRoutes(app) {

    app.get("/api/get", function (req, res) {
        db.users.find().then(function (data, err) {
            if (err) throw err;
            res.json(data)
        });
    });

    app.post("/api/post/survey", function (req, res) {
        db.create(req.body).then(function (data, err) {
            if (err) throw err;
            res.json(data)
        });
    });

    app.post("/api/email/gcs/conf", function (req, res) {
        email.submissionThanksGCS(req.body);
        res.json("success")
    });

    //SIGN IN OR SIGN UP OPTIONS 

    //call for protected pages to find if user / which user is currently logged in
    app.post('/api/currentUser', function (req, res) {
        var token = req.body.token;
        console.log(token)

        //decode token
        var decoded = jwt.decode(token)
        console.log(decoded)

        //if data exists, return user data
        if (decoded.data) {
            db.users.find({ _id: decoded.data }).then(function (data, err) {
                if (err) throw err;
                console.log(data)
                res.json(data)
            });
        }

        //if data can not be extracted, return redirect command
        else {
            res.json("redirect")
        }

    })
    //call to sign in users
    app.post("/api/signIn", function (req, res) {

        //hash pw
        var hashedInput = hash.hashThis(req.body.password)

        db.users.find({ email: req.body.username.toLowerCase() }).then(function (data, err) {
            if (err || data.length === 0) res.send("error")

            if (hashedInput === data[0].password) {

                //create token
                var token = jwt.sign({
                    exp: Math.floor(Date.now() / 1000) + (60 * 60),
                    data: data[0]._id,
                }, 'secret');

                res.send({ message: "success", token: token })
            }
            else {
                res.send("error")
            }

        })
    })
    app.get("/api/delete", function (req, res) {
        db.users.remove().then(function (err, data) {
            res.json(data)
        });
    });
    //creating new accounts
    app.post("/api/new/user", function (req, res) {
        var userInfo = req.body

        //data validation

        //email check
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        isEmail = re.test(String(userInfo.email).toLowerCase());
        if (!isEmail) {
            res.send({ "error": "Could not sign up user" })
            return
        }

        //missing fields
        if (userInfo.first_name === '' || userInfo.last_name === '' || userInfo.email === '' || userInfo.phone_num === '' || userInfo.confirm_pw === '' || userInfo.password === '') {
            res.send({ "error": "Could not sign up user" })
            return
        }

        //phone number not a number
        if (isNaN(userInfo.phone_num)) {
            res.send({ "error": "Could not sign up user" })
            return
        }

        //passwords dont match
        if (userInfo.confirm_pw !== userInfo.password) {
            res.send({ "error": "Could not sign up user" })
            return
        }

        //passwords less than 6 chars
        if (userInfo.password.length < 6) {
            res.send({ "error": "Could not sign up user" })
            return
        }

        //find existing accounts with that username
        db.users.find({ email: userInfo.email.toLowerCase() }).then(function (data, err) {


            if (data.length === 0) {

                //get hashed pw
                var hashPW = hash.hashThis(req.body.password)

                db.users.create({
                    email: userInfo.email.toLowerCase(),
                    password: hashPW,
                    first_name: userInfo.first_name.charAt(0).toUpperCase() + userInfo.first_name.slice(1),
                    last_name: userInfo.last_name.charAt(0).toUpperCase() + userInfo.last_name.slice(1),
                    phone_num: userInfo.phone_num,
                    user_type: userInfo.type,
                    created_at: new Date,
                    answered_survey: false
                }).then(function (err, data) {
                    res.send({ "error": "Could not sign up user" })
                    return
                    console.log(data)
                })
                res.status(200).send({ "success": "Successfully created user account" })
                return
            }

            //existing username
            res.send({ "error": "existing user" })
            return
        });

    });
}

module.exports = apiRoutes;
