const mongoose = require("mongoose");
const articleSchema = require("../schema/article");

const articleModel = mongoose.model("article", articleSchema);

module.exports = articleModel;