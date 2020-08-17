import React from 'react';
import { NavLink } from 'react-router-dom'
import './CardAlbumPage.css'

const CardAlbumPage = (props) => {
    const { album } = props;
    const { artist } = album;
    return (
        <div className="album-card">
            <div className="face face1">
                <div className="content">
                    <div className="icon">
                        <img src={album.cover} alt={album.title} style={{ "width": "300px", "height" : "200px" }} />
                    </div>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <h3>
                        <NavLink to={`/album/${album.id}`}> {album.title} </NavLink>
                    </h3>
                    <p>{artist.name}</p>
                </div>
            </div>
        </div>
    );
}

export default CardAlbumPage;