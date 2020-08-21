import { FIND_TRACKS, FETCH_TRACK } from "../../utils/Types";

const findTracksInitState = {
    text: '',
    tracks: [],
    loading: false,
    track: []
};

export const findTracksReducer = (state = findTracksInitState, { type, payload }) => {
    switch (type) {
        case FIND_TRACKS:
            return {
                ...state,
                text: payload,
                loading: false
            }
        case FETCH_TRACK:
            return {
                ...state,
                tracks: payload
            }
        default:
            return state;
    }
}
