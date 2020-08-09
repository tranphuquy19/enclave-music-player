import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './header.css'


class Header extends Component {
    render() {
        return (
                <nav className="navbar">
                    <div className="search-box">
                        <input className="search-txt" type="text" placeholder='Search for artists, songs & album' />
                        <FontAwesomeIcon className="search-btn" icon={faSearch} />
                    </div>
                    <div className="nav-menu">
                        <ul className="nav-content">
                            <NavLink exact to="/login" className="nav-item">Log in</NavLink>
                        </ul>
                    </div>
                </nav>
        );
    }
}

export default Header;