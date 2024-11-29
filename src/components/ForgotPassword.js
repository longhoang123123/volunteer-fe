import React, { useState } from "react";
import "./ForgotPassword.css"; // Import file CSS nếu cần

const ForgotPassword = () => {
  const [idNumber, setIdNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra định dạng email hợp lệ
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Email không hợp lệ. Vui lòng nhập lại.");
      return;
    }

    // Xóa thông báo lỗi nếu email hợp lệ
    setError("");

    // Thực hiện logic gửi yêu cầu đến backend
    setMessage(
      "Nếu thông tin của bạn đúng, bạn sẽ nhận được hướng dẫn đặt lại mật khẩu."
    );

    // Xóa trường nhập sau khi gửi thành công
    setIdNumber("");
    setEmail("");
  };

  return (
    <div className="page-container">
      <div className="forgot-password-container">
        <h2>Quên Mật Khẩu</h2>
        <div className="info-text">
          <p className="info-header">Nhập thông tin</p>
          <p className="info-description">
            Nhập thông tin tài khoản của bạn để xác minh danh tính.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="idNumber">Số CMND/CCCD/Hộ Chiếu:</label>
            <input
              type="text"
              id="idNumber"
              value={idNumber}
              placeholder="Nhập số giấy tờ tùy thân"
              onChange={(e) => setIdNumber(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Nhập Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button type="submit">Tiếp tục</button>
        </form>
        {message && <p className="message">{message}</p>}
        {error && <p className="error">{error}</p>} {/* Hiển thị lỗi */}
        <p className="login-prompt">
          Bạn đã có tài khoản?{" "}
          <a href="/login" className="login-link">
            Đăng nhập
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
