import Cookies from 'js-cookie';
const TOKENKEY = 'Authorization';
/**
 * 设置cookies
 */
export const setToken = (token,expires) => {
    const timeStamp = new Date(expires*1000);
    Cookies.set(TOKENKEY,token,{expires:timeStamp});
}
/**
 * 获取token
 */
export const getToken = () => {
    return Cookies.get(TOKENKEY);
}
/**
 * 删除token
 */
export const removeToken = () => {
    Cookies.remove(TOKENKEY)
}


