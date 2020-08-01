const express = require("express");

const morgan = require("morgan");

const passport = require("passport");

const session = require("express-session");

const path = require("path");

const app = express();

const PORT = 3000;

// Passport config
require("../config/passport")(passport);

app.use(morgan("tiny"));

app.use(express.urlencoded({ extended: false }));

// Express Session
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, "../client/dist")));

// Routes
app.use('/tmdb', require('./routes/tmdb'));

app.use('/user', require('./routes/user'));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.listen(PORT, () => console.log("Listening on port: " + PORT));
