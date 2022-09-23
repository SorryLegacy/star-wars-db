import React from "react";
import ItemList from "../item-list";
import { withData } from '../hoc-helper';
import SwapiService from "../../services/api-client";

const swapiService = new SwapiService()

const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = swapiService;

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (<Wrapped {...props}>
            {fn}
        </Wrapped>)
    }
};

const RenderName = ({name}) => <span>{name}</span> ;

const PersonList = withData(
                    withChildFunction(
                    ItemList,
                    RenderName), getAllPeople);

const PlanetList = withData(
                    withChildFunction(
                    ItemList,
                    RenderName), getAllPlanets);

const StarshipList = withData(
                    withChildFunction(
                    ItemList,
                    RenderName), getAllStarships);


export {
    PersonList,
    PlanetList,
    StarshipList
}