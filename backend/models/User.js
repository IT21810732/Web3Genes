const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    type: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: false
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: false
    },
    gender: {
        type: String,
        required: true
    },
    mobile_number: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
