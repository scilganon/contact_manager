import * as React from "react";
import { EditUserForm } from "./EditUserForm";
import * as axios from "axios";
import { Modal, Alert, Badge } from "react-bootstrap";
import { AuthStore } from "../services/Auth";

const createUser = async (data: FormData): Promise<string> => {
    //@ts-ignore
    const { data: { password } } = await axios({
        method: 'post',
        url: '/api/users',
        data,
    });

    return password;
};

type NewUserState  = {
    password?: string;
};

const secToHide = 10;

export class NewUser extends React.Component<{}, NewUserState> {
    state: Partial<NewUserState> = {
        password: undefined,
    };

    submit = async (data: FormData) => {
        const password = await createUser(data);

        this.setState({password});

        setTimeout(() => {
            this.setState({ password: undefined });

            const loginData = new FormData();
            loginData.append('login', data.get('email'));
            loginData.append('password', password);

            AuthStore.login(loginData);
        }, secToHide * 1000);
    };

    render(){
        return (
            <div>
                <EditUserForm onSubmit={(data: FormData) => { this.submit(data); }} submitTitle="SignUp" />
                <Modal show={!!this.state.password}>
                    <Alert variant={"danger"}>It will be hidden in {secToHide} seconds.</Alert>
                    Your password is:  <Badge variant="secondary">{this.state.password}</Badge>
                </Modal>
            </div>
        );
    }
}