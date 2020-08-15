import {combineReducers} from 'redux';
import tracks from './TrackReducers';

const appReducers = combineReducers({
    tracks
});

export default appReducers;