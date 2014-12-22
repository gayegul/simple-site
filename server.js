var express = require("express"),

	app = express();

app.get("/", function(req, res) {
	res.send("hello universe!");
})

var inspirationArray = ["to boldly go no one has gone before", "not all who wander are lost", "here is to the misfits"];
console.log("server starting. available at http://localhost:3000");

app.get("/inspiration", function(req, res) {
	var randomIndex = Math.floor(Math.random() * inspirationArray.length);
	res.send(inspirationArray[randomIndex]);
});

var jokes = [
	{ setup: "what do you call a fish without eyes?", 
	  punchLine: "fsh" }, 
	{ setup: "A SQL query goes into a bar, walks up to two tables and asks", 
	  punchLine: "can I join you?" }
];


app.get("/joke", function(req, res) {
	var randomJoke = Math.floor(Math.random() * jokes.length);
	res.send(jokes[randomJoke]);
});

app.listen(3000);