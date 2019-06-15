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
            <Form.Control type="text" defaultValue={values.address} name="address_address" />
        </Form.Group>
        <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Control type="text" defaultValue={values.city} name="address_city" />
        </Form.Group>
        <Form.Group>
            <Form.Label>Postal code</Form.Label>
            <Form.Control type="text" defaultValue={values.postalCode} name="address_postalCode" />
        </Form.Group>
        <Form.Group>
            <Form.Label>Country</Form.Label>
            <Form.Control type="text" defaultValue={values.country} name="address_country" />
        </Form.Group>
    </fieldset>
);