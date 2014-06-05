var should = require('should');
var mongoose = require('mongoose');
var Program = require('../program');
var fakeProgarm;

mongoose.connect('mongodb://localhost/pj-models-test');

describe('ProgramModel', function() {

    beforeEach(function(done) {
        fakeProgram = {
            name: 'Discover SCUBA',
            description: 'Participants will discover SCUBA diving',
            location: 'offsite',
            programPeriodsAvailable: 5,
            maxParticipantsPerPeriod: 48,
            programPeriodsRequired: 2,
            fee: 0,
            isOvernight: false
        };
        Program.remove(done);
    });

    describe('#save()', function() {
        var program;
        beforeEach(function(done) {
            program = new Program(fakeProgram);
            done();
        });

        it('should have a name', function(done) {
            program.save(function(err, program) {
                should.not.exist(err);
                program.should.have.property('name', 'Discover SCUBA');
                done();
            });
        });

        it('should not save without a name', function(done) {
            program.name = '';
            program.save(function(err, program) {
                should.exist(err);
                err.name.should.equal('ValidationError');
                done();
            });
        });

        it('should not save with an invalid location', function(done) {
            program.location = 'somewhere else',
            program.save(function(err, program) {
                should.exist(err);
                done();
            });
        });

    });


});