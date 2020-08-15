import React, { Component } from 'react';
import PlayButton from '../components/UIShared/Button/PlayButton';
import convertDurationTrack from '../components/features/convertDurationTrack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

class SingleAlbum extends Component {
    constructor(props) {
        super(props)
        this.state = {
            albums: []
        }
    }
    componentDidMount() {

    }

    render() {
        return (
            <div className="container-right">
                <header>
                    <img src='{album.cover_medium}' alt='{album.title}' />
                    <section className="info">
                        <h1>{'album.title'}</h1>
                        <div className="details">
                            <p>{'album.nb_tracks'} Songs</p>
                            <p id="dot">&bull;</p>
                        </div>
                    </section>
                </header>
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
                        {/* {album.tracks.data.map((track, index) => ( */}
                            <tr key={'track.id'}>
                                <td>{'index + 1'}</td>
                                <td>
                                    <p>{'track.title'}</p>
                                </td>
                                <td className="duration-field">
                                    {convertDurationTrack('track.duration')}
                                </td>
                                <td>
                                    <PlayButton url={'track.preview'} />
                                </td>
                                <td>
                                    <FontAwesomeIcon
                                        title="Download"
                                        icon={faDownload} />
                                </td>
                            </tr>
                        {/* ))} */}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default SingleAlbum;