const mongoose = require("mongoose");
let movieSchema = require("../schemas/movie");
let Movie = mongoose.model('Movie', movieSchema, 'Movies');

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
    Movie.findOneAndUpdate({Title:values.Title},{$set:{Vote:values.firstName}},function(err,result){
        if(err) callback(err,null);
        callback(null,result);
    });
}

module.exports = Movie;