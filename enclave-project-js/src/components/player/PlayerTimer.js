/*
 * Created by @tranphuquy19 on 15/08/2020
 * @author: tranphuquy19@gmail.com
 */
import React, {Component} from 'react';
import Slider from "rc-slider";
import {connect} from "react-redux";
import ReactPlayer from "react-player";
import {nextTrack} from "../../store/actions/PlayerAction";

class PlayerTimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            duration: 0
        }
    }

    renderProgressBar = () => {

    }

    formatTime = (timeTemp) => {
        const m = Math.floor(timeTemp / 60);
        const s = Math.floor(timeTemp % 60);

        return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
    }

    onProgress = (state) => {
        const {playedSeconds} = state;
        const {duration} = this.state;
        let e = ['🌑', '🌘', '🌗', '🌖', '🌕'];
        this.setState({
            value: Math.floor(playedSeconds)
        });

        let s = '',
            c = 0,
            l = 10,
            p = Math.floor(playedSeconds / duration * ((l * 5) - 1));

        while (p >= 5) {
            s += e[4];
            c++;
            p -= 5;
        }
        s += e[p];
        c++;

        while (c < l) {
            s += e[0];
            c++;
        }

        window.location.hash = s + this.formatTime(playedSeconds) + '╱' + this.formatTime(duration);
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

    render() {
        const {duration, value} = this.state;
        const {isPlaying, current, loop} = this.props.player;
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
                    hidden/>
                <div id="player_timer">
                    <p className="player_timer_text">
                        {this.formatTime(value)}
                    </p>
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
                    <button className="player_btn volume_btn">
                        <i className="far fa-volume"></i>
                    </button>
                </div>
            </>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         player: state.playerReducer
//     }
// }

const mapDispatchToProps = (dispatch, props) => {
    return {
        _nextTrack: () => {
            dispatch(nextTrack());
        }
    }
}

export default connect(null, mapDispatchToProps)(PlayerTimer);
