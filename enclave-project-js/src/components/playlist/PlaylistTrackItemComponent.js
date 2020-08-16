import React, {Component} from "react";

export class PlaylistTrackItemComponent extends Component {
    render() {
        const {titleShort, artist, nbUpVotes, nbDownVotes, rank} = this.props;
        return (
            <li className="playlist_track_item">
                <p className="playlist_track_name">
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
                        <span>{rank}</span>
                    </button>
                </div>
            </li>
        );
    }
}
