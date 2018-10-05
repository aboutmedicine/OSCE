const mongoose = require('mongoose');

// Osce Schema
const osceSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    category: {
        type: String,
        required: true
    },
    name: {
        type: String,
    },
    age: {
        type: String,
    },
    background: {
        type: String,
    },
    issue: {
        type: String,
    },
    onset: {
        type: String,
    },
    progress: {
        type: String,
    },
    exacerbating: {
        type: String,
    },
    relieving: {
        type: String,
    },
    associated: {
        type: String,
    },
    timing: {
        type: String,
    },
    episodes: {
        type: String,
    },
    severity: {
        type: String,
    },
    systems: {
        type: String,
    },
    pmhx: {
        type: String,
    },
    medications: {
        type: String,
    },
    allergies: {
        type: String,
    },
    fhx: {
        type: String,
    },
    shx: {
        type: String,
    },
    concern: {
        type: String,
    },
    question1: {
        type: String,
    },
    question2: {
        type: String,
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

const Osce = module.exports = mongoose.model('Osce', osceSchema);

// Get Osces
module.exports.getOsces = (callback, limit) => {
    Osce.find(callback).limit(limit);
}

// Get Osce
module.exports.getOsceById = (id, callback) => {
    Osce.findById(id, callback);
}

// Add Osce
module.exports.addOsce = (osce, callback) => {
    Osce.create(osce, callback);
}

// Update Osce
module.exports.updateOsce = (id, osce, options, callback) => {
    var query = {
        _id: id
    };
    var update = {
        title: osce.title,
        category: osce.category,
        name: osce.name,
        age: osce.age,
        background: osce.background,
        issue: osce.issue,
        onset: osce.onset,
        progress: osce.progress,
        exacerbating: osce.exacerbating,
        relieving: osce.relieving,
        associated: osce.associated,
        timing: osce.timing,
        episodes: osce.episodes,
        severity: osce.severity,
        systems: osce.systems,
        pmhx: osce.pmhx,
        medications: osce.medications,
        allergies: osce.allergies,
        fhx: osce.fhx,
        shx: osce.shx,
        concern: osce.concern
    }
    Osce.findOneAndUpdate(query, update, options, callback);
}

// Delete Osce
module.exports.removeOsce = (id, callback) => {
    var query = {
        _id: id
    };
    Osce.remove(query, callback);
}
