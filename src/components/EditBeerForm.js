import React from "react";
import ReusableForm from "./ReusableForm";

function EditBeerForm(props) {
  const { beer } = props;

  function handleEditBeerFormSubmission(event) {
    event.preventDefault();
    props.onEditBeer({
      beerName: event.target.beerName.value,
      breweryName: event.target.breweryName.value,
      style: event.target.style.value,
      price: event.target.price.value,
      alcohol: event.target.alcohol.value,
      id: beer.id,
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditBeerFormSubmission}
        buttonText="Update Beer"
      />
    </React.Fragment>
  );
}

export default EditBeerForm;
