import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';

class MoviesCatalog extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };
  }

  _cardHoverHandle(card) {
    return () => this.setState({
      activeCard: card
    });
  }

  render() {
    return (
      <div className="catalog__movies-list">
        {this.props.films.map((el) => (
          <SmallMovieCard onMouseOver={this._cardHoverHandle(el)} name={el.name} key={el.id} onCardTitleClick={this.props.onCardTitleClick}/>
        ))}
      </div>
    );
  }
}

MoviesCatalog.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  onCardTitleClick: PropTypes.func.isRequired,
};

export default MoviesCatalog;

