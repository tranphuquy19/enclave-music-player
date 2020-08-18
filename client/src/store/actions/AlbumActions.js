/*
 * Created by @tranphuquy19 on 15/08/2020
 * @author: tranphuquy19@gmail.com
 */

import DataSeed from '../../utils/DataSeed';
import {FETCH_ALBUMS, LOAD_ALBUMS} from '../../utils/Types';
import {fetchAlbumsByIds} from '../../queries/AlbumQueries';

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

const fetchAlbums = () => {
    return async dispatch => {
        const { albums, nbMaxAlbums } = DataSeed;
        const ids = albums.slice(0, nbMaxAlbums).map(album => album.id);

        const resAlbums = await fetchAlbumsByIds(ids);
        dispatch({
            type: FETCH_ALBUMS,
            payload: resAlbums
        })
    }
}

export {loadAlbumsSeed, fetchAlbums};
