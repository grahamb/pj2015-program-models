'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProgramSchema = new Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    fitnessLevel: { type: String, required: true, enum: ['average', 'good', 'high'], default: 'average' },
    prerequisites: { type: String, required: true, default: 'none' },
    knowledgeSkillsEquipment: { type: String },
    location: { type: String, enum: ['onsite', 'offsite'], required: true },
    programPeriodsAvailable: {type: Number, required: true },
    maxParticipantsPerPeriod: { type: Number, required: true },
    programPeriodsRequired: { type: Number, required: true, min: 1, max: 3, default: 1 },
    fee: { type: Number, default: 0 },
    isOvernight: { type: Boolean, required: true },
    specialRequirements: { type: String },
    programActivityLeader: [{
        name: { type: String },
        emailAddress: { type: String }
    }]
});

var ProgramModel = mongoose.model('programs', ProgramSchema);
module.exports = ProgramModel;