import React from "react";
import PropTypes from "prop-types";
import Card from "./shared/Card";
import Button from "./shared/Button";

function ReusableForm(props) {
  return (
    <Card>
      <form onSubmit={props.formSubmissionHandler}>
        <label>
          Beer Name:
          <input
            type="text"
            name="beerName"
            placeholder="Mirror Pond"
            className="input-group"
          />
        </label>
        <label>
          Brewery Name:
          <input
            type="text"
            name="breweryName"
            placeholder="Deschutes Brewery"
            className="input-group"
          />
        </label>
        <label>
          Beer Style:
          <input
            type="text"
            name="style"
            placeholder="Pale Ale"
            className="input-group"
          />
        </label>
        <label>
          Price($) / Pint:
          <input type="number" name="price" className="input-group" />
        </label>
        <label>
          ABV:
          <input type="number" name="alcohol" className="input-group" />
          <Button type="submit">{props.buttonText}</Button>
        </label>
      </form>
    </Card>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
