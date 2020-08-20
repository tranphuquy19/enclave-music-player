import Track from "../models/Track";
import { FETCH_TRACKS, GET_TRACK, VOTE_TRACK } from "../../utils/Types";

const tracksInitState = [Track];

export const tracksReducer = (state = tracksInitState, { type, payload }) => {
    switch (type) {
        case GET_TRACK:
            return [...payload];
        case FETCH_TRACKS:
            return [...payload];
        case VOTE_TRACK:
            const newState = state.map(track => {
                if(track.id === payload.id) return payload;
                else return track;
            })
            return newState;
        default:
            return state;
    }
}
