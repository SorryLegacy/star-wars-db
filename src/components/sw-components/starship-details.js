import ItemDetails, {Record} from "../item-details";
import { withSwapiService } from "../hoc-helper";
import React from "react";

const StarshipDetails = (props) => {


  return (
      <ItemDetails {...props}>

        <Record field="model" label="Model"/>
        <Record field="length" label="Length"/>
        <Record field="costInCredits" label="Cost"/>
      </ItemDetails>

  );
};

const mapMethodToProps = (swapiService) => {
    return{
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage
    }
}

export default withSwapiService(StarshipDetails, mapMethodToProps);