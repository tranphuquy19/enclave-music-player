import React, { Component } from 'react';
import PlayerBtnPreviousTracks from '../playerBar/PlayerBtnPreviousTracks';
import PlayerBtnPlayTracks from '../playerBar/PlayerBtnPlayTracks';
import PlayerBtnNextTracks from '../playerBar/PlayerBtnNextTracks';
import PlayerBtnShuffleTracks from '../playerBar/PlayerBtnShuffleTracks';
import PlayerBtnLoopTracks from '../playerBar/PlayerBtnLoopTracks';
import PlayerTimer from '../playerBar/PlayerTimer';
import PlayerTrackInfo from '../playerBar/PlayerTrackInfo';
import './PlayerBar.css'
import { connect } from 'react-redux';


class PlayerComponent extends Component {

    render() {
        const {player} = this.props
        return (
            <div className="footer">
                <div id="player">
                    <div id="player_ctr_btns">
                        <PlayerBtnPreviousTracks />
                        <PlayerBtnPlayTracks  player={player}/>
                        <PlayerBtnNextTracks />
                        <PlayerBtnShuffleTracks />
                        <PlayerBtnLoopTracks /> 
                    </div>
                    <PlayerTimer player={player} />
                    <PlayerTrackInfo player={player} />
                </div>
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