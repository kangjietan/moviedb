import React, { Component } from "react";
import styled from 'styled-components';
import { connect } from 'react-redux';
import { updateSearch } from '../actions/searchActions.js';

const Form = styled.form`
`;

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    }

    this.handleChange = this.handleChange.bind(this);
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

  render() {
    return (
      <Form className="form-inline" >
        <input className="form-control mr-sm-2" name="search" placeholder="Search" value={this.state.search} onChange={this.handleChange} />
        <button className="btn btn-outline-info">Search</button>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  searchInput: state.search.searchInput
});

export default connect(mapStateToProps, { updateSearch })(Search);
