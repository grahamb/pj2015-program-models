'use strict';

var mongoose = require('mongoose');

// ensure the NODE_ENV is set to 'test'
// this is helpful when you would like to change behavior when testing
process.env.NODE_ENV = 'test';

before(function(done) {
    console.log('connecting');
    if (mongoose.connection.readyState === 0) {
        mongoose.connect('mongodb://localhost/pj-models-test', function (err) {
            if (err) {
                throw err;
            }
            return done();
        });
    }
});

// beforeEach(function (done) {

//     console.log('beforeEach');


// });

after(function (done) {
    console.log('after');
    mongoose.disconnect();
    return done();
});