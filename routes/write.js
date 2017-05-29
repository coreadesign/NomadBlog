var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function(req, res) {
    res.render('write', {title: '회원가입폼dd~'});
});

router.post('/', function(req,res){
    var book = new User();
    book.ids = req.body.ids;
    book.mail = req.body.mail;
    book.password = req.body.passwd;


    book.save(function(err){
        if(err){
            console.error(err);
            res.json(req.body);
            // res.json({result: 0});
            return;
        }

        // res.json({result: 1});
        res.redirect('/list');
    });
});

module.exports = router;