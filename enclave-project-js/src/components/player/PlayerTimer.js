/*
 * Created by @tranphuquy19 on 15/08/2020
 * @author: tranphuquy19@gmail.com
 */
import React, {Component} from 'react';
import Slider from "rc-slider";

class PlayerTimer extends Component {
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
        );
    }
}

export default PlayerTimer;
