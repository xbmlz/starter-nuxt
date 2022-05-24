import { ElMessage, ElNotification } from "element-plus";

export default function ({ store, redirect, req, router, app: { $axios } }) {
  if (process.server) {
    var token = getCookie.getcookiesInServer(req).token;
  }
  if (process.client) {
    var token = getCookie.getcookiesInClient("token");
  }
  // request
  $axios.onRequest((config) => {
    if (process.client) {
      //   NProgress.start();
    }
    config.headers.common["Authorization"] = token;
  });
  // response拦截器
  $axios.interceptors.response.use(
    (response) => {
      if (process.client) {
        // NProgress.done();
      }
      // return response
      if (response.data.code == 401) {
        // 返回401，token验证失败，清除客户端cookie
        // Cookie.remove("token");
        // 重定向到登录页面， 这里做一个判断，容错：req.url 未定义
        if (req.url) {
          //   redirect("/sign?ref=" + req.url);
        } else {
          //   redirect("/sign");
        }
      } else if (response.data.code == 404) {
        redirect("/404");
      } else {
        return response;
      }
    },
    (error) => {
      if (process.client) {
        // NProgress.done();
      }
      if (error.response.status == 500) {
        // redirect("/500.htm");
        ElMessage.error(error.response.msg);
      }
      if (error.response.status == 404) {
        redirect("/404");
      }
      return Promise.reject(error.response);
    }
  );
}
