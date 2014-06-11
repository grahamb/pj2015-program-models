var should = require('should');
var utils = require('./utils');
var Program = require('../program');
var fakeProgarm;

'use strict';

describe('ProgramModel', function() {

    var fakeProgram = {
        name: 'Discover SCUBA',
        description: 'Participants will discover SCUBA diving',
        location: 'offsite',
        programPeriodsAvailable: 5,
        maxParticipantsPerPeriod: 48,
        programPeriodsRequired: 2,
        fee: 0,
        isOvernight: false
    };

    describe('#create()', function() {
        it('should create a new Program', function(done) {
            Program.create(fakeProgram, function(err, program) {
                should.not.exist(err);
                program.name.should.equal('Discover SCUBA');
                done();
            });
        });

        it('should not save without a name', function(done) {
            var program = new Program(fakeProgram);
            program.name = '';
            program.save(function(err, program) {
                should.exist(err);
                err.name.should.equal('ValidationError');
                done();
            });
        });

        it('should not save with an invalid location', function(done) {
            var program = new Program(fakeProgram);
            program.location = 'somewhere else',
            program.save(function(err, program) {
                should.exist(err);
                done();
            });
        });

    });


});