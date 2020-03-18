import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.setState = {
      // isPlaying: true
    };
  }

  render() {
    // const {isPlaying} = this.state;
    const {name, onMouseOver, onCardTitleClick, src, poster} = this.props;

    return (
      <article onMouseOver={onMouseOver} className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image">
          <VideoPlayer src={src} poster={poster} />
          {/* //  onHover={() => this.setState({isPlaying: !isPlaying})}/> */}
        </div>
        <h3 onClick={onCardTitleClick} className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{
            name}</a>
        </h3>
      </article>
    );
  }

}

SmallMovieCard.propTypes = {
  name: PropTypes.string.isRequired,
  onMouseOver: PropTypes.func.isRequired,
  onCardTitleClick: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  // isPlaying: PropTypes.bool.isRequired
};

export default SmallMovieCard;
