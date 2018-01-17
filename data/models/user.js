const mongoose = require("mongoose");
let userSchema = require("../schemas/user");
let User = mongoose.model("User",userSchema,"Users");
var number = Math.floor(Math.random()*10);

User.addingUsers = function(values,callback){
    User.create(values,function(err,result){
        if(err) callback(err,null);
        console.log(result[number]);
        callback(null,result);
    });
};

User.getUsers = function(callback){
    
    User.find({}).exec(function(err,result){
        if(err) callback(err,null);
        console.log(number);
        callback(null,result[number]);
    });


    
    //RANDOM USER(andere user bij pagina refresh) OLD CODE
    // User.aggregate({$sample:{size:1}}).exec(function(err,result){
    //     if(err) callback(err,null);
    //     callback(null,result);
    // });
};



module.exports = User;