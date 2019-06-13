import * as React from "react";
import { Form } from "react-bootstrap";

export type AddressFormSectionProps = {
    required?: boolean,
};

export const AddressFormSection: React.FunctionComponent<AddressFormSectionProps> = ({ required }) => (
    <fieldset>
        <legend>Address</legend>

        <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" />
        </Form.Group>
        <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Control type="text" />
        </Form.Group>
        <Form.Group>
            <Form.Label>Postal code</Form.Label>
            <Form.Control type="text" />
        </Form.Group>
        <Form.Group>
            <Form.Label>Country</Form.Label>
            <Form.Control type="text" />
        </Form.Group>
    </fieldset>
);