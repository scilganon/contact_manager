import * as React from "react";
import { Form, Button } from "react-bootstrap";
import { AddressFormSection } from "./AddressFormSection";

export class RegisterForm extends React.Component {
    render() {
        return (
            <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="phone" />
                </Form.Group>

                <AddressFormSection/>

                <Form.Group>
                    <Form.Label>Website</Form.Label>
                    <Form.Control type="url" />
                </Form.Group>
                <Button type="submit">SignUp</Button>
            </Form>
        );
    }
}