const router = require('express').Router();
const chart = require('../controller/chart');

router.route('/')
.get(chart.get)

module.exports = router;