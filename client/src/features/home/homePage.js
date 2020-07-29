import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faPlay, faMoon } from '@fortawesome/free-solid-svg-icons'
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import './homePage.css';
import logo from '../../assets/img/avatar2.png';

class HomePage extends Component {
    render() {
        return (
            <div className="home-page">
                {/* Track */}
                <div className="track-list">
                    {/* popular_song */}
                    <span className="track-txt">Popular songs</span>
                    {/* track_list */}
                    <ul>
                        <li className="track-li">
                            <div className="track-point"></div>
                            <div><img src={logo} alt="" /></div>
                            <div className="track-author">
                                <h4>Em cua ngay hom qua</h4>
                                <span>Son Tung M-TP</span>
                            </div>
                            <div className="track-actions">
                                <div className="track-toolbar">
                                    <button className="track-icon">
                                        <FontAwesomeIcon
                                            title="Play"
                                            icon={faPlay} />
                                    </button>
                                    <button className="track-icon">
                                        <FontAwesomeIcon
                                            title="Add WishList"
                                            icon={faMoon} />
                                    </button>
                                    <button className="track-icon">
                                        <FontAwesomeIcon
                                            title="Download"
                                            icon={faDownload} />
                                    </button>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
                {/* Artist, Album */}
                <div className="album-list">
                    <Tabs defaultIndex={1} onSelect={index => console.log(index)}>
                        {/* Title Artist, Album */}
                        <TabList style={{"border": "none"}}>
                            <Tab >
                                <div className="album-list-title">
                                    <span className="album-list-span">Album</span>
                                </div >
                            </Tab>
                            <Tab>
                                <div className="album-list-title">
                                    <span className="album-list-span">Artist</span>
                                </div >
                            </Tab>
                        </TabList>
                        {/* List */}
                        <TabPanel>
                            <div className="album-list-content">
                                <ul>
                                    <li><img src="https://zmp3-photo.zadn.vn/thumb/240_240/avatars/e/e/ee58fcc0ff45002b8d416bd7685809ce_1487040461.jpg" alt="img-album" /></li>
                                    <li>
                                        <h4>Em cua ngay hom qua</h4>
                                        <span>Son Tung M-TP</span>
                                    </li>
                                </ul>
                            </div>
                        </TabPanel>
                        <TabPanel><div className="album-list-content">
                            <ul>
                                <li><img src="https://zmp3-photo.zadn.vn/thumb/240_240/avatars/e/e/ee58fcc0ff45002b8d416bd7685809ce_1487040461.jpg" alt="img-album" /></li>
                                <li>
                                    <h4>Son Tung M-TP</h4>
                                    <span>Viet Nam</span>
                                </li>
                            </ul>
                        </div></TabPanel>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default HomePage;