console.log('this is loaded');

require('dotenv').config();

// var spotify = new Spotify({

// });

// var data = JSON.parse(this.response)

// exports.spotify = {
//     id: process.env.clientId,
//     secret: process.env.secretId,
// };
exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};





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