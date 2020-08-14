/*
 * Created by @tranphuquy19 on 15/08/2020
 * @author: tranphuquy19@gmail.com
 */

import {ALBUM_TYPE, ARTIST_TYPE, PLAYLIST_TYPE, SET_TRACKS, TRACK_TYPE} from "../../shared/Types";
import {store} from "../index";
import {fetchArtistById, fetchAlbumById} from '../../requires/_index'
import {fetchPlaylistById} from "../../requires/PlaylistQueries";
import {fetchTrackById} from "../../requires/TrackQueries";

const setTracks = (data) => {
    return async dispatch => {
        const {tracks} = findLocal(data);
        let _tracks = [];

        if (tracks.length === 0) {
            _tracks = await searchOnServer(data);
        } else
            _tracks = tracks;

        const {playerReducer} = store.getState();

        dispatch({
            type: SET_TRACKS,
            payload: {
                ...playerReducer,
                previous: {},
                current: _tracks[0] || {},
                next: _tracks[1] || {}
            }
        })
    }
}

const searchOnServer = async ({id, type}) => {
    switch (type) {
        case ALBUM_TYPE:
            return await fetchAlbumById(id);
        case ARTIST_TYPE:
            return await fetchArtistById(id);
        case PLAYLIST_TYPE:
            return await fetchPlaylistById(id);
        case TRACK_TYPE:
            const track = await fetchTrackById(id);
            return [track];
        default:
            return [];
    }
}

const findLocal = ({id, type}) => {
    let items = [];

    switch (type) {
        case ALBUM_TYPE:
            items = store.getState().albumsReducer;
            break;
        // case ARTIST_TYPE:
        //     items = store.getState().artistsReducer;
        case PLAYLIST_TYPE:
            items = store.getState().playlistsReducer;
            break;
        case TRACK_TYPE:
            items = store.getState().tracksReducer;
            break;
        default:
            items = [];
    }

    const itemIndex = items.findIndex(item => item.id === id);

    if (itemIndex !== -1)
        return items[itemIndex]
    else return {};
}

export {setTracks}
