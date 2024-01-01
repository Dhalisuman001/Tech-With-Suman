import ApiService from "./ApiService";

export async function apiCreateBlog(data) {
  return ApiService.fetchData({
    url: "/blog/create",
    method: "post",
    data,
  });
}

export async function apiSaveBlog(data) {
  return ApiService.fetchData({
    url: "/blog/draft",
    method: "post",
    data,
  });
}

export async function apiGetLatestBlog(data) {
  return ApiService.fetchData({
    url: "blog/latest",
    method: "get",
    data,
  });
}

export async function apiGetTrendingBlog(data) {
  return ApiService.fetchData({
    url: "blog/trending",
    method: "get",
    data,
  });
}

export async function apiGetFilterBlog(data) {
  return ApiService.fetchData({
    url: `blog/filter-blogs?tag=${data}`,
    method: "get",
    data,
  });
}
