const Flight = require('../models/flight');

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {
            title: "All Flights",
            flights
        });
    });
}

function newFlights(req, res) {
    res.render('flights/new', {title: 'Add Flight'});
}

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.redirect('/flights/new');
        res.redirect('/flights');
    });
}

module.exports = {
    index,
    new: newFlights,
    create
}