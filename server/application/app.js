const express = require("express");
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.json());
app.use("/", express.static("public"));

app.use(bodyparser.urlencoded({
    extended: true
}));

module.exports = app;
