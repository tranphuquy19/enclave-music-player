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
import { fetchArtistById } from '../../../queries/_index';


class PlayerComponent extends Component {
    state = {
        artistCached: {
            id: '',
            pictureSmall: ''
        }
    };

    handleTrackChange(artistId) {
        const {artistCached} = this.state;
        if (!artistId || artistId === artistCached.id) return;
        fetchArtistById(artistId).then(result => {
            const {pictureSmall} = result;
            this.setState({
                artistCached: {
                    id: artistId,
                    pictureSmall
                }
            });
        })
    }

    render() {
        const {player} = this.props;
        const {artistCached} = this.state;
        const {current} = player;
        const {titleShort, artist} = current;
        const {id} = artist;
        this.handleTrackChange(id);
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
                    <PlayerTrackInfo />
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