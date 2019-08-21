var ticketUrl = "";
var videoUrl = "";
var ticketID = "";
var query;

var vsKey; //Insert public key here
var vsSecretKey; //Insert secret key here
$(document).ready(function () {
    query = localStorage.getItem("title");
});

function updateUrl() {
    ticketUrl = `https://cors-anywhere.herokuapp.com/https://videospider.in/getticket.php?key=${vsKey}&secret_key=${vsSecretKey}&video_id=${omdbId}&ip=${theIP}`;
    console.log(ticketUrl);
    getTicket();
};

function getTicket() {
    $.ajax({
        url: ticketUrl,
        method: 'GET'
    }).done(function (content) {
        console.log("Content",content);
        ticketID = content;
        videoUrl = `https://videospider.stream/getvideo?key=${vsKey}&video_id=${omdbId}&ticket=${ticketID}`;
        getVideo();
    });
}

function getVideo() {
    console.log("Hello",videoUrl);
    $("#freelink").attr("href",videoUrl);
}