/*
 * Created by @tranphuquy19 on 11/08/2020
 * @author: tranphuquy19@gmail.com
 */
import React, {Component} from 'react';
import PlayerBtnPreviousTrack from "./PlayerBtnPreviousTrack";
import PlayerBtnPlayTrack from "./PlayerBtnPlayTrack";
import PlayerBtnNextTrack from "./PlayerBtnNextTrack";
import {PlayerBtnShuffleTracks} from "./PlayerBtnShuffleTracks";
import {PlayerBtnLoopTracks} from "./PlayerBtnLoopTracks";
import PlayerTimer from "./PlayerTimer";
import {PlayerTrackInfo} from "./PlayerTrackInfo";
import {connect} from "react-redux";

class PlayerComponent extends Component {
    render() {
        const {player} = this.props;
        return (
            <div id="player">
                <div id="player_ctr_btns">
                    <PlayerBtnPreviousTrack/>
                    <PlayerBtnPlayTrack player={player}/>
                    <PlayerBtnNextTrack/>
                    <PlayerBtnShuffleTracks/>
                    <PlayerBtnLoopTracks/>
                </div>
                <PlayerTimer player={player}/>
                <PlayerTrackInfo/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        player: state.playerReducer
    }
}

export default connect(mapStateToProps, null)(PlayerComponent);
