/// SETUP VARIABLES
// ***************************************
var authKey = "DqdmALlvW4YGS4KU7Mj87FScRXA4cNSa";

// Search parameters
var queryTerm = "";
var numResults = 0;

// URL
var queryURLBase = "http://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=" + authKey;

// Variable to track the number of articles
var articelCounter = 0;

// FUNCTIONS
// *****************************************

function runQuery(numArticles, queryURL) {
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (NYTData) {
        for (var i= 0; i < NYTData.results.length;i++){
        console.log(NYTData.results[i].display_title);
        console.log(NYTData.results[i].mpaa_rating);
        console.log(NYTData.results[i].summary_short);
        }
    })
}

// MAIN PROCESSES
// ============================================

$("#run-search").on("click", function() {

    // Get the search term
    queryTerm = $("#movieSearch").val().trim();

    // Add in search term
    var newURL = queryURLBase + `&query=` + queryTerm;

    // Add in the Number of Records
    // var numResults = $("#numRecords").val();

    // Send the Ajax Call the newly assembled URL and add numResults after html updated
    runQuery(10, newURL);

    return false;
})

