import * as React from "react";
import { LoginForm as Component} from "./LoginForm";
import * as axios from "axios";

const login = async (data: FormData) => {
    try {
        await axios({
            method: "post",
            url: "/login",
            data,
        });

        // window.location.pathname = '/';
    } catch (e) {
        console.error("You can not login due to happened err :(");
    }
};

export const LoginForm: React.FunctionComponent = () => (
    <Component onSubmit={login} />
);