import React, { Component } from "react";
import Row from "../row";
import {PersonList, PersonDetails} from "../sw-components";


export default class PeoplePage extends Component {
    state = {
        selectedItem: 2
    };

    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem });
    };

    render() {
        const { selectedItem } = this.state;
        return (
            <Row
                left={<PersonList onItemSelected={this.onItemSelected}/>}
                right={<PersonDetails itemId={selectedItem}/>}/>
        );
    }
}