require("dotenv").config();

const axios = require("axios");

const { TMDB_API_KEY } = process.env;

const searchTmdb = (query) => {
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
        console.log(response.data);
        resolve(response.data);
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });
};

module.exports = searchTmdb;
