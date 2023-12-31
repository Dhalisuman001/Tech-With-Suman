import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiGetLatestBlog } from "services/BlogService";

export const getLeatestBlog = createAsyncThunk(
  "home/getLeatestBlog",
  async () => {
    const response = await apiGetLatestBlog();
    return response.data;
  }
);

const dataSlice = createSlice({
  name: "home/data",
  initialState: {
    loading: false,
    blogs: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLeatestBlog.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getLeatestBlog.fulfilled, (state, action) => {
      state.loading = false;
      state.blogs = action.payload;
    });
  },
});

// export const { updateOrdered, updateColumns, updateBoardMembers } =
//   dataSlice.actions;

export default dataSlice.reducer;
