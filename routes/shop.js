const path = require('path');
const express = require('express');
const rootDir=require('../util/path') // Set the rootDir to the parent directory of this module
const router = express.Router();

router.get('/', (req, res, next) => {
  // Use `path.join` to correctly form the path to "shop.html"
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
