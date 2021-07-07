import { put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../actionTypes";
import API from "../../utils/api";

function* userSaga() {
  yield takeLatest(actionTypes.GET_LIST_START, getList);
}

function* getList(action) {
  try {
    const response = yield API.serverCall({
      apiEndPoints: `users?limit=${6}&page=${action.payload.pageNo}`,
    });

    yield put({
      type: actionTypes.GET_LIST_SUCCESS,
      payload: {
        ...action.payload,
        result: response.data,
      },
    });
  } catch (error) {
    yield put({
      type: actionTypes.GET_LIST_FAIL,
      payload: error,
    });
  }
}

export default userSaga;
