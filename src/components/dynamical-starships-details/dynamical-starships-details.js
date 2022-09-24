import React from "react";
import { useParams } from "react-router-dom";
import {StarshipDetails} from "../sw-components";

const DynamicalStarshipsDetails = () => {
    const { id } = useParams();
    return (<StarshipDetails itemId={id}/>)
}

export default DynamicalStarshipsDetails;