import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

const App = ({selectedMovie, movieGenre, movieReleaseYears, films}) => {
  return <Main selectedMovie={selectedMovie} movieGenre={movieGenre} movieReleaseYears={movieReleaseYears} films={films} onCardTitleClick={()=>{}} />;
};

App.propTypes = {
  selectedMovie: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  movieReleaseYears: PropTypes.number.isRequired,
  films: PropTypes.array.isRequired,
};

export default App;
