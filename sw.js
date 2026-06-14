// Lộc Vàng — Service Worker
// Chức năng: (1) cache app để mở offline & nhanh, (2) xử lý click thông báo
// LƯU Ý: Thông báo được kích hoạt từ trang chính (app đang chạy/chạy nền),
// KHÔNG phải push từ server. SW chỉ giúp app cài được & xử lý click notification.

const CACHE_NAME = "locvang-v5-4";
const ASSETS = [
  "./index.html",
  "./manifest.json"
];

// Cài đặt: cache các file cốt lõi
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
      .catch(() => {}) // nếu 1 file lỗi vẫn cài SW
  );
});

// Kích hoạt: xoá cache cũ
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: app dùng network-first cho dữ liệu API (luôn lấy giá mới),
// cache-first cho file tĩnh của app (mở được offline).
self.addEventListener("fetch", (e) => {
  const url = e.request.url;
  // API & dữ liệu thị trường: luôn lấy từ mạng, không cache
  if (url.includes("binance.com") || url.includes("bingx.com") ||
      url.includes("alternative.me") || url.includes("tradingview.com") ||
      url.includes("s3.tradingview.com")) {
    return; // để trình duyệt xử lý bình thường
  }
  // File app: cache-first
  e.respondWith(
    caches.match(e.request).then((cached) => cached || fetch(e.request))
  );
});

// Click vào thông báo: mở/focus app
self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  e.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((clients) => {
      // Nếu app đã mở → focus
      for (const client of clients) {
        if ("focus" in client) return client.focus();
      }
      // Nếu chưa → mở mới
      if (self.clients.openWindow) return self.clients.openWindow("./index.html");
    })
  );
});
