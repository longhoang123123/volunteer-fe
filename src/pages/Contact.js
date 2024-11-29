// src/Contact.js
import React from "react";
import "./Contact.css";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Contact = () => {
  return (
    <div className="contact-container">
      <ScrollToTopButton />
      <h1>Liên hệ</h1>
      <div className="contact-wrapper">
        {/* Phần liên hệ gộp */}
        <div className="contact-details contact-section">
          <h2>Thông tin liên hệ</h2>

          <div className="contact-section">
            <h3>TT Hiến Máu Nhân Đạo</h3>
            <div className="location">
              <strong>Địa chỉ:</strong>
              <p>123 Lê Duẩn, Hải Châu, Đà Nẵng</p>
            </div>
            <div className="location">
              <strong>Địa chỉ:</strong>
              <p>56 Nguyễn Hữu Thọ, Hải Châu, Đà Nẵng</p>
            </div>
            <div className="phone">
              <strong>Liên hệ giờ hành chính:</strong>
              <p>0236 123 4567</p>
              <p>0236 234 5678</p>
            </div>
          </div>

          <div className="contact-section">
            <h3>Bệnh viện Đa khoa Đà Nẵng</h3>
            <div className="location">
              <strong>Địa chỉ:</strong>
              <p>124 Hải Phòng, Hải Châu, Đà Nẵng</p>
            </div>
            <div className="phone">
              <strong>Liên hệ giờ hành chính:</strong>
              <p>0236 3821118</p>
              <p>0236 3821119</p>
            </div>
          </div>

          <div className="contact-section">
            <h3>Bệnh viện Phụ sản - Nhi Đà Nẵng</h3>
            <div className="location">
              <strong>Địa chỉ:</strong>
              <p>402 Lê Văn Hiến, Ngũ Hành Sơn, Đà Nẵng</p>
            </div>
            <div className="phone">
              <strong>Liên hệ giờ hành chính:</strong>
              <p>0236 3957 957</p>
            </div>
          </div>
        </div>

        {/* Form Gửi lời nhắn */}
        <div className="message-section contact-section">
          <h2>Gửi lời nhắn cho chúng tôi</h2>
          <p>
            Nếu bạn có bất kỳ thắc mắc nào liên quan đến các hoạt động hiến máu
            tình nguyện, xin vui lòng liên hệ với chúng tôi qua địa chỉ email:
            longle05052k2@gmail.com hoặc gửi thông tin cho chúng tôi theo mẫu
            bên dưới:
          </p>

          <form className="message-form">
            <label htmlFor="fullName">Họ và tên:</label>
            <input
              type="text"
              id="fullName"
              placeholder="Vui lòng nhập họ và tên"
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Vui lòng nhập email"
              required
            />

            <label htmlFor="message">Lời nhắn:</label>
            <textarea
              id="message"
              placeholder="Vui lòng nhập lời nhắn"
              required
            ></textarea>

            <button type="submit">Gửi lời nhắn</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
