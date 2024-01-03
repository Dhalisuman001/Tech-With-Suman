import ApiService from "./ApiService";

export async function apiGetUserProfile(data) {
  return ApiService.fetchData({
    url: `/user/profile/${data}`,
    method: "get",
  });
}
export async function apiGetUserBlog(data) {
  return ApiService.fetchData({
    url: `/user/blog?user_id=${data}`,
    method: "get",
  });
}

// export async function apiGetNotificationList() {
//   return ApiService.fetchData({
//     url: "/notification/list",
//     method: "get",
//   });
// }

// export async function apiGetSearchResult(data) {
//   return ApiService.fetchData({
//     url: "/search/query",
//     method: "post",
//     data,
//   });
// }
