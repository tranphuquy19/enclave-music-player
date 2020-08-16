import React, {Component} from "react";
import {connect} from "react-redux";
import {setTracks, togglePlaying} from "../../store/actions/PlayerAction";

class AlbumBtnPlayTracks extends Component {
    onClick = () => {
        const {_setTracks, _togglePlaying ,id, type, isItemPlaying} = this.props;
        isItemPlaying ? _togglePlaying() : _setTracks({id, type});
    }

    render() {
        const {isItemPlaying} = this.props;
        return (
            <div className="album_play_icon" onClick={this.onClick}>
                <i className={isItemPlaying ? 'fas fa-spinner fa-spin' :  'fas fa-play'}></i>
            </div>
        );
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

export default connect(null, mapDispatchToProps)(AlbumBtnPlayTracks);
