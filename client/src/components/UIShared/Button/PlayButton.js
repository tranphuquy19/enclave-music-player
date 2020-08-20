import React, { Component } from "react";
import "./PlayButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import {setTracks, togglePlaying} from "../../../store/actions/PlayerAction";
import { connect } from "react-redux";

class PlayButton extends Component {
    playPreview = () => {
        const {player, _togglePlaying, _setTracks, track} = this.props;
        const {id, type} = track;
        const {belongTo} = player;

        // console.log({player, id, type})

        _togglePlaying();
        if (belongTo.id !== id) _setTracks({id, type});
    }

    checkIsPlaying = () => {
        const {belongTo, isPlaying, id, type} = {...this.props.player, ...this.props.track};
        return isPlaying && belongTo.id === id && type === 'track';
    }

    render() {
        return (
            <>
                {/* <audio ref={(input) => { this.audioRef = input }} src={this.state.url} style={{ display: 'none' }} /> */}
                <FontAwesomeIcon
                    className="icon-controller"
                    icon={this.checkIsPlaying() ? faPause : faPlay}
                    onClick={this.playPreview}
                />
            </>

        );
    }
};

const mapStateToProps = (state) => {
    return {
        player: state.playerReducer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        _setTracks: (data) => {
            dispatch(setTracks(data));
        },
        _togglePlaying: () => {
            dispatch(togglePlaying());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayButton);