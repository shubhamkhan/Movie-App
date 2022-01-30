/**
 * Movielist.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

 module.exports = {

  attributes: {
    
    movie_name: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string',
      required: true
    },
    category: {
      type: 'json',
      required: true
    },
    genre: {
      type: 'json',
      required: true
    },  
    release_date: {
      type: 'string',
      required: true
    },
    cast: {
      type: 'json',
      required: true
    },
    director: {
      type: 'string',
      required: true
    },
    rating: {
      type: 'number',
      required: true
    }
  },

};