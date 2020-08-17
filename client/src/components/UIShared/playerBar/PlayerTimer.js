import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons'
class PlayerTimer extends Component {

    render() {
        return (
            <div id="player_timer">
                <p className="player_timer_text">00:00</p>
                <div className="player_slider">
                    <div className="rc_slider">
                    </div>
                </div>
                <p className="player_timer_text">00:00</p>
                <FontAwesomeIcon className="player_btn volume_btn" icon={faVolumeUp} />
            </div>
        );
    }
}


export default PlayerTimer;