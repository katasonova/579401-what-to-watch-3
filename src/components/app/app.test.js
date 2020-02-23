import React from "react";
import renderer from 'react-test-renderer';
import App from './app.jsx';

const movieTitle = `Lord of The Rings`;
const moviesTitles = [`Fellowship of the Ring`, `Two Towers`, `Return of the King`];
const movieGenre = `Historical`;
const movieReleaseYears = 2050;

it(`<App /> is expected to render selected movie, it's release year and genre, as well as movies titles`, () => {
  const onCardTitleClick = jest.fn();

  const app = renderer.create(<App
    moviesTitles={moviesTitles} selectedMovie={movieTitle} movieGenre={movieGenre} movieReleaseYears={movieReleaseYears} onCardTitleClick={onCardTitleClick}
  />).toJSON();
  expect(app).toMatchSnapshot();
});
