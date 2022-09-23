import { withSwapiService } from '../hoc-helper';
import ItemDetails, {Record} from "../item-details";
import React from "react";

const PlanetDetails = (props) => {

    return (
        <ItemDetails {...props}>

            <Record field="population" label="Population"/>
            <Record field="rotationPeriod" label="Rotation Period"/>
            <Record field="diameter" label="Diameter"/>
        </ItemDetails>
  );
};

const mapMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage
    }
}

export default withSwapiService(mapMethodToProps)(PlanetDetails);