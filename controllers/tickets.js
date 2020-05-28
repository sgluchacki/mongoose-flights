const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

function newTicket(req, res) {
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
            res.redirect(`/flights/${flight._id}`);
        });

    });

    
}

module.exports = {
    newTicket,
    createTicket
};

