import * as types from "../actionTypes";

export const getList = (request) => ({
  type: types.GET_LIST_START,
  payload: request,
});
