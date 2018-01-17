var express = require("express");
var router = express.Router();
var Movie = require("../data/models/movie");
var User = require('../data/models/user');

router.get('/', function(req,res,next){
    Movie.getMovies(function(err,results){
        if(err) console.error(err);
        User.getUsers(function(err,user){
            if(err) console.error(err);
            //console.log(user);
            res.render('movies/index', {
                title:'Movies',
                users: user,
                movies: results
            });
        });
        
    });

    
    
});



module.exports =router;