/*
 * @Author       : tongzonghua
 * @Date         : 2020-10-21 01:06:25
 * @LastEditors  : tongzonghua
 * @LastEditTime : 2020-10-21 01:06:56
 * @Email        : tongzonghua@360.cn
 * @Description  : config
 * @FilePath     : /cli/QPic/src/renderer/utils/config.js
 */
let BASICURL = "";
const env = process.env.NODE_ENV;
if (env === "development") {
  BASICURL = `https://dev-xxx/`;
} else if (env === "test") {
  BASICURL = `https://test-xxx/`;
} else {
  BASICURL = `https://xxx/`;
}
export const BASEURL = BASICURL;