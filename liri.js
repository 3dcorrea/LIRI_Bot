var axios = require("axios");

// 
// 
var moment = require("moment");
// 
// 
// 
// 
// 
// getting some weird things going on in these lines(8-18). They keep throwing up errors referring to a function called "spotifyGet()" and a variable named "command2"
// that no longer exist here. It says that theyve been declared but their values arent being read. 
// 
// 
// 
// 
var Spotify = require("node-spotify-api");

function spotifyThisSong() {
    var songInput = process.argv[3];
    if (!songInput) {
        songInput = "the+sign"
    }
    Spotify.search({
            type: "track",
            query: songInput
        },

        function (error, data) {
            if (!error) {
                var songData = data.tracks.items[i];
                console.log("Artist: " + songData.artists[0].name);
                console.log("Song: " + songData.name);
                console.log("Preview URL: " + songData.preview_url);
                console.log("Album: " + songData.album.name);
                console.log("-----------------------");
            } else {
                console.log('Error occurred.');
            }
        });
};








function movieThis() {
    var movieInput = process.argv[3];
    if (!movieInput) {
        movieInput = "Mr. Nobody";
    }
    var queryUrl = "http://www.omdbapi.com/?t=" + movieInput + "&y=&plot=short&apikey=trilogy";
    axios.get(queryUrl).then(
        function (response) {
            console.log("-----------------Searching for " + movieInput + "-----------------------------");
            console.log("Title: " + response.data.Title);
            console.log("Year: " + response.data.Year);
            console.log("Rated: " + response.data.Rated);
            console.log("Released: " + response.data.Released);
            console.log("Runtime: " + response.data.Runtime);
            console.log("Rotten Tomatoes Rating: " + JSON.stringify(response.data.Ratings[1].Value));
            console.log("Country: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
            console.log("------------------------------------------------------------------------------");
        },

        function (error) {
            console.log(error)
        }
    );
};

function bandtThis() {
    var bandInput = process.argv[3];
    var queryUrl = "https://rest.bandsintown.com/artists/" + bandInput + "/events?app_id=codingbootcamp";
    axios.get(queryUrl).then(
        function (response) {
            var datetime = response.data[0].datetime;
            var randomFormat = "MM/DD/YYYY";
            var convertedDate = moment(datetime).format(randomFormat);
            console.log("-----------------Searching for " + bandInput + "-----------------------------");
            console.log(queryUrl);
            console.log("Name of the Venue: " + response.data[0].venue.name);
            console.log("Venue Location: " + response.data[0].venue.city);
            console.log("Date of the Event: " + convertedDate);
            console.log("------------------------------------------------------------------------------");

        },

        function (error) {
            console.log(error)
        }
    );
}


function liri() {
    if (process.argv[2] === 'spotify-this') {
        spotifyThisSong();
    } else if (process.argv[2] === 'movie-this') {
        movieThis();
    } else if (process.argv[2] === 'band-this') {
        bandtThis();
    } else {
        console.log("------------command not recognized------------");
    }
}

liri();

function doThis() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        let dataArr = data.split(",");

        userInput = dataArr[0];
        userQuery = dataArr[1];
        userCommand(userInput, userQuery);
    });
};