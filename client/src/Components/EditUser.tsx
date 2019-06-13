import * as React from "react";
import { EditUserForm } from "./EditUserForm";
import { usersTmp } from "../../test/data";
import { User } from "../types/common";

const submit = () => console.log('submit:edit');
const load = (id: number) => new Promise<User>((resolve) => {
    setTimeout(() => resolve(usersTmp[id]), 1000);
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
        const user = await load(id);

        this.setState({ user });
    }

    render() {
        const { user } = this.state;

        if(!user) {
            return "Loading...";
        }

        return (
            <EditUserForm onSubmit={submit} formValues={user} />
        );
    }
}