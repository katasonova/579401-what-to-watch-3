import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const movieTitle = `Harry Potter`;
const movieTitles = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];
const movieGenre = `Fantasy`;
const movieReleaseYears = 2020;

ReactDOM.render(<App
  movieTitle={movieTitles} selectedMovie={movieTitle} movieGenre={movieGenre} movieReleaseYears={movieReleaseYears}
/>, document.getElementById(`root`));
