import React from "react";
import NewBeerForm from "./NewBeerForm";
import TapList from "./TapList";
import BeerDetail from "./BeerDetail";
import EditBeerForm from "./EditBeerForm";
import PropTypes from "prop-types";

class TapControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainTapList: [],
      selectedBeer: null,
      editing: false,
    };
  }

  feedbackList({ feedback }) {
    console.log(feedback);
  }

  handleChangingSelectedBeer = (id) => {
    const selectedBeer = this.state.mainTapList.filter(
      (beer) => beer.id === id
    )[0];
    this.setState({ selectedBeer: selectedBeer });
  };

  handleClick = () => {
    if (this.state.selectedBeer != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedBeer: null,
        editing: false,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleEditingBeerInList = (beerToEdit) => {
    const editedTapList = this.state.mainTapList
      .filter((beer) => beer.id !== this.state.selectedBeer.id)
      .concat(beerToEdit);
    this.setState({
      mainTapList: editedTapList,
      editing: false,
      selectedBeer: null,
    });
  };

  handleDeletingBeer = (id) => {
    const newTapList = this.state.mainTapList.filter((beer) => beer.id !== id);
    this.setState({
      mainTapList: newTapList,
      selectedBeer: null,
    });
  };

  handleAddingNewBeerToList = (newBeer) => {
    const newTapList = this.state.mainTapList.concat(newBeer);
    this.setState({
      mainTapList: newTapList,
      formVisibleOnPage: false,
    });
  };

  handlePintSubtract = () => {
    const editedTapList = this.state.mainTapList.filter(
      (beer) => (beer.volume -= 1)
    );
    this.setState({
      mainTapList: editedTapList,
      editing: false,
    });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = (
        <EditBeerForm
          beer={this.state.selectedBeer}
          onEditBeer={this.handleEditingBeerInList}
        />
      );
      buttonText = "Return to Taplist";
    } else if (this.state.selectedBeer != null) {
      currentlyVisibleState = (
        <BeerDetail
          beer={this.state.selectedBeer}
          onClickingDelete={this.handleDeletingBeer}
          onClickingEdit={this.handleEditClick}
          onSubtractingPint={this.handlePintSubtract}
        />
      );
      buttonText = "Return to Taplist";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewBeerForm onNewBeerCreation={this.handleAddingNewBeerToList} />
      );
      buttonText = "Return to Taplist";
    } else {
      currentlyVisibleState = (
        <TapList
          tapList={this.state.mainTapList}
          onBeerSelection={this.handleChangingSelectedBeer}
          feedback={this.feedbackList}
        />
      );
      buttonText = "Add Beer";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <div className="btn container">
          <div className="vertical-center">
            <button className="btn btn-secondary" onClick={this.handleClick}>
              <div className="row">{buttonText}</div>
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

EditBeerForm.propTypes = {
  beer: PropTypes.object,
  onEditBeer: PropTypes.func,
};

export default TapControl;
