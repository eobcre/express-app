const express = require('express');
const router = express.Router();

// routing
router.get('/', (req, res) => {
  res.send('User');
});

router.get('/info', (req, res) => {
  res.send("User's Info");
});

module.exports = router;
