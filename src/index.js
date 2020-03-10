import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import films from './mocks/films.js';

const movieTitle = `Harry Potter`;
// const moviesTitles = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];
const movieGenre = `Fantasy`;
const movieReleaseYears = 2020;

ReactDOM.render(<App
  selectedMovie={movieTitle} movieGenre={movieGenre} movieReleaseYears={movieReleaseYears}
  films={films}
/>, document.getElementById(`root`));
