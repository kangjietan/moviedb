import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import MediaQuery from 'react-responsive';

import Movie from './movies/Movie.jsx';
import MobileMovie from './movies/MobileMovie.jsx';

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

function List({ list, genres, component }) {
  let movies = Object.keys(list);

  return (
    <div>
      <MediaQuery minDeviceWidth={1140}>
        <div className="container watched-list-container">
          <WatchedListContainer>
            <WatchedHeadingContainer>
              <h2>{component === "watched" ? "Watched" : "To Watch"}</h2>
            </WatchedHeadingContainer>
            <ColumnContainer>
              <ImageColumn>Image</ImageColumn>
              <TitleColumn>Title</TitleColumn>
              <OverviewColumn>Overview</OverviewColumn>
              <GenresColumn>Genres</GenresColumn>
            </ColumnContainer>
            <WatchedContentContainer>
              {movies.map((id) => <Movie key={id} movie={list[id]} genres={genres} component={component} />)}
            </WatchedContentContainer>
          </WatchedListContainer>
        </div>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1139}>
        <div className="d-flex flex-row flex-wrap justify-content-between mobile-list-container">
          {movies.map((id) => <MobileMovie key={id} movie={list[id]} genres={genres} component={component} />)}
        </div>
      </MediaQuery>
    </div >
  );
}

List.propTypes = {
  watchedList: PropTypes.object.isRequired,
  genres: PropTypes.object.isRequired,
}

export default List;
