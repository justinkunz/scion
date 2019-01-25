var mongoose = require('mongoose')

var email = require("../email/email")
var db = require('../models/GCSurveyResults')

mongoose.connect("mongodb://localhost/final_proj")
var newUser = require('../hash');

function apiRoutes(app) {

    app.get("/api/get/survey", function (req, res) {
        db.find().then(function (data, err) {
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

    app.post("/api/new/user", function (req, res) {
        newUser(req.body.username, req.body.password)
        res.json("test")
    })
};

module.exports = apiRoutes;
