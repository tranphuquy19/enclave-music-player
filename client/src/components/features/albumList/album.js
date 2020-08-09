import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './album.css'

class Album extends Component {
    render() {
        return (
            <div className="album">
                <div className="album-container">
                    <div className="album-card">
                        <div className="face face1">
                            <div className="content">
                                <div className="icon">
                                    <img src="https://baokhanhhoa.vn/dataimages/201710/original/images5312868_sontung.jpg" alt="img-album" style={{ "width": "300px" }} />
                                </div>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <h3>
                                    <NavLink to="/aaa"> Son Tung M-TP </NavLink>
                                </h3>
                                <p>Viet Nam</p>
                            </div>
                        </div>
                    </div>
                    <div className="album-card">
                        <div className="face face1">
                            <div className="content">
                                <div className="icon">
                                    <img src="https://baokhanhhoa.vn/dataimages/201710/original/images5312868_sontung.jpg" alt="img-album" style={{ "width": "300px" }} />
                                </div>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <h3>
                                    <NavLink to="/aaa"> Son Tung M-TP </NavLink>
                                </h3>
                                <p>Viet Nam</p>
                            </div>
                        </div>
                    </div>
                    <div className="album-card">
                        <div className="face face1">
                            <div className="content">
                                <div className="icon">
                                    <img src="https://baokhanhhoa.vn/dataimages/201710/original/images5312868_sontung.jpg" alt="img-album" style={{ "width": "300px" }} />
                                </div>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <h3>
                                    <NavLink to="/aaa"> Son Tung M-TP </NavLink>
                                </h3>
                                <p>Viet Nam</p>
                            </div>
                        </div>
                    </div>
                    <div className="album-card">
                        <div className="face face1">
                            <div className="content">
                                <div className="icon">
                                    <img src="https://baokhanhhoa.vn/dataimages/201710/original/images5312868_sontung.jpg" alt="img-album" style={{ "width": "300px" }} />
                                </div>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <h3>
                                    <NavLink to="/aaa"> Son Tung M-TP </NavLink>
                                </h3>
                                <p>Viet Nam</p>
                            </div>
                        </div>
                    </div>

                    </div>
            </div>
        );
    }
}

export default Album;