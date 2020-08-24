
import Playlist from "../models/Playlist";
import {LOAD_PLAYLISTS} from "../../utils/Types";

const playlistsInitState = [Playlist];

export const playlistsReducer = (state = playlistsInitState, {type, payload}) => {
    switch (type) {
        case LOAD_PLAYLISTS:
            return [...payload];
        default:
            return state;
    }
}
