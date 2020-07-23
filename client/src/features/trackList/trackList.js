import React, { Component } from 'react';
import './trackList.css';

class TrackList extends Component {
    render() {
        return (
            <div className="home-page">
                {/* Track */}
                <div className="track-list">
                    {/* popular_song */}
                    <span className="track-txt">Popular songs</span>
                    {/* track_list */}
                    <ul>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                    </ul>
                </div>
                {/* Artist, Album */}
                <div className="album-list">

                </div>
            </div>
        );
    }
}

export default TrackList;