/*
 * @Author       : tongzonghua
 * @Date         : 2020-06-22 10:38:19
 * @LastEditors  : tongzonghua
 * @LastEditTime : 2020-08-09 13:47:54
 * @Email        : tongzonghua@360.cn
 * @Description  : 操作cookie
 * @FilePath     : /workspace/tank-box-pc/src/renderer/utils/cookie.js
 */
import { BASEURL } from 'utils/config'
const session = require("electron").remote.session;
export const setCookie = (name, value, days = 30) => {
  const exp = new Date(),
    date = Math.round(exp.getTime() / 1000) + days * 24 * 60 * 60,
    cookie = {
      url: BASEURL,
      name: name,
      value: value,
      expirationDate: date
    };
  session.defaultSession.cookies.set(cookie, err => {
    if (err) console.error(err);
  });
}

export const getCookie = name => {
  session.defaultSession.cookies.get(
    { url: BASEURL, name },
    (err, cookies) => {
      if (err) console.error(err);
    }
  );
}

export const removeCookie = name => {
  session.defaultSession.cookies.remove(BASEURL, name, err => {
    if (err) console.error(err);
  })
}