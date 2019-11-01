import React from "react";
import { connect } from "react-redux";
import Home from "../components/Home";
import { fetchMovies } from "../redux/actions/searchMovies";
import { doLogOut } from "../redux/actions/logUser";
import { fetchFavCr } from "../redux/actions/favorites";

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    this.setState({ input: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.fetchMovies(this.state.input);
    this.props.history.push(`/movies/${this.state.input}`);
  }

  render() {
    return (
      <Home
        handleInput={this.handleInput}
        handleSubmit={this.handleSubmit}
        isLogged={this.props.isLogged}
        doLogOut={this.props.logOut}
        fetchFavCr={this.props.fetchFavCr}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogged: state.logUserReducer.isLogged
  };
};

const mapDispatchToProps = dispatch => ({
  fetchMovies: input => dispatch(fetchMovies(input)),
  logOut: input => dispatch(doLogOut(input)),
  fetchFavCr: input => dispatch(fetchFavCr(input))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
