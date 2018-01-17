const mongoose = require("mongoose");
let movieSchema = require("../schemas/movie");
let Movie = mongoose.model('Movie', movieSchema, 'Movies');
var date = "vandaag";

Movie.getMovies = function (callback) {
    Movie.find({
        'Metascore': {
            $ne: 'N/A'
        },
        'Year': {
            $eq: 2016
        }
    }).sort('-Metascore').limit(10).exec(function (err, result) {
        if (err) callback(err, null);
        callback(null, result);
    });
};

Movie.saveVote = function(values,callback){
    console.log(values.Title);
    Movie.findOneAndUpdate({Title:values.Title},
        { 
            "$set":{
            "Voters.0.firstName": values.firstName, 
            "Voters.0.lastName": values.lastName, 
            "Voters.0.date": values.date
        }
    },
        function(err,result){
        
        
        if(err) callback(err,null);
        callback(null,result);
    });
}

module.exports = Movie;