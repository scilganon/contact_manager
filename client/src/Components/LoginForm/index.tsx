import * as React from "react";
import { LoginForm as Component} from "./LoginForm";
import { AuthStore } from "../../services/Auth";

const login = async (data: FormData) => AuthStore.login(data);

export const LoginForm: React.FunctionComponent = () => (
    <Component onSubmit={login} />
);