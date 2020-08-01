const express = require('express');
const router = express.Router();

const controller = require('../../database/controllers/index');

router.post('/user/register', controller.user.register);
router.post('/user/login', controller.user.login);
router.post('/user/logout', controller.user.logout);