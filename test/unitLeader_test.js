'use strict';
var should = require('should');
var utils = require('./utils');
var UnitLeader = require('../unitLeader');

describe('UnitLeaderModel', function() {

    var mockLeader = {
        unitNumber: '123',
        name: 'Mike Budzik',
        emailAddress: 'mikebudzik@newwestscouts.ca'
    };

    describe('#create()', function() {
        before(function(done) {
            UnitLeader.remove(done);
        });

        it('should create a new UnitLeader', function(done) {
            UnitLeader.create(mockLeader, function(err, unitLeader) {
                should.not.exist(err);
                unitLeader.name.should.equal('Mike Budzik');
                unitLeader.unitNumber.should.be.type(String);
                done();
            });
        });


    });

})