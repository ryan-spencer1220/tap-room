import React from "react";
import Beer from "./Beer";
import PropTypes from "prop-types";

function TapList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.tapList.map((beer) => (
        <Beer
          whenBeerClicked={props.onBeerSelection}
          beerName={beer.beerName}
          breweryName={beer.breweryName}
          style={beer.style}
          price={beer.price}
          alcohol={beer.alcohol}
          id={beer.id}
          key={beer.id}
        />
      ))}
    </React.Fragment>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array,
  onBeerSelection: PropTypes.func,
};

export default TapList;
