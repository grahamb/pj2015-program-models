'use strict';
var fs = require('fs');
var mongoose = require('mongoose');
var modelDir = __dirname + '/models/';

module.exports = {};

fs.readdirSync(__dirname + '/models').forEach(function(filename) {
    var schemaName = filename.replace(/\.js$/, '');
    var Schema = require(modelDir + schemaName);

    module.exports[schemaName] = require(modelDir + schemaName);
});

return module.exports;