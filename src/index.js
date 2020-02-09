import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

ReactDOM.render(<App
  MovieTitle={`Harry Potter`} MovieGenre={`Fantasy`} MovieReleaseYears={2020}
/>, document.getElementById(`root`));
