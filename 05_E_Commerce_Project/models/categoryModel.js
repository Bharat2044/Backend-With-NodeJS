/**
 * Category Schema:
 * - Defines the structure of the Category model in the database
 * 
 * Fields:
 *   - name: Category name
 *     - Type: String
 *     - Required: true
 *     - Unique: true
 *   - description: Category description
 *     - Type: String
 *     - Required: true
 * 
 * Timestamps:
 *   - createdAt: Auto-generated timestamp representing when the category was created
 *   - updatedAt: Auto-generated timestamp representing when the category was last updated
 * 
 * Version Key:
 *   - versionKey: Disabled (set to false) to prevent inclusion of the '__v' field in the documents
 */


// Importing Mongoose library for MongoDB schema modeling
const mongoose = require("mongoose");

// Define the schema for the 'Category' collection
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // The 'name' field is required
        unique: true    // The 'name' field must be unique
    },
    description: {
        type: String,
        required: true    // The 'description' field is required
    }
}, {
    timestamps: true,    // Automatically add 'createdAt' and 'updatedAt' timestamps to documents
    versionKey: false    // Disable the default '__v' version key in MongoDB documents
});

// Create a Mongoose model named 'Category' based on the defined schema
module.exports = mongoose.model("Category", categorySchema);
