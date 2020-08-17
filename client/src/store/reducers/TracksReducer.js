import * as Types from '../../constants/ActionTypes';
var initialState = [];

const tracks = (state = initialState, action) => {
    switch(action.type){
        case Types.FETCH_TRACKS:
            state = action.tracks;
            return [...state];
        default: return [...state]
    }
};

export default tracks;