/**
 * LoginController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
// const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


module.exports = {
    login: async(req,res) =>{
        // let token;
        const {email, password } = req.body;
        // console.log(req.body)
        
        const userLogin = await User.findOne({ email: email });
        // console.log(userEmail)
        
        if (userLogin) { 
            const isMatch = await bcrypt.compare(password, userLogin.password);

            // token = await userLogin.generateAuthToken();
            // console.log(token);

            // res.cookie("jwtoken", token, {
            //     expires: new Date(Date.now() + 25892000000),
            //     httpOnly: true
            // });

            if(!isMatch) {
                return res.status(400).send('Invalid Credientials')
            } else {
                return res.status(200).send('User Login Successfully')
            }
        } else {
            return res.status(400).send('Invalid Attempt')
        }    

        // Display a personalized welcome view.
        // return res.status(200).json(userEmail)
    }
};

