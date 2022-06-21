var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json([
    {
      id: '1',
      author: 'Sidney Sheldon',
      title: 'The Other Side of Midnight',
      category: 'Novel',
      date: '1997-02-02 10:10:10'
    },
    {
      id: '2',
      author: 'Helen Keller',
      title: 'Three Days to See',
      category: 'Novel',
      date: '2000-02-02 12:10:10'
    },

    {
      id: '3',
      author: 'Sidney Sheldon',
      title: 'Master of the Game',
      category: 'Novel',
      date: '2010-02-02 12:10:10'
    },

    {
      id: '4',
      author: 'Helen Keller',
      title: 'The Frost King, Three Days to See',
      category: 'Novel',
      date: '2018-02-02 12:10:10'
    }
  ]);
});

module.exports = router;
