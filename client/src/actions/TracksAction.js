import * as Types from './../constants/ActionTypes';
import callApi from '../utils/ApiCaller';
// export const actFetchTracksRequest = () => {
//     return (dispatch) => {
//         return callApi('playlist/789794642', 'GET', null).then(data => {
//             dispatch(actFetchTracks(data.tracks))
//         })
//     }
// }
export const actFetchTracks = (tracks) => {
    return{
        type: Types.FETCH_TRACKS,
        payload: tracks
    }
}