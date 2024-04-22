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

// Route to get all users
router.route("/").get((req, res) => {
    User.find()
        .then((users) => res.json(users))
        .catch((err) => {
            console.log(err);
            res.status(400).json("Error: " + err);
        });
});

// Route to get user by ID
router.route("/:id").get((req, res) => {
    User.findById(req.params.id)
        .then((user) => res.json(user))
        .catch((err) => {
            console.log(err);
            res.status(400).json("Error: " + err);
        });
});

// Route to update user by ID
router.route("/update/:id").put((req, res) => {
    User.findById(req.params.id)
        .then((user) => {
            user.type = req.body.type;
            user.status = req.body.status;
            user.first_name = req.body.first_name;
            user.last_name = req.body.last_name;
            user.dob = req.body.dob;
            user.gender = req.body.gender;
            user.mobile_number = req.body.mobile_number;
            user.email = req.body.email;
            user.password = req.body.password;

            user.save()
                .then(() => res.json("User updated"))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json("Error: " + err);
        });
});

// Route to delete user by ID
router.route("/delete/:id").delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json("User deleted"))
        .catch((err) => {
            console.log(err);
            res.status(400).json("Error: " + err);
        });
});

module.exports = router;
