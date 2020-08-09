import React, { Component } from 'react';
import Header from '../components/UIShared/header/header';
import Sidebar from '../components/UIShared/sidebar/sidebar';
import TrackList from '../components/features/home/homePage';
import routerRendering from '../components/commons/routerRendering';
import { homeRoutes } from '../components/routes/homeRoutes';

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