import {combineReducers} from "redux";
import {
    albumsReducer,
    artistsReducer,
    playerReducer,
    tracksReducer,
    userReducer,
    playlistsReducer, 
    favoritesReducer,
    findTracksReducer
} from './_index';

const masterReducer = combineReducers({
    userReducer,
    artistsReducer,
    tracksReducer,
    albumsReducer,
    playerReducer,
    playlistsReducer,
    favoritesReducer,
    findTracksReducer
});

export default masterReducer;
