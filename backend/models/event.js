const mongoose = require('mongoose');

const EventModel = new mongoose.Schema({
    event_name: String,
    event_desc: String,
    event_start_date: String,
    event_end_date: String,
    event_org: String,
    tickets: [{
        id: String,
        ticket_number: String,
        price: String,
      }],
})

module.exports = mongoose.model('events', EventModel)