const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

function newTicket(req, res) {
    //add flight.find here blah blah blah
    // redirect to /flights/:id/new or something
    // look at the damn chart, shawn.
    Flight.findById(req.params.id, function(err, flight) {
        res.render('tickets/new', {
            title: 'Add Ticket',
            flight
        });
        
    });
}

function createTicket(req, res) {
    const ticket = new Ticket(req.body);
    Flight.findById(req.params.id, function(err, flight) {
        ticket.flight = flight
        ticket.save(function(err) {
            if (err) return res.redirect('/tickets/new');
            res.redirect(`/flights/${flight._id}`); //fix here
        });

    });
    // console.log(`This is the ticket: ${ticket}`);
    // console.log(`This is the flight: ${flight}`);
    
    // ticket.flight = flight;
    // console.log('YOU HIT THE DARN CREATE TICKET FUNCTION!!!!!!!!!!!!!!!!');
    
}

module.exports = {
    newTicket,
    createTicket
};

