import { ADD_FAVORITE_SONG, REMOVE_FAVORITE_SONG } from "../../utils/Types";

const actionAddFavorite = (data) => {
    return {
        type: ADD_FAVORITE_SONG,
        payload: data,
    };
}

const actionRemoveFavorite = (data) => {
    return {
        type: REMOVE_FAVORITE_SONG,
        payload: data,
    };
}
export {actionAddFavorite, actionRemoveFavorite}