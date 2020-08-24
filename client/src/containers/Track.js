import React, { Component } from 'react';
import CardTrack from '../components/features/CardTrack/CardTrack';
import Loading from '../components/UIShared/loading/Loading';
import { connect } from 'react-redux';

class TrackList extends Component {
    state = { loading: true };

    UNSAFE_componentWillReceiveProps(newProps) {
        const { tracks } = newProps;
        this.unLoading(tracks);
    }

    unLoading = (tracks) => {
        if (this.state.loading && tracks[0].id) {
            this.setState({
                loading: false
            })
        }
    }

    componentDidMount() {
        this.unLoading(this.props.tracks);
    }

    render() {
        const { loading } = this.state;
        
        if (loading) return <Loading />;
        else {
            return (
                // Track
                <>
                    <span className="track-txt">Popular songs</span>
                    {this.showTracks()}
                </>
            );
        }
    }
    showTracks() {
        let { tracks, player } = this.props;
        let result = null;
        if (tracks.length > 0) {
            result = tracks.map(track => {
                return <CardTrack key={track.id} player={player} track={track} />
            })
        }
        return result;
    }

}
const mapStateToProps = state => {
    return {
        tracks: state.tracksReducer,
        player: state.playerReducer
    }
}

export default connect(mapStateToProps)(TrackList);