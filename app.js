var quotes = [
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "First solve the problem. Then, write the code.",
    "Experience is the name everyone gives to their mistakes.",
    "Java is to Javascript what car is to Carpet.",
    "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.",
]

function getQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById('newQuoteSection').innerHTML = quotes[randomNumber];
}