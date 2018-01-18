const mongoose = require("mongoose");
var request = require("request");
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
        
        if(result.length == 0){
            console.log("NO USERS");
            request.get("http://www.filltext.com/?rows=10&firstName={firstName}&lastName={lastName}&pretty=true",function(error,response,body){
                var users = JSON.parse(body);
                User.addingUsers(users,function(err,resultres){
                    if(err) console.error(err);
                    
                    User.find({}).exec(function(err,result){
                        if(err) callback(err,null);
                        callback(null,result[number]);
                    })
                });
            });
        }

        else{
            console.log("USERS IN DB");
            callback(null,result[number]);
        }
    });


    
    //RANDOM USER(andere user bij pagina refresh) OLD CODE
    // User.aggregate({$sample:{size:1}}).exec(function(err,result){
    //     if(err) callback(err,null);
    //     callback(null,result);
    // });
};



module.exports = User;