import React, { Component } from 'react';

import ItemList from '../item-list/item-list';
import ItemDetails, {Record} from '../item-details/item-details';
import ErrorIndicator from '../error-indicator/error-indicator';

import './people-page.css';
import SwapiService from "../../services/api-client";
import Row from "../row";
import ErrorHandler from "../error-handler";


export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 3,
    hasError: false
  };

  componentDidCatch(error, info) {

    this.setState({
      hasError: true
    });
  }

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const itemList = (<ItemList
            onItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllPeople}>
             {(i) => (
                 `${i.name} (${i.birthYear})`
             )}
            </ItemList>);

    const personDetails = (<ItemDetails
        itemId={this.state.selectedPerson}
        getData={this.swapiService.getPerson}
        getImageUrl={this.swapiService.getPersonImage} >

        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
        <Record field="birthYear" label="Birth year" />
      </ItemDetails>
      )

    return (
        <ErrorHandler>
            <Row left={itemList} right={personDetails}/>
        </ErrorHandler>
    );
  }
}