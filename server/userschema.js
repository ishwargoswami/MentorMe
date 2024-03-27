const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSCHEMA = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,

    },
    password: {
        type: String,
        required: true
    },
    work: {
        type: String,

    },
    conaPssword: {
        type: String,

    },
})

userSCHEMA.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = bcrypt.hash(this.password, 12);
        //this.conaPssword = bcrypt.hash(this.conaPssword, 12);
    }
    return next();
});
const User = mongoose.model('USER', userSCHEMA);
module.exports = User;