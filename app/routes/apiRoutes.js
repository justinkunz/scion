var mongoose = require('mongoose')
var db = require('../models/GCSurveyResults')
mongoose.connect("mongodb://localhost/final_proj")
var email = require("../email/email")

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
};

module.exports = apiRoutes;
