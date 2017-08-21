var author = "", quote = "";
var colorPool =['#16a085', '#27ae60', '#2c3e50',
				'#f39c12', '#e74c3c', '#9b59b6',
				'#FB6964', '#342224', "#472E32",
				"#BDBB99", "#77B1A9", "#73A857"];

function parseQuote(data) {
	anm();
	author = data.quoteAuthor;
	quote = data.quoteText;
	if(author === "") author = "No author";
	console.log(data);
    $("#text").html(quote + "<i class='fa fa-quote-left'> </i>");
    $("#author").text(author);
    $("#quote-text, #author").fadeIn(500);
}

function getQuote() {
  	$.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=parseQuote&callback=?");
}

function rnd(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function anm(){
	var i = rnd(1,colorPool.length);
	$("#quote-text, #author").css({
		display: "none",
		color: colorPool[i]
	});

	$("body").animate({
        backgroundColor: colorPool[i],
        color: colorPool[i]
      },"slow");

    $(".button").animate({
        backgroundColor: colorPool[i]
      },"slow");
    	
}


$(document).ready(function(){
	getQuote();
	$("#twitter-btn").on("click",function(){
		//https://twitter.com/intent/tweet?text=Hello%20world
		var url = ("https://twitter.com/intent/tweet?text=" + quote + " 	" + "-" + author).replace(/;/g, "");
		console.log(url);
		window.open(url, "_blank");
	});
	$("#next-btn").on("click", getQuote);
});
