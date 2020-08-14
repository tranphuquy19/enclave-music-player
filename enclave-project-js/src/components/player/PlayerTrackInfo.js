import React, {Component} from "react";

export class PlayerTrackInfo extends Component {
    render() {
        return <div id="player_track_info">
            <div id="player_track_image">
                <img
                    src="https://cdns-images.dzcdn.net/images/artist/ded836df53650e375ed01e2f497f8940/56x56-000000-80-0-0.jpg"
                    alt="" className="track_img_sm"/>
            </div>
            <div id="player_track_text">
                <p className="player_track_artist_name_text">BIGBANG</p>
                <p className="player_track_name_text">IF YOU</p>
            </div>
            <div id="player_track_info_btn">
                <button className="player_btn playlist_btn">
                    <i className="fas fa-list-ul"></i>
                </button>
            </div>

        </div>;
    }
}
