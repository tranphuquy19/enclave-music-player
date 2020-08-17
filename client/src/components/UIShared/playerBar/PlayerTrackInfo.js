import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'
import avatar2 from '../../../assets/img/avatar2.png'
class PlayerTrackInfo extends Component {

    render() {
        return (
            <div id="player_track_info">
                <div className="player_track_image"><img src={avatar2} alt="title" width="40px" height="40px" /></div>
                <div className="player_track_text">
                    <p className="player_track_artist_name_text">BIGBANG</p>
                    <p className="player_track_name_text">IF YOU</p>
                </div>
                <div className="player_track_info_btn">
                    <FontAwesomeIcon className="player_btn playlist_btn" icon={faList} />
                </div>
            </div>
        );
    }
}


export default PlayerTrackInfo;