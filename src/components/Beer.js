import React from "react";
import PropTypes from "prop-types";
import Card from "./shared/Card";
import { FaTimes } from "react-icons/fa";

function Beer(props) {
  const { onClickingDelete } = props;

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
      <button className="close">
        <FaTimes color="purple" onClick={() => onClickingDelete(props.id)} />
      </button>
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
