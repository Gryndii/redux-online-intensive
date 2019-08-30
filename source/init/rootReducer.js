//Core
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

//Reducers
import { authReducer as auth } from '../bus/auth/reducer';
import { profileReducer as profile } from '../bus/profile/reducer';
import { postsReducer as posts } from '../bus/posts/reducer';
import { uiReducer as ui } from '../bus/ui/reducer';

export const rootReducer = combineReducers({
    router,
    auth,
    profile,
    posts,
    ui,
});