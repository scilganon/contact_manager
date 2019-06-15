import * as express from "express";
import * as dotenv from "dotenv";
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as expressSession from "express-session";
import { router as usersRoute } from "./router/users";
import { router as authRoute } from "./router/auth";
import { passport } from "./services/passport";

dotenv.config();

const App = express();

App.set('view engine', 'ejs');

App.use(bodyParser.urlencoded({ extended: false }));
App.use(bodyParser.json());
App.use(cookieParser());
App.use(expressSession({
    secret: process.env["SESSION_SECRET"]
}));
App.use(passport.initialize());
App.use(passport.session());

App.use("/", authRoute);
App.use("/api/users", usersRoute);

App.get(/.*/, (req, res) => {
    if(process.env["MODE"] === "development") {
        return res.render("index.ejs");
    }

    return res.status(500).end();
});

App.listen(+process.env["PORT"], process.env["HOST"], () => console.log("Server started successfully."));
