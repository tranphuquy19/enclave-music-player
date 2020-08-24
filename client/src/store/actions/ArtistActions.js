import DataSeed from "../../utils/DataSeed";
import {LOAD_ARTISTS, FETCH_ARTIST} from "../../utils/Types";
import { fetchArtistByIds } from "../../queries/_index";

const loadArtistsSeed = () => {
    const {artists, nbMaxArtists} = DataSeed;
    const _artists = artists.slice(0, nbMaxArtists);

    return dispatch => {
        dispatch({
            type: LOAD_ARTISTS,
            payload: _artists
        });
    }
}
const fetchArtists = () => {
    return async dispatch => {
        const { artists, nbMaxArtists } = DataSeed;
        const ids = artists.slice(0, nbMaxArtists).map(artist => artist.id);

        const resArtists = await fetchArtistByIds(ids);
        dispatch({
            type: FETCH_ARTIST,
            payload: resArtists
        })
    }
}

export {loadArtistsSeed, fetchArtists};
