import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'
import avatar2 from '../../../assets/img/avatar2.png'
import { fetchArtistById } from "../../../queries/_index";
class PlayerTrackInfo extends Component {
    state = {
        artistCached: {
            id: '',
            pictureSmall: ''
        }
    }
    handleTrackChange(artistId) {
        const { artistCached } = this.state;
        if (!artistId || artistId === artistCached.id) return;
        fetchArtistById(artistId).then(result => {
            const { pictureSmall } = result;
            this.setState({
                artistCached: {
                    id: artistId,
                    pictureSmall
                }
            })
        })
    }
    render() {
        const { player } = this.props;
        const { artistCached } = this.state;
        const { current } = player;
        const { titleShort, artist } = current;
        const { id } = artist;
        this.handleTrackChange(id);

        return (
            <div id="player_track_info">
                <div className="player_track_image"><img src={artistCached.pictureSmall || avatar2} alt="title" width="40px" height="40px" /></div>
                <div className="player_track_text">
                    <p className="player_track_name_text">{titleShort || "NULL"} </p>
                    <p className="player_track_artist_name_text"> {artist.name || "NULL"} </p>
                </div>
                <div className="player_track_info_btn">
                    <FontAwesomeIcon className="player_btn playlist_btn" icon={faList} />
                </div>
            </div>
        );
    }
}


export default PlayerTrackInfo;