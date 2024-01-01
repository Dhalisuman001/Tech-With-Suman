import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  apiGetFilterBlog,
  apiGetLatestBlog,
  apiGetTrendingBlog,
} from "services/BlogService";

export const getLeatestBlog = createAsyncThunk(
  "home/getLeatestBlog",
  async () => {
    const response = await apiGetLatestBlog();
    return response.data;
  }
);
export const getTrendingBlog = createAsyncThunk(
  "home/getTrendingBlog",
  async () => {
    const response = await apiGetTrendingBlog();
    return response.data;
  }
);
export const getFilterBlog = createAsyncThunk(
  "home/getFilterBlog",
  async (tag) => {
    const response = await apiGetFilterBlog(tag);
    return response.data;
  }
);

const dataSlice = createSlice({
  name: "home/data",
  initialState: {
    loading: false,
    isTrendingBlogLoading: false,
    latestBlogs: {},
    trendingBlogs: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLeatestBlog.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getLeatestBlog.fulfilled, (state, action) => {
      state.loading = false;
      state.latestBlogs = action.payload;
    });
    builder.addCase(getTrendingBlog.pending, (state, action) => {
      state.isTrendingBlogLoading = true;
    });
    builder.addCase(getTrendingBlog.fulfilled, (state, action) => {
      state.isTrendingBlogLoading = false;
      state.trendingBlogs = action.payload;
    });
    builder.addCase(getFilterBlog.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getFilterBlog.fulfilled, (state, action) => {
      state.loading = false;
      state.latestBlogs = action.payload;
    });
  },
});

// export const { updateOrdered, updateColumns, updateBoardMembers } =
//   dataSlice.actions;

export default dataSlice.reducer;
