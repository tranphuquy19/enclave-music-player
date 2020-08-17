import React, { Component } from 'react';
import PlayerBtnPreviousTracks from '../playerBar/PlayerBtnPreviousTracks';
import PlayerBtnPlayTracks from '../playerBar/PlayerBtnPlayTracks';
import PlayerBtnNextTracks from '../playerBar/PlayerBtnNextTracks';
import PlayerBtnShuffleTracks from '../playerBar/PlayerBtnShuffleTracks';
import PlayerBtnLoopTracks from '../playerBar/PlayerBtnLoopTracks';
import PlayerTimer from '../playerBar/PlayerTimer';
import PlayerTrackInfo from '../playerBar/PlayerTrackInfo';
import './PlayerBar.css'


class PlayerComponent extends Component {
    render() {
        return (
            <div className="footer">
                <div id="player">
                    <div id="player_ctr_btns">
                        <PlayerBtnPreviousTracks />
                        <PlayerBtnPlayTracks />
                        <PlayerBtnNextTracks />
                        <PlayerBtnShuffleTracks />
                        <PlayerBtnLoopTracks /> 
                    </div>
                    <PlayerTimer />
                    <PlayerTrackInfo />
                </div>
            </div>
        );
    }

}

export default PlayerComponent;