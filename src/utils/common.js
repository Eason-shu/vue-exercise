/*
 * @Author: EasonShu
 * @Date: 2023-10-26 15:00:28
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-10-26 17:11:53
 * @FilePath: \vue-manger\src\utils\common.js
 */

/**
 * 获得 Vue 应用的基础路径
 */
export function getBasePath() {
    return process.env.VUE_APP_APP_NAME || '/';
}

/**
 * 获得 Vue 应用的访问路径
 *
 * @param path 路径
 */
export function getPath(path) {
    // 基础路径，必须以 / 结尾
    const basePath = getBasePath();
    if (!basePath.endsWith('/')) {
        return basePath + '/';
    }
    // 访问路径，必须不能以 / 开头
    if (path.startsWith('/')) {
        path = path.substring(1);
    }
    return basePath + path;
}
