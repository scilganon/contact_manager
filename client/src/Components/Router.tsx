import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Stub } from "./Stub";
import { Intro } from "./Intro";
import { Unauthorized } from "./Unauthorized";
import { UserList } from "./UserList"
import {EditUser } from "./EditUser";

export const AppLayout = (
    <Router>
        <div className="app-layout">
            <Route path="/" exact component={Intro} />
            <Route path="/login" component={Unauthorized} />
            <Route path="/info" component={Stub} />
            <Route path="/users" exact component={UserList} />
            <Route path="/users/:id" exact component={EditUser} />
        </div>
    </Router>
);