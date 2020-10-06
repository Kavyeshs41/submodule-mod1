var express = require('express');
var router = express.Router();
var hellomod1 = require('controllers/hellomode1')

router.get('/', hellomod1.helloModule);

module.exports = router;