import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './header.css'
import ToggleDark from '../../../containers/ToggleDark';


class Header extends Component {
    logOut(event) {
        event.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }
    render() {
        const loginRegLink = (
            <div className="nav-menu">
                <ul className="nav-content">
                    <NavLink exact to="/signin" className="nav-item">Log in</NavLink>
                    <NavLink exact to="/signup" className="nav-item">Register</NavLink>
                </ul>
            </div>
        )
        const userLink = (
            <div className="nav-menu">
                <ul className="nav-content">
                    <NavLink exact to="/songs" className="nav-item">Hi!</NavLink>
                    <NavLink exact to="/" className="nav-item" onClick={this.logOut.bind(this)}>Log out</NavLink>
                </ul>
            </div>
        )

        return (
                
                <nav id="navbar1" className="navbar collapsed">
                    <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapsed"
                    data-targer="#navbar1"
                    aria-controls="navbar1"
                    aria-expanded="false"
                    aria-label="Toggle navigation" >
                    <span className="navbar-toggle-icon"></span>
                </button>
                    <div className="search-box">
                        <input className="search-txt" type="text" placeholder='Search for artists, songs & album' />
                        <FontAwesomeIcon className="search-btn" icon={faSearch} />
                    </div>
                    <ToggleDark />
                    {localStorage.usertoken ? userLink : loginRegLink}
                </nav>
        );
    }

}

export default withRouter(Header);