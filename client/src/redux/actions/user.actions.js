import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from "../../constants";

import clientAxios from "../../api";

export const register = (data) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST });

    const response = await clientAxios.post("/auth/register", data);

    if (response.data.user) {
      localStorage.setItem("user", JSON.stringify(response.data.user));
    }

    dispatch({ type: REGISTER_SUCCESS, payload: response.data });
  } catch (err) {
    dispatch({ type: REGISTER_ERROR, payload: err.response.data.message });
  }
};
