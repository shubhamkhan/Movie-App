/**
 * User.js
 * @description :: A model definition represents a database table/collection.
 */
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongooose = require('mongoose');


const userSchema = new mongooose.Schema({
  
  name: {
    type: String,
    required: true
  },
  user_type: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: false
  },
  gender: {
    type: String,
    required: false
  },
  image:{
    type: String,
    required: false
  },
  tokens: [
    {
      token: {
        type: String,
        require: true
      }
    }
  ]

})

// Hashing passward
userSchema.pre('save', async function(next){
  if(this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
})

// JWT token generating
userSchema.methods.generateAuthToken = async function() {
  try {
    let token = jwt.sign({_id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch(error) {
    console.log(error);
  }
}

const User = mongooose.model('USER', userSchema);
module.exports = User;