/*
 * Created by @tranphuquy19 on 17/08/2020
 * @author: tranphuquy19@gmail.com
 */

import {LOAD_PLAYLISTS} from "../../shared/Types";
import DataSeed from '../../shared/DataSeed';

const loadPlaylistsSeed = () => {
    const {playlists, nbMaxPlaylists} = DataSeed;
    const _playlist = playlists.slice(0, nbMaxPlaylists);

    return dispatch => {
        dispatch({
            type: LOAD_PLAYLISTS,
            payload: _playlist
        });
    }
}

export {loadPlaylistsSeed};
