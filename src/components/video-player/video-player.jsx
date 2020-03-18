import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      progress: 0,
      isPlaying: props.isPlaying,
      isMuted: true
    };
  }

  componentDidMount() {
    const {src} = this.props;

    const video = this._videoRef.current;
    video.src = src;

    video.onhoverover = () => {
      this.setState({
        isPlaying: true
      });
    };

    video.onhoverleft = () => {
      this.setState({
        isPlaying: false
      });
    };

    video.ontimeupdate = () => {
      this.setState({
        progress: video.currentTime
      });
    };
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.onhoverover = null;
    video.onhoverleft = null;
    video.ontimeupdate = null;
    video.src = ``;
  }

  render() {
    const {poster, src, onHover} = this.props;
    const {isPlaying} = this.state;

    return (
      <video ref={this._videoRef} src={src} className="player__video" poster={poster} muted={this.state.isMuted}
        onMouseOver={() => {
          this.setState({isPlaying: !this.state.isPlaying});
          onHover();
        }} />
    );
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.state.isPlaying) {
      video.onhover();
    } else {
      video.onhverleft();
    }
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onHover: PropTypes.func.isRequired,
};

export default VideoPlayer;
