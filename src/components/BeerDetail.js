import React from "react";
import PropTypes from "prop-types";

function BeerDetail(props) {
  const { beer, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Beer Detail</h1>
      <h3>
        {beer.beerName} - {beer.breweryName}
      </h3>
      <p>
        <em>{beer.style}</em>
      </p>
      <button onClick={props.onClickingEdit}>Update Beer</button>{" "}
      <button onClick={() => onClickingDelete(beer.id)}>Delete Beer</button>{" "}
      <hr />
    </React.Fragment>
  );
}

BeerDetail.propTypes = {
  beer: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
};

export default BeerDetail;
