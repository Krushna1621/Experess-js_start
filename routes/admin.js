const path = require('path');
const express = require('express');

const rootDir=require('../util/path')
const router = express.Router();

// Parse incoming requests with urlencoded payloads
router.use(express.urlencoded({ extended: true }));

router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
