import * as express from "express";
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as expressSession from "express-session";
import { router as usersRoute } from "./router/users";
import { router as authRoute } from "./router/auth";
import * as formidableMiddleware from 'express-formidable';
import { config } from "./config";
import * as mongoose from "mongoose";

const App = express();

App.set('view engine', 'ejs');

App.use(formidableMiddleware());
App.use(bodyParser.json());
App.use(cookieParser());
App.use(expressSession({
    secret: process.env["SESSION_SECRET"],
    cookie: { maxAge: 60000 },
}));

App.use("/", authRoute);
App.use("/", usersRoute);

App.get(/.*/, (req, res) => {
    if(process.env["MODE"] === "development") {
        return res.render("index.ejs");
    }

    return res.status(500).end();
});

mongoose.connect(config.mongo.url, {useNewUrlParser: true, useFindAndModify: false}).then(() => {
    console.log('Mongo is online, connected.');

    App.listen(+process.env["PORT"], process.env["HOST"], () => console.log("Server is online, started successfully."));
}).catch((e) => {
    console.warn(e.message);
    console.warn('can not connect to mongodb');
});
