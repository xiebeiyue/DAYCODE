var mongoose  = require('../db');

var Schema  = mongoose.Schema;

var user = new Schema({
	email:{
		type:String,
		unique:true
	},
	password:{
		type:String,

	},
	createAt:{
		type:Date,
		default:Date.now()
	}

});
module.exports = mongoose.model('users',user,'users');