const request = require("request")
const querystring = require("querystring")
const dotenv = require("dotenv");
const fetch = require("node-fetch");
var path = require("path");
var SpotifyWebApi = require('spotify-web-api-node');

dotenv.config({ path: "./config.env" });


var spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: process.env.REDIRECT_URI || "http://localhost:8080/callback"
});

var scopes = ['user-read-private', 'user-read-email', 'playlist-modify-public', 'playlist-modify-private', 'user-top-read'];

var stateKey = 'spotify_auth_state';

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
var generateRandomString = function(length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };
  
// TESTING
exports.getHome = async (req, res, next) => {
    try {
        // res.send("Hello World!");
        res.status(200).json({ "test": "Hello World!" });
    } catch (err) {
        res.status(404).json({
            status: "ERROR",
            message: err
        });
    }
    // res.sendFile(
    //     path.join(__dirname, "./melloweather/src/index.html")
    // );
};

exports.getPlaylist = async (req, res, next) => {
    // https://api.spotify.com/v1/playlists/{playlist_id}
    
    var userId;
    spotifyApi.getMe().then(function(data) {
      userId = data.body.id;
    }, function(err) {
      console.log("oops.", err);
    });

    try {
        var result = await spotifyApi.getUserPlaylists(userId);
        console.log(result.body);
        res.status(200).send(result.body);
    } catch (err) {
        res.status(404).json({
          status: "ERROR",
          message: err
        });
    }
};

exports.spotifyLogin = async (req, res, next) => {
    var html = spotifyApi.createAuthorizeURL(scopes)
    var state = generateRandomString(16);
    res.cookie(stateKey, state);
    var scope = scopes.join(",");

    // console.log(html);
    
    // application requests authorization
    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
        response_type: 'code',
        client_id: spotifyApi.getClientId(),
        scope: scope,
        redirect_uri: spotifyApi.getRedirectURI(),
        state: state
        }));
}

exports.callback = async (req, res, next) => {

    // your application requests refresh and access tokens
    // after checking the state parameter

    const { code } = req.query;
    console.log(code)
    try {
      var data = await spotifyApi.authorizationCodeGrant(code)
      const { access_token, refresh_token } = data.body;
      spotifyApi.setAccessToken(access_token);
      spotifyApi.setRefreshToken(refresh_token);

      res.redirect('http://localhost:8080');
    } catch(err) {
      res.redirect('/#/error/invalid token');
    }
}
  
exports.refreshToken = async (req, res, next) => {

  // requesting access token from refresh token
  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;
      res.send({
        'access_token': access_token
      });
    }
  });
}

exports.getTopArtists = async (req, res, next) => {
 
  try {
    
    let topArtists;
    spotifyApi.getMyTopArtists().then(function(data) {
      topArtists = data.body.items;
      return topArtists;
    }, function(err) {
      console.log('Something went wrong!', err);
    }).then(function() {
      console.log(topArtists);
      res.status(200).send(topArtists);
    });

  } catch (err) {
      res.status(404).json({
      status: "ERROR",
      message: err
      });
  }
}

exports.getWeatherCoords = async (req, res, next) => {
  
  let woeid;
  try {
    await fetch(`https://www.metaweather.com/api/location/search/?lattlong=36.96,-122.02`)
    .then(response => response.json())
    .then(data => {
      woeid = data[0].woeid;
      console.log(woeid);
      });
  } catch (err) {
    res.status(404).json({
      status: "ERROR",
      message: err
      })
  };

exports.getWeatherLoc = async (req, res, next) => {

}
  
  fetch(`https://www.metaweather.com/api/location/${woeid}/`)
  .then(response => response.json())
  .then(data => {
    console.log(data.consolidated_weather[0].weather_state_name);
  })
}

exports.logout = async (req, res, next) => {
    res.redirect('https://accounts.spotify.com/en/logout')
}