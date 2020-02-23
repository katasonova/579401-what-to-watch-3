import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

const selectedMovie = `Lord of The Rings`;
const moviesTitles = [`Fellowship of the Ring`, `Two Towers`, `Return of the King`];
const movieGenre = `Historical`;
const movieReleaseYears = 2050;

it(`The click on the movie card title is expected to be clicked`, () => {
  const onCardTitleClick = jest.fn();

  const mainContent = shallow(<Main moviesTitles={moviesTitles} selectedMovie={selectedMovie} movieGenre={movieGenre} movieReleaseYears={movieReleaseYears} onCardTitleClick={onCardTitleClick} />);

  const firstCardTitle = mainContent.find(`.small-movie-card__title`).first();

  firstCardTitle.props().onClick();

  expect(onCardTitleClick.mock.calls.length).toBe(1);
});
