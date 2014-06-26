'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProgramSchema = new Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    location: { type: String, enum: ['onsite', 'offsite'], required: true },
    programPeriodsAvailable: {type: Number, required: true },
    maxParticipantsPerPeriod: { type: Number, required: true },
    programPeriodsRequired: { type: Number, required: true },
    fee: { type: Number, default: 0 },
    isOvernight: { type: Boolean, required: true },
    specialRequirements: { type: String },
    programActivityLeader: [{
        name: { type: String },
        emailAddress: { type: String }
    }]
});

mongoose.model('programs', ProgramSchema);
var ProgramModel = mongoose.model('programs');

module.exports = ProgramModel;