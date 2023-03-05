/*File name: COMM229-W2023-MIDTERM-301278498(index.js)
  Author's name: Ariya Agnihothri
  StudentID : 301278498
  Web App name :Mid-Term Test*/

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Favourite Book List',
    books: ''
   });
});

module.exports = router;
