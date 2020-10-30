var mongoose  = require('mongoose');

mongoose.connect('mongodb://localhost:27017/xbblog');

var db = mongoose.connection;

db.on('connected',function(){
    console.log('Database connection successfull');
});
db.on('error',function(){
    console.log('Database connection failed');
});
db.on('disconnected',function(){
    console.log('disconnect');
});
module.exports = mongoose;