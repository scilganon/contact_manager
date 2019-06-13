import * as React from "react";
import { Table, Dropdown } from "react-bootstrap";
import { User } from "../../types/common";
import { usersTmp } from "../../../test/data";

export type UserListProps = {
    load: () => Promise<User[]>,
};

type UserListState = {
    users: User[];
};

export class UserList extends React.Component<UserListProps, UserListState> {

    static defaultProps: UserListProps = {
        load: () => Promise.resolve(usersTmp),
    };

    state: UserListState = {
        users: [],
    };

    componentDidMount(): void {
        this.loadUsers();
    }

    async loadUsers() {
        const users = await this.props.load();
        this.setState({ users });
    }

    render(){
        const { users } = this.state;

        return (
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>name</th>
                    <th>email</th>
                    <th />
                </tr>
                </thead>
                <tbody>
                {users.map(({ name, email, id }, index) => (
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id={"user-actions-" + index}>
                                    Actions
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href={`/users/${id}`}>Edit</Dropdown.Item>
                                    <Dropdown.Item>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        );
    }
}