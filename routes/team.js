var express = require('express');
var router = express.Router();

router.get('/', (req, res, body) => {
    res.send(JSON.stringify({
        "team": "Shelly's Society",
        "membersNames": [
            "Will Bucher",
            "Ethan Crawford",
            "Dani Rowe",
            "Lauren Dietzler",
            "Alyssa Santos",
            "Evan Ruan",
            "Kevin Lu",
            "Ethan Shealey"
        ]
    }))
})

module.exports = router