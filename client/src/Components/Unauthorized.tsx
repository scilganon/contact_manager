import * as React from "react";
import { Tabs, Tab } from "react-bootstrap";
import { LoginForm } from "./LoginForm";
import { NewUser } from "./NewUser";

enum TabsList {
    LOGIN,
    REGISTER
}

export const Unauthorized: React.FunctionComponent = () => (
    <Tabs defaultActiveKey={TabsList.LOGIN} id="unuathorized-page">
        <Tab eventKey={TabsList.LOGIN} title="Login">
            <LoginForm />
        </Tab>
        <Tab eventKey={TabsList.REGISTER} title="Register">
            <NewUser />
        </Tab>
    </Tabs>
);