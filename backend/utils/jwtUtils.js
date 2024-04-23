const jwt = require("jsonwebtoken");
const {secretKey} = require("../jwtConfig");

function generateToken(users){
    const payload = {
        id: users._id,
        semail:users.semail,
        stype:users.stype
    }

    return jwt.sign(payload, secretKey,{expiresIn:"1h"});

};

module.exports = {
    generateToken
};