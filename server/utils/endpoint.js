const endPoint = require("../consts/endpoint");

const generateEndPoint = endpoint =>
    `/${endPoint.root}/${endPoint.version}/${endpoint}`;

module.exports = generateEndPoint;