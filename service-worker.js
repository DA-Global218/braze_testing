// 1. 加载 Braze Service Worker SDK
importScripts("https://js.appboycdn.com/web-sdk/5.4/service-worker.js");

// 2. 使用更安全的初始化方式
// 有时在 SW 环境中，直接使用 self.braze 可能会因为加载顺序报错
// 我们改为使用这种官方推荐的初始化逻辑
if (self.braze) {
  self.braze.initialize({
    apiKey: "49f1ee81-af3e-4afc-8158-0f4192fed5eb",
    baseUrl: "sdk.fra-02.braze.eu",
    enableLogging: true
  });
} else {
  console.error("Braze SDK failed to load in service-worker.js");
}
