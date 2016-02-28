/* global global */
/* global bson */
/* global = __dirname, mongoose, Schema,Promise,fs */
// modules =================================================
var express        = require('express');
mongoose       = require('mongoose-q')(require('mongoose'), {q:require('q-bluebird')});
//mongoose.Promise = require('bluebird');
var app            = express();
var bodyParser     = require('body-parser');


// Database configuration ===========================================
var db = require('./app/database/config/mongoDBSettings');
mongoose.connect(db.url);
Schema = mongoose.Schema;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// routes ==================================================
require('./app/serverRoutes')(app);

// start app ===============================================
app.listen(3009, function(){
    console.log('SCRUM-iT started on port 3009!!');    
});
module.exports = app;