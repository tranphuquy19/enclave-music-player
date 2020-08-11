import React, {Component} from "react";

export class ArtistListComponent extends Component {
    render() {
        return <ul className="artist_list">
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
        </ul>;
    }
}
