var express = require('express');
var router = express.Router();
var request = require("request");
var User = require("../data/models/user");

/* GET home page. */
router.get('/', function(req, res, next) {
  request.get("http://www.filltext.com/?rows=10&firstName={firstName}&lastName={lastName}&pretty=true",
  function (error, response, body) {
      var users = JSON.parse(body);
      User.addingUsers(users,function(err,resultres){
        if(err) console.error(err);
        res.render("index");
      });
  });



});

module.exports = router;
