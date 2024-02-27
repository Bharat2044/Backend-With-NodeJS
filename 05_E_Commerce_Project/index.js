/**
 * Starting File for the Project
 * 
 * This file serves as the entry point for the project, initializing the application, connecting to the MongoDB database,
 * creating an admin user if not already present, and setting up routes.
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

// Event listener for MongoDB connection error
db.on("error", () => {
    console.log('Error while connecting to MongoDB');
});

// Event listener for successful MongoDB connection
db.on("open", () => {
    console.log("Connected to MongoDB");

    // Initialize function to create admin user
    init();
});

/**
 * Initialize Function:
 * - Checks if an admin user is present; if not, creates one.
 */
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

// Import and configure authentication and category routes
require("./routes/authRoute")(app);
require("./routes/categoryRoute")(app);

/**
 * Start the server
 */
app.listen(serverConfig.PORT, () => {
    console.log("Server started at port num:", serverConfig.PORT);
});
