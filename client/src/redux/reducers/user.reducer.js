import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_CLEAR_ERROR,
  REGISTER_ERROR,
} from "../../constants";

const initialState = {
  user: {},
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        loading: true,
        error: null,
        user: null,
      };
    case REGISTER_SUCCESS:
      return {
        loading: false,
        user: action.payload.user,
        success: action.payload.success,
      };
    case REGISTER_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    case REGISTER_CLEAR_ERROR:
      return { ...state, error: null, success: null };
    default:
      return { ...state };
  }
};
