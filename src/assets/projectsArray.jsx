import be1 from "./be1.png"
import be2 from "./be2.png"
import be3 from "./be3.png"
import be4 from "./be4.png"

import fp1 from "./fp1.png"
import fp2 from "./fp2.png"
import fp3 from "./fp3.png"
import fp4 from "./fp4.png"
import fp5 from "./fp5.png"

import nb1 from "./nb1.png"
import nb2 from "./nb2.png"
import nb3 from "./nb3.png"
import nb4 from "./nb4.png"
import nb5 from "./nb5.png"
import nb6 from "./nb6.png"
import nb7 from "./nb7.png"

import won1 from "./won1.png"
import won2 from "../assets/won2.png"
import won3 from "./won3.png"
import won4 from "./won4.png"
import won5 from "./won5.png"
import won6 from "./won6.png"

import jn1 from "./jn1.png"
import jn2 from "./jn2.png"
import jn3 from "./jn3.png"
import jn4 from "./jn4.png"
import jn5 from "./jn5.png"
import jn6 from "./jn6.png"

import gs1 from "./gs1.png"
import gs2 from "./gs2.png"
import gs3 from "./gs3.png"
import gs4 from "./gs4.png"
import gs5 from "./gs5.png"

import naan1 from "./naan1.png"
import naan2 from "./naan2.png"

import lb1 from "./lb1.png"
import lb2 from "./lb2.png"
import lb3 from "./lb3.png"
import lb4 from "./lb4.png"
import lb5 from "./lb5.png"
import lb6 from "./lb6.png"
import lb7 from "./lb7.png"


export const projectsArray = [
    {
        name: "Number Blast", 
        // lang: "Javascript, React",
        images: [nb2, nb3, nb4, nb5, nb6, nb7],
        thumbnail: nb1,
        descr1: "Welcome to number Blast, a reaction based number game designed to test your speed against the clock!",
        descr2: "Built in Javascript with React and Firebase, Number Blast offers a fun and frantic gaming experience to challenge you and your friends! How fast are you under pressure?",
        descr3Bold: "States of Play.",
        descr3: "Built in React with heavy use of state, effect and callback hooks to handle evolving game, level, timer and styling changes.",
        descr4Bold: "Global Leaderboard.",
        descr4: "What's wrong with a friendly competition? Maybe a lot when I can't even crack the top five of my own game any more.",
        descr5Bold: "Interactive Styling.",
        descr5: "Those background numbers are not just for show. Using tsParticles, they are fully interactive and even add to the frantic pace of higher game levels. Have you got what it takes to remain calm?",
        link: "https://number-blast.netlify.app/",
        link2: "",
        link3: "",
        link4: "",
        linkDescr: "Try it for yourself!",
        github: "https://github.com/DanielCouperthwaite/number-blast",
    },
    {
        name: "The Guitar Shop", 
        lang: "",
        images: [gs2, gs3, gs4, gs5],
        thumbnail: gs1,
        descr1: "Welcome to The Guitar Shop, a simple website to highlight stock details available from different locations.",
        descr2: "Built in C# with ASP .NET and Bootstrap CSS, The Guitar Shop offers a frontend source of information for guitar availability, locations and descriptions.",
        descr3Bold: "Built for Scalability. ",
        descr3: "Working from an internal C# list of guitars, the site loops through to display the details of each at your fingertips.",
        descr4Bold: "Dynamic ASP Routing. ",
        descr4: "Need a thousand different pages of individual guitars? No problem! Each information page and url is created dynamically as the user chooses them.",
        descr5Bold: "Bootstrap Styling. ",
        descr5: "Clean and crisp, Bootstrap CSS allows guitars to be displayed in a simple and clear way.",
        link: "",
        link2: "",
        link3: "",
        link4: "",
        linkDescr: "",
        github: "https://github.com/DanielCouperthwaite/guitar-shop",
    },
    {
        name: "Love Birds", 
        lang: "",
        images: [lb2, lb3, lb4, lb5, lb6, lb7],
        thumbnail: lb1,
        descr1: "Built as final project of the Northcoders Bootcamp, Love Birds is a fun and interactive application designed to keep the spark in long distance relationships.",
        descr2: "Built in Typescript with Firebase, React Native and Tailwind CSS, Love Birds allows users to send images, videos and more to their loved ones. Upon receiving their message, users must answer a quiz question or play a game to 'hatch their egg' and receive their prize.",
        descr3Bold: "Built for complexity. ",
        descr3: "Typsescript enables a greater confidence in the complexity and amount of components used, allowing us to pinpoint exactly where errors were hiding!",
        descr4Bold: "Agile Methodologies.",
        descr4: "Who doesn't love a good plan? Beginning with user stories and functionality in mind, we followed a structure of allocating tickets, collaborating between our team, offering feedback and reviewing progress each day.",
        descr5Bold: "",
        descr5: "",
        link: "https://northcoders.com/projects/june-2023/love-birds",
        link2: "",
        link3: "",
        link4: "",
        linkDescr: "Video Demo Here",
        github: "https://github.com/DanielCouperthwaite/love-birds",
    },
    {
        name: "Just News", 
        lang: "",
        images: [jn2, jn3, jn4, jn5, jn6],
        thumbnail: jn1,
        descr1: "What is worse than sifting through ad after ad in search of the headlines? Eurgh! There has to be a better way! How about a site for those wanting articles in a simple format?",
        descr11: "Just News provides Just that, Just when you need it, Just about!",
        descr2: "Built in Javascript with React, Vite and CSS, Just News requests information from the NC_News API and renders articles by topic... Or in a great big list if that's more your thing. We don't judge here.",
        descr3Bold: "Responsive and dynamic.",
        descr3: "Just News is built to function on any size of screen, even switching automatically between light and dark modes depending on the preferences of users and browsers.",
        descr4Bold: "Optimistic rendering.",
        descr4: "Who has the time to wait for a comment to be posted to an API before seeing it in all its online glory? All comments and votes offer feedback immediately.",
        descr5Bold: "Safe and secure.",
        descr5: "Built to protect against malicious sql injections, you can trust that your comment contents are safe. Trust me, my brother is a principal engineer at ARM and he's already tried his best to break it.",
        link: "https://just-news8118.netlify.app/articles",
        link2: "",
        link3: "",
        link4: "",
        linkDescr: "Try it for yourself!",
        github: "https://github.com/DanielCouperthwaite/nc_news",
    },
    {
        name: "Just News API", 
        lang: "",
        images: [be2, be3, be4],
        thumbnail: be1,
        descr1: "As pretty as they might be, some of the best sites in the world would be nowhere without a functioning server and database.",
        descr2: "Built with a PostgreSQL, Express JS and Node JS, this API serves the articles used in my Just News site. You can try it yourself with the buttons below. There is a list of all the available endpoints, or a couple of example requests already written out:",
        descr3Bold: "Tried and Tested.",
        descr3: "Tested with Jest.js to ensure each endpoint returns relevant, requested, complete content.",
        descr4Bold: "Errors? Who needs 'em?",
        descr4: "Able to check requests against contents and offer feedback. See for yourself with this request for an article that does not exist:",
        descr5Bold: "",
        descr5: "",
        link: "https://nc-news-qkml.onrender.com/api/",
        linkDescr: "Endpoint Descriptions Here",
        link2: "https://nc-news-qkml.onrender.com/api/articles",
        link2Descr: "/api/articles",
        link3: "https://nc-news-qkml.onrender.com/api/articles/6/comments",
        link3Descr: "/api/articles/6/comments",
        link4Descr: "/api/articles/2112",
        link4: "https://nc-news-qkml.onrender.com/api/articles/2112",
        github: "https://github.com/DanielCouperthwaite/NC-News-Backend-Project",
    },
    {
        name: "WeatherOrNot", 
        lang: "",
        images: [won2, won3, won4, won5, won6],
        thumbnail: won1,
        descr1: "Planning on Kayaking through Borneo? Horse-riding through Outer Mongolia? Fishing in the Amazon? Or maybe just taking the dog out and wondering if that umbrella is really necessary.", 
        descr11: "Find the weather, anywhere in the world, instantly!",
        descr2: "Fetching from a third party API, WeatherOrNot handles your search queries, fetches data, extracts the most relevant parts and converts it into a useable format. All before that first raindrop even falls!",
        descr3Bold: "Environment Variables. ",
        descr3: "Keep your those precious API keys safe with environment variables stored locally or on your host site, but never pushed to a public repository.",
        descr4Bold: "Never be caught out again.",
        descr4: "Updated constantly to ensure all information is relevant, helpful and correct.",
        descr5Bold: "Explore. Dream. Discover.",
        descr5: "How is it in San Jose, Costa Rica, right now? Buenos Aires? Cairo? There's nothing wrong with a little daydreaming over that next trip...",
        link: "https://weatherornot4114.netlify.app/",
        link2: "",
        link3: "",
        link4: "",
        linkDescr: "Try it for yourself!",
        github: "https://github.com/DanielCouperthwaite/WeatherOrNot",
    },
    {
        name: "Functions Playground", 
        lang: "",
        images: [fp2, fp3, fp4, fp5],
        thumbnail: fp1,
        descr1: "Wow, with all this coding, I wish there was a place we could relax and put the Fun back into Functions!", 
        descr11: "Here it is, a page of simple functions displayed in React for everybody to enjoy. Be sure to check back for updates!",
        descr2: "Built in React, Functions playground imports util functions in from their own files, accepts user input and responds with appropriate feedback from the functions themselves. (Plus a little extra error handling for even more fun!)",
        descr3Bold: "Test Driven Development.",
        descr3: "Each function tested to ensure correct useage by themselves, then reviewed all over again to make sure they work happily away in the playground too!",
        descr4Bold: "Reuseable Components.",
        descr4: "Built with smaller, reuseable functions ready to accomodate any more friendly functions that may join in the fun in future.",
        descr5Bold: "",
        descr5: "",
        linkDescr: "Try it for yourself",
        link: "https://functionsplayground7117.netlify.app/",
        link2: "",
        link3: "",
        link4: "",
        github: "https://github.com/DanielCouperthwaite/functions-playground",
    },
    {
        name: "Bonus: Naan Breads", 
        lang: "",
        images: [naan1, naan2],
        thumbnail: naan1,
        descr1: "Nothing at all to do with development I'm afraid, but who doesn't like a little baking between debugging!",
        descr2: "Here are a few I made earlier with strong white flour, all natural yoghurt and just a little golden caster sugar. Carefully kneaded, rolled and dry fried for a soft, elastic consistency.",
        descr3Bold: "Fresh and Delicious. ",
        descr3: "Piping hot and straight from the oven! Right on time and easy to digest, just like all of my code!",
        // link2: "Request a Batch",
        // link2Descr: "welll",
        descr4Bold: "Constant Error Testing. ",
        descr4: "Look, I will be honest, I did set off the smoke alarm when I made these last time. Lesson learned!",
        descr5: "",
        link: "https://www.bbcgoodfood.com/recipes/naan-bread",
        link2: "",
        link3: "",
        link4: "",
        linkDescr: "Find the recipe here",
        github: "",
    },
]


// {
    //     name: "", 
    //     lang: "",
    //     descr1: "",
    //     descr2: "",
    //     descr3Bold: "",
    //     descr3: "",
    //     descr4Bold: "",
    //     descr4: "",
    //     descr5Bold: "",
    //     descr5: "",
    //     link: "",
    //     linkDescr: "",
    //     github: "",
    // },