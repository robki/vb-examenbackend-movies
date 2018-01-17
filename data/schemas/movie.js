const mongoose = require("mongoose");
var Schema = mongoose.Schema;

module.exports = new mongoose.Schema({
    Metascore:{type:String},
    Poster:{ type: String},
    Title: {type:String},
    Plot: {type:String},
    Actors:{type: String},
    Released: {type:String}
});