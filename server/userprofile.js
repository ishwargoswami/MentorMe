const mongoose = require('mongoose');

const userPROFILESchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    passout_from: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    domain: {
        type: String, // Fixed typo here
        
    },
    address: {
        type: String,
        required: true
    },
    about_mentee: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
});

const Userprofile = mongoose.model('USERPROFILE', userPROFILESchema);

module.exports = Userprofile;