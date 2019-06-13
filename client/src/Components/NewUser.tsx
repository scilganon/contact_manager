import * as React from "react";
import { EditUserForm } from "./EditUserForm";

const submit = () => console.log('submit');

export const NewUser: React.FunctionComponent = () => (
    <EditUserForm onSubmit={submit} submitTitle="SignUp" />
);