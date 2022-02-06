/**
* UserController
* @description :: Server-side actions for handling incoming requests.
*/
const bcrypt = require('bcryptjs');
const User = require('../models/User');

//Register user data into database
exports.register = async(req, res) => {

    if(!req.body) {
        return res.status(422).json({error: 'Filled the field properly !!!'});
    }

    if(req.body.password != req.body.password2) {
        return res.status(422).json({error: 'Password not match !!!'});
    }

    try {
        const userEmail = await User.exists({email: req.body.email});
        if(!userEmail) {
            const userData = await User.create({
                name: req.body.name,
                user_type: req.body.user_type,
                email: req.body.email,
                phone: req.body.phone,
                password: req.body.password,
            });
            
            if(userData) {
                return res.status(201).json({message: 'Registration Successfull!!!'});
            }
        } else {
            return res.status(500).json({error: 'User Already Exists!!!'});
        }
    } catch(error) {
        return res.status(500).json({error: 'Registration UnSuccessfull!!!', Er: error});
    }
}


//Login user
exports.login = async(req, res) => {
    try {
        const { email, password } = req.body;

        if(!email || !password) {
            return res.status(400).json({error: 'Filled the field properly !!!'});
        }

        const userLogin = await User.exists({email: email});
        if(userLogin) {
            const userData = await User.findOne({email: email});
            const isMatch = await bcrypt.compare(password, userData.password);
            if(isMatch){
                const token = await userData.generateAuthToken();
                res.cookie('jwttoken', token, {
                    expires: new Date(Date.now() + 25892000000),
                    httpOnly: true,
                });
                return res.status(200).json({message: 'Login Successfull!!!'});
            } else {
                return res.status(500).json({message: 'Invalid Credientials!!!'});
            }
        } else {
            return res.status(500).json({message: 'User Not Exists !!!'});
        }
    } catch(error) {
        return res.status(500).json({error: 'Login UnSuccessfull!!!'});
    }
}


//Logout
exports.logout = async(req, res) => {
    res.clearCookie('jwttoken', {path: '/'});
    return res.status(200).json({error: 'Logout Successfull!!!'});
}


//Show data
exports.show = async(req, res) => {
    try {
        const userData = await User.find();
        if(userData){
            return res.status(200).send(userData);
        }
    } catch(err) {
        return res.status(422).json({error: 'Data is empty !!!'});
    }
}