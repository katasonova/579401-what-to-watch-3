import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

const onCardTitleClick = () => {};

const App = (props) => {
  return <Main moviesTitles={props.moviesTitles} selectedMovie={props.selectedMovie} movieGenre={props.movieGenre} movieReleaseYears={props.movieReleaseYears} onCardTitleClick={onCardTitleClick}/>;
};

App.propTypes = {
  selectedMovie: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  movieReleaseYears: PropTypes.number.isRequired,
  moviesTitles: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
