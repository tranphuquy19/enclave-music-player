import { FIND_TRACKS } from "../../utils/Types";

const findTracksAction = (data) => {
    return {
        type: FIND_TRACKS,
        payload: data,
    };
}

export {findTracksAction};