const Flight = require('../models/flight');

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {
            title: "All Flights",
            flights
        });
    });
}

module.exports = {
    index
}