const UserS = require("../models/UserS");
const bcrypt = require("bcrypt");

async function createAdminAccount() {
    try {
        const existingAdmin = await UserS.findOne({ semail: "admin@test.com" });
        if (!existingAdmin) {
            const newAdmin = new UserS({
                sname: "Admin",
                semail: "admin@test.com",
                spassword: await bcrypt.hash("admin", 10),
                stype: "admin"
            });

            await newAdmin.save();
            console.log("Admin account created successfully");
        } else {
            console.log("Admin account already exists");
        }
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = createAdminAccount;
