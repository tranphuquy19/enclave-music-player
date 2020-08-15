import React, { Component } from 'react';
import Header from '../components/UIShared/header/header';
import Sidebar from '../components/UIShared/sidebar/sidebar';
import TrackList from '../containers/Track';
import './page.css'

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
            </>
        );
    }
}

export default TrackListPage;