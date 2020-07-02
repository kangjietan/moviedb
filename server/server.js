const express = require("express");

const path = require("path");

const tmdb = require("../api/searchTmdb.js");

const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/tmdb/search", (req, res) => {
  const { query } = req.query;
  tmdb
    .searchMovies(query)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      console.error(err);
      res.json(err);
    });
});

app.get("/tmdb/genres", (req, res) => {
  tmdb
    .getGenres()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      console.error(err);
      res.json(err);
    });
});

app.get("/tmbd/movie/:id/trailer", (req, res) => {
  const { id } = req.params;
  tmdb
    .getTrailer(id)
    .then((response) => {
      let youtubeUrl = "";
      response.results.forEach((item) => {
        if (item.site === "YouTube") youtubeUrl = item.key;
      });
      res.json(youtubeUrl);
    })
    .catch((err) => {
      console.error(err);
    });
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.listen(PORT, () => console.log("Listening on port: " + PORT));
