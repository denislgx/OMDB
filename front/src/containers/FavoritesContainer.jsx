import React from "react";
import { connect } from "react-redux";
import Favorites from "../components/Favorites";
import { removeFavCr, fetchFavCr } from "../redux/actions/favorites";

class FavoritesContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFavCr();
  }

  render() {
    return (
      <Favorites
        favorites={this.props.favorites}
        removeFavCr={this.props.removeFavCr}
        history={this.props.history}
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
    removeFavCr: input => dispatch(removeFavCr(input)),
    fetchFavCr: () => dispatch(fetchFavCr())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer);
