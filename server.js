var express = require('express');
var app = express();
var PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routes/apiRoutes")(app)

app.listen(PORT);
