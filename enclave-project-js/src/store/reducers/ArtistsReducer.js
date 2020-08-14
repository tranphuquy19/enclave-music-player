/*
 * Created by @tranphuquy19 on 15/08/2020
 * @author: tranphuquy19@gmail.com
 */

import Artist from "../models/Artist";
import {LOAD_ARTISTS} from "../../shared/Types";

const artistsInitState = [Artist];

export const artistsReducer = (state = artistsInitState, {type, payload}) => {
    switch (type) {
        case LOAD_ARTISTS:
            return [...payload];
        default:
            return state;
    }
}
