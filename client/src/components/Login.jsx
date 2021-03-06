import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { Link, Redirect } from "react-router-dom";

import { connect } from 'react-redux';
import { getUserToWatchList, getUserWatchedList } from '../actions/movieActions';
import { setUserIsLoggedIn } from '../actions/sessionActions';

import axios from 'axios';

import qs from 'qs';

import DissmissableError from './errors/DismissableError';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      errors: [],
      loggedIn: false,
    };

    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  handleFormChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleFormSubmission(event) {
    event.preventDefault();
    this.setState({ errors: [] }, this.loginUser);
  }

  loginUser() {
    const { username, password } = this.state;

    let errorList = [];

    if (!username || !password) {
      errorList.push({ msg: "All fields must be filled out" });
      this.setState({ errors: errorList });
    }

    axios.post('/user/login', qs.stringify(this.state))
      .then((response) => {
        if (response.data.errors) {
          this.setState({ errors: response.data.errors });
        }

        if (response.data.success) {
          this.setState({ loggedIn: true });
          this.props.setUserIsLoggedIn(true);
          this.props.getUserWatchedList();
          this.props.getUserToWatchList();
        }
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { username, password, errors, loggedIn } = this.state;
    let displayErrors = errors.map(error => <DissmissableError error={error} />);

    if (loggedIn || this.props.userLoggedIn) return <Redirect to="/" />;

    return (
      <div className="container mt-5">
        <div className="col-md-6 m-auto">
          <div className="card card-body">
            <h1 className="text-center mb-3"><i className="fas fa-sign-in-alt"></i> Login</h1>
            {displayErrors ? displayErrors : null}
            <form onSubmit={this.handleFormSubmission}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="name"
                  name="username"
                  className="form-control"
                  placeholder="Enter username"
                  maxLength="15"
                  required="required"
                  value={username}
                  onChange={this.handleFormChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter password"
                  maxLength="20"
                  required="required"
                  value={password}
                  onChange={this.handleFormChange}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">Login</button>
            </form>
            <p className="lead mt-4">No Account? <Link to="/register">Register</Link></p>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  getUserToWatchList: PropTypes.func.isRequired,
  getUserWatchedList: PropTypes.func.isRequired,
  setUserIsLoggedIn: PropTypes.func.isRequired,
  userLoggedIn: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  userLoggedIn: state.session.userLoggedIn,
})

const mapDispatchToProps = { getUserToWatchList, getUserWatchedList, setUserIsLoggedIn };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
