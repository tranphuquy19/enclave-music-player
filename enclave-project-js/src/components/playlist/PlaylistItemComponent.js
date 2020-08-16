import React, {Component} from "react";
import PlaylistTrackItemComponent from "./PlaylistTrackItemComponent";
import resizeImage from "../../shared/ResizeImage";
import {setTracks, togglePlaying} from "../../store/actions/PlayerAction";
import {connect} from "react-redux";

class PlaylistItemComponent extends Component {
    onClick = () => {
        const {player, _togglePlaying, _setTracks, id, type} = this.props;
        const {belongTo} = player;

        _togglePlaying();
        if (belongTo.id !== id) _setTracks({id, type});
    }

    render() {
        const {title, pictureMedium, tracks, isItemPlaying, player} = this.props;

        const listTracks = tracks.map((track, index) =>
            <PlaylistTrackItemComponent {...track} key={index} player={player}/>
        )

        return (
            <div className="playlist_item">
                <div className="playlist_left">
                    <img
                        className="playlist_img"
                        src={resizeImage(pictureMedium, '250x250')}
                        alt="playlist"/>
                    <button className="playlist_play_btn" onClick={this.onClick}>
                        <i className={isItemPlaying ? 'fas fa-spinner fa-spin' : 'fas fa-play'}></i>
                    </button>
                </div>
                <div className="playlist_right">
                    <ul className="playlist_track_list">
                        {listTracks}
                    </ul>
                </div>
                <div className="playlist_bottom">
                    <a href="#" className="playlist_text_name">{title}</a>
                    <button className="playlist_goto_btn">Go To Playlist</button>
                </div>
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

export default connect(null, mapDispatchToProps)(PlaylistItemComponent);
