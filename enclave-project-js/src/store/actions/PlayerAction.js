/*
 * Created by @tranphuquy19 on 15/08/2020
 * @author: tranphuquy19@gmail.com
 */

import {
    ALBUM_TYPE,
    ARTIST_TYPE,
    NEXT_TRACK,
    PLAYLIST_TYPE,
    PREVIOUS_TRACK,
    SET_TRACKS, TOGGLE_PLAYING,
    TRACK_TYPE
} from "../../shared/Types";
import {store} from "../index";
import {fetchArtistById, fetchAlbumById} from '../../queries/_index'
import {fetchPlaylistById} from "../../queries/PlaylistQueries";
import {fetchTrackById} from "../../queries/TrackQueries";

const setTracks = (data) => {
    return async dispatch => {
        const {tracks} = findLocal(data);
        let _tracks = [];

        if (tracks.length === 0) {
            _tracks = await searchOnServer(data);
        } else
            _tracks = tracks;

        const {playerReducer} = store.getState();
        const playingIndex = 0;

        dispatch({
            type: SET_TRACKS,
            payload: {
                ...playerReducer,
                isPlaying: true,
                queue: _tracks,
                playingIndex: 0,
                previous: _tracks[playingIndex - 1] || {},
                current: _tracks[playingIndex] || {},
                next: _tracks[playingIndex + 1] || {}
            }
        });
    }
}

const nextTrack = () => {
    return dispatch => {
        dispatch({
            type: NEXT_TRACK,
            payload: jumpToTrack()
        })
    }
}

const previousTrack = () => {
    return dispatch => {
        dispatch({
            type: PREVIOUS_TRACK,
            payload: jumpToTrack(-1)
        })
    }
}

const togglePlaying = () => {
    return dispatch => {
        const {playerReducer} = store.getState();
        const {isPlaying} = playerReducer;
        dispatch({
            type: TOGGLE_PLAYING,
            payload: {
                ...playerReducer,
                isPlaying: !isPlaying
            }
        })
    }
}

const jumpToTrack = (step = 1) => {
    const {playerReducer} = store.getState();
    const {playingIndex, queue} = playerReducer;
    const jumpIndex = playingIndex + step
    const isContinuePlaying = queue[jumpIndex] ? true : false;
    let payload = {};

    if (isContinuePlaying) {
        payload = {
            ...playerReducer,
            isPlaying: isContinuePlaying,
            playingIndex: jumpIndex,
            previous: queue[jumpIndex - 1] || {},
            current: queue[jumpIndex] || {},
            next: queue[jumpIndex + 1] || {}
        }
    } else {
        payload = {
            ...playerReducer,
            isPlaying: isContinuePlaying
        }
    }
    return payload;
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

export {setTracks, nextTrack, previousTrack, togglePlaying}
