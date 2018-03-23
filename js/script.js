// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);



function getRandomQuote(randomQuote){
    var randomQuote = quotes[Math.floor( Math.random() *  quotes.length )];
    return randomQuote;
}

function printQuote(){
    randomQuote = getRandomQuote();
    html = '<p class="quote">' + randomQuote.quote + '</p>';
    html += '<p class="source">' + randomQuote.source;
    if (randomQuote.citation) {
      html += '<span class="citation">' + [randomQuote.citation] + '</span>';
    }
    if (randomQuote.year) {
      html += '<span class="year">' + [randomQuote.year] + '</span>';
    }
    if (randomQuote.tag) {
      html +='<span class="tag">' + [randomQuote.tag] + '</span>';
    }
    var div = document.getElementById('quote-box').innerHTML = html;
    return html;
  }




