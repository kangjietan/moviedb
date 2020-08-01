const express = require("express");

const path = require("path");

const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname, "../client/dist")));

// Routes
app.use('/tmdb', require('./routes/tmdb'));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.listen(PORT, () => console.log("Listening on port: " + PORT));
