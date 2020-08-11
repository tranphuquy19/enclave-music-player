import React, {Component} from "react";
import {PlaylistItemComponent} from "./PlaylistItemComponent";

export class PlaylistComponent extends Component {
    render() {
        return <div className="playlists">
            <h2 className="main_text">Playlist Hot !</h2>
            <h3 className="sub_main_text">The most played playlist on Music player this week</h3>
            <PlaylistItemComponent/>
        </div>;
    }
}
