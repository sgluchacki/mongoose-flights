var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

// Direct to display /flights
router.get('/', flightsCtrl.index);

// Direct to create new flight
router.post('/', flightsCtrl.create);

// Direct to display form for new flight
router.get('/new', flightsCtrl.new);

module.exports = router;
