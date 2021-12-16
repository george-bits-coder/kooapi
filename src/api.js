const express = require("express");
const serverless = require("serverless-http");

const connect = require("../config/db");


const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    hello: "flipkart clone api!"
  });
});

app.use(`/.netlify/functions/ppp`, router);

module.exports = app;
module.exports.handler = serverless(app);
