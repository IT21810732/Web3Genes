const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usersSchema = new Schema({
   sname: {
        type: String,
        required: false
    },
    semail: {
        type: String,
        required: false
    },
    spassword: {
        type: String,
        required: false
    },
    stype: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    }
});

const UserS = mongoose.model("UserS", usersSchema);

module.exports = UserS;
