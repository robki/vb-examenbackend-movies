const mongoose = require("mongoose");
var Schema = mongoose.Schema;

module.exports = new mongoose.Schema({
    firstName: {type:String},
    lastName: {type:String}
});