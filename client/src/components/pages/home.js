import React, { Component } from 'react';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import TrackList from '../../features/trackList/trackList';

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Sidebar />
                <TrackList />
            </div>
        );
    }
}

export default Home;