import React, { Component } from 'react';
import axios from 'axios';
import CardAlbumPage from '../components/features/CardAlbumPage/CardAlbumPage';


class AlbumPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            albums: []
        }
    }

    componentDidMount() {
        const albumlds = [108447472, 42710961, 11794498, 13833514, 62869222]; //  
        albumlds.map(async (id) => {
            let { data } = await axios({
                method: 'GET',
                url: `https://api.doraneko.tk/album/${id}`,
                data: null
            });
            let album = [...this.state.albums, data];
            this.setState({
                albums: album
            })
        })

    }
    render() {
        return (
            <div className="container-right">
            <div className="album">
                {/* <div className="album-container"> */}

                    {this.showAlbumPages()}
                {/* </div> */}
            </div>
            </div>

        );
    }
    showAlbumPages() {
        let { albums } = this.state;
        let result = null;
        if (albums.length > 0) {
            result = albums.map(album => {
                return <CardAlbumPage key={album.id} album={album} />
            })
        }
        return result;
    }
}

export default AlbumPage;