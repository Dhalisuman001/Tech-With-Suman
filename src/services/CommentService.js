import ApiService from "./ApiService";

export async function apiCreateComment(data) {
  return ApiService.fetchData({
    url: `/comment/create`,
    method: "post",
    data,
  });
}
export async function apiGetComments(data) {
  return ApiService.fetchData({
    url: `/comment?blog_id=${data}`,
    method: "get",
  });
}
