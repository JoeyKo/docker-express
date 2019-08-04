import request from "utils/request";

export function home() {
  return request.get("/api/");
}
