/*
 * Created by @tranphuquy19 on 15/08/2020
 * @author: tranphuquy19@gmail.com
 */

import Album from "../models/Album";
import { LOAD_ALBUMS, FETCH_ALBUMS } from "../../utils/Types";

const albumsInitState = [Album];

export const albumsReducer = (state = albumsInitState, { type, payload }) => {
    switch (type) {
        case LOAD_ALBUMS:
            return [...payload];
        case FETCH_ALBUMS:
            return [...payload];
        default:
            return state;
    }
}
