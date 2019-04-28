var axios = require("axios");
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var moment = require("moment");
var spotify = new Spotify(keys.spotify);

























function spotifyGet(songInput) {
    var songInput = process.argv[3];
    if (!songInput) {
        songInput = 'All the Small Things';
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

// * Title of the movie.
//   * Year the movie came out.
//   * IMDB Rating of the movie.
//   * Rotten Tomatoes Rating of the movie.
//   * Country where the movie was produced.
//   * Language of the movie.
//   * Plot of the movie.
//   * Actors in the movie.

function movieThis(userInput) {
    var JSON = JSON.stringify();
    var movieInput = process.argv[3];
    var omdbUrl = "http://www.omdbapi.com/?t=" + movieInput + "&y=&plot=short&apikey=trilogy"
    axios.get(omdbUrl).then(
        function (response) {
            console.log("-----------------Searching for " + movieInput + "-----------------------------");
            console.log("Release Year: " + response.data.Year);
            console.log("Movie Rating: " + response.data.JSON(Ratings[1]);
        });
    for (var i = 2; i < movieInput.length; i++) {

        if (i > 2 && i < movieInput.length) {
            userInput = userInput + "+" + movieInput[i];
        } else {
            userInput += movieInput[i];
        }
    }
}


function bandThis(artist) {
    var artist = process.argv[3];
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
        .then(response => {
            console.log("Venue Name: " + jsonData.venue.name);
            console.log("Venue Location: " + jsonData.venue.city);
            console.log("Time")
        })
        .catch(error => {
            console.log(error);
        });
}

function liri() {
    if (process.argv[2] === 'spotify-this') {
        console.log("hello in spotify-this");
        spotifyGet(songInput);
    } else if (process.argv[2] === 'movie-this') {
        console.log("...executing movie-this")
        movieThis();
    } else {
        console.log("...did not recognize command");
    }
}

liri();