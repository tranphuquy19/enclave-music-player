/*
 * Created by @tranphuquy19 on 11/08/2020
 * @author: tranphuquy19@gmail.com
 */
import React, {Component} from 'react';
import {PlayerBtnPreviousTrack} from "./PlayerBtnPreviousTrack";
import {PlayerBtnPlayTrack} from "./PlayerBtnPlayTrack";
import {PlayerBtnNextTrack} from "./PlayerBtnNextTrack";
import {PlayerBtnShuffleTracks} from "./PlayerBtnShuffleTracks";
import {PlayerBtnLoopTracks} from "./PlayerBtnLoopTracks";
import PlayerTimer from "./PlayerTimer";
import {PlayerTrackInfo} from "./PlayerTrackInfo";

class PlayerComponent extends Component {
    render() {
        return (
            <div id="player">
                <div id="player_ctr_btns">
                    <PlayerBtnPreviousTrack/>
                    <PlayerBtnPlayTrack/>
                    <PlayerBtnNextTrack/>
                    <PlayerBtnShuffleTracks/>
                    <PlayerBtnLoopTracks/>
                </div>
                <PlayerTimer/>
                <PlayerTrackInfo/>
            </div>
        );
    }
}

export default PlayerComponent;
