console.log('this is loaded');

var clientId = "a5bd103a42ec4ddc9649ce410220ae4b";
var secretId = "4177056fe0f34fabb39fe31f162f081a";

exports.spotify = {
    id: process.env.clientId,
    secret: process.env.secretId,
};


var spotify = new Spotify({
    id: a5bd103a42ec4ddc9649ce410220ae4b,
    secret: 4177056fe0f34fabb39fe31f162f081a
});

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


axios.get('')
    .then(response => {
        console.log(response.data.url);
        console.log(response.data.explanation);
    })
    .catch(error => {
        console.log(error);
    });