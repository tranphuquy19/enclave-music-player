import DataSeed from '../../utils/DataSeed';
import {FETCH_TRACKS} from '../../utils/Types';
import {fetchTracksByIds} from '../../queries/TrackQueries';

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

export {fetchTracks};