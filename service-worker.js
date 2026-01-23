// 1. 加载 Braze Service Worker SDK (版本需与主页面 SDK 一致)
importScripts("https://js.appboycdn.com/web-sdk/5.4/service-worker.js");

/**
 * 2. 初始化 Braze Service Worker
 * 注意：在新版 SDK (v5+) 中，全局对象名为 self.braze
 */
self.braze.initialize({
  apiKey: "49f1ee81-af3e-4afc-8158-0f4192fed5eb",
  baseUrl: "sdk.fra-02.braze.eu",
  enableLogging: true // 建议开启，方便在控制台看到推送日志
});
