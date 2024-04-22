const router = require("express").Router();
const User = require("../models/User");

// Route to add a new user
router.route("/add").post((req, res) => {
    const { type, status, first_name, last_name, dob, gender, mobile_number, email, password } = req.body;
    
    const newUser = new User({
        type,
        status,
        first_name,
        last_name,
        dob,
        gender,
        mobile_number,
        email,
        password
    });

    newUser.save()
        .then(() => res.json("User Added"))
        .catch((err) => {
            console.log(err);
            res.status(400).json("Error: " + err);
        });
});



module.exports = router;
