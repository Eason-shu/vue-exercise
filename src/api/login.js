import service from "@/utils/http";
import { getRefreshToken } from "@/utils/auth";

// 刷新令牌: 用于刷新访问令牌
export function refreshToken() {
  return service({
    url: "/system/auth/refresh-token?refreshToken=" + getRefreshToken(),
    method: "post",
  });
}

// 登录方法
export function login(
  username,
  password,
  captchaVerification,
  socialType,
  socialCode,
  socialState
) {
  const data = {
    username,
    password,
    captchaVerification,
    // 社交相关
    socialType,
    socialCode,
    socialState,
  };
  return service({
    url: "/system/auth/login",
    method: "post",
    data: data,
  });
}

// 获取用户详细信息
export function getInfo() {
  return service({
    url: "/system/auth/get-permission-info",
    method: "get",
  });
}

// 退出方法
export function logout() {
  return service({
    url: "/system/auth/logout",
    method: "post",
  });
}

// 社交授权的跳转
export function socialAuthRedirect(type, redirectUri) {
  return service({
    url:
      "/system/auth/social-auth-redirect?type=" +
      type +
      "&redirectUri=" +
      redirectUri,
    method: "get",
  });
}

// 社交快捷登录，使用 code 授权码
export function socialLogin(type, code, state) {
  return service({
    url: "/system/auth/social-login",
    method: "post",
    data: {
      type,
      code,
      state,
    },
  });
}

// 获取登录验证码
export function sendSmsCode(mobile, scene) {
  return service({
    url: "/system/auth/send-sms-code",
    method: "post",
    data: {
      mobile,
      scene,
    },
  });
}

// 短信验证码登录
export function smsLogin(mobile, code) {
  return service({
    url: "/system/auth/sms-login",
    method: "post",
    data: {
      mobile,
      code,
    },
  });
}
