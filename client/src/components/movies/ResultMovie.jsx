import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TrailerModal from './modal/TrailerModal.jsx';

import Modal from 'react-modal';
import axios from 'axios';

import { connect } from 'react-redux';
import { addWatchedMovie, addToWatchMovie, removeWatchedMovie, removeToWatchMovie } from '../../actions/movieActions.js';

Modal.setAppElement('#app');

class ResultMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contentModalIsOpen: false,
      trailerModalIsOpen: false,
      watchedClicked: false,
      toWatchClicked: false,
      serverUrl: 'http://localhost:3000',
      movieTrailerUrl: '',
    }

    this.setModalIsOpen = this.setModalIsOpen.bind(this);
    this.handleAddMovies = this.handleAddMovies.bind(this);
    this.setWatchedClicked = this.setWatchedClicked.bind(this);
    this.setToWatchClicked = this.setToWatchClicked.bind(this);
  }

  componentDidMount() {
    this.checkMovieInList();
    this.getYouTubeTrailer();
  }

  checkMovieInList() {
    const { movie, watchList, toWatchList } = this.props;
    if (watchList[movie.id]) this.setState({ watchedClicked: true });
    if (toWatchList[movie.id]) this.setState({ toWatchClicked: true });
  }

  getYouTubeTrailer() {
    const { serverUrl } = this.state;
    const { movie } = this.props;
    axios.get(`${serverUrl}/tmbd/movie/${movie.id}/trailer/`)
      .then((response) => {
        this.setState({ movieTrailerUrl: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  setModalIsOpen(status, modal) {
    this.setState({ [`${modal}ModalIsOpen`]: status });
  }

  setWatchedClicked(status) {
    this.setState({ watchedClicked: status });
  }

  setToWatchClicked(status) {
    this.setState({ toWatchClicked: status });
  }

  handleAddMovies(event) {
    const { name } = event.target;
    const { watchedClicked, toWatchClicked, movieTrailerUrl } = this.state;
    const { addWatchedMovie, addToWatchMovie, removeWatchedMovie, removeToWatchMovie, movie } = this.props;

    if (name === 'watched') {
      if (watchedClicked) {
        removeWatchedMovie(movie);
        this.setWatchedClicked(false);
      } else {
        removeToWatchMovie(movie);
        addWatchedMovie(Object.assign(movie, { movieTrailerUrl }));
        this.setWatchedClicked(true);
        this.setToWatchClicked(false);
      }
    } else if (name === 'toWatch') {
      if (toWatchClicked) {
        removeToWatchMovie(movie);
        this.setToWatchClicked(false);
      } else {
        removeWatchedMovie(movie);
        addToWatchMovie(Object.assign(movie, { movieTrailerUrl }));
        this.setToWatchClicked(true);
        this.setWatchedClicked(false);
      }
    }
  }

  render() {
    const { watchedClicked, toWatchClicked, contentModalIsOpen, trailerModalIsOpen, movieTrailerUrl } = this.state;
    const { movie, genres } = this.props;

    const imageUrl = movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : "./no-image.jpg";
    let movieGenres = movie.genre_ids.map((id) => genres[id]);

    const contentModalStyle = {
      overlay: {
        position: 'fixed',
        top: '10vh',
        left: '15vw',
        right: '15vw',
        bottom: '10vh',
      },
      content: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        right: '0px',
        bottom: '0px',
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px',
        fontSize: '1.25rem'
      }
    };

    return (
      <div>
        <div className="card m-3" style={{ width: '18rem', cursor: 'pointer' }} onClick={() => this.setModalIsOpen(true, 'content')}>
          <img src={imageUrl} className="card-img-top" />
          <div className="card-body">
            <h4 className="card-title">{movie.title}</h4>
          </div>
        </div>
        <Modal isOpen={contentModalIsOpen} onRequestClose={() => this.setModalIsOpen(false, 'content')} style={contentModalStyle}>
          <button
            className="btn btn-link"
            style={{ position: 'absolute', top: '0px', right: '0px' }}
            onClick={() => this.setModalIsOpen(false, 'content')}>
            X
          </button>
          <div className="d-flex flex-row" id="modal-content">
            <div className="mr-2 modal-image" style={{ width: '40%' }}>
              <img src={imageUrl} className="img-fluid" />
            </div>
            <div className="modal-info" style={{ width: '55%' }}>
              <div><strong>Title: </strong>{movie.title}</div>
              <div><strong>Release date: </strong>{movie.release_date}</div>
              <div><strong>Genres: </strong>{movieGenres.join(', ') || '-'}</div>
              <div><strong>Voting: </strong>{`${movie.vote_average}/10, ${movie.vote_count} votes`}</div>
              <div>
                <button className="btn btn-link" onClick={() => this.setModalIsOpen(true, 'trailer')}>Play Trailer</button>
              </div>
              <div>
                <button
                  className={`btn ${watchedClicked ? "btn-success" : "btn-outline-primary"} mr-1 my-1`}
                  onClick={(e) => { this.handleAddMovies(e) }}
                  name="watched">
                  {watchedClicked ? "Added to Watched list" : "Add to Watched list"}
                </button>
                <button
                  className={`btn ${toWatchClicked ? "btn-success" : "btn-outline-primary"} mr-1 my-1`}
                  onClick={(e) => { this.handleAddMovies(e) }}
                  name="toWatch">
                  {toWatchClicked ? "Added to Watch list" : "Add to Watch list"}
                </button>
              </div>
              <div><strong>Overview: </strong>{movie.overview}</div>
            </div>
          </div>
        </Modal>
        <TrailerModal
          movieTrailerUrl={movieTrailerUrl}
          trailerModalIsOpen={trailerModalIsOpen}
          setTrailerModalIsOpen={() => { this.setModalIsOpen(false, 'trailer') }}
        />
      </div>
    );
  }
}

ResultMovie.propTypes = {
  movie: PropTypes.object.isRequired,
  addWatchedMovie: PropTypes.func.isRequired,
  addToWatchMovie: PropTypes.func.isRequired,
  removeWatchedMovie: PropTypes.func.isRequired,
  removeToWatchMovie: PropTypes.func.isRequired,
  watchList: PropTypes.object.isRequired,
  toWatchList: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  watchList: state.movie.watchedList,
  toWatchList: state.movie.toWatchList,
  genres: state.search.genres,
});

const mapDispatchToProps = { addWatchedMovie, addToWatchMovie, removeWatchedMovie, removeToWatchMovie };

export default connect(mapStateToProps, mapDispatchToProps)(ResultMovie);
