import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input type="text" name="beerName" placeholder="Mirror Pond" />
        <input type="text" name="breweryName" placeholder="Deschutes Brewery" />
        <input type="text" name="style" placeholder="Pale Ale" />
        <input type="number" name="price" palceholder="6.50" />
        <input type="number" name="alcohol" palceholder="5.5%" />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
