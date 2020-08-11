import React, {Component} from "react";
import {AlbumList} from "./AlbumList";

export class AlbumComponent extends Component {
    render() {
        return <div className="albums">
            <h2 className="main_text">Albums Hot !</h2>
            <h3 className="sub_main_text">The most played albums on Music player this week</h3>
            <AlbumList/>
        </div>;
    }
}
