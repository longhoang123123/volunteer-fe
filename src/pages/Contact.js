// src/Contact.js
import React from 'react';
import './Contact.css'; 
import ScrollToTopButton from '../components/ScrollToTopButton';


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
              <p>466 Nguyễn Thị Minh Khai, Phường 2, Quận 3, Thành phố Hồ Chí Minh</p>
            </div>
            <div className="location">
              <strong>Địa chỉ:</strong>
              <p>106 Thiên Phước, Phường 9, Tân Bình, Thành phố Hồ Chí Minh</p>
            </div>
            <div className="phone">
              <strong>Liên hệ giờ hành chính:</strong>
              <p>028 3868 5509</p>
              <p>028 3868 5507</p>
            </div>
          </div>

          <div className="contact-section">
            <h3>Bệnh viện BTH</h3>
            <div className="location">
              <strong>Địa chỉ:</strong>
              <p>118 Đ. Hồng Bàng, Phường 12, Quận 5, Thành phố Hồ Chí Minh</p>
            </div>
            <div className="location">
              <strong>Địa chỉ:</strong>
              <p>24 Nguyễn Thị Diệu, Phường Võ Thị Sáu, Quận 3, Thành phố Hồ Chí Minh</p>
            </div>
            <div className="phone">
              <strong>Liên hệ giờ hành chính:</strong>
              <p>028 39571342</p>
              <p>028 39557858</p>
            </div>
          </div>

          <div className="contact-section">
            <h3>TT truyền máu Chợ Rẫy</h3>
            <div className="location">
              <strong>Địa chỉ:</strong>
              <p>56 Phạm Hữu Chí, Phường 12, Quận 5, Thành phố Hồ Chí Minh</p>
            </div>
            <div className="phone">
              <strong>Liên hệ giờ hành chính:</strong>
              <p>028 39555885</p>
            </div>
          </div>
        </div>

        {/* Form Gửi lời nhắn */}
        <div className="message-section contact-section">
          <h2>Gửi lời nhắn cho chúng tôi</h2>
          <p>Nếu bạn có bất kỳ thắc mắc nào liên quan đến các hoạt động hiến máu tình nguyện, xin vui lòng liên hệ với chúng tôi qua địa chỉ email gmv@intelin.vn hoặc gửi thông tin cho chúng tôi theo mẫu bên dưới:</p>

          <form className="message-form">
            <label htmlFor="fullName">Họ và tên:</label>
            <input type="text" id="fullName" placeholder="Vui lòng nhập họ và tên" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Vui lòng nhập email" required />

            <label htmlFor="message">Lời nhắn:</label>
            <textarea id="message" placeholder="Vui lòng nhập lời nhắn" required></textarea>

            <button type="submit">Gửi lời nhắn</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
