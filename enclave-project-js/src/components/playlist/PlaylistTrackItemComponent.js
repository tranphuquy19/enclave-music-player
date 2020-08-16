import React, {Component} from "react";
import {setTracks, togglePlaying} from "../../store/actions/PlayerAction";
import {connect} from "react-redux";

class PlaylistTrackItemComponent extends Component {
    onClick = () => {
        const {player, _togglePlaying, _setTracks, id, type} = this.props;
        const {belongTo} = player;

        _togglePlaying();
        if (belongTo.id !== id) _setTracks({id, type});
    }

    render() {
        const {titleShort, artist, nbUpVotes, nbDownVotes, rank} = this.props;
        return (
            <li className="playlist_track_item">
                <p className="playlist_track_name" onClick={this.onClick}>
                    <span className="playlist_track_artist">{artist.name}</span>
                    - {titleShort}
                </p>
                <div className="action_group_btn">
                    <button className="playlist_track_like_btn track_btn">
                        <i className="fas fa-thumbs-up"></i>
                        <span>{nbUpVotes}</span>
                    </button>
                    <button className="playlist_track_unlike_btn track_btn">
                        <i className="fas fa-thumbs-down"></i>
                        <span>{nbDownVotes}</span>
                    </button>
                    <button className="playlist_track_rank track_btn">
                        <i className="fas fa-analytics"></i>
                        <span> {rank}</span>
                    </button>
                </div>
            </li>
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

export default connect(null, mapDispatchToProps)(PlaylistTrackItemComponent);
