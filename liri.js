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
}

var axios = require("axios");

var input = process.argv[2];

var movieName = "";

for (var i = 2; i < input.length; i++) {

  if (i > 2 && i < input.length) {
    movieName = movieName + "+" + input[i];
  }
  else {
    movieName += input[i];

  }
}

var queryUrl = "http://www.omdbapi.com/?=apikey=[61d358d6]&" + movieName;

console.log(queryUrl);

axios.get(queryUrl).then(
  function(response) {
    console.log("Release Year: " + response.data.Year);
  }
);
// axios.get('')
//     .then(response => {
//         console.log(response.data.url);
//         console.log(response.data.explanation);
//     })
//     .catch(error => {
//         console.log(error);
//     });