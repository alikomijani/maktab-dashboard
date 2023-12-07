import { createSlice } from "@reduxjs/toolkit";
import { loginUser, refreshToken } from "./authThunk";
const initialState = {
  token: "",
  isLogin: false,
  refreshToken: "",
  user: null,
  isLoading: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = "";
      state.isLogin = false;
      state.refreshToken = "";
      state.user = null;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.isLoading = false;
      state.isLogin = true;
      state.refreshToken = action.payload.refreshToken;
      state.user = action.payload.user;
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(refreshToken.fulfilled, (state, action) => {
      state.token = action.payload.token;
    });
    builder.addCase(refreshToken.rejected, (state) => {
      state.token = "";
      state.isLogin = false;
      state.refreshToken = "";
      state.user = null;
      state.isLoading = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const { logout } = counterSlice.actions;

export default counterSlice.reducer;
