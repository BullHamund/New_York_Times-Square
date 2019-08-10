var ticketUrl = "";
var videoUrl = "";
var ticketID = "";
var query;
$(document).ready(function () {
    query = localStorage.getItem("title");
});

function updateUrl() {
    ticketUrl = `https://cors-anywhere.herokuapp.com/https://videospider.in/getticket.php?key=fht9j7i4vSwRR9Ck&secret_key=a8v52mbfjd2enkcqq6pf943muhpl5t&video_id=${omdbId}&ip=${theIP}`;
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
        videoUrl = `https://videospider.stream/getvideo?key=fht9j7i4vSwRR9Ck&video_id=${omdbId}&ticket=${ticketID}`;
        getVideo();
    });
}

function getVideo() {
    console.log("Hello",videoUrl);
    $("#freelink").attr("href",videoUrl);
}