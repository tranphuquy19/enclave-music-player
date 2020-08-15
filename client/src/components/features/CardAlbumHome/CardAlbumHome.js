import React from 'react';
import './CardAlbumHome.css'

const CardAlbumHome = (props) => {
    const {album} = props;
    const {artist} = album;
    // const {tracks} = album;
    // const artists = tracks.map(track => track.artist)
    // // artists = Array.from(new Set(artists));
    // // const {name} = artists
    // console.log("L8", artists);
    // const name = artists.map(name => name.name);
    
    // console.log('L11', name);
    return (
                <ul>
                    <li><img src={album.cover} alt={album.title} /></li>
                    <li>
                        <h4>{album.title}</h4>
                        <span>{artist.name}</span>
                    </li>
                </ul>
    )

}

export default CardAlbumHome;