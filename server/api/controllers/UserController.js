/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
 const fs = require('fs');
 const cloudinary = require('../utils/cloudinary');
 
 module.exports = {
 
     create: async(req,res)=>{
 
         if(!req.body) {
             res.status(500).send({message:'Data not Inserted !!!'});
         }
 
         req.file('image').upload(async function(err, files){
             let uploadResponse;
             const image = files[0].fd;
             await cloudinary.uploader.upload(image, {
                 resource_type: "image",
                 width: 250,
                 height: 250,
                 gravity: "faces",
                 crop: "fill",
             }).then((result) => {
                 uploadResponse = result;
                 fs.unlinkSync(image);
                 console.log("Sucess", JSON.stringify(result, null, 2));
             }).catch((error) => {
                 console.log("Error", JSON.stringify(error, null, 2));
             });
             try {
                 await User.create({
                     name: req.body.name,
                     user_type: req.body.user_type,
                     email: req.body.email,
                     phone: req.body.phone,
                     password: req.body.password,
                     age: req.body.age,
                     gender: req.body.gender,
                     image: uploadResponse.url,
                 });
             } catch(error) {
                 res.status(500).send({ message:'Data inserted error !!!' + error });
             }
     
             return res.json({
                 message: files.length + " file(s) uploaded successfully",
             });
         })   
     }
 }; 