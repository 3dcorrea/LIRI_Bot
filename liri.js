require("dotenv").config();


var keys = require("./keys.js");
var spotify = require('node-spotify-api');

// var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var command2 = process.argv[3];


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