require("dotenv").config();


var keys = require("./keys.js");
var spotify = require('node-spotify-api');

// var spotify = new Spotify(keys.spotify);

var command = process.argv[2];


function spotifyGet(song) {
    // error for "secret" value, line 14

    spotify
        .search({
            type: 'track',
            query: 'All the Small Things'
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (err) {
            console.log(err);
        });
}

if (command === 'spotify-this') {
    console.log("hello in spotify-this");
    // spotifyGet(command2);
}

var axios = require("axios");

var nodeArgs = process.argv[2];

var movieName = "";

for (var i = 2; i < nodeArgs.length; i++) {

  if (i > 2 && i < nodeArgs.length) {
    movieName = movieName + "+" + nodeArgs[i];
  }
  else {
    movieName += nodeArgs[i];

  }
}
"http://www.omdbapi.com/?apikey=[yourkey]&"

var queryUrl = "http://www.omdbapi.com/?=apikey=[61d358d6]&" + movieName;

console.log(queryUrl);

axios.get(queryUrl).then(
  function(response) {
    console.log("Release Year: " + response.data.Year);
  }
);



// ----------------------------------------------------------New code from Spotify api doc
// var express = require('express'); // Express web server framework
// var request = require('request'); // "Request" library
// var cors = require('cors');
// var querystring = require('querystring');
// var cookieParser = require('cookie-parser');

// var client_id = 'CLIENT_ID'; // Your client id
// var client_secret = 'CLIENT_SECRET'; // Your secret
// var redirect_uri = 'REDIRECT_URI'; // Your redirect uri

// ------------------------------------ New code from Spotify api doc

// axios.get('')
//     .then(response => {
//         console.log(response.data.url);
//         console.log(response.data.explanation);
//     })
//     .catch(error => {
//         console.log(error);
//     });