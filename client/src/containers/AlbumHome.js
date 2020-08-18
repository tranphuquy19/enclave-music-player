import React, { Component } from 'react';
import axios from 'axios';
import CardAlbumHome from '../components/features/CardAlbumHome/CardAlbumHome';
import { connect } from 'react-redux';


class AlbumHome extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className="album-list">
                <div className="album-list-title">
                    <span className="album-list-span">Album</span>
                </div >
                <div className="album-list-content">
                    {this.showAlbums()}
                </div>
            </div>
        );
    }
    showAlbums() {
        let { albums } = this.props;
        let result = null;
        if (albums.length > 0) {
            result = albums.slice(0, 6).map(album => {
                return <CardAlbumHome key={album.id} album={album} />
            })
        }
        return result;
    }
    
}
const mapStateToProps = state => {
    return {
        albums: state.albumsReducer
    }
}

export default connect(mapStateToProps, null) (AlbumHome);