var apiKey = "https://api6.ipify.org/";
var theIP = "";

$(document).ready(function () {
    grabUserIp();
});

function grabUserIp() {
    console.log("Start");
    $.ajax({
        url: apiKey,
        method: 'GET',
    }).done(function (reply) {
        if (reply === undefined) {
            theIP = null;
        } else {
            theIP = reply;
        }
        console.log(theIP);
        findMovieId(query);
    }).fail(function (e) {
        document.write("<h1>Please disable adblock and refresh for this page as we need to grab your IP.</h1>");
    });
}