//Core
import { put } from 'redux-saga/effects';

//Instruments
import { uiActions } from '../../../ui/actions';

export function* fetchPosts () {
    try {
        yield put(uiActions.startFetching());
    } catch (e) {
        yield put(uiActions.emitError(e, 'Worker error'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
