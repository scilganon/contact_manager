import * as React from "react";
import { Form } from "react-bootstrap";
import { Address } from "../types/common";

export type AddressFormSectionProps = {
    required?: boolean,
    values?: Partial<Address>,
};

// @ts-ignore
export const AddressFormSection: React.FunctionComponent<AddressFormSectionProps> = ({ required, values = {} }) => (
    <fieldset>
        <legend>Address</legend>

        <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" value={values.address} name="address.address" />
        </Form.Group>
        <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Control type="text" value={values.city} name="address.city" />
        </Form.Group>
        <Form.Group>
            <Form.Label>Postal code</Form.Label>
            <Form.Control type="text" value={values.postalCode} name="address.postalCode" />
        </Form.Group>
        <Form.Group>
            <Form.Label>Country</Form.Label>
            <Form.Control type="text" value={values.country} name="address.country" />
        </Form.Group>
    </fieldset>
);