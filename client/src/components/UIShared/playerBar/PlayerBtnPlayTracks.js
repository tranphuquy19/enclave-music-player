import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import {connect} from 'react-redux';
import {togglePlaying} from '../../../store/actions/PlayerAction';

class PlayerBtnPlayTracks extends Component {
    onClick = () => {
        this.props._togglePlaying();
    }


    render() {
        const {isPlaying}= this.props.player;
        return (
            <FontAwesomeIcon onClick={this.onClick} className="player_btn play_btn" title="Play" icon={isPlaying ? faPause : faPlay} />
        );
    }
}


const mapDispatchToProps = (dispatch, props) => {
    return {
        _togglePlaying: () => {
            dispatch(togglePlaying());
        }
    }
}

export default connect(null, mapDispatchToProps)(PlayerBtnPlayTracks);