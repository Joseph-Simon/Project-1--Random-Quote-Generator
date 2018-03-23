// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//This function pulls a random quote from my array.
function getRandomQuote(randomQuote){
    var randomQuote = quotes[Math.floor( Math.random() *  quotes.length )];
    return randomQuote;
}

/*Function pulls the random quote and prints it to the page in the proper formating only giving opitonal 
data when necessary.*/
function printQuote(){
    randomQuote = getRandomQuote();
    html = '<p class="quote">' + randomQuote.quote + '</p>';
    html += '<p class="source">' + randomQuote.source;
    if (randomQuote.citation) {
      html += '<span class="citation">' + randomQuote.citation + '</span>';
    }
    if (randomQuote.year) {
      html += '<span class="year">' + randomQuote.year + '</span>';
    }
    if (randomQuote.tag){
      html += '<span class="tags">' + randomQuote.tag +'</span>';
    }
    var div = document.getElementById('quote-box').innerHTML = html;
    return html;
  }




