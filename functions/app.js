const express = require("express");
const serverless = require("serverless-http");
const path = require('path');
const app = express();
const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'src', 'html', 'main.html'));
});

app.use("/", router);
module.exports.handler = serverless(app);