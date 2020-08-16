import React, {Component} from "react";
import {connect} from "react-redux";
import {AlbumItemComponent} from "./AlbumItemComponent";

class AlbumListComponent extends Component {
    checkItemPlaying = ({id}) => {
        const {player} = this.props;
        const {belongTo, isPlaying} = player;
        return belongTo.type === 'album' && belongTo.id === id && isPlaying;
    }

    render() {
        const {albums, player} = this.props;

        const listAlbums = albums.map((album, index) =>
            <AlbumItemComponent
                {...album}
                key={index}
                player={player}
                isItemPlaying={this.checkItemPlaying(album)}/>)

        return (
            <ul className="album_list">
                {listAlbums}
            </ul>
        ); //end return
    }
}

const mapStateToProps = state => {
    return {
        albums: state.albumsReducer,
        player: state.playerReducer
    }
}

export default connect(mapStateToProps, null)(AlbumListComponent);
