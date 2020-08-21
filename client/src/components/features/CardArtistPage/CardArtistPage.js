import React from 'react';
import { NavLink } from 'react-router-dom'
import './CardArtistPage.css'

const CardArtistPage = (props) => {
    const { artist } = props;
    return (
        <div className="artist-card">
            <div className="face face1">
                <div className="content">
                    <div className="icon">
                        <img src={artist.picture} alt={artist.title} style={{ "width": "300px", "height" : "200px" }} />
                    </div>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <h3>
                        <NavLink to={`/artist/${artist.id}`}> {artist.name} </NavLink>
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default CardArtistPage;