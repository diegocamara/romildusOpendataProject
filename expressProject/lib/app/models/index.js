"use strict";
var loader = require('../../util/loader');
var path = require('path');
var env = process.env.NODE_ENV || 'development';
var config = require('./databaseconfig.json')[env];
var mongoose = require('mongoose');
mongoose.connect(config.storage);
var db = {};

loader(__dirname, function(file){
  var model = require(path.join(__dirname, file));  
  db[model.modelName] = model;
});

db.mongoose = mongoose;

module.exports = db;
