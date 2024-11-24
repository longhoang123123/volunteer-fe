import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Nhập Link và useNavigate từ React Router
import { useAuthContext } from "../context/UserContext";
import "./Login.css";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const { login } = useAuthContext(); // Hàm login từ AuthContext
  const [email, setEmail] = useState(""); // Trạng thái email
  const [password, setPassword] = useState(""); // Trạng thái mật khẩu
  const [error, setError] = useState(""); // Thông báo lỗi
  const [showPassword, setShowPassword] = useState(false); // Kiểm tra xem mật khẩu có hiện hay không
  const navigate = useNavigate(); // Hook để điều hướng trang

  // Hàm xử lý đăng nhập
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setError("email và mật khẩu không được để trống");
      return;
    }

    try {
      let res = await axios.post(
        "http://127.0.0.1:8000/api/v1/auth/jwt/create/",
        {
          email: email,
          password: password,
        }
      );
      const accessToken = res.data.access;
      localStorage.setItem("access_token", accessToken);
      const decodedToken = jwtDecode(accessToken);
      res = await axios.get(
        `http://127.0.0.1:8000/api/v1/users/${decodedToken.user_id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setError("");
      // Giả sử bạn có hàm login trong AuthContext

      const user = res.data;
      login(`${user.first_name} ${user.last_name}`, "");
      // Chuyển hướng đến trang chính và gửi thông báo thành công
      navigate("/home", { state: { message: "Đăng nhập thành công!" } });
    } catch (e) {
      setError("Thông tin đăng nhập không chính xác");
    }
  };

  // Hàm toggle để hiển thị/ẩn mật khẩu
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Đăng nhập</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email*:</label>
            <input
              type="email"
              value={email} // Thay đổi email thành email
              onChange={(e) => setEmail(e.target.value)} // Đổi setEmail thành setemail
              required
            />
          </div>
          <div className="form-group">
            <label>Mật khẩu:</label>
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="toggle-password"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </div>
          {error && <p className="error">{error}</p>}{" "}
          {/* Hiển thị lỗi nếu có */}
          <button type="submit">Đăng nhập</button>
        </form>
        <div className="forgot-password">
          <a href="/forgot-password">Quên mật khẩu?</a>
        </div>
        <div className="register">
          <p>
            Chưa có tài khoản? <Link to="/register">Đăng ký</Link>
          </p>{" "}
          {/* Sử dụng Link */}
        </div>
      </div>
    </div>
  );
};

export default Login;
