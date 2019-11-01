import React from "react";
import { connect } from "react-redux";
import SingleMovie from "../components/SingleMovie";
import { fetchSingleMovie } from "../redux/actions/searchSingleMovie";
import { addFavCr } from "../redux/actions/favorites";

class SingleMovieContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSingleMovie(this.props.match.match.params.movieId);
  }

  render() {
    return (
      <div>
        <SingleMovie
          singleMovie={this.props.singleMovie}
          isLogged={this.props.isLogged}
          addFavCr={this.props.addFavCr}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    singleMovie: state.moviesReducer.singleMovie,
    isLogged: state.logUserReducer.isLogged
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleMovie: input => dispatch(fetchSingleMovie(input)),
    addFavCr: input => dispatch(addFavCr(input))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleMovieContainer);
