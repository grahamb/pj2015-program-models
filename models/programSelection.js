/*
TODO: need to add validator that checks to see if more than one "A" activity has been chosen
 */

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProgramSelection = new Schema({
    unitId: { type: String, required: true, unique: true },
    selections: []
});


var ProgramSelection = mongoose.model('programSelection', ProgramSelection);
module.exports = ProgramSelection;