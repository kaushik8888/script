var express = require('express');
var router = express.Router();

/* Start transaction Routes */

var st = require('../api/readfile.js');
router.get('/start',st.startSend)

module.exports = router;
