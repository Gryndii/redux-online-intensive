//Core
import { put, apply } from 'redux-saga/effects';

//Instruments
import { api } from '../../../../REST';
import { uiActions } from '../../../ui/actions';
import { postsActions } from '../../actions';

export function* fetchPosts () {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.posts.fetch);
        const { data: posts, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(postsActions.fillPosts(posts));
    } catch (e) {
        yield put(uiActions.emitError(e, 'Fetch posts worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
