import React from "react";
import PropTypes from "prop-types";

function Beer(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenBeerClicked(props.id)}>
        <h3>
          {props.beerName} - {props.breweryName}
        </h3>
        <p>
          <em>{props.style}</em>
        </p>
        <hr />
      </div>
    </React.Fragment>
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
