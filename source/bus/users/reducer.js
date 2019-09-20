//Core
import { fromJS, List } from 'immutable';

//Types
import { types } from './types';

const initialState = List();

export const usersReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.FILL_USERS:
            return fromJS(payload);

        case types.CLEAR_USERS:
            return state.clear();

        default:
            return state;
    }
};
