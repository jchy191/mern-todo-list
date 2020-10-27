import express from 'express';
import expressValidator from 'express-validator';
const {check, validationResult} = expressValidator;
import {User} from './models.js';

const router = express.Router();

//GET /:user
router.get('/:user', (req, res) => {
    console.log("hi");
})

//POST /register
//Create a new user
router.post('/register', [
    check('username')
      .exists({ checkNull: true, checkFalsy: true })
      .withMessage('Please provide a value for "username"'),
    check('password')
      .exists({ checkNull: true, checkFalsy: true })
      .withMessage('Please provide a value for "password"'),
  ], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errorMessages = errors.array().map(error => error.msg);
        return res.status(400).json({errors: errorMessages})
    }

    const {username, password} = req.body
    const existingUser = await User.findOne({"username": username}).exec();

    if (existingUser) {
        console.log("user exists")
        return res.status(400).json({errors: "Unsuccessful"});
    }

    let user = new User (req.body);
    user.save((err, user) => {
        if (err) return next (err);
        return res.status(201).end();
    })
})


export default router; 