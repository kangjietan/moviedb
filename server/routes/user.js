const express = require('express');
const router = express.Router();

const controller = require('../../database/controllers/index');

router.post('/register', controller.user.register);
router.post('/login', controller.user.login);
router.get('/logout', controller.user.logout);

module.exports = router;