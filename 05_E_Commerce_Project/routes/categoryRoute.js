/**
 * Route Configuration for Creating a New Category
 * 
 * This file sets up the route for handling the creation of a new category.
 * It includes middleware for verifying the token and checking if the user is an admin,
 * and calls the corresponding function in the categoryController.
 */

// Import necessary controllers and middlewares
const categoryController = require("../controllers/categoryController");
const authMiddleware = require("../middlewares/authMiddleware");

// Exporting a function that sets up the route on the provided Express app
module.exports = (app) => {
    
    // Define a POST route for creating a new category
    /**
     * POST Route for Creating a New Category
     * - Endpoint: POST localhost:8080/ecomm/api/v1/categories
     * 
     * Middleware:
     * - authMiddleware.verifyToken: Verifies the presence and validity of a token in the request header.
     * - authMiddleware.isAdmin: Checks if the user is an admin before allowing access to the endpoint.
     * 
     * Controller:
     * - categoryController.createNewCategory: Handles the creation of a new category.
     */
    app.post("/ecomm/api/v1/categories", [authMiddleware.verifyToken, authMiddleware.isAdmin], categoryController.createNewCategory);
};
