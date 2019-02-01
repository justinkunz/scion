// dependencies
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./app/routes/apiRoutes")

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve up static assets for deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// sets up routes for API and views
app.use(routes)
require("./app/routes/apiRoutes")(app);

// connect to Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/{reactreadinglist}");

// heroku mLab connections
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);


app.listen(PORT);
