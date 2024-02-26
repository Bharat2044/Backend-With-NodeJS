/**
 * Starting file of the project
 */

// Importing required modules
const express = require('express');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const app = express();

// Importing configuration files and the user model
const server_config = require("./configs/server.config");
const db_config = require("./configs/db.config");
const user_model = require("./models/user.model");

app.use(express.json());    // middleware -> read json as js object

/**
 * Create an admin user at the start of the application
 * if not already present
 */
// Connecting to MongoDB
mongoose.connect(db_config.DB_URL);
const db = mongoose.connection;

// Handling MongoDB connection events
db.on("error", () => {
    console.log("Error while connecting to MongoDB");
});
db.on("open", () => {
    console.log("Connected to MongoDB");

    // Initializing the application
    init();
});

// Function to initialize the application
async function init() {
    try {
        // Checking if the admin user already exists
        let user = await user_model.findOne({ userId: "admin" });

        if (user) {
            console.log("Admin is already present");
            return;
        }
    } catch (err) {
        console.log("Error while reading the data", err);
    }

    try {
        // Creating the admin user if not present
        user = await user_model.create({
            name: "Bharat",
            userId: "admin",
            email: "bharat@gmail.com",
            userType: "ADMIN",
            password: bcrypt.hashSync("Welcome1", 8)
        });
        console.log("Admin created", user);
    } catch (err) {
        console.log("Error while creating admin", err);
    }
}


/**
 * Stich the route to the server
 */
require("./routes/auth.routes")(app)


/**
 * Start the server
 */
app.listen(server_config.PORT, () => {
    console.log("Server Started at port number: " + server_config.PORT);
});
