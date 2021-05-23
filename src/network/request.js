/*
 * @Date: 2021-04-08 12:48:18
 * @Author: Kinsiy
 * @LastEditors: Kinsiy
 * @LastEditTime: 2021-04-11 10:02:10
 * @FilePath: \Vue-project\src\network\request.js
 */
import axios from "axios";

export function request(config) {
  const instance_home = axios.create({
    baseURL: "http://152.136.185.210:7878/api/m5/",
    timeout: 5000
  });

  instance_home.interceptors.response.use(
    res => {
      return res.data;
    },
    err => {
      console.log(err);
    }
  );

  return instance_home(config);
}
