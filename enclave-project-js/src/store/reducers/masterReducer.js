/*
 * Created by @tranphuquy19 on 14/08/2020
 * @author: tranphuquy19@gmail.com
 */

import {combineReducers} from "redux";
import {userReducer, tracksReducer, albumsReducer, artistsReducer} from './index';

const masterReducer = combineReducers({
    userReducer,
    artistsReducer,
    tracksReducer,
    albumsReducer
});

export default masterReducer;
