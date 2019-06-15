import * as express from "express";
import {usersTmp} from "../../../client/test/data";
import { User } from "../db";
import { generate } from 'generate-password';

export const router = express.Router();

router.get('/api/users', (req, res) => {
    User.find({}).then((users) => {
        res.json(users);
    });
});

router.post('/api/users/', async (req: any, res) => {
    const password = generate({
        length: 4,
        numbers: true,
    });

    const newUser = new User({
        name: req.fields.name,
        lastName: req.fields.lastName,
        email: req.fields.email,
        website: req.fields.website,
        phoneNumber: req.fields.phoneNumber,
        address: {
            city: req.fields.city,
            address: req.fields.address,
            postalCode: req.fields.postalCode,
            country: req.fields.country,
        },
        password,
    });

    await newUser.save();

    return res.json({
        password,
    });
});

router.get('/api//users/:id', (req, res) => {
    res.json(usersTmp[req.params.id]);
});
