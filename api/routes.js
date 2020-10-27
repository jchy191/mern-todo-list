import express from 'express';
import {User} from './models.js';

const router = express.Router();

router.get('/', (req, res) => {
    console.log("hi");
})

router.post('/', (req, res) => {
    console.log(req.body)
    let user = new User (req.body);
    user.save((err, user) => {
        if (err) return next (err);
        res.status(201);
        res.json(user);
    })
})

export default router; 