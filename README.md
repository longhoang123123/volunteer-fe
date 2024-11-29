# Hệ thống quản lý sự kiện hiến máu cho hội chữ thập đỏ

## Mô Tả

**Hệ Thống Quản Lý Sự Kiện Hiến Máu** là một ứng dụng web hỗ trợ Hội Chữ thập đỏ trong việc quản lý và tổ chức các sự kiện hiến máu. Hệ thống cung cấp các chức năng như quản lý người hiến máu, thông tin sự kiện. Mục tiêu là tăng cường hiệu quả trong việc kêu gọi và quản lý các hoạt động hiến máu.

## Chức Năng

- **Đăng Nhập**: Người dùng có thể đăng nhập vào tài khoản của mình.
- **Đăng Ký**: Người dùng mới có thể đăng ký tài khoản.
- **Xác Minh Email**: Chức năng xác minh email để xác thực tài khoản.
- **Đăng Xuất**: Người dùng có thể đăng xuất khỏi tài khoản của mình.
- **Quên Mật Khẩu**: Chức năng khôi phục mật khẩu cho những người dùng quên mật khẩu.
- **Tìm Kiếm và Đăng Ký Sự Kiện**: Người dùng có thể tìm kiếm các sự kiện hiến máu và đăng ký tham gia.
- **Quản Lý Sự Kiện**: Quản trị viên có thể tạo mới, cập nhật và hủy các sự kiện hiến máu.
- **Thay Đổi Mật Khẩu**: Người dùng có thể thay đổi mật khẩu của mình.
- **Quản Lý Người Dùng**: Quản trị viên có thể quản lý tài khoản người dùng
- **Lịch Sử Hiến Máu**: Người dùng có thể xem lại lịch sử các lần hiến máu của mình.
- **Quản Lý Địa Điểm Hiến Máu**: Quản trị viên có thể quản lý danh sách các địa điểm hiến máu và thông tin chi tiết.
- **Quản Lý người nhận máu**: Quản trị viên có thể quản lý những người xin nhận máu.
- **Quản Lý kho máu**: Quản trị viên có thể quản lý máu trong kho.

---

## Công Nghệ

- **Thư Viện ReactJS**: Phát triển phía frontend.
- **Thư Viện React-router-dom**: Định tuyến cho ứng dụng React.
- **Thư Viện React-hook-form**: Xử lý biểu mẫu trong React.
- **Restful API (axios)**: API backend cho giao tiếp dữ liệu.
- **V.v.**

---

## Cài Đặt

Để cài đặt dự án, bạn có thể tuân theo các bước sau:

1. **Clone Repository**: Sao chép repository từ GitHub về máy tính của bạn bằng cách chạy lệnh sau trong terminal:

   ```bash
   git clone https://github.com/longhoang123123/volunteer-fe.git
   ```

2. **Cài Đặt Dependencies**: Di chuyển vào thư mục dự án và cài đặt các dependencies bằng npm hoặc yarn:

   ```bash
   cd Blood-donation
   npm install
   ```

   hoặc

   ```bash
   cd Blood-donation
   yarn install
   ```

3. **Khởi Chạy Ứng Dụng**: Sau khi cài đặt xong, bạn có thể khởi chạy ứng dụng bằng lệnh::

   ```bash
   npm start
   ```

   hoặc

   ```bash
   yarn start
   ```

   Ứng dụng sẽ khởi chạy và có thể truy cập từ trình duyệt bằng địa chỉ: http://localhost:3000
