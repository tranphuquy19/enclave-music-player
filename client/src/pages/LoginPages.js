import React, { Component } from 'react';
import Header from '../components/UIShared/header/header';
import Sidebar from '../components/UIShared/sidebar/sidebar';
import LoginPage from '../components/features/Login/LoginPage';


class LoginPages extends Component {
    render() {
        return (
            <>
                <Header />
                <Sidebar />
                <div className="background-home home-page" >
                    <LoginPage />
                </div>
            </>
        );
    }
}

export default LoginPages;