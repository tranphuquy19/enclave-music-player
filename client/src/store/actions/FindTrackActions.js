import { FIND_TRACKS, FETCH_TRACK } from "../../utils/Types";
import axios from "axios";

export const findTracks = text => dispatch => {
    dispatch({
        type: FIND_TRACKS,
        payload: text
    })
}

export const fetchTracks  = (text) => dispatch => {
    axios.get(`https://api.doraneko.tk/track?key=${encodeURI(text)}`)
    .then(res => {
        return dispatch({
            type: FETCH_TRACK,
            payload: res.data
        })
    })
    .catch(err => console.log(err))
}