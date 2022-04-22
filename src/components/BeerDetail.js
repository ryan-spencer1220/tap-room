import React from "react";
import PropTypes from "prop-types";
import Card from "./shared/Card";
import Button from "./shared/Button";

function BeerDetail(props) {
  const { beer, onClickingDelete } = props;

  return (
    <Card>
      <h1>Beer Detail</h1>
      <h3>
        {beer.beerName} - {beer.breweryName}
      </h3>
      <p>
        <em>{beer.style}</em>
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
