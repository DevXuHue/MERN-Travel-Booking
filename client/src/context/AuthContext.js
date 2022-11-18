import { createContext, useEffect, useReducer } from "react";
import {
  REGISTER_CLEAR_ERROR,
  REGISTER_ERROR,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "../constants";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };
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
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        success: state.success,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
