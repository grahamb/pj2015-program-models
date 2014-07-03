'use strict';
var should = require('should');
var utils = require('./utils');
var ProgramSelection = require('../models/programSelection');
var fixtures = require('./fixtures');

describe('ProgramSelectionModel', function() {
    before(function(done) {
        ProgramSelection.remove(done);
    });

    describe('#create()', function() {
        before(function(done) {
            ProgramSelection.remove(done);
        });
    });

    it('should should create a new ProgramSelection', function(done) {
        ProgramSelection.create({ unitId: '123' }, function(err, programSelection) {
            should.not.exist(err);
            programSelection.unitId.should.equal('123');
            done();
        });
    });

    it('should add several items to the selection', function(done) {
        ProgramSelection.findOne({ unitId: 123 }, function(err, programSelection) {
            should.not.exist(err);
            programSelection.unitId.should.equal('123');
            programSelection.selections.addToSet('program1');
            programSelection.selections.addToSet('program2');
            programSelection.selections.addToSet('program3');
            programSelection.selections.addToSet('program4');
            programSelection.save(function(err, programSelection, numberAffected) {
                should.not.exist(err);
                programSelection.selections.length.should.equal(4);
                done();
            });
        });
    });

    it('should not allow a duplicate item in the selections array', function(done) {
        ProgramSelection.findOne({ unitId: 123 }, function(err, programSelection) {
            should.not.exist(err);
            programSelection.unitId.should.equal('123');
            var numSelections = programSelection.selections.length;
            var firstProgram = programSelection.selections[0];
            programSelection.selections.addToSet(firstProgram);
            programSelection.save(function(err, programSelection, numberAffected) {
                should.not.exist(err);
                programSelection.selections.length.should.equal(numSelections);
                done();
            });
        });
    });

});