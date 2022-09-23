import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import {PersonList} from "../sw-components";
import PersonDetails from "../sw-components/person-details";

import SwapiService from "../../services/api-client";

import {SwapiServiceProvider} from "../swapi-service-context";

import './app.css';
import ErrorHandler from "../error-handler";



export default class App extends Component {

  swapiService = new SwapiService()

  state = {
    showRandomPlanet: true,
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;

    return (
        <ErrorHandler>
          <SwapiServiceProvider value={this.swapiService}>
          <div className="stardb-app">
            <Header />
            { planet }
            <PersonList />
            <PersonDetails itemId={2}/>
          </div>
            </SwapiServiceProvider>
        </ErrorHandler>
    );
  }
}