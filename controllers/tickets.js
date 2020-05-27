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

module.exports = {
    newTicket
};

