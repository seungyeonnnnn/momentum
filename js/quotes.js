const quotes = [
    {
        quote: "The way to get started is to quit talking and begin..",
        author: "Walt Disney"
    },
    {
        quote: "Life is what happens when you're busy making other..",
        author: "John Lennon"
    },
    {
        quote: "33333333333333333333",
        author: "33"
    },
    {
        quote: "4444444444444444",
        author: "44"
    },
    {
        quote: "5555555555555555555",
        author: "555"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;