import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp, faVolumeDown, faVolumeMute } from '@fortawesome/free-solid-svg-icons'
import ReactPlayer from 'react-player'
import Slider from 'rc-slider'
import { connect } from "react-redux";
import { nextTrack } from '../../../store/actions/PlayerAction';

class PlayerTimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            duration: 0,
            volume: 0.5
        }
        this.adjustVolume = this.adjustVolume.bind(this)
    }

    formatTime = (timeTemp) => {
        const minutes = Math.floor(timeTemp / 60);
        const seconds = Math.floor(timeTemp % 60);
        return (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
    }

    onProgress = (state) => {
        const { playedSeconds } = state;
        this.setState({
            value: Math.floor(playedSeconds)
        });
    }

    onDuration = (state) => {
        this.setState({
            duration: Math.floor(state)
        });
    }

    onEnded = () => {
        this.props._nextTrack();
    }

    onSliderChange = (value) => {
        this.setState(
            {
                value
            });
        this.reactPlayer.seekTo(value);
    };

    adjustVolume = (volume) => {
        this.setState({
            volume: volume
        })
    }
    render() {
        const { duration, value, volume } = this.state;
        console.log("AAA", volume);
        const { isPlaying, current, loop } = this.props.player;
        const url = current.preview || null;
        return (
            <>
                <ReactPlayer
                    ref={reactPlayer => {
                        this.reactPlayer = reactPlayer
                    }}
                    url={url}
                    playing={isPlaying}
                    loop={loop}
                    onProgress={this.onProgress}
                    onDuration={this.onDuration}
                    onEnded={this.onEnded}
                    volume={volume}
                    hidden />
                <div id="player_timer">
                    <p className="player_timer_text">{this.formatTime(value)}</p>
                    <div className="player_slider">
                        <Slider
                            min={0}
                            max={duration}
                            value={value}
                            onChange={this.onSliderChange}
                            railStyle={{
                                height: 2
                            }}
                            handleStyle={{
                                height: 9,
                                width: 9,
                                marginLeft: 0,
                                marginTop: -3,
                                backgroundColor: "#4b0082",
                                border: 0
                            }}
                            trackStyle={{
                                backgroundColor: "#6F339B"
                            }}
                        />
                    </div>
                    <p className="player_timer_text">{this.formatTime(duration)}</p>
                    <FontAwesomeIcon className="player_btn volume_btn" icon={volume !==0 ? faVolumeUp  : faVolumeMute} />
                    <Slider
                        style={{ display: 'inline-block', width: 50, marginLeft: 5 }}
                        defaultValue={volume}
                        axis="y"
                        min={0} max={1}
                        name="volume"
                        step={0.01}
                        onChange={this.adjustVolume} />
                </div>
            </>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        _nextTrack: () => {
            dispatch(nextTrack());
        }
    }
}

export default connect(null, mapDispatchToProps)(PlayerTimer);