import React, {Component} from "react";
import PlaylistItemComponent from "./PlaylistItemComponent";
import {connect} from "react-redux";

class PlaylistComponent extends Component {
    checkItemPlaying = ({id}) => {
        const {player} = this.props;
        const {belongTo, isPlaying} = player;
        return belongTo.type === 'playlist' && belongTo.id === id && isPlaying;
    }

    render() {
        const {playlists, player} = this.props;

        const listPlaylists = playlists.map((playlist, index) =>
            <PlaylistItemComponent
                {...playlist}
                key={index}
                player={player}
                isItemPlaying={this.checkItemPlaying(playlist)}
            />)

        return (
            <div className="playlists">
                <h2 className="main_text">Playlist Hot !</h2>
                <h3 className="sub_main_text">The most played playlist on Music player this week</h3>
                {listPlaylists}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        playlists: state.playlistsReducer,
        player: state.playerReducer
    }
}

export default connect(mapStateToProps, null)(PlaylistComponent);
