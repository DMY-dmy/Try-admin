

/**
 * 格式化时间戳
 * @param value
 * @returns {string}
 */
export function dateFormat(value) {
    return moment.unix(value).format("YYYY-MM-DD HH:mm:ss");
}
export function dateFormat2(value) {
    return moment.unix(value).format("YYYY-MM-DD");
}