/*
 * Created by @tranphuquy19 on 15/08/2020
 * @author: tranphuquy19@gmail.com
 */

import Player from "../models/Player";
import {
    CHANGE_CURRENT_TIME,
    CHANGE_VOLUME,
    NEXT_TRACK,
    PREVIOUS_TRACK,
    REMOVE_TRACK, SET_TRACKS,
    SHUFFLE_TRACKS, TOGGLE_PLAYING
} from "../../utils/Types";

const playerInitState = Player;

export const playerReducer = (state = playerInitState, {type, payload}) => {
    switch (type) {
        case CHANGE_CURRENT_TIME:
            return state;
        case CHANGE_VOLUME:
            return state;
        case NEXT_TRACK:
            return {...payload};
        case PREVIOUS_TRACK:
            return {...payload};
        case REMOVE_TRACK:
            return state;
        case SET_TRACKS:
            return {...payload};
        case SHUFFLE_TRACKS:
            return state;
        case TOGGLE_PLAYING:
            return {...payload};
        default:
            return state;
    }
}
