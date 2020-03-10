import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';

class MoviesCatalog extends PureComponent {
  constructor(props) {
    super(props);

    //  что должно быть в стейт активной карточи фильма??
    this.state = {
      isCardActive: false
    };
  }

  render() {
    return (
      <div className="catalog__movies-list">
        {this.props.films.map((el, index) => (
          <SmallMovieCard onMouseOver={(evt) => {
            const isMouseOver = evt.target.pointerover;

            this.setState({
              isCardActive: isMouseOver
            });
          }} title={el.title} key={el + index}/>
        ))}
      </div>
    );
  }
}

MoviesCatalog.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MoviesCatalog;

