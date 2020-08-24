import React, { Component } from 'react';
import './sidebar.css'
import { NavLink } from 'react-router-dom';
import Logo from '../../../assets/img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faLayerGroup, faPlayCircle, faPeopleArrows } from '@fortawesome/free-solid-svg-icons';


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
                            <FontAwesomeIcon icon={faMusic} />
                            <span>Track List</span>
                        </NavLink>
                        <NavLink to="/album" className="sidebar_item" activeClassName="activeLink">
                            <FontAwesomeIcon icon={faLayerGroup} />
                            <span>Album Page</span>
                        </NavLink>
                        <NavLink to="/artist" className="sidebar_item" activeClassName="activeLink">
                            <FontAwesomeIcon icon={faPeopleArrows} />
                            <span>Artist Page</span>
                        </NavLink>
                    </section>
                    <section className="sidebar_libra">
                        <h4>List Favorite</h4>
                        <NavLink to="/songs" className="sidebar_item" activeClassName="activeLink">
                            <FontAwesomeIcon icon={faPlayCircle} />
                            <span>Songs</span>
                        </NavLink>
                    </section>
                    <section className="sidebar_des">
                        <span>Designed by </span><br/>
                        <span style={{"fontWeight": "bold"}}>Curtis x Christian</span>
                    </section>
                </div>
            </div>
        );
    }
}

export default Sidebar;