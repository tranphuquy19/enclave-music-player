/*
 * Created by @tranphuquy19 on 11/08/2020
 * @author: tranphuquy19@gmail.com
 */
import React, {Component} from 'react';
import Slider from "rc-slider";

class PlayerComponent extends Component {
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
        );
    }
}

export default PlayerComponent;
