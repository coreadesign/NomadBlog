var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function(req, res) {
    User.find({}).sort({date:-1}).exec(function(err, rawUser) {
        if(err) throw err;
        res.render('list', {userInfo: rawUser});
    });
});

module.exports = router;