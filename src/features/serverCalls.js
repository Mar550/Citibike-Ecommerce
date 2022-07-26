import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../request";


export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};


export const logout = () => {
  localStorage.removeItem("jsonwebtoken");
};



//export const logout
// see login page