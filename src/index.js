import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import films from './mocks/films.js';

ReactDOM.render(<App
  selectedMovie={films[0].name} movieGenre={films[0].genre} movieReleaseYears={films[0].released}
  films={films}
/>, document.getElementById(`root`));
