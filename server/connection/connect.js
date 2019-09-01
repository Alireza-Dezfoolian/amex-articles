require("dotenv").config();
const mongoose = require("mongoose");
const app = require("../application/app");

//data base URL on mongodb atlas
const mongoDBUri = process.env.DATABASE_URL || "mongodb://localhost:27017/article";
const PORT = process.env.PORT || 3006;

mongoose.connect(mongoDBUri, {
    useNewUrlParser: true
});

//Get the default connection
const connect = mongoose.connection;

connect
    .on("error", console.error.bind(console, "MongoDB connection error"))
    .once("open", listen);

//run the when connect
function listen() {
    app
        .listen(PORT, function () {
            console.log(`Connected to DB. Server start on port ${PORT}!`);
        });
}

module.exports = connect;