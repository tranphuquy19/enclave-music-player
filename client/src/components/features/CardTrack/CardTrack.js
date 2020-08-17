import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPlus } from '@fortawesome/free-solid-svg-icons'
import './CardTrack.css';
import PlayButton from '../../UIShared/Button/PlayButton';
import convertDurationTrack from '../../UIShared/convertDurationTrack';

const CardTrack = (props) => {
    // console.log(props);
    const { track } = props;
    const { titleShort, artist, album, duration, preview } = track;
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
                        <p className="duration">{convertDurationTrack(duration)}</p> 
                        <div className="track-actions">
                            <div className="track-toolbar">
                                <button className="track-icon track-icon-play">
                                    <PlayButton url={preview} />
                                </button>
                                <button className="track-icon track-icon-heart">
                                    <FontAwesomeIcon
                                        title="Add WishList"
                                        icon={faHeart} />
                                </button>
                                <button className="track-icon track-icon-down">
                                    <FontAwesomeIcon
                                        title="Add Playlist"
                                        icon={faPlus}/>
                                </button>
                            </div>
                        </div>
                    </li>
        </ul>


    );
}
export default CardTrack;