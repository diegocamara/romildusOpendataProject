var express = require('express');
var router = express.Router();
var controllers = require('./controllers');

router.get('/', controllers.index);

router.get('/testing', controllers.testing);

module.exports = router;
