import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../api/axiosInstance";
export const loginUser = createAsyncThunk(
  "LoginApi/loginUser",
  async (loginData, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/admin/login", loginData);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
const initialState = { user: null, token: null, status: "idle", error: null };
const LoginApiSlice = createSlice({
  name: "LoginApi",
  initialState,
  reducers: {
    LogoutDelete: (state) => {
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Failed to login";
      });
  },
});
export const { LogoutDelete } = LoginApiSlice.actions;

export default LoginApiSlice.reducer;
