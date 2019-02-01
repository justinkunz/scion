var mongoose = require('mongoose');
var email = require("../email/email");
var db = require('../models');
var hash = require('../hash');

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

        //hash token from object passed in
        var hashedToken = hash.hashThis(toString(req.body.timeIn) + toString(req.body.userId) + toString(req.body.pin) + req.body.user_type)
        console.log(hashedToken)
        //if the hashed version of the data is equal to the token key in the object, search the database for the user, return data
        if (hashedToken == req.body.tokenKey) {
            db.users.find({ _id: req.body.userId }).then(function (data, err) {
                if (err) throw err;
                res.json(data)
            });

        } else {
            //else, tell front end to redirect to sign in page
            res.json("redirect")
        }
    })

    //call to sign in users
    app.post("/api/signIn", function (req, res) {

        //hash pw
        var hashedInput = hash.hashThis(req.body.password)

        db.users.find({ email: req.body.username.toLowerCase() }).then(function (data, err) {
            if (err || data.length === 0) res.send("error")

            console.log(data)
            if (hashedInput === data[0].password) {

                var randomPIN = Math.floor(Math.random() * 99999)
                var currentTime = new Date
                var userId = data[0]._id
                var userType = data[0].user_type
                var hashedToken = hash.hashThis(toString(currentTime) + toString(userId) + toString(randomPIN) + userType)

                var tokenObj = {
                    userId: userId,
                    timeIn: currentTime,
                    pin: randomPIN,
                    user_type: userType,
                    tokenKey: hashedToken
                }

                res.send({ message: "success", token: tokenObj })
            }
            else {
                res.send("error")
            }

        })
    })

    //creating new accounts
    app.post("/api/new/user", function (req, res) {
        var userInfo = req.body

        //return error if any fields are null
        if (userInfo.first_name === '' || userInfo.last_name === '' || userInfo.email === '' || userInfo.phone_num === '' || userInfo.confirm_pw === '' || userInfo.password === '') {
            res.status(400).send({ "error": "Could not sign up user" })
        }

        //get hashed pw
        var hashPW = hash.hashThis(req.body.password)

        db.users.create({
            email: userInfo.email.toLowerCase(),
            password: hashPW,
            first_name: userInfo.first_name.charAt(0).toUpperCase() + userInfo.first_name.slice(1),
            last_name: userInfo.last_name.charAt(0).toUpperCase() + userInfo.last_name.slice(1),
            phone_num: userInfo.phone_num,
            user_type: userInfo.type,
            created_at: new Date
        }).then(function (err, data) {
            if (err) res.status(400).send({ "error": "Could not sign up user" })
            console.log(data)
        })
        res.status(200).send({ "success": "Successfully created user account" })
    })
};

module.exports = apiRoutes;
