// Here we add all the necessary code in order for our application to work //
var express = require("express");

var app = express(),
    path = require("path");

app.set("port", process.env.PORT || 8000);

// Telling the app to use the public folder to serve our files is a nice and neat way to structure our code//

app.use(express.static("public"));

app.listen(8000);
console.log("App is listening on Port 8000");
