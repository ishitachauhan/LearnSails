/**
 * Student.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name:{
      type:'string'
    },
    rollNo:{
      type:'number', unique: true, columnName: 'the_primary_key'
    },
    marks:{
      type:'number'
    }
  }

};

