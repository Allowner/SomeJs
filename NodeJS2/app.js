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

const newsScheme = new Schema({ id: { type: Number, unique: true }, title: String, text: String, date: Date });
const News = mongoose.model("News", newsScheme);

mongoose.connect(
  "mongodb://localhost:27017/newsdb",
  { useNewUrlParser: true }
);

var db = mongoose.connection;

app.set("view engine", "pug");

app.get('/', (req, res) => res.send('Here you can use CRUD operations.'));
app.get('/login', (req, res) => res.sendFile('auth.html', { root: __dirname }));
app.get('/register', (req, res) => res.sendFile('register.html', { root: __dirname }));

app.get("/news", function (req, res) {
  News.find({}, function (err, news) {
    if (err) {
      throw new Error(err.message);
    }

    res.send(news);
  });
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

  const newsObject = new News({
    id: req.body.id,
    title: req.body.title,
    text: req.body.text,
    date: req.body.date
  });

  newsObject.save(function (err) {
    if (err) {
      throw new Error(err.message);
    }

    res.json({
      message: "News object created successfully"
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

app.delete("/news/:id", passport.authenticate('local', { session: false }), function (req, res) {
  const paramId = req.params.id;
  console.log(paramId);
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
