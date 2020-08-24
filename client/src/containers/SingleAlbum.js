import React, { Component } from 'react';
import PlayButton from '../components/UIShared/Button/PlayButton';
import convertDurationTrack from '../components/UIShared/convertDurationTrack';
import './Container.css'
import HeartButton from '../components/UIShared/Button/HeartButton';
import { withRouter } from 'react-router-dom';
import Album from '../store/models/Album';
import { fetchAlbumById } from '../queries/_index';
import { togglePlaying, setTracks } from '../store/actions/PlayerAction';
import { connect } from 'react-redux';
import Loading from '../components/UIShared/loading/Loading';

class SingleAlbum extends Component {
    state = {
        album: Album,
    }

    playAll = () => {
        const { id } = this.props.match.params;
        const { player, _togglePlaying, _setTracks } = this.props;
        const { belongTo } = player;

        _togglePlaying();
        if (belongTo.id !== id) _setTracks({ id, type: 'album' });
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        fetchAlbumById(id).then(album => this.setState({ album })).catch(e => console.log(e));
    }

    render() {
        const { album} = this.state;
        const { coverMedium, title, tracks } = album;

        return (
            <div className="container-right-album">
                <header>
                    <img src={coverMedium} alt={title} />
                    <section className="info">
                        <h1>{title}</h1>
                        <div className="details">
                            <p id="dot">&bull;</p>
                            <p>{tracks.length} Songs</p>
                        </div>
                    </section>
                </header>
                <button className="button-play" onClick={this.playAll}>Play All</button>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th id="duration-header">Duration</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {tracks.map((track, index) => {
                            const { titleShort, duration } = track;
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <p>{titleShort}</p>
                                    </td>
                                    <td className="duration-field">
                                        {convertDurationTrack(duration)}
                                    </td>
                                    <td>
                                        <PlayButton track={track} />
                                    </td>
                                    <td>
                                        <HeartButton />
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        _setTracks: (data) => {
            dispatch(setTracks(data));
        },
        _togglePlaying: () => {
            dispatch(togglePlaying());
        }
    }
}

const mapStateToProps = state => {
    return {
        player: state.playerReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SingleAlbum));