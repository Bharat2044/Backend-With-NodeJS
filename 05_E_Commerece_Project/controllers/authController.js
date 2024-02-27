/**
 * Controller for User Registration
 * 
 * This controller handles the logic to register a new user.
 */

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userModel = require("../models/userModel");
const authConfig = require("../configs/authConfig")

// Controller function for user registration
exports.signup = async (req, res) => {
    /**
     * Logic to create the user
     */

    // 1. Read the request body
    const request_body = req.body;

    // 2. Insert the data in the Users collection in MongoDB
    const userObj = {
        name: request_body.name,
        userId: request_body.userId,
        email: request_body.email,
        userType: request_body.userType,
        password: bcrypt.hashSync(request_body.password, 8)
    };

    try {
        // Attempt to create the user in the database
        const user_created = await userModel.create(userObj);

        /**
         * Return this user
         */

        // Construct response object with selected user attributes
        const res_obj = {
            name: user_created.name,
            userId: user_created.userId,
            email: user_created.email,
            userType: user_created.userType,
            createdAt: user_created.createdAt,
            updatedAt: user_created.updatedAt  // Corrected typo in updatedAt
        };

        // Send successful response with the created user details
        res.status(201).send(res_obj);

    } catch (err) {
        // Handle errors and send appropriate error response
        console.log("Error while registering the user", err);
        
        res.status(500).send({
            message: "Some error happened while registering the user"
        });
    }

    // 3. Return the response back to the user
    
};



exports.signin = async (req, res) => {
    // 1. Check if the user id is present in the system
    const user = await userModel.findOne({userId: req.body.userId});
    
    if(user == null) {
        return res.status(400).send({
            message: "User id is not a valid user id"
        });
    }

    // 2. Password is correct, then login allowed
    const isPasswordValid  = bcrypt.compareSync(req.body.password, user.password);
    
    if(!isPasswordValid) {
        return res.status(401).send({
            message: "Wrong password passed"
        });
    }

    // 3. Using JWT we will create the access token with a given TTL(Time To Live) and return
    const token = jwt.sign({id: user.userId}, authConfig.secret, {expiresIn: 120});

    res.status(200).send({
        name: user.name,
        userId: user.userId,
        email: user.email,
        userType: user.userType,
        accessToken: token
    });

}