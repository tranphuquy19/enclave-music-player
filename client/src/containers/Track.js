import React, { Component } from 'react';
import CardTrack from '../components/features/CardTrack/CardTrack';
import Loading from '../components/UIShared/loading/Loading';
import { connect } from 'react-redux';

class TrackList extends Component {
    state = {loading: false};

    async componentDidMount() {
        // let { data } = await callApi('playlist/789794642', 'GET', null);
        // // this.props.fetAllTracks(data.tracks)
        // this.setState({
        //     tracks: data.tracks
        // })
        // let { data } = await axios({
        //     method: 'GET',
        //     url: 'https://api.doraneko.tk/playlist/789794642',
        //     data: null
        // });

        // this.setState({
        //     tracks: data.tracks
        // })
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
        let { tracks, player } = this.props;
        let result = null;
        if (tracks.length > 0) {
            result = tracks.map(track => {
                return <CardTrack key={track.id} player={player} track={track}/>
            })
        }
        return result;
    }

}
const mapStateToProps = state => {
    return{
        tracks : state.tracksReducer,
        player: state.playerReducer
    }
}
// const mapDispatchToProps = (dispatch, props) => {
//     return{
//         fetAllTracks: () =>{
//             dispatch(actFetchTracksRequest())
//         }
//     }
// }

export default connect(mapStateToProps)(TrackList);