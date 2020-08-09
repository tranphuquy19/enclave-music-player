import React, { Component } from 'react';

import axios from 'axios';
import CardTrack from '../components/features/CardTrack/CardTrack';

class TrackList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tracks: []
        }
    }
    async componentDidMount() {
        let {data} = await axios({
            method: 'GET',
            url: 'https://api.doraneko.tk/playlist/789794642',
            data: null
        });

        this.setState({
            tracks: data.tracks
        })
        console.log(this.state.tracks);
    }
    render() {
        return (
            <div className="home-page">
                {/* Track */}
                <div className="track-list">
                    {/* popular_song */}
                    <span className="track-txt">Popular songs</span>
                    {/* track_list */}
                        {/* {
                        tracks.data.map((track) => (
                            <CardTrack key={track.id} track={track} />
                        ))} */}
                        {this.showTracks()}
                </div>
            </div>
        );
    }
    showTracks() {
        let {tracks} = this.state;
        let result = null;
        if (tracks.length > 0) {
            result = tracks.map(track => {
                return <CardTrack key={track.id} track={track} />
                // return <p key={track.id}>123</p>
            })
        }
        return result;
    }
    
}

export default TrackList;