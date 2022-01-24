/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

 module.exports = {
 
     create: async(req,res)=>{
         if(!req.body.email) {
            return res.status(422).json('Filled the field properly !!!');
        }

        if(req.body.password != req.body.password2) {
            return res.status(422).json('Password not match !!!');
        }
         
        try {
            const userEmail=  await User.findOne({email: req.body.email})
            if(!userEmail) {
                await User.create({
                    name: req.body.name,
                    user_type: 'user',
                    email: req.body.email,
                    phone: req.body.phone,
                    password: req.body.password,
                    age: req.body.age,
                    gender: req.body.gender,
                });
                return res.status(200).json('Registration Successfull!!!');
            } else {
                return res.status(500).json('Registration UnSuccessfull!!!');
            }
        } catch(error) {
            return res.status(500).json('Data inserted error !!!');
        }
  
     }
 }; 