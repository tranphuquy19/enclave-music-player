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
import {Helmet} from "react-helmet";
import {fetchArtistById} from "../../queries/ArtistQueries";

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
            <>
                <Helmet defer={false}>
                    <title>{titleShort ? `${titleShort} - Music Player` : `Music Player`}</title>
                    <link rel="icon" type="image/jpg" href={artistCached.pictureSmall || ''}/>
                </Helmet>
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
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        player: state.playerReducer
    }
}

export default connect(mapStateToProps, null)(PlayerComponent);
