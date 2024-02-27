/**
 * Route Configuration for User Signup and Signin
 * 
 * This file sets up the route for handling user signup and signin requests.
 * It includes middleware for verifying the signup request body and calls the corresponding functions in the authController.
 */

// Import the necessary controllers and middlewares
const authController = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

// Exporting a function that sets up the route on the provided Express app
module.exports = (app) => {

    // Define a POST route for user signup
    /**
     * Define a POST route for user signup
     * POST localhost:8888/ecomm/api/v1/auth/signup
     * 
     * Middleware:
     * - authMiddleware.verifySignUpBody: Verifies the request body for signup to ensure it meets the required criteria.
     * 
     * Controller:
     * - authController.signup: Handles the signup request and initiates the user creation process.
     */
    app.post("/ecomm/api/v1/auth/signup", [authMiddleware.verifySignUpBody], authController.signup);

    // Define a POST route for user signin
    /**
     * Define a POST route for user signin
     * POST localhost:8888/ecomm/api/v1/auth/signin
     * 
     * Middleware:
     * - authMiddleware.verifySignUpBody: Verifies the request body for signin to ensure it meets the required criteria.
     * 
     * Controller:
     * - authController.signin: Handles the signin request and initiates the user authentication process.
     */
    app.post("/ecomm/api/v1/auth/signin", [authMiddleware.verifySignUpBody], authController.signin);
};
