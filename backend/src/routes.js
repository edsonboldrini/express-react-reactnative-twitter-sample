const express = require('express');

const routes = express.Router();

const TweetController = require("./controllers/TweeetController");
const LikeController = require("./controllers/LikeController");

routes.get("/tweets", TweetController.index);
routes.post("/tweets", TweetController.store);

routes.post("/like/:id", LikeController.store);

routes.get("/", (req, res) => {
    return res.send("Hello Edson");
});

module.exports = routes;