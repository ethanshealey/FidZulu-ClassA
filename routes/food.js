var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/all/:location', function(req, res, next) {
  let loc = req.params.location
  let data = fs.readFileSync('./data/Foodjson.json')
  let foods = JSON.parse(data);
  switch(loc) {
    case 'Raleigh':
      foods.forEach((food) => {
        food['tax'] = food.price * 0.075
      })
      break
    case 'Durham':
      foods.forEach((food) => {
        food['tax'] = food.price * 0.08
      })
      break
    default:
      res.status(400).send('Invalid Location Given')
  }
  res.send(foods)
});

module.exports = router;