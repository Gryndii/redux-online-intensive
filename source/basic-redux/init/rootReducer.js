//Core
import { combineReducers } from 'redux';

//Reducers
import { galeryReducer } from '../bus/gallery/reducer';

export const rootReducer = combineReducers({
    gallery: galeryReducer,
});
