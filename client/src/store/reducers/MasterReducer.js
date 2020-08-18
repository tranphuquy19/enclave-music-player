/*
 * Created by @tranphuquy19 on 14/08/2020
 * @author: tranphuquy19@gmail.com
 */

import {combineReducers} from "redux";
import {
    albumsReducer,
    artistsReducer,
    playerReducer,
    tracksReducer,
    userReducer,
    playlistsReducer
} from './_index';

const masterReducer = combineReducers({
    userReducer,
    artistsReducer,
    tracksReducer,
    albumsReducer,
    playerReducer,
    playlistsReducer
});

export default masterReducer;
