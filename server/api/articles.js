const app = require("../application/app");
const generateEndPoint = require("../utils/endpoint");
const articleModel = require("../model/article");

const isDevelopment = process.env.ENVIRONMENT_VARIABLE === "dev";

//Only for development
if (isDevelopment) {
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
}

app.post(generateEndPoint("article"), async(request, response) => {
    try {
        const article = new articleModel(request.body);
        const result = await article.save();
        response.send(result);
    } catch (error) {
        console.log("error", error);
        response
            .status(500)
            .send(error);
    }
});

app.get(generateEndPoint("articles"), async(request, response) => {
    try {
        var results = await articleModel.find({});
        response.send(results);
    } catch (error) {
        console.log("error", error);
        response
            .status(500)
            .send(error);
    }
});
