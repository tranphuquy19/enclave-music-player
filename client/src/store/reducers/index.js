import {combineReducers} from 'redux';
import tracks from './TracksReducer';

const appReducers = combineReducers({
    tracks
});

export default appReducers;