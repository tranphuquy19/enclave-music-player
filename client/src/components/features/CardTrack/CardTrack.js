import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './CardTrack.css';
import PlayButton from '../../UIShared/Button/PlayButton';
import convertDurationTrack from '../../UIShared/convertDurationTrack';
import HeartButton from '../../UIShared/Button/HeartButton';
import { connect } from 'react-redux';

class CardTrack extends Component { 
    render() {
        const { track, player, user } = this.props;
        const { titleShort, artist, album, duration, preview } = track;
        const { name } = artist;
        const { coverMedium, title } = album
        return (
            <ul>
                <li className="track-li">
                    <div className="track-point"></div>
                    <div><img src={coverMedium} alt={title} /></div>
                    <div className="track-author">
                        <h4>{titleShort}</h4>
                        <span>{name}</span>
                    </div>
                    <p className="duration">{convertDurationTrack(duration)}</p>
                    <div className="track-actions">
                        <div className="track-toolbar">
                            <button className="track-icon track-icon-play">
                                <PlayButton url={preview} track={track} player={player}/>
                            </button>
                            <button className="track-icon track-icon-heart">
                                <HeartButton {...track } userId={user.id}/>
                            </button>
                            <button className="track-icon track-icon-down">
                                <FontAwesomeIcon
                                    title="Add Playlist"
                                    icon={faPlus} />
                            </button>
                        </div>
                    </div>
                </li>
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return {
     user: state.userReducer,
    //  player: state.playerReducer
    }
}

export default connect(mapStateToProps, null)(CardTrack);