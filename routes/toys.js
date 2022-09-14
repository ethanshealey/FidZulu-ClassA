var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/all/:location', function(req, res, next) {
  let loc = req.params.location
  let data = fs.readFileSync('./data/Toysjson.json')
  let toys = JSON.parse(data);
  switch(loc) {
    case 'Raleigh':
      toys.forEach((toy) => {
        toy['tax'] = toy.prize * 0.075
      })
      break
    case 'Durham':
      toys.forEach((toy) => {
        toy['tax'] = toy.prize * 0.08
      })
      break
    default:
      res.status(400).send('Invalid Location Given')
  }
  res.send(toys)
});

module.exports = router;