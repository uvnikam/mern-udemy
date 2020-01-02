const express = require('express');

const router = express.Router();
const {check, validationResult} = require('express-validator/check')

const User = require('../../models/User.model')

//@route    GET api/users
//@desc     Test Routes
//@access   Public
router.get('/', (req, res) => {
    res.send('user routes')
});

//@route    POST api/users
//@desc     Register user
//@access   Public
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include valid email').isEmail(),
    check('password', 'Please enter pasword with 6 or more characters').isLength({min: 6}),
],async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const {name, email, password} = req.body;

    try{
        let user = await User.findOne({email})

        if(user){
            res.status(400).json({errors: [{msg: 'User already exists'}]});
        }

        //Get users gravatar

        //Encryot password

        //return jsonwebtoken


        res.send('user routes')
    }catch(err){
        console.log(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;