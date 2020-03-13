import React from 'react';
import PropTypes from 'prop-types';

const SmallMovieCard = ({name, onMouseOver, onCardTitleClick}) => {
  return (
    <article onMouseOver={onMouseOver} className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt={
          name} width="280" height="175" />
      </div>
      <h3 onClick={onCardTitleClick} className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{
          name}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  name: PropTypes.string.isRequired,
  onMouseOver: PropTypes.func.isRequired,
  onCardTitleClick: PropTypes.func.isRequired,
};

export default SmallMovieCard;
