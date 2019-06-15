import * as React from "react";
import { EditUserForm } from "./EditUserForm";
import { User } from "../types/common";
import * as axios from "axios";

//@ts-ignore
const editUser = (id: number, data: FormData) => axios({
    method: 'post',
    url: `/api/users/${id}`,
    data,
});

//@ts-ignore
const load = (id: number) => axios({
    method: 'get',
    url: `/api/users/${id}`,
});

export type EditUserProps = {
    load: () => Promise<User>;
    match: {
        params: {
            id: number,
        }
    }
};

type EditUserState = {
    user?: User;
};

export class EditUser extends React.Component<EditUserProps, EditUserState> {

    state: EditUserState = {
        user: undefined,
    };

    componentDidMount(): void {
        this.props.match.params.id && this.loadUser(this.props.match.params.id);
    }

    async loadUser(id: number) {
        const { data } = await load(id);

        this.setState({ user: data });
    }

    submit = async (data: FormData) => {
        editUser(this.props.match.params.id, data);
    };

    render() {
        const { user } = this.state;

        if(!user) {
            return "Loading...";
        }

        return (
            <EditUserForm onSubmit={this.submit} formValues={user} />
        );
    }
}