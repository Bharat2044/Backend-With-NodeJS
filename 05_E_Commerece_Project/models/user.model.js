// Importing Mongoose library for MongoDB schema modeling
const mongoose = require("mongoose");

/**
 * User Schema:
 * - Defines the structure of the User model in the database
 * Fields:
 *   - name: User's name
 *   - userId: Unique identifier for the user
 *   - password: User's password
 *   - email: User's email address (unique and in lowercase)
 *   - userType: Type of user (default: "CUSTOMER", enum: ["CUSTOMER", "ADMIN"])
 */

// Creating the User schema using Mongoose
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      minLength: 10,
      unique: true
    },
    userType: {
        type: String,
        required: true,
        default: "CUSTOMER",
        enum: ["CUSTOMER", "ADMIN"]
    }
  },
  { versionKey: false, timestamps: true } // Configuration options: versionKey disabled, timestamps for createdAt and updatedAt
);


// Exporting the User model based on the defined schema
module.exports = mongoose.model("User", userSchema);
