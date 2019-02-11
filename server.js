// dependencies
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/happyFamily";

mongoose.connect(MONGODB_URI);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

require("./app/routes/apiRoutes")(app)

app.listen(PORT);
