// dependencies 
const express = require('express');
const mongoose =require('mongoose');
const routes = ""


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routes/apiRoutes")(app)

app.listen(PORT);
