import * as express from "express";
import {ROLES} from "../../../common/roles";
import { User } from "../db";

export const router = express.Router();

router.post('/login', (req, res) => {
    // @ts-ignore
    if(req.session.id) {
        return res.redirect('/');
    }

    // @ts-ignore
    if (req.fields.login === process.env["ADMIN_LOGIN"] && req.fields.password === process.env["ADMIN_PASSWORD"]){
        // @ts-ignore
        req.session = {
            auth: true,
            role: ROLES.ADMIN,
            id: 0,
        };

        return res.redirect('/');
    }

    // @ts-ignore
    User.findOne({ email: req.fields.login, password: req.fields.password })
        .then((user) => {

            // @ts-ignore
            req.session = {
                auth: true,
                role: ROLES.USER,
                id: user.id,
            };

            return res.redirect('/');
        });
});

router.get('/logout', (req, res) => {
    // @ts-ignore
    req.session.destroy();
    res.end();
});
