import * as express from "express";
import { User } from "../db";
import { generate } from 'generate-password';

export const router = express.Router();

router.get('/api/users/:id?', (req, res) => {
    if(req.params.id) {
        User.findById(req.params.id).then((user) => {
            return res.json(user);
        });
        return;
    }

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
            city: req.fields.address_city,
            address: req.fields.address_address,
            postalCode: req.fields.address_postalCode,
            country: req.fields.address_country,
        },
        password,
    });

    await newUser.save();

    return res.json({
        password,
    });
});

router.post('/api/users/:id', async (req: any, res) => {
    try {
        const result = await User.update({
            _id: req.params.id,
        }, {
            name: req.fields.name,
            lastName: req.fields.lastName,
            email: req.fields.email,
            website: req.fields.website,
            phoneNumber: req.fields.phoneNumber,
            address: {
                city: req.fields.address_city,
                address: req.fields.address_address,
                postalCode: req.fields.address_postalCode,
                country: req.fields.address_country,
            },
        }, {
            multi:true
        });

        const user = await User.findById(req.params.id);

        return res.status(200).end();
    } catch(e) {
        console.warn(e.message);
        res.status(403).end();
    }
});

