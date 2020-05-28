const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

router.get('/:id/tickets/new', ticketsCtrl.newTicket);

router.post('/:id/tickets', ticketsCtrl.createTicket);

module.exports = router;