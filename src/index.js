import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const movieTitle = `Harry Potter`;
const movieGenre = `Fantasy`;
const movieReleaseYears = 2020;

ReactDOM.render(<App
  movieTitle={movieTitle} movieGenre={movieGenre} movieReleaseYears={movieReleaseYears}
/>, document.getElementById(`root`));
