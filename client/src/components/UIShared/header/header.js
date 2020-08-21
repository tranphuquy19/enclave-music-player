import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css'
import ToggleDark from '../../../containers/ToggleDark';
import {logout} from '../../../store/actions/UserActions';

import SearchBar from '../../../containers/SearchBar';
import { connect } from 'react-redux';


class Header extends Component {
    // logOut(event) {
    //     event.preventDefault()
    //     localStorage.removeItem('usertoken')
    //     this.props.history.push('/')
    // }
    render() {
        const {user} = this.props;
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
                    <NavLink exact to="/songs" className="nav-item">Hi, {user.username}!</NavLink>
                    <NavLink exact to="/" className="nav-item" onClick={this.props._logout}>Log out</NavLink>
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
                    <SearchBar />
                    <ToggleDark />
                    {user.token ? userLink : loginRegLink}
                </nav>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        _logout: () => {
            dispatch(logout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);