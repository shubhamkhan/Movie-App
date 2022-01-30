/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
 var bcrypt = require('bcryptjs');

 module.exports = {

  attributes: {

    name: {
      type: 'string',
      required: true
    },
    user_type: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      required: true
    },
    phone: {
      type: 'number',
      required: true
    },
    password: {
      type: 'string',
      required: true
    },
    age: {
      type: 'number',
      required: false
    },
    gender: {
      type: 'string',
      required: false
    },
    image:{
      type:"string",
      required: false
    },
  },

  customToJSON: function() {
    return _.omit(this, ['password'])
  },

  beforeCreate: function(values, next) {
    bcrypt.genSalt(10, (err, salt) => {

      if (err) {
        sails.log.error(err);
        return next();
      }

      bcrypt.hash(values.password, salt, (err, hash) => {
          if (err) {
            sails.log.error(err);
            next(err);
          } else {
            values.password = hash; // Here is our encrypted password
            return next();
          }
      });
    });
  }

};