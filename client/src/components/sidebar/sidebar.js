import React, { Component } from 'react';
import './sidebar.css'


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
                            <li className="sidebar_li">Track List</li>
                            <li className="sidebar_li">Album List</li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Sidebar;