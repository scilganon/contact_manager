import * as React from "react";
import { Form, Button } from "react-bootstrap";
import { SearchableAddressFormSection } from "./SearchAddress";
import { User } from "../types/common";

export type EditUserFormProps = {
    onSubmit: (data: FormData) => void;
    submitTitle?: string;
    formValues?: Partial<User>;
};

export class EditUserForm extends React.Component<EditUserFormProps> {
    static defaultProps: Partial<EditUserFormProps> = {
        submitTitle: "edit",
        formValues: {},
    };

    render() {
        const { submitTitle, onSubmit, formValues } = this.props;

        return (
            <Form onSubmit={(e: any) => {
                e.preventDefault();
                onSubmit(new FormData(e.target));
            }}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" defaultValue={formValues.name} name="name" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" defaultValue={formValues.lastName} name="lastName" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="phone" defaultValue={formValues.phoneNumber} name="phoneNumber" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" defaultValue={formValues.email} name="email" />
                </Form.Group>

                <SearchableAddressFormSection values={formValues.address} />

                <Form.Group>
                    <Form.Label>Website</Form.Label>
                    <Form.Control type="url" defaultValue={formValues.website} name="website" />
                </Form.Group>
                <Button type="submit">{submitTitle}</Button>
            </Form>
        );
    }
}