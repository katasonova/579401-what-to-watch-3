import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

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
}, {
  "id": 3,
  "name": `Inception2`,
  "poster_image": `img/inception2-poster.jpg`,
  "preview_image": `img/inception2.jpg`,
  "background_image": `img/inception2-bg.jpg`,
  "background_color": `#ffffff`,
  "video_link": `https://some-link`,
  "preview_video_link": `https://some-link`,
  "description": `222 - A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.`,
  "rating": 2,
  "scores_count": 2,
  "director": `C. Nolan2`,
  "starring": [`Oscar2`, `2Famous actor1`, `2Famous actor2`],
  "run_time": 2,
  "genre": `2Thriller`,
  "released": 2,
  "is_favorite": true
}, {
  "id": 4,
  "name": `TestMovie4`,
  "poster_image": `img/test4-poster.jpg`,
  "preview_image": `img/test4.jpg`,
  "background_image": `img/test4-bg.jpg`,
  "background_color": `#ffffff`,
  "video_link": `https://some-link`,
  "preview_video_link": `https://some-link`,
  "description": `Test movie info 4.`,
  "rating": 4,
  "scores_count": 4,
  "director": `TestDirector4`,
  "starring": [`TestActor4.1`, `TestActor 4.2`],
  "run_time": 4,
  "genre": `TestGenre4`,
  "released": 4,
  "is_favorite": true
}, {
  "id": 5,
  "name": `TestMovie5`,
  "poster_image": `img/test5-poster.jpg`,
  "preview_image": `img/test5.jpg`,
  "background_image": `img/test5-bg.jpg`,
  "background_color": `#ffffff`,
  "video_link": `https://some-link`,
  "preview_video_link": `https://some-link`,
  "description": `Test movie info 5.`,
  "rating": 5,
  "scores_count": 5,
  "director": `TestDirector5`,
  "starring": [`TestActor5.1`, `TestActor 5.2`],
  "run_time": 5,
  "genre": `TestGenre5`,
  "released": 5,
  "is_favorite": true
}, {
  "id": 6,
  "name": `TestMovie6`,
  "poster_image": `img/test6-poster.jpg`,
  "preview_image": `img/test6.jpg`,
  "background_image": `img/test6-bg.jpg`,
  "background_color": `#ffffff`,
  "video_link": `https://some-link`,
  "preview_video_link": `https://some-link`,
  "description": `Test movie info 6.`,
  "rating": 6,
  "scores_count": 6,
  "director": `TestDirector6`,
  "starring": [`TestActor6.1`, `TestActor 6.2`],
  "run_time": 6,
  "genre": `TestGenre6`,
  "released": 6,
  "is_favorite": true
}, {
  "id": 7,
  "name": `TestMovie7`,
  "poster_image": `img/test7-poster.jpg`,
  "preview_image": `img/test7.jpg`,
  "background_image": `img/test7-bg.jpg`,
  "background_color": `#ffffff`,
  "video_link": `https://some-link`,
  "preview_video_link": `https://some-link`,
  "description": `Test movie info 7.`,
  "rating": 7,
  "scores_count": 7,
  "director": `TestDirector7`,
  "starring": [`TestActor7.1`, `TestActor 7.2`, `TestActor 7.3`],
  "run_time": 7,
  "genre": `TestGenre7`,
  "released": 7,
  "is_favorite": false
}, {
  "id": 8,
  "name": `TestMovie8`,
  "poster_image": `img/test8-poster.jpg`,
  "preview_image": `img/test8.jpg`,
  "background_image": `img/test8-bg.jpg`,
  "background_color": `#ffffff`,
  "video_link": `https://some-link`,
  "preview_video_link": `https://some-link`,
  "description": `Test movie info 8.`,
  "rating": 8,
  "scores_count": 8,
  "director": `TestDirector8`,
  "starring": [`TestActor8.1`, `TestActor 8.2`],
  "run_time": 8,
  "genre": `TestGenre8`,
  "released": 8,
  "is_favorite": true
}];

it(`The click on the movie card title is expected to be clicked`, () => {
  const onCardTitleClick = jest.fn();

  const mainContent = mount(<Main selectedMovie={films[0].name} movieGenre={films[0].genre} movieReleaseYears={films[0].released} onCardTitleClick={onCardTitleClick} films={films}/>);

  const firstCardTitle = mainContent.find(`.small-movie-card__title`).first();

  firstCardTitle.props().onClick();

  expect(onCardTitleClick.mock.calls.length).toBe(1);
});
