import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

const App = (props) => {
  return <Main movieTitle={props.movieTitle} selectedMovie={props.selectedMovie} movieGenre={props.movieGenre} movieReleaseYears={props.movieReleaseYears}/>;
};

App.propTypes = {
  selectedMovie: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  movieReleaseYears: PropTypes.number.isRequired,
  movieTitle: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
