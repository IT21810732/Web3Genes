// signup.js

const UserS = require("../models/UserS");
const bcrypt = require("bcrypt");

async function createUserS(usersData) {
    const { sname, semail, spassword } = usersData;
    const hashedPassword = await bcrypt.hash(spassword, 10);
    const createdUserS = new UserS({
        sname,
        semail,
        spassword:hashedPassword,
        role: "user" 
    });

    const savedUser = await createdUserS.save(); 
    return savedUser;
}

module.exports = { createUserS };
