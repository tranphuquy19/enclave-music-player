import React, {Component} from "react";
import {previousTrack} from "../../store/actions/PlayerAction";
import {connect} from "react-redux";

class PlayerBtnPreviousTrack extends Component {
    onClick = () => {
        this.props._previousTrack();
    }

    render() {
        return <button className="player_btn previous_btn" onClick={this.onClick}>
            <i className="fas fa-arrow-to-left"></i>
        </button>;
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        _previousTrack: () => {
            dispatch(previousTrack());
        }
    }
}

export default connect(null, mapDispatchToProps)(PlayerBtnPreviousTrack);
