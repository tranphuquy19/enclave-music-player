import React, {Component} from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import './App.css';
import {HeaderComponent} from "./components/header/HeaderComponent_";
import {SidebarComponent} from "./components/sidebar/SidebarComponent_";
import {AlbumComponent} from "./components/album/AlbumComponent_";
import {PlaylistComponent} from "./components/playlist/PlaylistComponent_";
import {ArtistComponent} from "./components/artist/ArtistComponent_";
import {TrackComponent} from "./components/track/TrackComponent_";
import PlayerComponent from "./components/player/PlayerComponent";

class App extends Component {
    constructor(props) {
        super(props);
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

export default App;
