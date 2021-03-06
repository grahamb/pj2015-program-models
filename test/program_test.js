'use strict';
var should = require('should');
var utils = require('./utils');
var Program = require('../models/program');
var fixtures = require('./fixtures');

describe('ProgramModel', function() {
    describe('#create()', function() {
        before(function(done) {
            Program.remove(done);
        });

        it('should create a new Program', function(done) {
            Program.create(fixtures.mockProgram, function(err, program) {
                should.not.exist(err);
                program.name.should.equal('Discover SCUBA');
                done();
            });
        });

        it('should find the Program', function(done) {
            Program.findOne({name: 'Discover SCUBA'}, function(err, program) {
                should.not.exist(err);
                program.name.should.equal('Discover SCUBA');
                program.programActivityLeader[0].name.should.equal('Jane Riddell');
                done();
            });
        });

        it('should find the Program by its slug', function(done) {
            Program.findOne({slug: 'discover-scuba'}, function(err, program) {
                should.not.exist(err);
                program.name.should.equal('Discover SCUBA');
                program.programActivityLeader[0].name.should.equal('Jane Riddell');
                done();
            });
        });

        it('should return the proper isOvernight value', function(done) {
            Program.findOne({name: 'Discover SCUBA'}, function(err, program) {
                should.not.exist(err);
                program.isOvernight.should.equal('no');
                done();
            });
        });

        it('should return the proper programDuration value', function(done) {
            Program.findOne({name: 'Discover SCUBA'}, function(err, program) {
                should.not.exist(err);
                program.programDuration.should.equal('Half-Day');
                done();
            });
        });

        it('should return the proper premiumActivity type and value', function(done) {
            Program.findOne({name: 'Discover SCUBA'}, function(err, program) {
                program.premiumActivity.should.be.type('boolean');
                program.premiumActivity.should.be.true;
                done();
            });
        });

        it('should not allow a duplicate name', function(done) {
            Program.create(fixtures.mockProgram, function(err, program) {
                should.exist(err);
                err.err.indexOf('duplicate key error').should.be.above(0);
                done();
            });
        });

        it('should not save without a name', function(done) {
            var program = new Program(fixtures.mockProgram);
            program.name = '';
            program.save(function(err, program) {
                should.exist(err);
                err.name.should.equal('ValidationError');
                done();
            });
        });

        it('should not save with an invalid location', function(done) {
            var program = new Program(fixtures.mockProgram);
            program.location = 'somewhere else',
            program.save(function(err, program) {
                should.exist(err);
                done();
            });
        });

    });

});