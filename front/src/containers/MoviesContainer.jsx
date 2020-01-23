import React from "react";
import { connect } from "react-redux";
import Movies from "../components/Movies";
import { fetchMovies } from "../redux/actions/searchMovies";

class MoviesContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMovies(this.props.match.match.params.movie);
  }

  render() {
    // console.log("EL OBJ MATCH: ", this.props.match.match.params.movie);
    console.log("!!!!!!!!!!@@@@@", this.props.user);
    return (
      <div>
        <Movies
          moviesFound={this.props.moviesFound}
          isLogged={this.props.isLogged}
          history={this.props.match.history}
          user={this.props.user}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    moviesFound: state.moviesReducer.moviesFound.Search,
    user: state.logUserReducer.isLogged
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMovies: input => dispatch(fetchMovies(input))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
