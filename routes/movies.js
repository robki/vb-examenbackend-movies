var express = require("express");
var router = express.Router();
var Movie = require("../data/models/movie");
var User = require('../data/models/user');
var date = "vandaag";

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

router.post('/savevote',function(req,res,next){
    let values= {};

    values.Title = req.body.title;
    values.firstName = req.body.firstname;
    values.lastName = req.body.lastname;
    values.date = date;
    
    console.log(values);
    

    Movie.saveVote(values,function(err,resultres){
        if(err) console.error(err);
        res.redirect("/movies");
    });
});



module.exports =router;