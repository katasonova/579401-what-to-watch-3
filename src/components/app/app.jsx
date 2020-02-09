import React from 'react';
import Main from '../main/main.jsx';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  return <Main movieTitle={props.movieTitle} movieGenre={props.movieGenre} movieReleaseYears={props.movieReleaseYears}/>;
};

export default App;
