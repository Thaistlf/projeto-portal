/**
 * Created by inftek on 27/03/17.
 */
var express = require('express');
var router  = express.Router();

// Rota o site
router.get('/', require('./home/index'));
router.get('/equipe/', require('./equipe/equipe'));
module.exports = router;