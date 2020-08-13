import React, { useEffect, useState, Component } from "react";
import "./PlayButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

class PlayButton extends Component {
    constructor(props) {
        super(props);
        let { url } = props;
        this.playPreview = this.playPreview.bind(this);
        // this.audioRef = React.createRef();
        this.state = {
            url,
            isPlaying: false
        }
    }
    // const { url } = props;
    // console.log('L777', url);
    // const [audio] = useState(new Audio(url));
    // const [playing, setPlaying] = useState(false);

    // const toggle = () => setPlaying(!playing);

    playPreview() {
        console.log(this.state);
        let audioElement = document.getElementById("my-audio");
        if (!this.state.isPlaying) {
            this.setState({ isPlaying: true });
            // this.audioRef.play();

            audioElement.setAttribute('src', this.state.url);
            audioElement.load();
            audioElement.play();
            audioElement.onended = (event) => {
                console.log('Video stopped either because 1) it was over, ' +
                    'or 2) no further data is available.');
                this.setState({
                    isPlaying: false
                })
            };
        } else {
            this.setState({ isPlaying: false });
            // this.audioRef.pause();
            // document.getElementById("my-audio").setAttribute('src', '#');
            audioElement.pause();
        }
    }

    // useEffect(() => {
    //     playing ? audio.play() : audio.pause();
    //     this.playPreview();
    // }, [audio, playing]);

    // useEffect(() => {
    //     audio.addEventListener("ended", () => setPlaying(false));
    //     return () => {
    //         audio.removeEventListener("ended", () => setPlaying(false));
    //     };
    // });

    render() {
        return (
            <>
                {/* <audio ref={(input) => { this.audioRef = input }} src={this.state.url} style={{ display: 'none' }} /> */}
                <FontAwesomeIcon
                    className="icon-controller"
                    icon={this.state.isPlaying ? faPause : faPlay}
                    onClick={this.playPreview}
                />
            </>

        );
    }
};

export default PlayButton;