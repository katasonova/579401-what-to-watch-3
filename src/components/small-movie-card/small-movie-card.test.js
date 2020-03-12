import React from "react";
import renderer from 'react-test-renderer';
import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';

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

it(`<SmallMovieCard /> is expected to render a movie card`, () => {
  const onMovieCardMouseOver = jest.fn();
  const onCardTitleClick = jest.fn();

  const movieCard = renderer.create(<SmallMovieCard
    onMouseOver={onMovieCardMouseOver} name={testCard.name} key={testCard.id} onCardTitleClick={onCardTitleClick}/>).toJSON();
  expect(movieCard).toMatchSnapshot();
});
