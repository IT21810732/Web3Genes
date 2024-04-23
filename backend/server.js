const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const createAdminAccount = require("./scripts/admin");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

createAdminAccount();

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    // Remove deprecated options
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB Connection Success");
});

const userRouter = require("./routes/user.js");
app.use("/user", userRouter);

const signupRoute = require("./routes/signup.js");
app.use("/users", signupRoute);

const loginRoute = require("./routes/login");
app.use("/auth", loginRoute);

app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`);
});
