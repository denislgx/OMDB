import React from "react";
import { connect } from "react-redux";
import Favorites from "../components/Favorites";
import { removeFavCr } from "../redux/actions/favorites";

class FavoritesContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Favorites
        favorites={this.props.favorites}
        removeFavCr={this.props.removeFavCr}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    favorites: state.favoritesReducer.favorites
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeFavCr: input => dispatch(removeFavCr(input))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoritesContainer);
