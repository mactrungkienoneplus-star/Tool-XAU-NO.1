# HƯỚNG DẪN BIẾN LỘC VÀNG THÀNH APP TRÊN ĐIỆN THOẠI

Làm 1 lần, dùng mãi. Toàn bộ làm trên điện thoại Android, miễn phí, không cần máy tính.

---

## PHẦN 1 — ĐƯA APP LÊN MẠNG (GitHub Pages)

Cần làm vì: thông báo + cài app chỉ chạy khi file ở trên web HTTPS, không chạy khi mở file tải về.

### Bước 1: Tạo tài khoản GitHub
1. Vào **github.com** → bấm **Sign up**
2. Nhập email, mật khẩu, tên đăng nhập → xác nhận email

### Bước 2: Tạo kho chứa (repository)
1. Bấm dấu **+** góc trên phải → **New repository**
2. Repository name: gõ `locvang` (hoặc tên bất kỳ)
3. Chọn **Public**
4. Bấm **Create repository**

### Bước 3: Tải 5 file lên
1. Trong kho vừa tạo, bấm **Add file** → **Upload files**
2. Chọn và tải lên **đủ cả 5 file**:
   - `goldsignal_v5.html`
   - `manifest.json`
   - `sw.js`
   - `icon-192.png`
   - `icon-512.png`
3. Kéo xuống bấm **Commit changes**

### Bước 4: Bật GitHub Pages
1. Trong kho, vào tab **Settings** (răng cưa)
2. Menu trái chọn **Pages**
3. Mục **Source** → chọn nhánh **main** → thư mục **/ (root)** → **Save**
4. Đợi 1–2 phút, tải lại trang. GitHub hiện dòng:
   **"Your site is live at https://<tên-đăng-nhập>.github.io/locvang/"**

### Bước 5: Mở app
Địa chỉ app của bạn là:
```
https://<tên-đăng-nhập>.github.io/locvang/goldsignal_v5.html
```
Mở bằng **Chrome** trên điện thoại. Lưu lại link này.

---

## PHẦN 2 — CÀI APP RA MÀN HÌNH CHÍNH

Giải quyết vấn đề "phải tìm lại file mỗi lần dùng".

1. Mở link app ở trên bằng **Chrome**
2. Bấm menu **⋮** (3 chấm góc trên phải)
3. Chọn **Thêm vào màn hình chính** (Add to Home screen)
4. Đặt tên "Lộc Vàng" → **Thêm**

Giờ có **icon đồng vàng 金** trên màn hình như app thật. Bấm vào mở thẳng, full màn hình, không còn thanh địa chỉ Google.

---

## PHẦN 3 — BẬT THÔNG BÁO TÍN HIỆU

Giải quyết vấn đề "không biết khi nào có 4/4".

1. Mở app (từ icon vừa cài)
2. Bấm nút **🔕** góc trên phải → đổi thành **🔔** xanh
3. Chrome hỏi quyền thông báo → bấm **Cho phép**
4. App gửi 1 thông báo thử — thấy là chạy đúng

Từ giờ, khi đủ **4/4 tín hiệu**, app bắn thông báo ra màn hình + chuông + rung, kể cả khi:
- Màn hình đang tắt / khoá máy
- Đang dùng app khác

---

## ⚠️ ĐIỀU CẦN HIỂU RÕ VỀ THÔNG BÁO

App này **không phải app từ Google Play**, nên thông báo có giới hạn:

**CHẠY ĐƯỢC khi:** app còn mở hoặc còn chạy nền (vừa thoát ra màn hình chính, khoá máy bỏ túi). App vẫn quét giá mỗi 10 giây và báo khi 4/4.

**KHÔNG chạy khi:** bạn **vuốt tắt hẳn app** khỏi danh sách app gần đây (recent apps), hoặc Android tự "ngủ đông" app để tiết kiệm pin sau thời gian dài.

### Cách giữ app báo ổn định (làm 1 lần):
Vào **Cài đặt điện thoại → Ứng dụng → Chrome → Pin → chọn "Không giới hạn" / "Không tối ưu"**.
Trên Xiaomi/Oppo/Samsung: tìm thêm mục **"Tự khởi chạy"** (Autostart) và bật cho Chrome.

Cách này giúp Android không giết app khi chạy nền lâu.

### Khi cần canh tín hiệu chắc chắn:
Mở app, để màn hình sáng (cắm sạc), app chạy liên tục không bao giờ lỡ tín hiệu.

---

## KHI MUỐN CẬP NHẬT APP SAU NÀY
Chỉ cần lên GitHub, vào kho `locvang`, tải đè file mới (Upload files → Commit).
App tự cập nhật sau vài giây, không phải cài lại.
