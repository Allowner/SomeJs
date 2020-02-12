const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { Schema } = mongoose;
const jsonParser = express.json();
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
var router = express.Router();
var LocalStrategy = require('passport-local').Strategy;
var cookieParser = require('cookie-parser');
var User = require('./user');
var fetch = require('node-fetch');
var async = require('express-async-await');
const cors = require('cors');

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions))

const newsScheme = new Schema({
  id: { type: Number, unique: true },
  source: { id: String, name: String },
  author: String,
  title: String,
  description: String,
  url: String,
  urlToImage: String,
  publishedAt: String,
  content: String
});

const News = mongoose.model("News", newsScheme);
const lastIdScheme = new Schema({ lastId: Number });
const LastId = mongoose.model("LastId", lastIdScheme);

mongoose.connect(
  "mongodb://localhost:27017/newsdb",
  { useNewUrlParser: true }
);

var db = mongoose.connection;

app.set("view engine", "pug");

app.get('/', (req, res) => res.send('Here you can use CRUD operations.'));
app.get('/login', (req, res) => res.sendFile('auth.html', { root: __dirname }));
app.get('/register', (req, res) => res.sendFile('register.html', { root: __dirname }));

app.get("/sources", async function (req, res) {
  const response = await fetch("https://newsapi.org/v2/sources?apiKey=f7f0c071d73c4186ad64b9fdbd0fb6f0");
  if (!response.ok) {
    throw new Error('Network response was not ok.');
  }
  const result = await response.json();
  res.send(result);
});

app.get("/news/:source/skip/:number", async function (req, res) {
  const paramSource = req.params.source;
  const paramSkip = req.params.number;
  if (paramSource !== "me") {
    var url = `https://newsapi.org/v2/everything?sources=${paramSource}&apiKey=f7f0c071d73c4186ad64b9fdbd0fb6f0`;
    var result;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    result = await response.json();
    LastId.findOne({}, function (err, last) {
      var lastId = 1;
      if (err) {
        throw new Error(err.message);
      }
      if (last == null) {
        lastId = 1;
      } else {
        lastId = last.lastId;
      }

      resultId = lastId + result.articles.length;
      console.log(resultId);

      result.articles.forEach(element => {
        News.findOne({ url: { $eq: element.url } }, function (err, item) {
          if (err) {
            throw new Error(err.message);
          }
          if (item == null) {
            var newsObject = new News({
              id: lastId,
              source: element.source,
              author: element.author,
              title: element.title,
              description: element.description,
              url: element.url,
              urlToImage: element.urlToImage,
              publishedAt: element.publishedAt,
              content: element.content
            });
            lastId += 1;
            newsObject.save();
          }
        });
      });

      LastId.updateOne({}, { $set: { lastId: resultId } }, { upsert: true }, function (err, result) { });
    });
  }

  if (paramSource === "Bild,Bloomberg,CNN") {
    News.find({}, function (err, news) {
      if (err) {
        throw new Error(err.message);
      }

      res.send(news);
    }).skip(Number(paramSkip)).limit(5);
  } else {
    News.find({ "source.name": { $eq: paramSource } }, function (err, news) {
      if (err) {
        throw new Error(err.message);
      }

      res.send(news);
    }).skip(Number(paramSkip)).limit(5);
  }
});

app.get("/news/:id", function (req, res) {
  const paramId = req.params.id;
  News.findOne({ id: paramId }, function (err, news) {
    if (err) {
      throw new Error(err.message);
    }

    res.send(news);
  });
});

app.post("/news", jsonParser, function (req, res) {

  if (!req.body) {
    throw new Error("Empty body!");
  }

  LastId.findOne({}, function (err, last) {
    var lastId;
    if (err) {
      throw new Error(err.message);
    }
    if (last == null) {
      lastId = 1;
    } else {
      lastId = last.lastId;
    }
    const newsObject = new News({
      id: lastId,
      source: req.body.source,
      author: req.body.author,
      title: req.body.title,
      description: req.body.description,
      url: req.body.url,
      urlToImage: req.body.urlToImage,
      publishedAt: req.body.publishedAt,
      content: req.body.content
    });

    newsObject.save(function (err) {
      if (err) {
        throw new Error(err.message);
      }

      lastId++;
      LastId.updateOne({}, { $set: { lastId: lastId } }, function (err, result) { });
      res.json({
        message: "News object created successfully"
      });
    });
  });
});

app.put("/news/:id", function (req, res) {
  if (!req.body) {
    throw new Error("Empty body!");
  }
  const paramId = req.params.id
  const changedNews = { title: req.body.title, text: req.body.text, date: req.body.date };

  News.findOneAndUpdate({ id: paramId }, changedNews, { new: true }, function (err, user) {
    if (err) {
      throw new Error(err.message);
    }

    res.json({
      message: "News object updated successfully"
    });
  });
});

app.delete("/news/:id", function (req, res) {
  const paramId = req.params.id;
  News.findOneAndDelete({ id: paramId }, function (err, news) {
    if (err) {
      throw new Error(err.message);
    }

    res.json({
      message: "Object deleted"
    });
  });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.post('/register', function (req, res) {
  var newUser = new User({
    username: req.body.username,
    password: req.body.password
  });

  newUser.save(function (err) {
    if (err) {
      throw new Error(err.message);
    }

    res.json({
      message: "User object created successfully"
    });
  });
});

passport.use(new LocalStrategy(
  function (username, password, done) {
    User.findOne({
      username: username
    }, function (err, user) {
      if (err) {
        return done(err);
      }

      if (!user) {
        return done(null, false);
      }

      if (user.password != password) {
        return done(null, false);
      }
      return done(null, user);
    });
  }
));

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

app.post('/login',
  passport.authenticate('local'),
  function (req, res) {
    res.send(req.user);
  }
);

app.get('/user', function (req, res) {
  res.send(req.user);
})

app.get('/logout', function (req, res) {
  req.logout();
  res.send(null)
});

app.listen(3000, function () {
  console.log("App listening on port 3000!");
});

app.use(function (err, req, res, next) {
  res.render("error", { message: err.message });
});
