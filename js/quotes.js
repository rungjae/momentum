const quotes = [
    {
        quote: "야미야미",
        author: "-재성-"
    },
    {
        quote: "후잉스",
        author: "-재성-"
    },    {
        quote: "바보스!",
        author: "-혜리-"
    },    {
        quote: "냐냐냔",
        author: "-재성-"
    },    {
        quote: "호롤롤로로",
        author: "-혜리-"
    },
    {
        quote: "야미야미",
        author: "-재성-"
    },
    {
        quote: "후잉스",
        author: "-재성-"
    },    {
        quote: "바보스!",
        author: "-혜리-"
    },    {
        quote: "냐냐냔",
        author: "-재성-"
    },    {
        quote: "호롤롤로로",
        author: "-혜리-"
    },
];


const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");


const todaysQuoto = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuoto.quote;
author.innerText = todaysQuoto.author;
