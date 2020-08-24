import React, { Component } from 'react';
import Header from '../components/UIShared/header/header';
import Sidebar from '../components/UIShared/sidebar/sidebar';
import ArtistPage from '../containers/ArtistPage';

class ArtistPages extends Component {
    render() {
        return (
            <>
                <Header />
                <Sidebar />
                <div className="background-home home-page" >
                    <ArtistPage />
                </div>
            </>
        );
    }
}

export default ArtistPages;