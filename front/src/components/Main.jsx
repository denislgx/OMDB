import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeContainer from "../containers/HomeContainer";
import MoviesContainer from "../containers/MoviesContainer";
import SingleMovieContainer from "../containers/SingleMovieContainer";
import LoginContainer from "../containers/LoginContainer";
import RegisterContainer from "../containers/RegisterContainer";
import FavoritesContainer from "../containers/FavoritesContainer";

import { persistSession } from "../redux/actions/logUser";
import { connect } from "react-redux";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.persistSession();
  }
  render() {
    return (
      <Switch>
        <Route
          path="/movies/:movie"
          render={match => <MoviesContainer match={match} />}
        />
        <Route
          path="/singlemovie/:movieId"
          render={match => <SingleMovieContainer match={match} />}
        />
        <Route path="/register" component={RegisterContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route path="/favorites" component={FavoritesContainer} />
        <Route exact path="/" component={HomeContainer} />
      </Switch>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    persistSession: input => dispatch(persistSession(input))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Main);
