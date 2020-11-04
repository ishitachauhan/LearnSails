/**
 * DeviceType.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    deviceType: {
			type: 'string',
      unique: true
		},
		driverType: {
			type: 'string'
			
		},
		driverName: {
			type:'string'
		},
		params: {
			type: 'json'
		},
		parameters: {
			type: 'json', columnType: 'array'
		},
		communicationType: {
			type: 'string'
		},
		
	}
};

