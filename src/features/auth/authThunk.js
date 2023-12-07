import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 5000,
});
// data = {username:string, password:string}
//response = {token:string, refreshToken:string , user:UserObject}
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (data, thunkAPI) => {
    // const response = await api.post("/auth/login", data);
    console.log(data);
    return {
      token: "sampleToken",
      refreshToken: "sampleRefreshToken",
      user: {
        username: "komijani",
        firstName: "ali",
        role: "admin",
      },
    };
  }
);

// data = {refreshToken:string}
//response = {token:string}
export const refreshToken = createAsyncThunk(
  "auth/refresh-token",
  async (data, thunkAPI) => {
    // const response = await api.post("/auth/refresh-token", data);
    return {
      token: "another token",
    };
  }
);
