// Using the following tutorials:
// - Markdown Blog Tutorial - https://www.youtube.com/watch?v=1NrHkjlWVhMhttps://www.youtube.com/watch?v=1NrHkjlWVhMhttps://www.youtube.com/watch?v=1NrHkjlWVhMhttps://www.youtube.com/watch?v=1NrHkjlWVhM

const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("introduction");
});

app.get("/genetics", (req, res) => {
  res.render("genetics");
});

app.get("/ancientDNA", (req, res) => {
  res.render("ancientDNA");
});

app.get("/map", (req, res) => {
  res.render("map");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}
app.listen(port);
