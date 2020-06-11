import React, { Component } from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { updateSearch, searchAPI } from '../actions/searchActions.js';

const Form = styled.form`
`;

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    const { name } = target;
    const { value } = target;
    const { updateSearch } = this.props;

    this.setState({ [name]: value }, () => {
      const { search } = this.state;
      updateSearch(search);
    });
  }

  handleSearch() {
    this.props.searchAPI(this.state.search);
  }

  render() {
    return (
      <Form className="form-inline" >
        <input className="form-control mr-sm-2" name="search" placeholder="Search" value={this.state.search} onChange={this.handleChange} />
        <Link to={`/search?${this.props.searchInput}`}>
          <button className="btn btn-outline-info" onClick={this.handleSearch}>Search</button>
        </Link>
      </Form>
    );
  }
}

Search.propTypes = {
  updateSearch: PropTypes.func.isRequired,
  searchAPI: PropTypes.func.isRequired,
  searchInput: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  searchInput: state.search.searchInput
});

export default connect(mapStateToProps, { updateSearch, searchAPI })(Search);
