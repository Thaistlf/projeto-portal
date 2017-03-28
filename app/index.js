/**
 * Created by inftek on 27/03/17.
 */
var express = require('express');
var router  = express.Router();

// Rota para o inicio do site
router.get('/', require('./home/index'));
module.exports = router;