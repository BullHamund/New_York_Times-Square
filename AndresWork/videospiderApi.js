var ticketUrl = "";
var videoUrl = "";
var ticketID = "";

$(document).ready(function(){
    $("#run-search").click(function(){
        var query = $("#movie-search").val();
        console.log("hello");
        findMovieId(query);
    });
});

function updateUrl(){
    ticketUrl = `https://cors-anywhere.herokuapp.com/https://videospider.in/getticket.php?key=fht9j7i4vSwRR9Ck&secret_key=a8v52mbfjd2enkcqq6pf943muhpl5t&video_id=${omdbId}&ip=${theIP}`;
    console.log(ticketUrl);
    getTicket();
};

function getTicket(){
    $.ajax({
        url: ticketUrl,
        method: 'GET'
    }).done(function(content){
        console.log(content);
        ticketID = content;
        //Used to test locally
        //videoUrl = `https://cors-anywhere.herokuapp.com/https://videospider.stream/getvideo?key=fht9j7i4vSwRR9Ck&video_id=${omdbId}&ticket=${ticketID}`;
        //Used on live
        videoUrl = `https://videospider.stream/getvideo?key=fht9j7i4vSwRR9Ck&video_id=${omdbId}&ticket=${ticketID}`;
        console.log(videoUrl);
        getVideo();
    });
}

function getVideo(){
    var btn = $("<button>");
    btn.text("hello");
    btn.click(function(){
        window.open(videoUrl);
    });
    $("body").append(btn);
    // $.ajax({
    //     url: videoUrl,
    //     method: 'GET',
    // }).done(function(content){
    //     console.log(content);
    //     var newWindow = window.open();
    //     newWindow.document.write(content);
    // });
}