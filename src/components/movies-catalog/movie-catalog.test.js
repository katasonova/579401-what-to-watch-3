import React from "react";
import renderer from 'react-test-renderer';
import MoviesCatalog from '../movies-catalog/movies-catalog.jsx';

const films = [{
  "id": 1,
  "name": `Harry Potter`,
  "poster_image": `img/harry-potter-poster.jpg`,
  "preview_image": `img/harry-potter.jpg`,
  "background_image": `img/harry-potter-bg.jpg`,
  "background_color": `#ffffff`,
  "video_link": `https://some-link`,
  "preview_video_link": `https://some-link`,
  "description": `Very interesting movie.`,
  "rating": 6.2,
  "scores_count": 125,
  "director": `Mr Nobody`,
  "starring": [`Dan Redcliff`, `Emma Watson`, `Helena Bonhem Carter`],
  "run_time": 1000,
  "genre": `Fantasy`,
  "released": 2000,
  "is_favorite": false
}, {
  "id": 2,
  "name": `Inception`,
  "poster_image": `img/inception-poster.jpg`,
  "preview_image": `img/inception.jpg`,
  "background_image": `img/inception-bg.jpg`,
  "background_color": `#ffffff`,
  "video_link": `https://some-link`,
  "preview_video_link": `https://some-link`,
  "description": `A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.`,
  "rating": 9.1,
  "scores_count": 456,
  "director": `C. Nolan`,
  "starring": [`Oscar`, `Famous actor1`, `Famous actor2`],
  "run_time": 124,
  "genre": `Thriller`,
  "released": 2010,
  "is_favorite": true
}];

it(`<SmallMovieCard /> is expected to render a movie card`, () => {
  const onCardTitleClick = jest.fn();

  const moviesList = renderer.create(<MoviesCatalog films={films} onCardTitleClick={onCardTitleClick}/>).toJSON();
  expect(moviesList).toMatchSnapshot();
});
