var apiKey = "https://api.ipify.org/";
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
    });
}