var express = require("express");
var router = express.Router();
var Movie = require("../data/models/movie");

router.get('/', function(req,res,next){
    Movie.getMovies(function(err,results){
        if(err) console.error(err);
        res.render('movies/index', {
            title:'Movies',
            movies: results
        });
    });
});


module.exports =router;