require("dotenv").config();

const axios = require("axios");

const { TMDB_API_KEY } = process.env;

const searchMovies = (query) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}/&query=${query}`;

  const options = {
    method: "GET",
    headers: {
      Authorization: TMDB_API_KEY,
      "X-Requested-With": "XMLHttpRequest",
    },
    url,
  };

  return new Promise((resolve, reject) => {
    axios(options)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getGenres = () => {
  const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB_API_KEY}&language=en-US`;

  const options = {
    method: "GET",
    headers: {
      Authorization: TMDB_API_KEY,
      "X-Requested-With": "XMLHttpRequest",
    },
    url,
  };

  return new Promise((resolve, reject) => {
    axios(options)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getTrailer = (movieID) => {
  const url = `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${TMDB_API_KEY}&language=en-US`;

  const options = {
    method: "GET",
    headers: {
      Authorization: TMDB_API_KEY,
      "X-Requested-With": "XMLHttpRequest",
    },
    url,
  };

  return new Promise((resolve, reject) => {
    axios(options)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getPopularMovies = (page) => {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US$page=${page}`;

  const options = {
    method: "GET",
    headers: {
      Authorization: TMDB_API_KEY,
      "X-Requested-With": "XMLHttpRequest",
    },
    url,
  };

  return new Promise((resolve, reject) => {
    axios(options)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports = {
  searchMovies,
  getGenres,
  getTrailer,
  getPopularMovies,
};
