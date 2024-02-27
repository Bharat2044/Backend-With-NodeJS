const verifySignInBody = async (req, res, next) => {

    if(!req.body.userId){
        return res.status(400).send({
            message : "userId is not provided"
        });
    }
    if(!req.body.password){
        return res.status(400).send({
            message : "password is not provided"
        });
    }

    next();
}

module.exports = {
    verifySignUpBody : verifySignUpBody,
    verifySignInBody : verifySignInBody
}