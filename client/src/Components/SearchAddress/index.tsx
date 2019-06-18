import * as React from "react";
import { AddressFormSection, AddressFormSectionProps } from "../AddressFormSection";
import { SuggestFormSection } from "./SuggestFormSection";
import isEmpty from "lodash/isEmpty";
import { Tabs, Tab } from "react-bootstrap";

enum STEPS {
    SEARCH,
    SHOW,
}

export type SearchAddressFormSectionState = {
    tab: STEPS;
    selected?: Object,
};

export class SearchableAddressFormSection extends React.Component<AddressFormSectionProps, SearchAddressFormSectionState> {
    state: SearchAddressFormSectionState = {
        tab: STEPS.SHOW,
    };

    componentWillUpdate(nextProps: Readonly<AddressFormSectionProps>, nextState: Readonly<SearchAddressFormSectionState>, nextContext: any): void {
        if(nextProps.values !== this.props.values || !isEmpty(this.props.values)){
            this.setState({ tab: STEPS.SHOW });
        }
    }

    handleChoose = (selected: any) => {
        this.setState({ selected, tab: STEPS.SHOW });
    };

    render() {
        return (
            <Tabs activeKey={this.state.tab} onSelect={(tab: STEPS) => this.setState({ tab })} id="uncontrolled-tab-example">
                <Tab eventKey={STEPS.SEARCH} title="Search">
                    <SuggestFormSection onChoose={this.handleChoose} />
                </Tab>
                <Tab eventKey={STEPS.SHOW} title="Manual">
                    <AddressFormSection values={this.props.values} legend={null} />
                </Tab>
            </Tabs>
        );
    }
}