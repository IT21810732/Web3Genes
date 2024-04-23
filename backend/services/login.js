const bcrypt = require("bcrypt");
const UserS = require("../models/UserS");
const { generateToken } = require("../utils/jwtUtils");

async function login(semail, spassword) {
    try {
        const existingUser = await UserS.findOne({ semail });
        if (!existingUser) {
            throw new Error("User not found");
        }

        const isPasswordValid = await bcrypt.compare(spassword, existingUser.spassword); // Await the result of bcrypt.compare
        if (!isPasswordValid) {
            throw new Error("Incorrect Password");
        }

        const token = generateToken(existingUser);

        return token;
    } catch (error) {
        console.log("Login Error:", error.message);
        throw new Error("Invalid Credentials");
    }
}

module.exports = {
    login
};
