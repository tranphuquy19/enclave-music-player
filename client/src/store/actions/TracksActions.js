import DataSeed from '../../utils/DataSeed';
import {FETCH_TRACKS, GET_TRACK, VOTE_TRACK} from '../../utils/Types';
import {fetchTracksByIds, voteTrackById} from '../../queries/TrackQueries';

const loadTracksSeed = () => {
    const {tracks, nbMaxTracks} = DataSeed;
    const _tracks = tracks.slice(0, nbMaxTracks);

    return dispatch => {
        dispatch({
            type: GET_TRACK,
            payload: _tracks
        });
    }
}

const fetchTracks = () => {
    return async dispatch => {
        const { tracks, nbMaxTracks } = DataSeed;
        const ids = tracks.slice(0, nbMaxTracks).map(track => track.id);

        const resTracks = await fetchTracksByIds(ids);
        dispatch({
            type: FETCH_TRACKS,
            payload: resTracks
        })
    }
}

const voteTrack = (id, isUp) => {
    return async dispatch => {
        const resTrack = await voteTrackById(id, isUp);
        dispatch({
            type: VOTE_TRACK,
            payload: resTrack
        })
    }
}
export {loadTracksSeed, fetchTracks, voteTrack};