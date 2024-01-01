import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  apiGetBlogCount,
  apiGetFilterBlog,
  apiGetLatestBlog,
  apiGetTrendingBlog,
} from "services/BlogService";

export const getLeatestBlog = createAsyncThunk(
  "home/getLeatestBlog",
  async (page) => {
    const response = await apiGetLatestBlog(page);
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
export const getlatestblogCount = createAsyncThunk(
  "home/getLatestBlogCount",
  async () => {
    const response = await apiGetBlogCount();
    return response.data;
  }
);

const dataSlice = createSlice({
  name: "home/data",
  initialState: {
    loading: false,
    isTrendingBlogLoading: false,
    page: 1,
    blogCount: 0,
    latestBlogs: {},
    trendingBlogs: {},
  },
  reducers: {
    setPage: (state) => {
      state.page = state.page + 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getLeatestBlog.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getLeatestBlog.fulfilled, (state, action) => {
      state.latestBlogs = action.payload;
      state.loading = false;
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
    builder.addCase(getlatestblogCount.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getlatestblogCount.fulfilled, (state, action) => {
      // console.log(action);
      state.loading = false;
      state.blogCount = action.payload.payload.blogCount;
    });
  },
});

export const { setPage } = dataSlice.actions;

export default dataSlice.reducer;
