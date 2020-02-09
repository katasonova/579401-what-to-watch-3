import React from 'react';
import Main from '../main/main.jsx';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  return <Main MovieTitle={props.MovieTitle} MovieGenre={props.MovieGenre} MovieReleaseYears={props.MovieReleaseYears}/>;
};

export default App;
