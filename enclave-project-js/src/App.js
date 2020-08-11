import React, {Component} from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }

    onSliderChange = (value) => {
        this.setState(
            {
                value
            },
            () => {
                console.log(this.state.value);
            }
        );
    };

    render() {
        return (
            <div className="app">
                <header id="navbar">
                    <h1 className="logo">Music player</h1>
                    {/*<nav>*/}
                    {/*    <ul className="nav_links">*/}
                    {/*        <li><a href="#">Search</a></li>*/}
                    {/*        <li><a href="#">Playlist</a></li>*/}
                    {/*        <li><a href="#">Albums</a></li>*/}
                    {/*        <li><a href="#">Artists</a></li>*/}
                    {/*    </ul>*/}
                    {/*</nav>*/}
                    <div className="search">
                        <input type="text" placeholder="Search..."/>
                    </div>
                    <a href="#" className="cta">
                        <button>Login</button>
                    </a>
                </header>
                <div id="main">
                    <div id="sidebar">
                        <ul className="sidebar-items">
                            <li className="sidebar-item">
                                <i className="far fa-music"></i>
                                <span className="sidebar_link">Music</span>
                            </li>
                            <li className="sidebar-item">
                                <i className="far fa-compact-disc"></i>
                                <span className="sidebar_link">Album</span>
                            </li>
                            <li className="sidebar-item">
                                <i className="fal fa-list-music"></i>
                                <span className="sidebar_link">Playlist</span>
                            </li>
                            <li className="sidebar-item">
                                <i className="fal fa-user-music"></i>
                                <span className="sidebar_link">Artist</span>
                            </li>
                        </ul>
                    </div>
                    <div id="mainContainer">
                        <div className="albums">
                            <h2 className="main_text">Albums Hot !</h2>
                            <h3 className="sub_main_text">The most played albums on Music player this week</h3>
                            <ul className="album_list">
                                <li className="album_item">
                                    <img
                                        src="https://e-cdns-images.dzcdn.net/images/cover/ae1b8fe2d9740ac12b5697dfb4bcb8bd/250x250-000000-80-0-0.jpg"
                                        alt="" className="album_img"/>
                                    <div className="album_play_icon"><i className="fas fa-spinner fa-pulse"></i></div>
                                    <p className="album_title">Logo Negro 1</p>
                                </li>
                                <li className="album_item">
                                    <img
                                        src="https://e-cdns-images.dzcdn.net/images/cover/de76aad08e006fde7d034d2d9f865299/264x264-000000-80-0-0.jpg"
                                        alt="" className="album_img"/>
                                    <div className="album_play_icon"><i className="fas fa-play"></i></div>
                                    <p className="album_title">Logo Negro 1</p>
                                </li>
                                <li className="album_item">
                                    <img
                                        src="https://e-cdns-images.dzcdn.net/images/cover/44ad465a68a72905dff9fcae7c0fe92e/264x264-000000-80-0-0.jpg"
                                        alt="" className="album_img"/>
                                    <div className="album_play_icon"><i className="fas fa-play"></i></div>
                                    <p className="album_title">Logo Negro 1</p>
                                </li>
                                <li className="album_item">
                                    <img
                                        src="https://e-cdns-images.dzcdn.net/images/cover/62d476a92c49d09e1c016ed5bbbc29eb/264x264-000000-80-0-0.jpg"
                                        alt="" className="album_img"/>
                                    <div className="album_play_icon"><i className="fas fa-play"></i></div>
                                    <p className="album_title">Logo Negro 1</p>
                                </li>
                                <li className="album_item">
                                    <img
                                        src="https://e-cdns-images.dzcdn.net/images/cover/ca192a6a0d205fd2c66a1d01c9e0d49d/264x264-000000-80-0-0.jpg"
                                        alt="" className="album_img"/>
                                    <div className="album_play_icon"><i className="fas fa-play"></i></div>
                                    <p className="album_title">Logo Negro 1</p>
                                </li>
                                <li className="album_item">
                                    <img
                                        src="https://e-cdns-images.dzcdn.net/images/cover/3cd154b7ee332e7fb0dc3e8bd4085f6b/264x264-000000-80-0-0.jpg"
                                        alt="" className="album_img"/>
                                    <div className="album_play_icon"><i className="fas fa-play"></i></div>
                                    <p className="album_title">Logo Negro 1</p>
                                </li>
                                <li className="album_item">
                                    <img
                                        src="https://e-cdns-images.dzcdn.net/images/cover/71693ef84b80cb7c6b479c59186200b2/264x264-000000-80-0-0.jpg"
                                        alt="" className="album_img"/>
                                    <div className="album_play_icon"><i className="fas fa-play"></i></div>
                                    <p className="album_title">Logo Negro 1</p>
                                </li>

                            </ul>
                        </div>
                        <div className="playlists">
                            <h2 className="main_text">Playlist Hot !</h2>
                            <h3 className="sub_main_text">The most played playlist on Music player this week</h3>
                            <div className="playlist_item">
                                <div className="playlist_left">
                                    <img
                                        className="playlist_img"
                                        src="https://e-cdns-images.dzcdn.net/images/cover/8657f00fce23d60e14184678e54af89f-defc59292092999527661e80b87dd2ea-9e4f8137687259740d86ea2fee940bd3-79acfa794026124d6add859e2aa66303/250x250-000000-80-0-0.jpg"
                                        alt="playlist"/>
                                    <button className="playlist_play_btn">
                                        <i className="fal fa-play"></i>
                                    </button>
                                </div>
                                <div className="playlist_right">
                                    <ul className="playlist_track_list">
                                        <li className="playlist_track_item">
                                            <p className="playlist_track_name">
                                                <span className="playlist_track_artist">Sơn Tùng MTP </span>
                                                - Anh không phải dạng vừa đâu
                                            </p>
                                            <div className="action_group_btn">
                                                <button className="playlist_track_like_btn track_btn">
                                                    <i className="fas fa-thumbs-up"></i>
                                                    <span>123</span>
                                                </button>
                                                <button className="playlist_track_unlike_btn track_btn">
                                                    <i className="fas fa-thumbs-down"></i>
                                                    <span>0</span>
                                                </button>
                                                <button className="playlist_track_rank track_btn">
                                                    <i className="fas fa-analytics"></i>
                                                    <span>123123</span>
                                                </button>
                                            </div>
                                        </li>
                                        <li className="playlist_track_item">
                                            <p className="playlist_track_name">
                                                <span className="playlist_track_artist">Sơn Tùng MTP </span>
                                                - Anh không phải dạng vừa đâu
                                            </p>
                                            <div className="action_group_btn">
                                                <button className="playlist_track_like_btn track_btn">
                                                    <i className="fas fa-thumbs-up"></i>
                                                    <span>123</span>
                                                </button>
                                                <button className="playlist_track_unlike_btn track_btn">
                                                    <i className="fas fa-thumbs-down"></i>
                                                    <span>0</span>
                                                </button>
                                                <button className="playlist_track_rank track_btn">
                                                    <i className="fas fa-analytics"></i>
                                                    <span>123123</span>
                                                </button>
                                            </div>
                                        </li>
                                        <li className="playlist_track_item">
                                            <p className="playlist_track_name">
                                                <span className="playlist_track_artist">Sơn Tùng MTP </span>
                                                - Anh không phải dạng vừa đâu
                                            </p>
                                            <div className="action_group_btn">
                                                <button className="playlist_track_like_btn track_btn">
                                                    <i className="fas fa-thumbs-up"></i>
                                                    <span>123</span>
                                                </button>
                                                <button className="playlist_track_unlike_btn track_btn">
                                                    <i className="fas fa-thumbs-down"></i>
                                                    <span>0</span>
                                                </button>
                                                <button className="playlist_track_rank track_btn">
                                                    <i className="fas fa-analytics"></i>
                                                    <span>123123</span>
                                                </button>
                                            </div>
                                        </li>
                                        <li className="playlist_track_item">
                                            <p className="playlist_track_name">
                                                <span className="playlist_track_artist">Sơn Tùng MTP </span>
                                                - Anh không phải dạng vừa đâu
                                            </p>
                                            <div className="action_group_btn">
                                                <button className="playlist_track_like_btn track_btn">
                                                    <i className="fas fa-thumbs-up"></i>
                                                    <span>123</span>
                                                </button>
                                                <button className="playlist_track_unlike_btn track_btn">
                                                    <i className="fas fa-thumbs-down"></i>
                                                    <span>0</span>
                                                </button>
                                                <button className="playlist_track_rank track_btn">
                                                    <i className="fas fa-analytics"></i>
                                                    <span>123123</span>
                                                </button>
                                            </div>
                                        </li>
                                        <li className="playlist_track_item">
                                            <p className="playlist_track_name">
                                                <span className="playlist_track_artist">Sơn Tùng MTP </span>
                                                - Anh không phải dạng vừa đâu
                                            </p>
                                            <div className="action_group_btn">
                                                <button className="playlist_track_like_btn track_btn">
                                                    <i className="fas fa-thumbs-up"></i>
                                                    <span>123</span>
                                                </button>
                                                <button className="playlist_track_unlike_btn track_btn">
                                                    <i className="fas fa-thumbs-down"></i>
                                                    <span>0</span>
                                                </button>
                                                <button className="playlist_track_rank track_btn">
                                                    <i className="fas fa-analytics"></i>
                                                    <span>123123</span>
                                                </button>
                                            </div>
                                        </li>
                                        <li className="playlist_track_item">
                                            <p className="playlist_track_name">
                                                <span className="playlist_track_artist">Sơn Tùng MTP </span>
                                                - Anh không phải dạng vừa đâu
                                            </p>
                                            <div className="action_group_btn">
                                                <button className="playlist_track_like_btn track_btn">
                                                    <i className="fas fa-thumbs-up"></i>
                                                    <span>123</span>
                                                </button>
                                                <button className="playlist_track_unlike_btn track_btn">
                                                    <i className="fas fa-thumbs-down"></i>
                                                    <span>0</span>
                                                </button>
                                                <button className="playlist_track_rank track_btn">
                                                    <i className="fas fa-analytics"></i>
                                                    <span>123123</span>
                                                </button>
                                            </div>
                                        </li>
                                        <li className="playlist_track_item">
                                            <p className="playlist_track_name">
                                                <span className="playlist_track_artist">Sơn Tùng MTP </span>
                                                - Anh không phải dạng vừa đâu
                                            </p>
                                            <div className="action_group_btn">
                                                <button className="playlist_track_like_btn track_btn">
                                                    <i className="fas fa-thumbs-up"></i>
                                                    <span>123</span>
                                                </button>
                                                <button className="playlist_track_unlike_btn track_btn">
                                                    <i className="fas fa-thumbs-down"></i>
                                                    <span>0</span>
                                                </button>
                                                <button className="playlist_track_rank track_btn">
                                                    <i className="fas fa-analytics"></i>
                                                    <span>123123</span>
                                                </button>
                                            </div>
                                        </li>
                                        <li className="playlist_track_item">
                                            <p className="playlist_track_name">
                                                <span className="playlist_track_artist">Sơn Tùng MTP </span>
                                                - Anh không phải dạng vừa đâu
                                            </p>
                                            <div className="action_group_btn">
                                                <button className="playlist_track_like_btn track_btn">
                                                    <i className="fas fa-thumbs-up"></i>
                                                    <span>123</span>
                                                </button>
                                                <button className="playlist_track_unlike_btn track_btn">
                                                    <i className="fas fa-thumbs-down"></i>
                                                    <span>0</span>
                                                </button>
                                                <button className="playlist_track_rank track_btn">
                                                    <i className="fas fa-analytics"></i>
                                                    <span>123123</span>
                                                </button>
                                            </div>
                                        </li>
                                        <li className="playlist_track_item">
                                            <p className="playlist_track_name">
                                                <span className="playlist_track_artist">Sơn Tùng MTP </span>
                                                - Anh không phải dạng vừa đâu
                                            </p>
                                            <div className="action_group_btn">
                                                <button className="playlist_track_like_btn track_btn">
                                                    <i className="fas fa-thumbs-up"></i>
                                                    <span>123</span>
                                                </button>
                                                <button className="playlist_track_unlike_btn track_btn">
                                                    <i className="fas fa-thumbs-down"></i>
                                                    <span>0</span>
                                                </button>
                                                <button className="playlist_track_rank track_btn">
                                                    <i className="fas fa-analytics"></i>
                                                    <span>123123</span>
                                                </button>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                                <div className="playlist_bottom">
                                    <a href="#" className="playlist_text_name">TOP VPOP in 2020</a>
                                    <button className="playlist_goto_btn">Go To Playlist</button>
                                </div>
                            </div>
                        </div>
                        <div className="artists">
                            <h2 className="main_text">Top Artists!</h2>
                            <ul className="artist_list">
                                <li className="artist_item">
                                    <div className="artist_avatar">
                                        <img
                                            src="https://cdns-images.dzcdn.net/images/artist/49306d85a9b0856516dfa8bf08481065/250x250-000000-80-0-0.jpg"
                                            alt="namewee" className="artist_avatar_img"/>
                                        <button className="artist_play_btn">
                                            <i className="fas fa-play"></i>
                                        </button>
                                    </div>
                                    <p className="artist_text_name">Namewee</p>
                                </li>
                                <li className="artist_item">
                                    <div className="artist_avatar">
                                        <img
                                            src="https://e-cdns-images.dzcdn.net/images/artist/e1307dfb5cda23df346e1fa18e8b4feb/250x250-000000-80-0-0.jpg"
                                            alt="namewee" className="artist_avatar_img"/>
                                        <button className="artist_play_btn">
                                            <i className="fas fa-play"></i>
                                        </button>
                                    </div>
                                    <p className="artist_text_name">Son Tung M-TP</p>
                                </li>
                                <li className="artist_item">
                                    <div className="artist_avatar">
                                        <img
                                            src="https://e-cdns-images.dzcdn.net/images/artist/3cf013a2e7ef3408e27d24dfc79ec5e2/250x250-000000-80-0-0.jpg"
                                            alt="namewee" className="artist_avatar_img"/>
                                        <button className="artist_play_btn">
                                            <i className="fas fa-play"></i>
                                        </button>
                                    </div>
                                    <p className="artist_text_name">Bich Phuong</p>
                                </li>
                                <li className="artist_item">
                                    <div className="artist_avatar">
                                        <img
                                            src="https://e-cdns-images.dzcdn.net/images/artist/fb59d54a36639e2ae1ccac0b8c7ba23f/250x250-000000-80-0-0.jpg"
                                            alt="namewee" className="artist_avatar_img"/>
                                        <button className="artist_play_btn">
                                            <i className="fas fa-play"></i>
                                        </button>
                                    </div>
                                    <p className="artist_text_name">Hoang Thuy Linh</p>
                                </li>
                                <li className="artist_item">
                                    <div className="artist_avatar">
                                        <img
                                            src="https://e-cdns-images.dzcdn.net/images/cover/db06554f57e0398aa6c6ed2d2265cd69/264x264-000000-80-0-0.jpg"
                                            alt="namewee" className="artist_avatar_img"/>
                                        <button className="artist_play_btn">
                                            <i className="fas fa-play"></i>
                                        </button>
                                    </div>
                                    <p className="artist_text_name">Đen</p>
                                </li>
                                <li className="artist_item">
                                    <div className="artist_avatar">
                                        <img
                                            src="https://e-cdns-images.dzcdn.net/images/artist/f100871627af17d03566448ace7f1e63/250x250-000000-80-0-0.jpg"
                                            alt="namewee" className="artist_avatar_img"/>
                                        <button className="artist_play_btn">
                                            <i className="fas fa-play"></i>
                                        </button>
                                    </div>
                                    <p className="artist_text_name">Amee</p>
                                </li>
                                <li className="artist_item">
                                    <div className="artist_avatar">
                                        <img
                                            src="https://e-cdns-images.dzcdn.net/images/artist/bfe69165ed1fbb8a4018fa1d8768f28d/250x250-000000-80-0-0.jpg"
                                            alt="namewee" className="artist_avatar_img"/>
                                        <button className="artist_play_btn">
                                            <i className="fas fa-play"></i>
                                        </button>
                                    </div>
                                    <p className="artist_text_name">Lynk Lee</p>
                                </li>
                            </ul>
                        </div>
                        <div className="tracks">

                        </div>
                    </div>
                </div>
                <div id="player">
                    <div id="player_ctr_btns">
                        <button className="player_btn previous_btn">
                            <i className="fas fa-arrow-to-left"></i>
                        </button>
                        <button className="player_btn play_btn">
                            <i className="fas fa-play"></i>
                        </button>
                        <button className="player_btn next_btn">
                            <i className="fas fa-arrow-to-right"></i>
                        </button>
                        <button className="player_btn random_btn">
                            <i className="far fa-random"></i>
                        </button>
                        <button className="player_btn repeat_btn">
                            <i className="far fa-repeat-alt"></i>
                        </button>
                    </div>
                    <div id="player_timer">
                        <p className="player_timer_text">0:00</p>
                        <div className="player_slider">
                            <Slider
                                min={0}
                                max={250}
                                value={this.state.value}
                                onChange={this.onSliderChange}
                                railStyle={{
                                    height: 2
                                }}
                                handleStyle={{
                                    height: 9,
                                    width: 9,
                                    marginLeft: 0,
                                    marginTop: -3,
                                    backgroundColor: "#4b0082",
                                    border: 0
                                }}
                                trackStyle={{
                                    backgroundColor: "#6F339B"
                                }}
                            />
                        </div>
                        <p className="player_timer_text">0:00</p>
                        <button className="player_btn volume_btn">
                            <i className="far fa-volume"></i>
                        </button>
                    </div>
                    <div id="player_track_info">
                        <div id="player_track_image">
                            <img
                                src="https://cdns-images.dzcdn.net/images/artist/ded836df53650e375ed01e2f497f8940/56x56-000000-80-0-0.jpg"
                                alt="" className="track_img_sm"/>
                        </div>
                        <div id="player_track_text">
                            <p className="player_track_artist_name_text">BIGBANG</p>
                            <p className="player_track_name_text">IF YOU</p>
                        </div>
                        <div id="player_track_info_btn">
                            <button className="player_btn playlist_btn">
                                <i className="fas fa-list-ul"></i>
                            </button>
                        </div>
                    
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
