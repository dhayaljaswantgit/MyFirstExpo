import { fork, all } from "redux-saga/effects";
import loginSaga from "./loginSaga";
import userSaga from "./userSaga";
import listSaga from "./listSaga";
export default function* rootSaga() {
  yield all([fork(loginSaga)]);
  yield all([fork(userSaga)]);
  yield all([fork(listSaga)]);
}
