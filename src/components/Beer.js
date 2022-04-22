import React from "react";
import PropTypes from "prop-types";
import Card from "./shared/Card";

function Beer(props) {
  return (
    <Card>
      <div onClick={() => props.whenBeerClicked(props.id)}>
        <h3>
          {props.beerName} - {props.style}
        </h3>
        <p>
          <em>{props.breweryName}</em>
        </p>
        <hr />
        <p>Click For Details!</p>
      </div>
    </Card>
  );
}

Beer.propTypes = {
  beerName: PropTypes.string,
  breweryName: PropTypes.string,
  style: PropTypes.string,
  id: PropTypes.string,
  whenBeerClicked: PropTypes.func,
};

export default Beer;
