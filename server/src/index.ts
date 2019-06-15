import * as express from "express";
import * as passport from "passport";
import { Strategy } from "passport-local";
import { usersTmp } from "../../client/test/data";
import * as dotenv from "dotenv";
import { ROLES } from "../../common/roles";
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";

dotenv.config();

const App = express();

passport.use(new Strategy((username, password, done) => {
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

App.set('view engine', 'ejs');

App.use(bodyParser.urlencoded({ extended: false }));
App.use(bodyParser.json());
App.use(cookieParser());
App.use(passport.initialize());
App.use(passport.session());

App.post('/login',
    passport.authenticate('local'),
    (req, res) => {
        // If this function gets called, authentication was successful.
        // `req.user` contains the authenticated user.
        res.redirect('/users/' + req.user.username);
    });

App.get('/api/users', (req, res) => {
    res.json(usersTmp);
});

App.get('/api//users/:id', (req, res) => {
    res.json(usersTmp[req.params.id]);
});

App.get(/.*/, (req, res) => {
    if(process.env["MODE"] === "development") {
        return res.render("index.ejs");
    }

    return res.status(500).end();
});

App.listen(process.env["PORT"], () => console.log("Server started successfully."));
