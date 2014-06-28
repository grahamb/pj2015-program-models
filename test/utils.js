'use strict';

var mongoose = require('mongoose');
var config = require('./config');

// ensure the NODE_ENV is set to 'test'
// this is helpful when you would like to change behavior when testing
process.env.NODE_ENV = 'test';

before(function(done) {
    if (mongoose.connection.readyState === 0) {
        mongoose.connect(config.mongoUrl, function (err) {
            if (err) {
                throw err;
            }
            return done();
        });
    }
});

after(function (done) {
    mongoose.disconnect();
    return done();
});