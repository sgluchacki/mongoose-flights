const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    arrives: {
        type: Date,
        // min: flight.departs
    }
}, {
    timestamps: true
});

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    flightNo: {
        type: Number,
        required: true,     //need err handling in create
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function() {
            const date = new Date();
            return Date.setFullYear(date.getFullYear() + 1);
        }
    },
    destinations: [destinationSchema] 
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);