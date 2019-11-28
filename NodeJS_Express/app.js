var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var news = [
  {
    id: 1,
    title: "First",
    text: "Some text",
    date: new Date("1995-12-17T03:24:00")
  },
  {
    id: 2,
    title: "Second",
    text: "Another text",
    date: new Date("1997-11-15T03:24:00")
  },
  {
    id: 3,
    title: "Third",
    text: "Unusual text",
    date: new Date("2005-12-17T03:24:00")
  }
];

app.set("view engine", "pug");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  res.json("Hi, you can use CRUD operations here.");
});

app.get("/news", function(req, res) {
  res.json(news);
});

app.get("/news/:id", function(req, res) {
  var item = news.find(o => o.id == req.params.id);
  if (item == undefined) {
    throw new Error("There is no such id.");
  } else {
    res.json(item);
  }
});

app.post("/news", function(req, res) {
  var item = news.find(o => o.id == req.body.id);
  if (item == undefined) {
    news.push({
      id: req.body.id,
      title: req.body.title,
      text: req.body.text,
      date: req.body.date
    });

    res.json({
      message: "News object created successfully"
    });
  } else {
    throw new Error("News with such id is already exists");
  }
});

app.put("/news/:id", function(req, res) {
  var index = news.findIndex(o => o.id == req.params.id);
  if (index == -1) {
    throw new Error("There is no such id.");
  } else {
    (news[index].title = req.body.title),
      (news[index].text = req.body.text),
      (news[index].date = req.body.date);
    res.json({
      message: "News object updated successfully"
    });
  }
});

app.delete("/news/:id", function(req, res) {
  var item = news.find(o => o.id == req.params.id);
  if (item == undefined) {
    throw new Error("There is no such id.");
  } else {
    news.splice(news.indexOf(item), 1);
    res.json({
      message: "News object deleted successfully"
    });
  }
});

app.listen(3000, function() {
  console.log("App listening on port 3000!");
});

app.use(function(err, req, res, next) {
  res.render("error", { message: err.message });
});
