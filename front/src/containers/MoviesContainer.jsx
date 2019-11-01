import React from "react";
import { connect } from "react-redux";
import Movies from "../components/Movies";

class MoviesContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Movies
          moviesFound={this.props.moviesFound}
          isLogged={this.props.isLogged}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    moviesFound: state.moviesReducer.moviesFound.Search
  };
};

export default connect(mapStateToProps)(MoviesContainer);
