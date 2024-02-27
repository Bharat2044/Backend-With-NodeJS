const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const authConfig = require("../configs/authConfig");

/**
 * Middleware to verify and validate the request body during user signup.
 * Checks for the presence of 'name', 'email', and 'userId' in the request body.
 * Ensures that the 'userId' is unique, i.e., not already registered.
 */
const verifySignUpBody = async (req, res, next) => {
  try {
    // Check for the name
    if (!req.body.name) {
      return res.status(400).send({
        message: "Failed! Name was not provided in the request body",
      });
    }

    // Check for the email
    if (!req.body.email) {
      return res.status(400).send({
        message: "Failed! Email was not provided in the request body",
      });
    }

    // Check for the userId
    if (!req.body.userId) {
      return res.status(400).send({
        message: "Failed! userId was not provided in the request body",
      });
    }

    // Check if the user with the same userId is already present
    const user = await userModel.findOne({ userId: req.body.userId });

    if (user) {
      return res.status(400).send({
        message: "Failed! User with the same userId is already present",
      });
    }

    next();
  } catch (err) {
    console.log("Error while validating the request object", err);
    res.status(500).send({
      message: "Error while validating the request body",
    });
  }
};


/**
 * Middleware to verify and validate the request body during user sign-in.
 * Ensures that 'userId' and 'password' are provided in the request body.
 */
const verifySignInBody = async (req, res, next) => {
  if (!req.body.userId) {
    return res.status(400).send({
      message: "userId is not provided",
    });
  }
  if (!req.body.password) {
    return res.status(400).send({
      message: "password is not provided",
    });
  }
  next();
};


/**
 * Middleware to verify the presence and validity of a token in the request header.
 * Checks for the presence of the 'x-access-token' header.
 * Verifies the token using the secret from the authentication configuration.
 * Ensures that the decoded user ID corresponds to an existing user.
 */
const verifyToken = (req, res, next) => {
  // Check if the token is present in the header
  const token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token found: Unauthorized",
    });
  }

  // If it's a valid token
  jwt.verify(token, authConfig.secret, async (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }
    const user = await userModel.findOne({ userId: decoded.id });
    if (!user) {
      return res.status(400).send({
        message: "Unauthorized, this user for this token doesn't exist",
      });
    }
    // Set the user info in the req body
    req.user = user;
    next();
  });

  // Then move to the next step
};

/**
 * Middleware to check if the user is an ADMIN before granting access to an endpoint.
 * Ensures that the user is an ADMIN based on the 'userType' property.
 */
const isAdmin = (req, res, next) => {
  const user = req.user;
  if (user && user.userType == "ADMIN") {
    next();
  } else {
    return res.status(403).send({
      message: "Only ADMIN users are allowed to access this endpoint",
    });
  }
};

module.exports = {
  verifySignUpBody,
  verifySignInBody,
  verifyToken,
  isAdmin,
};
