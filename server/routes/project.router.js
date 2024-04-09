const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET ROUTE
router.get('/', (req, res) => {
    console.log('/project GET route');
    let queryText = `SELECT * FROM "projects" ASC;`
    pool.query(queryText).then((result) => {
        console.log(result.rows)
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })

});

module.exports = router;