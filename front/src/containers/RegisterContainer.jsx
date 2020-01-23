import React from "react";
import Register from "../components/Register";
import { connect } from "react-redux";
import { doRegister } from "../redux/actions/register";

class RegisterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleInputEmail = this.handleInputEmail.bind(this);
    this.handleInputPass = this.handleInputPass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputEmail(event) {
    this.setState({ email: event.target.value });
  }
  handleInputPass(event) {
    this.setState({ password: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.doRegister(this.state);
    this.props.history.push("/login");
  }
  render() {
    return (
      <Register
        handleInputEmail={this.handleInputEmail}
        handleInputPass={this.handleInputPass}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    doRegister: input => dispatch(doRegister(input))
  };
};

export default connect(null, mapDispatchToProps)(RegisterContainer);
