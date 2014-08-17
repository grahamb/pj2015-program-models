'use strict';
var slug = require('slug');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProgramSchema = new Schema({
    name: { type: String, required: true, unique: true },
    slug: { type: String, unique: true },
    description: { type: String, required: true },
    shortDescription: { type: String },
    fitnessLevel: { type: String, required: true, enum: ['average', 'good', 'high'], default: 'average' },
    prerequisites: [{ type: String }],
    programClass: { type: String, required: true, default: 'B', enum: ['A', 'B'] },
    knowledgeSkillsEquipment: [{ type: String }],
    location: { type: String, enum: ['onsite', 'offsite'], required: true },
    programPeriodsAvailable: {type: Number, required: true },
    maxParticipantsPerPeriod: { type: Number, required: true },
    programPeriodsRequired: { type: Number, required: true, min: 1, max: 3, default: 1 },
    fee: { type: Number, default: 0 },
    programActivityLeader: [{
        name: { type: String },
        emailAddress: { type: String }
    }]
});

ProgramSchema.virtual('isOvernight').get(function() {
    return this.programPeriodsRequired === 3 ? 'yes' : 'no';
});

ProgramSchema.virtual('programDuration').get(function() {
    switch (this.programPeriodsRequired) {
        case 1:
            return "Half-Day";
            break;
        case 2:
            return "Full-Day";
            break;
        case 3:
            return "Overnight";
            break;
    }
});

ProgramSchema.pre('save', function(next) {
    this.slug = slug(this.name).toLowerCase();
    next();
});

var ProgramModel = mongoose.model('programs', ProgramSchema);
module.exports = ProgramModel;