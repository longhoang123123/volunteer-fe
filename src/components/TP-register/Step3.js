import React, { useState } from "react";
import "./Step3.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Step3 = ({ handleStepChange, setUser }) => {
  const [password, setPassword] = useState(""); // Mật khẩu chính
  const [confirmPassword, setConfirmPassword] = useState(""); // Mật khẩu xác nhận
  const [email, setEmail] = useState(""); // Email
  const [isPasswordValid, setIsPasswordValid] = useState(true); // Kiểm tra tính hợp lệ của mật khẩu chính
  const [isPasswordMatch, setIsPasswordMatch] = useState(true); // Kiểm tra xem mật khẩu và mật khẩu xác nhận có khớp không
  const [showPassword, setShowPassword] = useState(false); // Trạng thái để hiển thị mật khẩu

  const validatePassword = (value) => {
    const hasMinLength = value.length >= 8;
    const hasLetter = /[a-zA-Z]/.test(value);
    const hasNumber = /\d/.test(value);
    setIsPasswordValid(hasMinLength && hasLetter && hasNumber);
    setPassword(value);
  };

  const validateConfirmPassword = (value) => {
    setIsPasswordMatch(value === password);
    setConfirmPassword(value);
  };

  const handleCreateAccount = () => {
    setUser({
      email,
      password,
    });
    handleStepChange(4);
  };

  return (
    <div className="create-account-container">
      <h2>Đăng ký</h2>
      {/* Email */}
      <div className="form-group">
        <label htmlFor="email">Email (*)</label>
        <input
          type="email"
          id="email"
          placeholder="Vui lòng nhập email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <small>
          Vui lòng cung cấp địa chỉ email để xác thực tài khoản và nhận kết quả
          máu. Email phải đúng theo định dạng: emailnguoihienmau@gmail.com.
        </small>
      </div>

      {/* Mật khẩu chính */}
      <div className="password-input">
        <label htmlFor="password">Mật khẩu mới*</label>
        <div className="password-field">
          <input
            type={showPassword ? "text" : "password"} // Tùy chỉnh loại ô nhập
            id="password"
            value={password}
            onChange={(e) => validatePassword(e.target.value)}
            className={!isPasswordValid ? "invalid" : ""}
          />
          <span
            className="eye-icon"
            onClick={() => setShowPassword(!showPassword)} // Bật/tắt hiển thị mật khẩu
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Thay đổi icon */}
          </span>
        </div>
        {!isPasswordValid && (
          <p className="error-message">Mật khẩu không hợp lệ!</p>
        )}
      </div>

      {/* Mật khẩu xác nhận */}
      <div className="password-input">
        <label htmlFor="confirmPassword">Xác nhận mật khẩu*</label>
        <div className="password-field">
          <input
            type={showPassword ? "text" : "password"}
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => validateConfirmPassword(e.target.value)}
            className={!isPasswordMatch ? "invalid" : ""}
          />
          <span
            className="eye-icon"
            onClick={() => setShowPassword(!showPassword)} // Bật/tắt hiển thị mật khẩu
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Thay đổi icon */}
          </span>
        </div>
        {!isPasswordMatch && (
          <p className="error-message">Mật khẩu xác nhận không khớp!</p>
        )}
      </div>

      <p>
        <span className="icon">⚠️</span>
        Lưu ý: Mật khẩu phải chứa tối thiểu 8 ký tự, bao gồm chữ và số
      </p>

      <button
        onClick={handleCreateAccount}
        disabled={!isPasswordValid || !isPasswordMatch}
      >
        Tạo tài khoản
      </button>
    </div>
  );
};

export default Step3;
