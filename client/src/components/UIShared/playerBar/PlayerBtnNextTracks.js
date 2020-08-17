import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward } from '@fortawesome/free-solid-svg-icons'

class PlayerBtnNextTracks extends Component {

    render() {
        return (
            <FontAwesomeIcon className="player_btn next_btn" title="Next Track" icon={faForward}/>
        );
    }
}


export default PlayerBtnNextTracks;