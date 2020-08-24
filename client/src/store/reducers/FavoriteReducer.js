import { ADD_FAVORITE_SONG, REMOVE_FAVORITE_SONG } from "../../utils/Types";

const initialState = {
    favoritesSongs: []
};

export const favoritesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_FAVORITE_SONG:
            return {
                ...state,
                favoritesSongs: [...state.favoritesSongs, payload],
            };
        case REMOVE_FAVORITE_SONG:
            return {
                ...state,
                favoritesSongs: [
                    ...state.favoritesSongs.filter((track) => track.id !== payload),
                ],
            };
        default:
            return state;
    }
}