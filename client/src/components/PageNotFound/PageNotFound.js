import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './PageNotFound.css'

class PageNotFound extends Component {
    render() {
        return (
            <div className="notfound">
                <div className="notfound-con">
                    <div className="notfound-404">
                        <h1>Oops!</h1>
                    </div>
                    <h2>404 - Page not found</h2>
                    <NavLink to="/" className="button" >GO TO HOMEPAGE</NavLink>
                </div>
            </div>
        );
    }
}

export default PageNotFound;