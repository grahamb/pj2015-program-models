'use strict';
var should = require('should');
var utils = require('./utils');
var ProgramSelection = require('../programSelection');
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
});