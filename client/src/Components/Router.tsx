import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Stub } from "../Components/Stub";
import { Intro } from "../Components/Intro";
import { Unauthorized } from "../Components/Unauthorized";

const routes: Array<{ path: string, component: React.ComponentType, exact?: boolean }> = [
    {
        path: "/",
        component: Intro,
        exact: true,
    },
    {
        path: "/login",
        component: Unauthorized,
    },
    {
        path: "/info",
        component: Stub,
    },
    {
        path: "/users",
        component: Stub
    },
    {
        path: "/users/:user",
        component: Stub
    }
];

export const AppLayout = (
    <Router>
        <div className="app-layout">
            {routes.map(({ component, path, ...props }) => (
                <Route key={path} path={path} component={component} exact={props.exact} />
            ))}
        </div>
    </Router>
);