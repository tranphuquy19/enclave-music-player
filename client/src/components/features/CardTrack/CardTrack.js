import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faPlay, faMoon } from '@fortawesome/free-solid-svg-icons'
import './CardTrack.css';

const CardTrack = (props) => {
    const { track } = props;
    const { titleShort, artist, album } = track;
    const { name } = artist;
    const { cover, title } = album
    return (
        <ul>
                    <li className="track-li">
                        <div className="track-point"></div>
                        <div><img src={cover} alt={title} /></div>
                        <div className="track-author">
                            <h4>{titleShort}</h4>
                            <span>{name}</span>
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


    );
}
export default CardTrack;