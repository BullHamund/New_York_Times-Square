/// SETUP VARIABLES
// ***************************************
var authKey = "DqdmALlvW4YGS4KU7Mj87FScRXA4cNSa";

// Search parameters
var queryTerm = "";
var numResults = 0;

// URL
var queryURLBase = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" + authKey;

// Variable to track the number of articles
var articelCounter = 0;

// FUNCTIONS
// *****************************************

function runQuery(numArticles, queryURL) {
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (NYTDatae) {
        console.log(NYTData);
    })
}
