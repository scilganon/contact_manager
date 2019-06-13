import * as React from "react";
import { Form, Button } from "react-bootstrap";
import { AddressFormSection } from "./AddressFormSection";
import { User } from "../types/common";

export type EditUserFormProps = {
    onSubmit: () => void;
    submitTitle?: string;
    formValues?: User;
};

export class EditUserForm extends React.Component<EditUserFormProps> {
    static defaultProps: Partial<EditUserFormProps> = {
        submitTitle: "edit",
    };

    render() {
        const { submitTitle, onSubmit, formValues } = this.props;

        return (
            <Form onSubmit={onSubmit}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={formValues.name} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" value={formValues.lastName} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="phone" value={formValues.phoneNumber} />
                </Form.Group>

                <AddressFormSection values={formValues.address} />

                <Form.Group>
                    <Form.Label>Website</Form.Label>
                    <Form.Control type="url" value={formValues.website} />
                </Form.Group>
                <Button type="submit">{submitTitle}</Button>
            </Form>
        );
    }
}