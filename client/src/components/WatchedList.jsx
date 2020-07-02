import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import WatchedMovie from './movies/WatchedMovie.jsx';

import { connect } from 'react-redux';

const WatchedListContainer = styled.div`
  border: 0.5px solid;
  padding: 0px;
  margin-top: 10px;
`;

const WatchedHeadingContainer = styled.div`
  text-align: center;
  background-color: #01b4e4;
  border-bottom: 0.5px solid;
`;

const WatchedContentContainer = styled.div`
  border-left: 5px solid #01b4e4;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 0.5px solid;
  overflow: auto;
`;

const ImageColumn = styled.div`
  width: 10%;
  border-right: 0.5px solid;
  border-left: 0.5px solid;
  text-align: center;
  margin: 2px 10px;
  overflow: hidden;
`;

const TitleColumn = styled.div`
  width: 25%;
  border-right: 0.5px solid;
  border-left: 0.5px solid;
  text-align: center;
  margin: 2px 10px;
`;

const OverviewColumn = styled.div`
  width: 40%;
  border-right: 0.5px solid;
  border-left: 0.5px solid;
  text-align: center;
  margin: 2px 10px;
`;

const GenresColumn = styled.div`
  width: 25%;
  border-right: 0.5px solid;
  border-left: 0.5px solid;
  text-align: center;
  margin: 2px 10px;
`;

function WatchedList({ watchedList }) {
  let movies = Object.keys(watchedList);
  return (
    <WatchedListContainer className="container">
      <WatchedHeadingContainer>
        <h2>Watched</h2>
      </WatchedHeadingContainer>
      <ColumnContainer>
        <ImageColumn>Image</ImageColumn>
        <TitleColumn>Title</TitleColumn>
        <OverviewColumn>Overview</OverviewColumn>
        <GenresColumn>Genres</GenresColumn>
      </ColumnContainer>
      <WatchedContentContainer>
        {movies.map((id) => <WatchedMovie key={id} movie={watchedList[id]} />)}
      </WatchedContentContainer>
    </WatchedListContainer>
  );
}

const mapStateToProps = state => ({
  watchedList: state.movie.watchedList
});

export default connect(mapStateToProps, null)(WatchedList);
