import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  apiGetBlogDetails,
  apiGetBlogLikes,
  apiGetFilterBlog,
  apiPutBlogLikes,
} from "services/BlogService";

export const fetchBlogDetails = createAsyncThunk(
  "blog/fetchBlogDetails",
  async (blog_id) => {
    const response = await apiGetBlogDetails(blog_id);
    return response.data;
  }
);

export const getSimilarBlog = createAsyncThunk(
  "blog/getSimilarBlog",
  async (blog_id) => {
    const response = await apiGetFilterBlog(blog_id);
    // console.log(/response.data);
    return response.data;
  }
);
export const getBlogLike = createAsyncThunk(
  "blog/getBlogLikes",
  async (blog_id) => {
    const response = await apiGetBlogLikes(blog_id);
    // console.log(/response.data);
    return response.data;
  }
);
export const postBlogLikes = createAsyncThunk(
  "blog/postBlogLikes",
  async (blog_id) => {
    const response = await apiPutBlogLikes(blog_id);
    // console.log(/response.data);
    return response.data;
  }
);

const dataSlice = createSlice({
  name: "blog/data",
  initialState: {
    loading: false,
    blog: {},
    similarLoading: false,
    similarBlog: [],
    like: {
      isliked: false,
    },
  },
  reducers: {
    setBlog: (state, action) => {
      state.blog = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBlogDetails.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchBlogDetails.fulfilled, (state, action) => {
      state.blog = action.payload.payload;
      state.loading = false;
    });
    builder.addCase(getSimilarBlog.pending, (state, action) => {
      state.similarLoading = true;
    });
    builder.addCase(getSimilarBlog.fulfilled, (state, action) => {
      // console.log(action);
      state.similarBlog = action.payload.payload;
      state.similarLoading = false;
    });
    builder.addCase(getBlogLike.pending, (state, action) => {
      // console.log(action);
      // state.like = action.payload.payload;
      // state.similarLoading = false;
    });
    builder.addCase(getBlogLike.fulfilled, (state, action) => {
      // console.log(action);
      state.like = action.payload.payload;
      // state.similarLoading = false;
    });
    builder.addCase(postBlogLikes.pending, (state, action) => {
      // console.log(action);
      // state.like = action.payload.payload;
      // state.similarLoading = false;
    });
    builder.addCase(postBlogLikes.fulfilled, (state, action) => {
      // console.log(action);
      state.like = action.payload.payload;
      // state.similarLoading = false;
    });
  },
});

export const { setBlog } = dataSlice.actions;

export default dataSlice.reducer;
