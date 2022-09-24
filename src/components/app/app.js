import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import ErrorHandler from "../error-handler";
import {PeoplePage, PlanetsPage, StarshipsPage} from '../pages';
import DynamicalStarshipsDetails from "../dynamical-starships-details";

import { BrowserRouter , Routes, Route } from "react-router-dom";


import SwapiService from "../../services/api-client";

import {SwapiServiceProvider} from "../swapi-service-context";

import './app.css';



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
            <BrowserRouter>
                <div className="stardb-app">
                  <Header />
                  <RandomPlanet/>
                     <Routes>
                          <Route path="/" element={<h2>Welcome to StarDB</h2>}/>
                          <Route path="/people" element={<PeoplePage/>}/>
                          <Route path="/planets" element={<PlanetsPage/>}/>
                          <Route path="/starships" element={<StarshipsPage/>}/>
                          <Route path="/starships/:id" element={<DynamicalStarshipsDetails/>}/>
                     </Routes>
                </div>
              </BrowserRouter>
            </SwapiServiceProvider>
        </ErrorHandler>
    );
  }
}