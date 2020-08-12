import React, { Component } from 'react';
import Header from '../components/UIShared/header/header';
import Sidebar from '../components/UIShared/sidebar/sidebar';
import AlbumPage from '../containers/AlbumPage';

class AlbumPages extends Component {
    render() {
        return (
            <>
                <Header />
                <Sidebar />
                <div className="background-home home-page" >
                    <AlbumPage />
                </div>
            </>
        );
    }
}

export default AlbumPages;