import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewBeerForm(props) {
  function handleNewBeerFormSubmission(event) {
    event.preventDefault();
    props.onNewBeerCreation({
      beerName: event.target.beerName.value,
      breweryName: event.target.breweryName.value,
      style: event.target.style.value,
      price: event.target.price.value,
      alcohol: event.target.alcohol.value,
      volume: 124,
      id: v4(),
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewBeerFormSubmission}
        buttonText="Add Beer"
      />
    </React.Fragment>
  );
}

NewBeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func,
};

export default NewBeerForm;
