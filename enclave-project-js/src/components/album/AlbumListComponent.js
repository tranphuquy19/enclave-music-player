import React, {Component} from "react";
import {connect} from "react-redux";
import {AlbumItemComponent} from "./AlbumItemComponent";

class AlbumListComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {albums} = this.props;
        const listAlbums = albums.map((album, index) => <AlbumItemComponent {...album} key={index}/>)
        return (
            <ul className="album_list">
                {listAlbums}
            </ul>
        ); //end return
    }
}

const mapStateToProps = (state) => {
    return {
        albums: state.albumsReducer
    }
}

export default connect(mapStateToProps, null)(AlbumListComponent);
