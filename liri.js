

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var axios = require("axios");

var spotify = new Spotify(keys.spotify);
var userInput = process.argv[2];
var userValue = process.argv[3];


function spotifyGet(song) {
    if (!song) {
        song = 'All the Small Things';
    }
    spotify
        .search({
            type: 'track',
            query: song
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (err) {
            console.log(err);
        });
}


var movieName = "";

function movieThis(movieName) {
    var input = process.argv.slice(3);
    for (var i = 2; i < input.length; i++) {

        if (i > 2 && i < input.length) {
            movieName = movieName + "+" + input[i];
        } else {
            movieName += input[i];

        }
    }
    var omdbUrl = "http://www.omdbapi.com/?=apikey=[61d358d6]&" + movieName;

    // console.log(ombdUrl);

    axios.get(omdbUrl).then(
        function (response) {
            console.log("Release Year: " + response.data.Year);
        });
}


function bandThis(artist) {
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    });
}

function liri() {
    if (userInput === 'spotify-this') {
        console.log("hello in spotify-this");
        spotifyGet(userValue);
    } else if (userInput === 'movie-this') {
        console.log("...executing movie-this")
        movieThis();
    } else {
        console.log("...did not recognize command");
    }
}

liri();
