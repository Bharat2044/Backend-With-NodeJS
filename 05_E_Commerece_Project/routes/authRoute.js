/**
 * Route Configuration for User Signup
 * 
 * This file sets up the route for handling user signup requests.
 * The route is defined as a POST request to "/ecomm/api/v1/auth/signup".
 * It includes middleware for verifying the signup request body and calls the signup function in the authController.
 */

const authController = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

// Exporting a function that sets up the route on the provided Express app
module.exports = (app) => {
    // Define a POST route for user signup
    app.post("/ecomm/api/v1/auth/signup", [authMiddleware.verifySignUpBody], authController.signup);
};
