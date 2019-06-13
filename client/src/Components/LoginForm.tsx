import * as React from "react";
import { Form, Button } from "react-bootstrap";

export class LoginForm extends React.Component {
    render() {
        return (
            <Form>
                <Form.Group>
                    <Form.Label>Login:</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" />
                </Form.Group>
                <Button type="submit">SignIn</Button>
            </Form>
        );
    }
}