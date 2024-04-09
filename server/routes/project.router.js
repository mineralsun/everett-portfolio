const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET ROUTE
router.get('/', (req, res) => {
    console.log('/project GET route');


})

module.exports = router;