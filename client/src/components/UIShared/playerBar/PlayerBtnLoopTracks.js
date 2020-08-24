import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply } from '@fortawesome/free-solid-svg-icons'


class PlayerBtnLoopTracks extends Component {

    render() {
        return (
            <FontAwesomeIcon className="player_btn repeat_btn" title="Repeat" icon={faReply}/>
        );
    }
}


export default PlayerBtnLoopTracks;