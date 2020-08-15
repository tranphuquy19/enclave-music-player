import React, {Component} from "react";
import {nextTrack} from "../../store/actions/PlayerAction";
import {connect} from "react-redux";

class PlayerBtnNextTrack extends Component {
    onClick = () => {
        this.props._nextTrack();
    }

    render() {
        return (
            <button className="player_btn next_btn" onClick={this.onClick}>
                <i className="fas fa-arrow-to-right"></i>
            </button>
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

export default connect(null, mapDispatchToProps)(PlayerBtnNextTrack);
