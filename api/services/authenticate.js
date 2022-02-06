const jwt = require('jsonwebtoken');
const User = require("../models/User");

const Authenticate = async( req, res, next) => {
    try {
        const token = req.cookies.jwttoken;
        const varifyToken = jwt.verify(token, process.env.SECRET_KEY);

        const rootUser = await User.findOne({ _id: varifyToken._id, "tokens.token": token });

        if(rootUser) {
            req.token = token;
            req.rootUser = rootUser;
            req.userID = rootUser._id;

            next();
        } else {
            return res.status(500).json({error: 'Unauthorized: No token provided'});
        }

    } catch(error) {
        return res.status(401).json({error: 'Unauthorized: No token provided', err: error});
    }
}

module.exports = Authenticate;