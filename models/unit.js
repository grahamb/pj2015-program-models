'use strict';
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var UnitSchema = new Schema({
    unitId: { type: String, required: true, unique: true },
    unitName: { type: String, required: true },
    finalPaymentDate: { type: Date },
    numberOfScouts: { type: Number, required: true },
    numberOfLeaders: { type: Number, required: true },
    unitLeaders: [{
        name: { type: String, required: true },
        emailAddress: { type: String, required: true, unique: true }
    }]
});

var UnitModel = mongoose.model('units', UnitSchema);
module.exports = UnitModel;