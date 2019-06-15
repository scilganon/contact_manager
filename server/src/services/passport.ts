import * as pass from "passport";
import { Strategy } from "passport-local";
import {ROLES} from "../../../common/roles";

pass.use(new Strategy((username, password, done) => {
    if(username === process.env['ADMIN_LOGIN'] && password === process.env["ADMIN_PASSWORD"]) {
        return done(null, {
            auth: true,
            role: ROLES.ADMIN,
            id: 0,
        });
    }

    return done(null, false, {
        message: "Wrong username or password",
    });
}));

export const passport = pass;