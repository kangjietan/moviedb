import React, { Component } from 'react';

import { Link, Redirect } from "react-router-dom";

import axios from 'axios';

import qs from 'qs';

import DissmissableError from './errors/DismissableError';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      password2: '',
      errors: [],
      registered: false,
    };

    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFormRegistration = this.handleFormRegistration.bind(this);
  }

  handleFormChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  createAccount() {
    const { username, password, password2 } = this.state;

    let errorList = [];
    
    let alphanumeric = "[A-Za-z0-9]+";

    if (!username || !password || !password2) {
      errorList.push({ msg: "All fields must be filled out" });
    }

    if (!username.match(alphanumeric)) {
      errorList.push({ msg: "Username can contain only numbers and the alphabet" })
    }

    if (password !== password2) {
      errorList.push({ msg: "Passwords do not match" });
    }

    if (password.length < 6) {
      errorList.push({ msg: "Password should be at least 6 characters long" });
    }

    if (errorList.length > 0) {
      this.setState({ errors: errorList });
    } else {
      axios.post('/user/register', qs.stringify(this.state))
        .then((response) => {
          console.log('Response', response);
          if (response.data.errors) {
            this.setState({ errors: response.data.errors })
          } else {
            if (response.data.success) this.setState({ registered: true });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  handleFormRegistration(e) {
    e.preventDefault();
    this.setState({ errors: [] }, this.createAccount);
  }

  render() {
    const { username, password, password2, errors, registered } = this.state;
    let displayErrors = errors.map(error => <DissmissableError error={error} />);

    if (registered) {
      return <Redirect to="/Login" />
    }

    return (
      <div className="container mt-5">
        <div className="col-md-6 m-auto">
          <div className="card card-body">
            <h1 className="text-center mb-3">
              <i className="fas fa-user-plus"></i> Register
          </h1>
          <div>
            {displayErrors ? displayErrors : null}
          </div>
            <form onSubmit={this.handleFormRegistration}>
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
                  minLength="6"
                  maxLength="20"
                  required="required"
                  value={password}
                  onChange={this.handleFormChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password2">Confirm Password</label>
                <input
                  type="password"
                  name="password2"
                  className="form-control"
                  placeholder="Confirm password"
                  minLength="4"
                  maxLength="20"
                  required="required"
                  value={password2}
                  onChange={this.handleFormChange}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">Register</button>
            </form>
            <p className="lead mt-4">Have An Account? <Link to="/login">Login</Link></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
