import React, {Component} from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import './App.css';
import {HeaderComponent} from "./components/header/HeaderComponent_";
import {SidebarComponent} from "./components/sidebar/SidebarComponent_";
import {AlbumComponent} from "./components/album/_AlbumComponent";
import {PlaylistComponent} from "./components/playlist/PlaylistComponent_";
import {ArtistComponent} from "./components/artist/_ArtistComponent";
import {TrackComponent} from "./components/track/TrackComponent_";
import PlayerComponent from "./components/player/_PlayerComponent";
import {connect} from "react-redux";
import {loadAlbumsSeed} from "./store/actions/AlbumActions";
import {loadArtistsSeed} from "./store/actions/ArtistActions";

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props._loadAlbumsSeed();
        this.props._loadArtistsSeed();
    }

    render() {
        return (
            <div className="app">
                <HeaderComponent/>
                <div id="main">
                    <SidebarComponent/>
                    <div id="mainContainer">
                        <AlbumComponent/>
                        <PlaylistComponent/>
                        <ArtistComponent/>
                        <TrackComponent/>
                    </div>
                </div>
                <PlayerComponent/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        _loadAlbumsSeed: () => {
            dispatch(loadAlbumsSeed());
        },

        _loadArtistsSeed: () => {
            dispatch(loadArtistsSeed());
        }
    }
}

export default connect(null, mapDispatchToProps)(App);
