import React, { useState } from 'react';
import './ForgotPassword.css'; // Import file CSS nếu cần

const ForgotPassword = () => {
  const [idNumber, setIdNumber] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation for phone number (optional)
    const phonePattern = /^[0-9]{10,11}$/; // Adjust the regex based on your requirements
    if (!phonePattern.test(phone)) {
      setError('Số điện thoại không hợp lệ. Vui lòng nhập lại.');
      return;
    }

    // Clear error message on successful submission
    setError('');
    
    // Here, you would typically send a request to the backend
    setMessage('Nếu thông tin của bạn đúng, bạn sẽ nhận được hướng dẫn đặt lại mật khẩu.');

    // Clear input fields after submission
    setIdNumber('');
    setPhone('');
  };

  return (
    <div className="page-container">
      <div className="forgot-password-container">
        <h2>Quên Mật Khẩu</h2>
    
        <div className="info-text">
          <p className="info-header">Nhập thông tin</p>
          <p className="info-description">Nhập thông tin tài khoản của bạn để xác minh danh tính.</p>
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
            <label htmlFor="phone">Số điện thoại:</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              placeholder="Nhập số điện thoại"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
    
          <button type="submit">Tiếp tục</button>
        </form>
    
        {message && <p className="message">{message}</p>}
        {error && <p className="error">{error}</p>} {/* Display error message */}
        
        <p className="login-prompt">
          Bạn đã có tài khoản? <a href="/login" className="login-link">Đăng nhập</a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
