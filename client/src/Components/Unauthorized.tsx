import * as React from "react";
import { Tabs, Tab } from "react-bootstrap";
import { Stub } from "./Stub";
import { LoginForm } from "./LoginForm";

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
            <Stub/>
        </Tab>
    </Tabs>
);