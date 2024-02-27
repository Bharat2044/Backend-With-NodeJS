/**
 * This will be the starting file of the project
 */

// Import necessary modules
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const express = require("express");

// Create an Express application
const app = express();

// Import configuration files
const serverConfig = require("./configs/serverConfig");
const databaseConfig = require("./configs/databaseConfig");

// Import the user model
const userModel = require("./models/userModel");

// Middleware to parse JSON in request bodies
app.use(express.json());

/**
 * Create an admin user at the starting of the application
 * if not already present
 */

// Connection with MongoDB
mongoose.connect(databaseConfig.DB_URL);

const db = mongoose.connection;

db.on("error", () => {
    console.log('Error while connecting to MongoDB');
});

db.once("open", () => {
    console.log("Connected to MongoDB");
    init();
});

// Initialize function to create admin user
async function init() {
    try {
        let user = await userModel.findOne({ userId: "Bharat2044" });

        if (user) {
            console.log("Admin is already present");
            return;
        }

    } catch (err) {
        console.log("Error while reading the data", err);
    }

    try {
        user = await userModel.create({
            name: "Bharat",
            userId: "Bharat2044",
            email: "bharat@gmail.com",
            userType: "ADMIN",
            password: bcrypt.hashSync("Bharat@123", 8)
        });
        console.log("Admin created", user);

    } catch (err) {
        console.log("Error while creating admin", err);
    }
}

/**
 * Stitch the route to the server
 */

require("./routes/authRoute")(app);

/**
 * Start the server
 */
app.listen(serverConfig.PORT, () => {
    console.log("Server started at port num:", serverConfig.PORT);
});
