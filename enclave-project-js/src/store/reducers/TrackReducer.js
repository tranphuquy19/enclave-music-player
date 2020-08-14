/*
 * Created by @tranphuquy19 on 14/08/2020
 * @author: tranphuquy19@gmail.com
 */

import Track from "../models/Track";
import {GET_TRACK} from "../../shared/Types";

const tracksInitState = Track;

const trackReducer = (state = tracksInitState, action) => {
    switch (action.type) {
        case GET_TRACK:
            return action.payload.data;
        default:
            return state;
    }
}
