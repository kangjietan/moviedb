const express = require('express');
const router = express.Router();

const tmdb = require("../../api/searchTmdb");

router.get("/search", (req, res) => {
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

router.get("/genres", (req, res) => {
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

router.get("/tmbd/movie/:id/trailer", (req, res) => {
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

router.get("/movie/popular/", (req, res) => {
  const { page } = req.params;
  tmdb
    .getPopularMovies(page)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      console.error(err);
    });
});

router.get("/movie/trending/day", (req, res) => {
  tmdb
    .getDayTrendingMovies()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      console.error(err);
    });
});

router.get("/movie/trending/week", (req, res) => {
  tmdb
    .getWeekTrendingMovies()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = router;