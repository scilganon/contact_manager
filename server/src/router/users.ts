import * as express from "express";
import {usersTmp} from "../../../client/test/data";
import { User } from "../db";

export const router = express.Router();

router.get('/api/users', (req, res) => {
    User.find({}).then((users) => {
        res.json(users);
    });
});

router.get('/api//users/:id', (req, res) => {
    res.json(usersTmp[req.params.id]);
});
