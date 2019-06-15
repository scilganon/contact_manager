import * as React from "react";
import { Form, Button } from "react-bootstrap";

export type LoginFormProps = {
    onSubmit: (data: FormData) => void;
};

export class LoginForm extends React.Component<LoginFormProps> {
    render() {
        return (
            <Form onSubmit={(e: any) => {
                e.preventDefault();
                this.props.onSubmit(new FormData(e.target));
            }}>
                <Form.Group>
                    <Form.Label>Login:</Form.Label>
                    <Form.Control type="text" name="login" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" name="password" />
                </Form.Group>
                <Button type="submit">SignIn</Button>
            </Form>
        );
    }
}