const express = require("express");

const path = require("path");

const searchTmbd = require("../api/searchTmdb.js");

const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/tmdb/search", (req, res) => {
  const { query } = req.query;
  searchTmbd(query)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.listen(PORT, () => console.log("Listening on port: " + PORT));
