const express = require("express");
const router = express.Router();

const controller = require("../../database/controllers/index");

const { ensureAuthenticated } = require("../../config/auth");

router.post("/register", controller.user.register);

router.post("/login", controller.user.login);

router.get("/logout", controller.user.logout);

router.get("/authenticated", ensureAuthenticated, controller.user.isAuthenticated);

router.get('/watchedlist/', ensureAuthenticated, controller.user.getUserWatchedList);

router.get('/towatchlist/', ensureAuthenticated, controller.user.getUserToWatchList);

router.post('/watchedlist/update/', ensureAuthenticated, controller.user.updateWatchedList);

router.post('/towatchlist/update/', ensureAuthenticated, controller.user.updateToWatchList);

module.exports = router;
