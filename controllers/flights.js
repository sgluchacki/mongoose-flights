const Flight = require('../models/flight');
const Ticket = require('../models/ticket')

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
        Ticket.find({flight: flight._id}, function(err, tickets) {
            res.render('flights/show', {
                title: 'Flight Details',
                flight,
                tickets
            });

        });
    });
}

module.exports = {
    index,
    new: newFlights,
    create,
    show
}