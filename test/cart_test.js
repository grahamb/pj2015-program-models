'use strict';
var should = require('should');
var utils = require('./utils');
var Cart = require('../cart');
var fixtures = require('./fixtures');

describe('CartModel', function() {
    describe('#create()', function() {
        before(function(done) {
            Cart.remove(done);
        });
    });

    it('should should create a new Cart', function(done) {
        Cart.create({ unit: '123' }, function(err, cart) {
            should.not.exist(err);
        });
    });

});