import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

const testCard = {
  "id": 1,
  "name": `Harry Potter`,
  "poster_image": `img/harry-potter-poster.jpg`,
  "preview_image": `img/harry-potter.jpg`,
  "background_image": `img/harry-potter-bg.jpg`,
  "background_color": `#ffffff`,
  "video_link": `https://some-link`,
  "preview_video_link": `https://some-link`,
  "description": `Very interesting movie.`,
  "rating": 0.2,
  "scores_count": 125,
  "director": `Mr Nobody`,
  "starring": [`Dan Redcliff`, `Emma Watson`, `Helena Bonhem Carter`],
  "run_time": 1000,
  "genre": `Fantasy`,
  "released": 2000,
  "is_favorite": false
};

it(`The handle on the mouseover event on the movie card is expected to recieve the hovered card objects`, () => {
  const onMouseOver = jest.fn();
  const onCardTitleClick = jest.fn();

  const movieCard = shallow(<SmallMovieCard onMouseOver={onMouseOver} name={testCard.name} key={testCard.id} onCardTitleClick={onCardTitleClick}/>);

  const firstCardTitle = movieCard.find(`.small-movie-card`);

  firstCardTitle.props().onMouseOver();

  expect(onMouseOver.mock.calls.length).toBe(1);
});
