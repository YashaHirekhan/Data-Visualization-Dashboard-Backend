// routes/insightRoutes.js
const express = require('express');
const { getInsights } = require('../controller/DataController');

const router = express.Router();

router.get('/data', getInsights);

module.exports = router;
