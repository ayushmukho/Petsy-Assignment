import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index"
import { toast } from "react-toastify";

export const login = (cred, router) => async (dispatch) => {
  try {
    const { data }= await api.signIn(cred);
    console.log(data.token)
    dispatch({ type: AUTH, payload: data });
    router.push("/");
  } catch (error) {
    toast(error);
  }
}
