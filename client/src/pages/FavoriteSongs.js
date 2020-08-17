import React, { Component } from 'react';
import Header from '../components/UIShared/header/header';
import Sidebar from '../components/UIShared/sidebar/sidebar';
import YourFavoriteSongs from '../containers/YourFavoriteSongs'


class FavoriteSongs extends Component {
    render() {
        return (
            <>
                <Header />
                <Sidebar />
                <div className="background-home home-page" >
                    <YourFavoriteSongs />
                </div>
            </>
        );
    }
}

export default FavoriteSongs;