import React, {Component} from "react";
import {connect} from "react-redux";

class AlbumBtnPlayTracks extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="album_play_icon">
                <i className="fas fa-play"></i>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {

}

export default connect(null, mapDispatchToProps)(AlbumBtnPlayTracks);
