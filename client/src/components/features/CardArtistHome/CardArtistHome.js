import React from 'react';

const CardArtistHome = (props) => {
    console.log(props);
    const { artist } = props;
    // const { name, pictureMedium } = artist;
    
    return (
        <div className="album-list-content">
            <ul>
                <li><img src={"pictureMedium"} alt={"name"} /></li>
                <li>
                    <h4>{"name"}</h4>
                </li>
            </ul>
        </div>
    )
}

export default CardArtistHome;