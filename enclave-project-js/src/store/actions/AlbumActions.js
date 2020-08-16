/*
 * Created by @tranphuquy19 on 15/08/2020
 * @author: tranphuquy19@gmail.com
 */

import {LOAD_ALBUMS} from "../../shared/Types";
import DataSeed from '../../shared/DataSeed';

const loadAlbumsSeed = () => {
    const {albums, nbMaxAlbums} = DataSeed;
    const _albums = albums.slice(0, nbMaxAlbums);

    return dispatch => {
        dispatch({
            type: LOAD_ALBUMS,
            payload: _albums
        });
    }
}

export {loadAlbumsSeed};
