import axios from "axios";
import { store } from "../store";
import { refreshToken } from "../features/auth/authThunk";
import { logout } from "../features/auth/authSlice";
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 5000,
});

api.interceptors.request.use(
  function (config) {
    const state = store.getState();
    const { token, isLogin } = state.auth;
    if (isLogin) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // status 401
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const state = store.getState();
    const accessToken = state.auth.accessToken;
    if (error.response.status === 401 || error.response.status === 403) {
      const originalRequest = error.config;
      if (!originalRequest._retry) {
        originalRequest._retry = true;
        store
          .dispatch(refreshToken({ accessToken }))
          .unwrap()
          .then((data) => {
            originalRequest.headers["Authorization"] = `Bearer ${data.token}`;
            return api(originalRequest);
          })
          .catch(() => store.dispatch(logout()));
      } else {
        store.dispatch(logout());
      }
    }
    return Promise.reject(error);
  }
);
export default api;
