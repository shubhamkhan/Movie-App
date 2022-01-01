/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

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
    phone: {
      type: 'number',
      required: true
    },
    email: {
      type: 'string',
      required: true
    },
    age: {
      type: 'number',
      required: true
    },
    gender: {
      type: 'string',
      required: true
    },
    image:{
      type:"string",
      required: true,
    },

  },

};