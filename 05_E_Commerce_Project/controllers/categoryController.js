const categoryModel = require("../models/categoryModel");

/**
 * Controller for creating a new category
 * 
 * POST localhost:8080/ecomm/api/v1/categories
 * 
 * Request Body Example:
 * {
 *    "name" : "Household",
 *    "description" : "This will have all the household items"
 * }
 */ 
exports.createNewCategory = async (req, res) => {
    // Read the request body
    const cat_data = {
        name: req.body.name,
        description: req.body.description
    };

    try {
        // Insert category data into MongoDB
        const category = await categoryModel.create(cat_data);

        // Return the response with the created category
        return res.status(201).send(category);
    } catch (err) {
        // Handle errors and send appropriate error response
        console.log("Error while creating the category", err);
        return res.status(500).send({
            message: "Error while creating the category"
        });
    }
};
