import React, { Component } from 'react';
import Header from '../components/UIShared/header/header';
import Sidebar from '../components/UIShared/sidebar/sidebar';
import Register from '../components/features/Login/Register';


class RegisterPages extends Component {
    render() {
        return (
            <>
                <Header />
                <Sidebar />
                <div className="background-home home-page" >
                    <Register />
                </div>
            </>
        );
    }
}

export default RegisterPages;