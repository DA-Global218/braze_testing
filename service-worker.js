// 示例：Braze Web Push service worker（伪代码，按文档真实示例填）
// 版本号要与你使用的 SDK 版本一致，比如 5.4
importScripts("https://js.appboycdn.com/web-sdk/5.4/service-worker.js");

// 调用 Braze SW 初始化（注意替换 apiKey 和 baseUrl）
brazeSW.setUpSW({
  apiKey: "49f1ee81-af3e-4afc-8158-0f4192fed5eb",
  baseUrl: "sdk.fra-02.braze.eu",
});
