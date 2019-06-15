import * as express from "express";
import {ROLES} from "../../../common/roles";
import { User } from "../db";

export const router = express.Router();

router.post('/login', async (req, res) => {
    // @ts-ignore
    if(req.session.uid) {
        return res.redirect('/');
    }

    // @ts-ignore
    if (req.fields.login === process.env["ADMIN_LOGIN"] && req.fields.password === process.env["ADMIN_PASSWORD"]){
        // @ts-ignore
        req.session.auth = true;
        // @ts-ignore
        req.session.role = ROLES.ADMIN;
        // @ts-ignore
        req.session.uid = 0;

        return res.json({
            role: ROLES.ADMIN,
        });
    }

       // @ts-ignore
       User.findOne({ email: req.fields.login, password: req.fields.password })
           .then((user) => {
               // @ts-ignore
               req.session = {
                   auth: true,
                   role: ROLES.USER,
                   uid: user.id,
               };

               return res.json({
                   role: ROLES.USER
               });
           }).catch(() => {
               return res.end(401);
           });
});

router.get('/logout', (req, res) => {
    // @ts-ignore
    req.session.destroy();
    res.end();
});
