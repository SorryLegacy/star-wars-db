import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import {PeoplePage, PlanetsPage, StarshipsPage} from '../pages';

import SwapiService from "../../services/api-client";

import {SwapiServiceProvider} from "../swapi-service-context";

import './app.css';
import ErrorHandler from "../error-handler";



export default class App extends Component {

  swapiService = new SwapiService()

  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }


    return (
        <ErrorHandler>
          <SwapiServiceProvider value={this.swapiService}>
          <div className="stardb-app">
            <Header />
            <RandomPlanet/>
            <PeoplePage/>
            <PlanetsPage/>
            <StarshipsPage/>
          </div>
            </SwapiServiceProvider>
        </ErrorHandler>
    );
  }
}