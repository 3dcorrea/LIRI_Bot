require("dotenv").config();


var keys = require("./keys.js");
var spotify = require('node-spotify-api');
var axios = require("axios");

var userInput = process.argv[2];


function spotifyGet(song) {

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

if (userInput === 'spotify-this') {
    console.log("hello in spotify-this");
}




var movieName = "";

for (var i = 2; i < input.length; i++) {

    if (i > 2 && i < input.length) {
        movieName = movieName + "+" + input[i];
    } else {
        movieName += input[i];

    }
}

var omdbUrl = "http://www.omdbapi.com/?=apikey=[61d358d6]&" + movieName;

console.log(ombdUrl);

axios.get(omdbUrl).then(
    function (response) {
        console.log("Release Year: " + response.data.Year);
    }
);




// axios GET function materials
axios.get(queryUrl).then(function (results) {
            "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
}

 axios.get('')
 .then(response => {
     console.log(response.data.url);
     console.log(response.data.explanation);
 })
 .catch(error => {
     console.log(error);
 });