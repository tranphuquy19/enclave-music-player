import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward } from '@fortawesome/free-solid-svg-icons'


class PlayerBtnPreviousTracks extends Component {

    render() {
        return (
            <FontAwesomeIcon className="player_btn previous_btn" title="Back Track" icon={faBackward} />
        );
    }
}


export default PlayerBtnPreviousTracks;