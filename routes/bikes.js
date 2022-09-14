var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/all/:location', function(req, res, next) {
  let loc = req.params.location
  let data = fs.readFileSync('./data/Bikejson.json')
  let bikes = JSON.parse(data);
  switch(loc) {
    case 'Raleigh':
      bikes.forEach((bike) => {
        bike['tax'] = bike.price * 0.075
      })
      break
    case 'Durham':
      bikes.forEach((bike) => {
        bike['tax'] = bike.price * 0.08
      })
      break
    default:
      res.status(400).send('Invalid Location Given')

  }
  res.send(bikes)
});

module.exports = router;