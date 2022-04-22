import React from "react";
import PropTypes from "prop-types";
import Card from "./shared/Card";

function BeerDetail(props) {
  const { beer, onClickingDelete, onSubtractingPint } = props;

  return (
    <Card>
      <h1>Beer Details</h1>
      <h3>
        {beer.beerName} - {beer.breweryName}
      </h3>
      <p>
        <em>Style: {beer.style}</em>
      </p>
      <p>
        <em>Alcohol: {beer.alcohol}%</em>
      </p>
      <p>
        <em>Price: ${beer.price}/pint</em>
      </p>
      <p>
        <em>Reamaining Volume: {beer.volume} pints</em>
      </p>
      <button className="btn btn-primary" onClick={props.onClickingEdit}>
        Update Beer
      </button>{" "}
      <button
        className="btn btn-primary"
        onClick={() => onClickingDelete(beer.id)}
      >
        Delete Beer
      </button>{" "}
      <button
        className="btn btn-primary"
        onClick={() => onSubtractingPint(beer.id)}
      >
        Subtract Pint
      </button>{" "}
      <hr />
    </Card>
  );
}

BeerDetail.propTypes = {
  beer: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
};

export default BeerDetail;
