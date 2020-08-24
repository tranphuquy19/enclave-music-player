import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardTrack from '../components/features/CardTrack/CardTrack';

class ResultTrack extends Component {
    render() {
        const {tracks} = this.props;
        let content = '';
        
        content = tracks.length > 0 
        ? tracks.map(track => <CardTrack key={track.id} track={track} />)
        : null;
        return (
            <div>
                {content}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    tracks: state.tracks.tracks
}
export default connect(mapStateToProps, null)(ResultTrack);