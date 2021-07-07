import * as types from "../actionTypes";

const INITIAL_STATE = {
  loading: false,
  listData: null,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_LIST_START:
      return {
        ...state,
        ...INITIAL_STATE,
        loading: true,
      };

    case types.GET_LIST_SUCCESS:
      const updatedResult = action.payload.result;
      updatedResult.data = [
        ...action.payload.data,
        ...action.payload.result.data,
      ];

      return {
        ...state,
        ...INITIAL_STATE,
        loading: false,
        listData: updatedResult,
      };

    case types.GET_LIST_FAIL:
      return {
        ...state,
        ...INITIAL_STATE,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
