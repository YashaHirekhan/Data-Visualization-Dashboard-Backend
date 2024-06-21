// controllers/insightController.js
const Insight = require('../models/Data');

const getInsights = async (req, res) => {
    try {
        const insights = await Insight.find({});
        res.json(insights);
    } catch (error) {
        console.error('Error fetching insights:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    getInsights,
};
