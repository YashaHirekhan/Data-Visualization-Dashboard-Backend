const mongoose = require('mongoose');

const InsightSchema = new mongoose.Schema({

    end_year: {
        type: Number,
        required: false,
        default: null, // Assuming default value is null if not provided
    },
    intensity: {
        type: Number,
        required: false,
        default: null, // Assuming default value is null if not provided
    },
    sector: {
        type: String,
        required: false,
        default: null, // Assuming default value is null if not provided
    },
    topic: {
        type: String,
        required: false,
    },
    insight: {
        type: String,
        required: false,
    },
    url: {
        type: String,
        required: false,
    },
    region: {
        type: String,
        required: false,
    },
    start_year: {
        type: Number,
        required: false,
        default: null, // Assuming default value is null if not provided
    },
    impact: {
        type: String,
        required: false,
        default: null, // Assuming default value is null if not provided
    },
    added: {
        type: Date,
        required: false,
    },
    published: {
        type: Date,
        required: false,
        default: null, // Assuming default value is null if not provided
    },
    country: {
        type: String,
        required: false,
        default: null, 
    },
    relevance: {
        type: String,
        required: false,
        default: null, 
    },
    pestle: {
        type: String,
        required: false,
        default: null, 
    },
    source: {
        type: String,
        required: false,
        default: null, 
    },
    title: {
        type: String,
        required: false,
        default: null, 
    },
    cqp: {
        type: String,
        required: false,
        default: null, 
    }
});

const Insight = mongoose.model('Insight', InsightSchema);

module.exports = Insight;
