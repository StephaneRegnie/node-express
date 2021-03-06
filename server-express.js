const express = require("express");     // include express.js
const path = require("path");           // include path.js which is used line 24

const compliments = [
  "You like nice today",
  "That dress looks nice on you",
  "Have you been working out?",
  "You can do hard things",
  "You've gotten far in this course. You're really smart",
  "You're programming! How cool is that?",
  "I'm really proud of you",
  "You made this",
  "You've learned a lot of things, and that's pretty hard to do"
];

function getRandomCompliment() {    // returns a random item from the compliments array
  const randomIndex = Math.floor(Math.random() * compliments.length);
  return compliments[randomIndex];
}

const app = express();    // create a new server.

app.get("/", function(req, res) {     // app.get(url, callback); is how you handle a new route. Here, this is the request for / route
  res.sendFile(path.join(__dirname, "index.html"));   // sends the user the index.html we just created
});

app.get("/complement", function(req, res) {     // /complement route will responds to the request with a JSON object
  res
    .json({
      complement: getRandomCompliment()
    })
    .end();
});

app.use("/public", express.static("./public"));     // serves everything in the public directory publicly

app.listen(3000);
console.log("listening on http://localhost:3000");