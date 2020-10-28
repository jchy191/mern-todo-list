import express from 'express';
import bcryptjs from 'bcryptjs';
import {User} from './models.js';
import authenticateUser from './authenticated.js';


import expressValidator from 'express-validator';
const {check, validationResult} = expressValidator;

const router = express.Router();

//GET /:user
router.get('/:user', authenticateUser, async (req, res) => {
    const user = await User.findOne({"username" : req.params.user});
    return res.status(200).json(user);
})

//POST /:user/:todoID

//PUT /:user/:todoID

//DELETE /:user/:todoID


//POST /register
//Create a new user
router.post('/register', [
    check('name')
      .exists({ checkNull: true, checkFalsy: true })
      .withMessage('Please provide a value for "name"'),
    check('username')
      .exists({ checkNull: true, checkFalsy: true })
      .withMessage('Please provide a value for "username"'),
    check('password')
      .exists({ checkNull: true, checkFalsy: true })
      .withMessage('Please provide a value for "password"'),
  ], async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errorMessages = errors.array().map(error => error.msg);
        return res.status(400).json({errors: errorMessages})
    }
    const existingUser = await User.findOne({"username": req.body.username}).exec();

    if (existingUser) {
        const err = new Error("User already exists");
        err.status = 400;
        console.log({err});
        return next(err)
    }

    let user = req.body;
    user.password = bcryptjs.hashSync(user.password);
    User.create(user, (err) => {
        if (err) return next (err);
        return res.status(201).end();
    })

})




export default router; 