const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    domain: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
