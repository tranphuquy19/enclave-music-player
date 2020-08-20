import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward } from '@fortawesome/free-solid-svg-icons'
import { connect } from "react-redux";
import { previousTrack } from "../../../store/actions/PlayerAction";


class PlayerBtnPreviousTracks extends Component {
    onClick = () => {
        this.props._previousTrack();
    }

    render() {
        return (
            <FontAwesomeIcon onClick={this.onClick} 
            className="player_btn previous_btn" title="Back Track" icon={faBackward} />
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        _previousTrack: () => {
            dispatch(previousTrack());
        }
    }
}

export default connect(null, mapDispatchToProps)(PlayerBtnPreviousTracks)