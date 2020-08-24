import React from 'react';
import './CardAlbumHome.css'
import { NavLink } from 'react-router-dom';

const CardAlbumHome = (props) => {
    const {album} = props;
    const {artist} = album;
    return (
                <ul>
                    <li><img src={album.cover} alt={album.title} /></li>
                    <li>
                        <h4><NavLink className="hover-album" to={`/album/${album.id}`}>{album.title}</NavLink></h4>
                        <span>{artist.name}</span>
                    </li>
                </ul>
    )

}

export default CardAlbumHome;