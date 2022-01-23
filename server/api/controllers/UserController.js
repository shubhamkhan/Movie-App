/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
 
 module.exports = {
 
     create: async(req,res)=>{
         if(!req.body) {
            res.status(422).send({message:'Filled the field properly !!!'});
         }
         
         try {
            await User.create({
                name: req.body.name,
                user_type: 'user',
                email: req.body.email,
                phone: req.body.phone,
                password: req.body.password,
                age: req.body.age,
                gender: req.body.gender,
            });

            res.status(200).send({ message:'Registration Successfull!!!' + error });

        } catch(error) {
            res.status(500).send({ message:'Data inserted error !!!' + error });
        }
  
     }
 }; 