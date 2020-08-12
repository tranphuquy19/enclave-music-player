import React, { Component } from 'react';
import './sidebar.css'
import { NavLink } from 'react-router-dom';
import Logo from '../../../assets/img/logo.png'


class Sidebar extends Component {
    render() {
        return (
            <div id="sidebar">
                <div className="custom_sidebar">
                    <section className="logo">
                        <NavLink to="/"><img src={Logo} alt="logo" /></NavLink>
                    </section>
                    <section className="sidebar_menu">
                        <NavLink to="/tracklist" className="sidebar_item" activeClassName="activeLink">
                            <span>Track List</span>
                        </NavLink>
                        <NavLink to="/album" className="sidebar_item" activeClassName="activeLink">
                            <span>Album List</span>
                        </NavLink>
                    </section>
                    <section className="sidebar_libra">
                        <h4>List Favorite</h4>
                        <NavLink to="/aaa" className="sidebar_item" activeClassName="activeLink">
                            <span>Songs</span>
                        </NavLink>
                    </section>
                </div>
            </div>
        );
    }
}

export default Sidebar;