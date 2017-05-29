var express     = require('express');
var path = require('path');
var app         = express();
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});

// mongoose.connect(process.env.NOMAD_DB_BLOG_DEV);
mongoose.connect('mongodb://localhost/test');

// var User = require('./models/user');
var Write = require('./routes/write');
var list = require('./routes/list');
// var Post = require('./models/post');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// [CONFIGURE APP TO USE bodyParser]
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/write', Write);
app.use('/list', list);

// [CONFIGURE SERVER PORT]
var port = process.env.PORT || 8080;

// [CONFIGURE ROUTER]
// var router = require('./routes')(app);

// [RUN SERVER]
var server = app.listen(port, function(){
 console.log("Express server has started on port " + port)
});

module.exports = app;