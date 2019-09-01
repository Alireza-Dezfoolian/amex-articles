const mongoose = require("mongoose");

//Schema of amex articles
const articleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    article: {
        type: String,
        required: true,
        minlength: 100
    },
    imgUrl: String
}, {
    timestamps: {
        updatedAt: "updateTime",
        createdAt: "createTime"
    }
});

module.exports = articleSchema;