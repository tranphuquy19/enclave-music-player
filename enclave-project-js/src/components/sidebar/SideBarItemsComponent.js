import React, {Component} from "react";

export class SideBarItemsComponent extends Component {
    render() {
        return <ul className="sidebar-items">
            <li className="sidebar-item">
                <i className="far fa-music"></i>
                <span className="sidebar_link">Music</span>
            </li>
            <li className="sidebar-item">
                <i className="far fa-compact-disc"></i>
                <span className="sidebar_link">Album</span>
            </li>
            <li className="sidebar-item">
                <i className="fal fa-list-music"></i>
                <span className="sidebar_link">Playlist</span>
            </li>
            <li className="sidebar-item">
                <i className="fal fa-user-music"></i>
                <span className="sidebar_link">Artist</span>
            </li>
        </ul>;
    }
}
