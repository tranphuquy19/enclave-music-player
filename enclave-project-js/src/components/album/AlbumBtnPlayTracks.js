import React, {Component} from "react";
import {connect} from "react-redux";
import {setTracks} from "../../store/actions/PlayerAction";

class AlbumBtnPlayTracks extends Component {
    onClick = () => {
        const {_setTracks, id, type} = this.props;
        _setTracks({id, type});
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
            dispatch(setTracks(data))
        }
    }
}

export default connect(null, mapDispatchToProps)(AlbumBtnPlayTracks);
