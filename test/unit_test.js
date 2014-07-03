'use strict';
var should = require('should');
var utils = require('./utils');
var Unit = require('../models/unit');
var fixtures = require('./fixtures');

describe('UnitModel', function() {

    describe('#create()', function() {
        before(function(done) {
            Unit.remove(done);
        });

        it('should create a new Unit with Leaders', function(done) {
            Unit.create(fixtures.mockUnit, function(err, unit) {
                should.not.exist(err);
                should.exist(unit);
                unit.unitName.should.equal(fixtures.mockUnit.unitName);
                unit.unitLeaders[0].name.should.equal(fixtures.mockUnit.unitLeaders[0].name);
                unit.unitLeaders[1].name.should.equal(fixtures.mockUnit.unitLeaders[1].name);
                done();
            });
        });

        it('should not allow a duplicate unit', function(done) {
            Unit.create(fixtures.mockUnit, function(err, unit) {
                should.exist(err);
                done();
            });
        });
    });


});