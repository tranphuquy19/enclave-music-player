import React, { Component } from 'react';
import TrackList from '../containers/Track';
import Header from '../components/UIShared/header/header';
import Sidebar from '../components/UIShared/sidebar/sidebar';
import AlbumHome from '../containers/AlbumHome';
import './page.css'

class HomePage extends Component {
    render() {
        return (
            <>
                <Header />
                <Sidebar />
                <div className="background-home home-page" >
                    <div className="track-list">
                        <TrackList />
                    </div>
                    <AlbumHome />
                </div>
                {/* {routerRendering(homeRoutes, false)} */}
            </>
        );
    }
}

export default HomePage;