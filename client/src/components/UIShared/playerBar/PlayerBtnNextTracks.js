import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward } from '@fortawesome/free-solid-svg-icons'
import { connect } from "react-redux";
import { nextTrack } from "../../../store/actions/PlayerAction";

class PlayerBtnNextTracks extends Component {
    onClick = () => {
        this.props._nextTrack();
    }

    render() {
        return (
            <FontAwesomeIcon onClick={this.onClick} className="player_btn next_btn" title="Next Track" icon={faForward}/>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        _nextTrack: () => {
            dispatch(nextTrack());
        }
    }
}

export default connect(null, mapDispatchToProps)(PlayerBtnNextTracks);