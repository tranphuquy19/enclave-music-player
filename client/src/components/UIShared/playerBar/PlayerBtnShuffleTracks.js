import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRandom } from '@fortawesome/free-solid-svg-icons'


class PlayerBtnShuffleTracks extends Component {

    render() {
        return (
            <FontAwesomeIcon className="player_btn random_btn" title="Shuffle" icon={faRandom}/>
        );
    }
}


export default PlayerBtnShuffleTracks;