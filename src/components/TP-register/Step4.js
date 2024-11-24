import React, { useState, useEffect } from "react";
import "./Step4.css";
import axios from "axios";

const Step4 = ({ setOtpCode }) => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [timer, setTimer] = useState(0); // Khởi tạo timer là 0
  const [resendDisabled, setResendDisabled] = useState(true); // Không cho phép gửi lại OTP ban đầu
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true); // Không cho phép nhấn nút Tiếp tục

  // Hàm đếm ngược thời gian
  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    } else if (timer === 0) {
      setResendDisabled(false); // Khi hết thời gian, cho phép gửi lại mã OTP
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer]);

  // Hàm xử lý nhập OTP
  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Kiểm tra xem người dùng đã nhập đủ 6 mã hay chưa
      setIsSubmitDisabled(newOtp.some((digit) => digit === "")); // Nếu có ô trống thì nút sẽ bị vô hiệu hóa
    }
  };

  // Hàm gửi lại mã OTP và bắt đầu bộ đếm 90 giây
  const resendOtp = () => {
    setTimer(90); // Khởi động lại bộ đếm 90 giây
    setResendDisabled(true); // Vô hiệu hóa nút gửi lại
    // Logic gửi mã OTP mới ở đây
    console.log("OTP đã được gửi lại.");
  };

  // Hàm xử lý khi bấm nút Tiếp tục
  const handleSubmit = () => {
    const otpCode = otp.join("");
    setOtpCode(otpCode);
  };

  return (
    <div className="verification-container">
      <h2>Đăng ký</h2>
      <p>Nhập mã xác thực</p>
      <p>Mã xác thực đã được gửi đến địa chỉ Email</p>
      <p>a****************h@g***l.com</p>

      <div className="otp-inputs">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleOtpChange(e, index)}
          />
        ))}
      </div>

      <button onClick={handleSubmit} disabled={isSubmitDisabled}>
        Tiếp tục
      </button>

      <p className="resend-otp">
        Gửi lại mã OTP {resendDisabled ? `(${timer}s)` : ""}
        {!resendDisabled && (
          <button onClick={resendOtp} disabled={resendDisabled}>
            Gửi lại
          </button>
        )}
      </p>
    </div>
  );
};

export default Step4;
