var mongoose = require('mongoose')
var db = require('../models/answers')
mongoose.connect("mongodb://localhost/final_proj")

function apiRoutes(app) {

    app.get("/api/get/survey", function (req, res) {
        db.find().then(function (data, err) {
            if (err) throw err;
            res.json(data)

        })
    });

    app.post("/api/post/survey", function (req, res) {
        db.create(req.body).then(function (data, err) {
            if (err) throw err;
            res.json(data)

        })
    });
};

module.exports = apiRoutes
