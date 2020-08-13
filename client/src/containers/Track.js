import React, { Component } from 'react';

import axios from 'axios';
import CardTrack from '../components/features/CardTrack/CardTrack';
import Loading from '../components/UIShared/loading/Loading';

class TrackList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tracks: []
        }

    }
    async componentDidMount() {
        let { data } = await axios({
            method: 'GET',
            url: 'https://api.doraneko.tk/playlist/789794642',
            data: null
        });

        this.setState({
            tracks: data.tracks
        })
        // console.log(this.state.tracks);
    }
    render() {
        const { loading } = this.state;
        if (loading) return <Loading />;
        else {
            return (
                // Track
                <>
                    <span className="track-txt">Popular songs</span>
                    {/* {
                        tracks.data.map((track) => (
                            <CardTrack key={track.id} track={track} />
                        ))} */}
                    {this.showTracks()}
                </>
            );
        }
    }
    showTracks() {
        let { tracks } = this.state;
        let result = null;
        if (tracks.length > 0) {
            result = tracks.slice(0, 10).map(track => {
                return <CardTrack key={track.id} track={track} />
                // return <p key={track.id}>123</p>
            })
        }
        return result;
    }

}

export default TrackList;