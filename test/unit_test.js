'use strict';
var should = require('should');
var utils = require('./utils');
var Unit = require('../unit');

describe('UnitModel', function() {

    var mockLeader1 = {
        name: 'Mike Budzik',
        emailAddress: 'mikebudzik@newwestscouts.ca'
    };

    var mockLeader2 = {
        name: 'Geoff Pinkerton',
        emailAddress: 'geoff@newwestscouts.ca'
    };

    var mockUnit = {
        unitId: '123',
        unitName: '12th New Westminster Falcon Patrol',
        unitLeaders: [mockLeader1, mockLeader2],
        numberOfScouts: 8,
        numberOfLeaders: 2,
        finalPaymentReceivedDate: new Date(2014, 5, 10),
        finalPaymentReceived: true
    };

    describe('#create()', function() {
        before(function(done) {
            Unit.remove(done);
        });

        it('should create a new Unit with Leaders', function(done) {
            Unit.create(mockUnit, function(err, unit) {
                should.not.exist(err);
                should.exist(unit);
                unit.unitName.should.equal(mockUnit.unitName);
                unit.unitLeaders[0].name.should.equal(mockLeader1.name);
                unit.unitLeaders[1].name.should.equal(mockLeader2.name);
                done();
            });
        });

        it('should not allow a duplicate unit', function(done) {
            Unit.create(mockUnit, function(err, unit) {
                should.exist(err);
                done();
            });
        });
    });


});