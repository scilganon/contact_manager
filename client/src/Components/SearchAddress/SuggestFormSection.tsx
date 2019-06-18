import * as React from "react";
import ReactGoogleMapLoader from "react-google-maps-loader"
import ReactGooglePlacesSuggest from "react-google-places-suggest"
import {Form, InputGroup} from "react-bootstrap";

export type SearchAddressFormSectionState = {
    search?: any;
    value?: any;
};

const GoogleMapConfig = {
    key: process.env.GOOGLE_API_KEY,
    libraries: "places,geocode",
};

export type SuggestFormSectionProps = {
    onChoose: (value: any) => void
};

export class SuggestFormSection extends React.Component<SuggestFormSectionProps, SearchAddressFormSectionState> {
    static defaultProps = {
        onChoose: (value: any) => {},
    };

    state: SearchAddressFormSectionState = {};

    handleInputChange(e: any) {
        this.setState({
            search: e.target.value,
            value: e.target.value
        });
    }

    handleSelectSuggest(suggest: { formatted_address: string }) {
        this.props.onChoose(suggest);
        this.setState({ search: "", value: suggest.formatted_address });
    }

    render() {
        const { search, value } = this.state;

        return (
            <ReactGoogleMapLoader
                params={GoogleMapConfig}
                render={(googleMaps: any) =>
                    googleMaps && (
                        <div>
                            <ReactGooglePlacesSuggest
                                autocompletionRequest={{input: search}}
                                googleMaps={googleMaps}
                                onSelectSuggest={this.handleSelectSuggest.bind(this)}
                            >
                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        placeholder="Search a location"
                                        onChange={this.handleInputChange.bind(this)}
                                    />
                                </Form.Group>
                            </ReactGooglePlacesSuggest>
                        </div>
                    )
                }
            />
        )
    }
}