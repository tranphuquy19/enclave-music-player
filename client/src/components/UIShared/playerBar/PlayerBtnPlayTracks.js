import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

class PlayerBtnPlayTracks extends Component {

    render() {
        return (
            <FontAwesomeIcon className="player_btn play_btn" title="Play" icon={faPlay} />
        );
    }
}


export default PlayerBtnPlayTracks;