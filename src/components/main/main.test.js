import React from "react";
import renderer from 'react-test-renderer';
import Main from './main.jsx';

const selectedMovie = `Lord of The Rings`;
const moviesTitles = [`Fellowship of the Ring`, `Two Towers`, `Return of the King`];
const movieGenre = `Historical`;
const movieReleaseYears = 2050;

it(`<Main /> is expected to render the main page`, () => {
  const onCardTitleClick = jest.fn();
  const main = renderer.create(<Main moviesTitles={moviesTitles} selectedMovie={selectedMovie} movieGenre={movieGenre} movieReleaseYears={movieReleaseYears} onCardTitleClick={onCardTitleClick}/>).toJSON();
  expect(main).toMatchSnapshot();
});
