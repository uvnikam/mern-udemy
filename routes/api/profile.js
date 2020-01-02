const express = require('express');

const router = express.Router();

//@route    GET api/profile
//@desc     Test Routes
//@access   Public
router.get('/', (req, res) => {
    res.send('profile routes')
});

module.exports = router;