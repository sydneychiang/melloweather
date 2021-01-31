const express = require("express");
const controller = require("./controller");
const router = express.Router();

// Search
router.route("/").get(controller.getHome)
router.route("/login").get(controller.spotifyLogin)
router.route("/callback").get(controller.callback)
router.route("/refreshtoken").get(controller.refreshToken)
router.route("/logout").get(controller.logout)
router.route("/getPlaylist").get(controller.getPlaylist)
router.route("/getTopArtists").get(controller.getTopArtists)
router.route("/getWeather").get(controller.getWeather)

// getPlaylist?key=value&key=value&key=value


// app.get('/r/:subreddit/:postId', (req, res) => {
//     const {subreddit, postId } = req.params;
//     res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`);
// })

module.exports = router;
