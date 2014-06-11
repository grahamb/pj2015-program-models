'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UnitLeaderSehcma = new Schema({
    unitNumber: { type: String, required: true },
    name: { type: String, required: true },
    emailAddress: { type: String, required: true, unique: true }
});

mongoose.model('unitLeaders', UnitLeaderSehcma);
var UnitLeaderModel = mongoose.model('unitLeaders');

module.exports = UnitLeaderModel;