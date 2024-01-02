import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiGetUserProfile } from "services/UserService";

export const getUserProfile = createAsyncThunk(
  "home/getUserProfile",
  async (username) => {
    const response = await apiGetUserProfile(username);
    return response.data;
  }
);

const dataSlice = createSlice({
  name: "user/data",
  initialState: {
    loading: false,
    profile: {},
  },
  reducers: {
    setPage: (state) => {
      state.page = state.page + 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserProfile.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getUserProfile.fulfilled, (state, action) => {
      state.profile = action.payload;
      state.loading = false;
    });
  },
});

export const { setPage } = dataSlice.actions;

export default dataSlice.reducer;
