
import Artist from "../models/Artist";
import {LOAD_ARTISTS, FETCH_ARTISTS} from "../../utils/Types";

const artistsInitState = [Artist];

export const artistsReducer = (state = artistsInitState, {type, payload}) => {
    switch (type) {
        case LOAD_ARTISTS:
            return [...payload];
        case FETCH_ARTISTS:
            return [...payload];
        default:
            return state;
    }
}
