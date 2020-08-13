import React, { Component } from 'react';
import axios from 'axios';
import CardAlbumHome from '../components/features/CardAlbumHome/CardAlbumHome';


class AlbumHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            albums: []
        }
    }


    componentDidMount() {
        const albumlds = [108447472, 42710961, 11794498, 13833514, 62869222];
        albumlds.map(async (id) => {
            let { data } = await axios({
                method: 'GET',
                url: `https://api.doraneko.tk/album/${id}`,
                data: null
            });
            let album = [...this.state.albums, data];
            this.setState ({
                albums: album
            })
        })
        
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
        let { albums } = this.state;
        let result = null;
        if (albums.length > 0) {
            result = albums.slice(0, 6).map(album => {
                return <CardAlbumHome key={album.id} album={album} />
            })
        }
        return result;
    }
}

export default AlbumHome;