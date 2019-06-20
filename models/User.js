const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: SVGAnimatedString,
        requires: true
    },
    email: {
        type: String,
        requires: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatars: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

modules.exports = User = mongoose.model('user', UserSchema);