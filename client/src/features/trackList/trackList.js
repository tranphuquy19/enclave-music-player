import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faPlay, faMoon } from '@fortawesome/free-solid-svg-icons'
import './trackList.css';
import logo from '../../assets/img/avatar2.png';

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
                        <li className="track-li">
                            <div className="track-point"></div>
                            <div><img src={logo} alt="" /></div>
                            <div className="track-author">
                                <h4>Em cua ngay hom qua</h4>
                                <span>Son Tung M-TP</span>
                            </div>
                            <div className="track-actions">
                                <div className="track-toolbar">
                                    <button className="track-icon">
                                        <FontAwesomeIcon
                                            title="Play"
                                            icon={faPlay} />
                                    </button>
                                    <button className="track-icon">
                                        <FontAwesomeIcon
                                            title="Add WishList"
                                            icon={faMoon} />
                                    </button>
                                    <button className="track-icon">
                                        <FontAwesomeIcon
                                            title="Download"
                                            icon={faDownload} />
                                    </button>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
                {/* Artist, Album */}
                <div className="album-list">
                    {/* Title Artist, Album */}
                    <div>

                    </div>
                    {/* List */}
                    <div>

                    </div>
                </div>
            </div>
        );
    }
}

export default TrackList;