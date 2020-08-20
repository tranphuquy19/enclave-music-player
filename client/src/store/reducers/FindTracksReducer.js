import { FIND_TRACKS } from "../../utils/Types";


const findTracksInitState = [];

export const findTracksReducer = (state = findTracksInitState, { type, payload }) => {
    switch (type) {
        case FIND_TRACKS:
            return {
                ...state,
                data: payload,
                loading: false
            }
        default:
            return state;
    }
}
