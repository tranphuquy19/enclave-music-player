import React, { Component } from 'react';
import Header from '../components/UIShared/header/header';
import Sidebar from '../components/UIShared/sidebar/sidebar';
import TrackList from '../containers/Track';
import './page.css'
import PlayerComponent from '../components/UIShared/playerBar/_PlayerComponent';

class TrackListPage extends Component {
    render() {
        return (
            <>
                <Header />
                <Sidebar />
                <div className="background-home home-page" >
                    <div className="track-list">
                    <TrackList />
                    </div>
                </div>
                <PlayerComponent />
            </>
        );
    }
}

export default TrackListPage;