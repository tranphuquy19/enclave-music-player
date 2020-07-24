import React, { Component } from 'react';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import TrackList from '../../features/home/homePage';
import routerRendering from '../commons/routerRendering';
import { homeRoutes } from '../routes/homeRoutes';

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Sidebar />
                {/* <TrackList /> */}
                {routerRendering(homeRoutes, false)}
            </div>
        );
    }
}

export default Home;