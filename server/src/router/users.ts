import * as express from "express";
import {usersTmp} from "../../../client/test/data";

export const router = express.Router();

router.get('/api/users', (req, res) => {
    res.json(usersTmp);
});

router.get('/api//users/:id', (req, res) => {
    res.json(usersTmp[req.params.id]);
});
