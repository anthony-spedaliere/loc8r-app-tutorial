var express = require('express');
var router = express.Router();

// controller import
const ctrlMain = require('../controllers/main');

/* GET home page route. */
router.get('/', ctrlMain.index);

module.exports = router;
