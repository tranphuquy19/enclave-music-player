/*
 * Created by @tranphuquy19 on 15/08/2020
 * @author: tranphuquy19@gmail.com
 */

import DataSeed from "../../shared/DataSeed";
import {LOAD_ARTISTS} from "../../shared/Types";

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

export {loadArtistsSeed};
