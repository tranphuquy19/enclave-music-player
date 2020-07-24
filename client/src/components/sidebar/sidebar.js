import React, { Component } from 'react';
import './sidebar.css'
import { NavLink } from 'react-router-dom';


class Sidebar extends Component {
    render() {
        return (
            <div id="sidebar">
                <ul className="custom_sidebar">
                    <li>
                        <div className="logo">
                            <h2>Music</h2>
                        </div>
                    </li>
                    <li>
                        <ul className="sidebar_menu">
                            <li className="sidebar_li"><NavLink to="/tracklist">Track List</NavLink></li>
                            <li className="sidebar_li"><NavLink to="/album">Album List</NavLink></li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Sidebar;