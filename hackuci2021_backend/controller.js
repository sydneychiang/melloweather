const request = require("request")
const querystring = require("querystring")
const dotenv = require("dotenv");
var path = require("path");

dotenv.config({ path: "./config.env" });

var client_id = process.env.CLIENT_ID; // Client id
var client_secret = process.env.CLIENT_SECRET; // Client secret id
var redirect_uri = process.env.REDIRECT_URI || "http://localhost:8080/callback" // Redirect ur

var scopes = 'user-read-private user-read-email'

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
    //     path.join(__dirname, "./My-Boba-List-Frontend/build/index.html")
    // );
};

exports.getPlaylist = async (req, res, next) => {
    // https://api.spotify.com/v1/playlists/{playlist_id}
    try {
        res.status(200).json({ 
            "test": "retrieving playlist"
        });
    } catch (err) {
        res.status(404).json({
            status: "ERROR",
            message: err
        })
    }
}

exports.spotifyLogin = async (req, res, next) => {
    var state = generateRandomString(16);
    res.cookie(stateKey, state);

    // application requests authorization
    var scope = 'user-read-private user-read-email';
    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
        response_type: 'code',
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state
        }));
}

exports.callback = async (req, res, next) => {

    // your application requests refresh and access tokens
    // after checking the state parameter

    console.log("test");
  
    var code = req.query.code || null;
    var state = req.query.state || null;
    var storedState = req.cookies ? req.cookies[stateKey] : null;
  
    if (state === null || state !== storedState) {
      res.redirect('/#' +
        querystring.stringify({
          error: 'state_mismatch'
        }));
    } else {
      res.clearCookie(stateKey);
      var authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        form: {
          code: code,
          redirect_uri: redirect_uri,
          grant_type: 'authorization_code'
        },
        headers: {
          'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
        },
        json: true
      };
  
      request.post(authOptions, function(error, response, body) {
        if (!error && response.statusCode === 200) {
  
          var access_token = body.access_token,
              refresh_token = body.refresh_token;
  
          var options = {
            url: 'https://api.spotify.com/v1/me',
            headers: { 'Authorization': 'Bearer ' + access_token },
            json: true
          };
  
          // use the access token to access the Spotify Web API
          request.get(options, function(error, response, body) {
            console.log(body);
          });
  
          // we can also pass the token to the browser to make requests from there
          res.redirect('/#' +
            querystring.stringify({
              access_token: access_token,
              refresh_token: refresh_token
            }));
        } else {
          res.redirect('/#' +
            querystring.stringify({
              error: 'invalid_token'
            }));
        }
      });
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

exports.logout = async (req, res, next) => {
    res.redirect('https://accounts.spotify.com/en/logout')
}