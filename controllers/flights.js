const Flight = require('../models/flight');

function index(req, res) {
    Flight.find({}, function(err, flights) {
        const now = Date.now();
        res.render('flights/index', {
            title: "All Flights",
            flights,
            now
        });
    }).sort({departs: 1});
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

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render('flights/show', {
            title: 'Flight Details',
            flight
        });
    });
}

module.exports = {
    index,
    new: newFlights,
    create,
    show
}