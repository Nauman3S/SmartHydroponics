import Swal from "sweetalert2";
import { setAuthToken } from "../../api";
import { loginAdmin, loadProfile } from "../../api/apiFunctions";
import { saveToken, deleteToken } from "../localstorage/index";
import {
  SIGN_UP,
  SIGN_IN,
  LOAD_PROF,
  SIGN_OUT,
  UPDATE_PROF,
  REFRESH,
} from "../constants";

export const loginAction = (data) => {
  return async (dispatch) => {
    try {
      const response = await loginAdmin(data);
      if (response.status === 200) {
        const { token } = response.data;
        saveToken(token);
        setAuthToken(token);

        dispatch({ type: SIGN_IN, payload: response.data });
      }
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Authentication Failed !",
        titleText: error?.response?.data?.message,
        showConfirmButton: false,
        timer: 2000,
      });
      console.log(error);
    }
  };
};

export const fetchProfile = () => {
  return async (dispatch) => {
    try {
      const res = await loadProfile();
      console.log(res);
      if (res.status === 200) {
        dispatch({ type: LOAD_PROF, payload: res.data });
      }
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Authentication Failed !",
        titleText: error?.response?.data?.message,
        showConfirmButton: false,
        timer: 2000,
      });
      console.log(error);
    }
  };
};
export const logoutAdmin = () => {
  console.log("logged out");
  deleteToken();

  return { type: SIGN_OUT };
};

// export const loadProfile = () => async (dispatch) => {
//   try {
//     // dispatch({ type: LOAD_PROFILE_REQUEST });
//     const { data } = await myProfile();
//     dispatch({ type: LOAD_PROFILE_SUCCESS, payload: data.user });
//     localStorage.setItem("isAuthenticated", true);
//   } catch (error) {
//     dispatch({
//       type: LOAD_PROFILE_FAIL,
//       payload: error?.response?.data.message,
//     });
//   }
// };

// export const logoutAdmin = () => (dispatch) => {
//   try {
//     // dispatch({ type: LOGOUT_REQUEST });
//     localStorage.removeItem("token");

//     localStorage.removeItem("_expiredTime");
//     localStorage.removeItem("isAuthenticated");
//     dispatch({ type: LOGOUT_SUCCESS });
//     setTimeout(() => {
//       history.push("/");
//     }, 3000);
//   } catch (err) {
//     dispatch({ type: LOGOUT_FAIL, payload: err.response.data.message });
//     Swal.fire({
//       position: "center",
//       titleText: "Logout Failed",
//       icon: "error",
//       showConfirmButton: false,
//       timer: 1500,
//     });
//   }
// };

// export const updateProfile = (formData) => async (dispatch) => {
//   try {
//     dispatch({ type: UPDATE_PROFILE_REQUEST });
//     const { data } = await updateAdminProfile(formData);
//     dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data?.user });
//     Swal.fire({
//       position: "center",
//       icon: "success",
//       title: "Profile Updated",
//       showConfirmButton: false,
//       timer: 1500,
//       width: "300px",
//     });
//     history.push("/admin/profile");
//   } catch (error) {
//     console.log(error);
//     dispatch({
//       type: UPDATE_PROFILE_FAIL,
//       payload: error.response.data.message,
//     });
//     Swal.fire({
//       position: "center",
//       titleText: "Update Profile Failed",
//       icon: "error",
//       showConfirmButton: false,
//       timer: 1500,
//     });
//     history.push("/admin/profile");
//   }
// };

// export const clearErrors = () => async (dispatch) => {
//   dispatch({
//     type: CLEAR_ERRORS,
//   });
// };
