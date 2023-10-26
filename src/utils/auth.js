// ########Token相关操作########
const AccessTokenKey = 'ACCESS_TOKEN';
const RefreshTokenKey = 'REFRESH_TOKEN';
// 获取token
export function getAccessToken() {
    return localStorage.getItem(AccessTokenKey);
}

// 获取refreshToken
export function getRefreshToken() {
    return localStorage.getItem(RefreshTokenKey);
}
// set token
export function setToken(token) {
    localStorage.setItem(AccessTokenKey, token.accessToken);
    localStorage.setItem(RefreshTokenKey, token.refreshToken);
}
// remove token
export function removeToken() {
    localStorage.removeItem(AccessTokenKey);
    localStorage.removeItem(RefreshTokenKey);
}
