import { apply, fork, put, takeLatest } from "redux-saga/effects";
import * as UserAction from "../../actions/user";
import client from "../../api/client";

/**
 * ブランド一覧
 */
function* getUsers() {
  try {
    const res = yield apply(client, client.getUsers);
    yield put(UserAction.successGetUsers(res.data));
  } catch (err) {
    yield put(UserAction.failureGetUsers(err));
  }
}
function* watchGetUsers() {
  yield takeLatest(UserAction.ActionTypes.REQUEST_GET_USERS, getUsers);
}

export default [
  fork(watchGetUsers)
];
