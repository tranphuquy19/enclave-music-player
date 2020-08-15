import React, {Component} from "react";
import {togglePlaying} from "../../store/actions/PlayerAction";
import {connect} from "react-redux";

class PlayerBtnPlayTrack extends Component {
    onClick = () => {
        this.props._togglePlaying();
    }

    render() {
        const {isPlaying} = this.props.player;
        return (
            <button className="player_btn play_btn" onClick={this.onClick}>
                <i className={isPlaying ? 'fas fa-pause' : 'fas fa-play'}></i>
            </button>
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

export default connect(null, mapDispatchToProps)(PlayerBtnPlayTrack);
