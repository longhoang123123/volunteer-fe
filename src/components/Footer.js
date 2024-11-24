import React from "react";
import "./Footer.css"; // Giữ nguyên file CSS hoặc cập nhật lại nếu cần
import logoImage from "../images/0.jpg"; // Sử dụng đúng đường dẫn ảnh logo

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Phần Logo */}
        <div className="footer-section logo">
          <img src={logoImage} alt="Logo" className="logo-img" />
        </div>

        {/* Phần Liên hệ */}
        <div className="footer-section contact">
          <h3 className="footer-title">Liên hệ</h3>

          <div className="contact-group">
            <p>
              <strong>Trung tâm Hiến máu nhân đạo Đà Nẵng</strong>
            </p>
            <p>
              <span className="material-icons">Địa chỉ:</span> 103 Lê Đình Lý,
              Phường Vĩnh Trung, Quận Thanh Khê, Đà Nẵng
            </p>
            <p>
              <span className="material-icons">Điện thoại:</span> 0236 3621 178
            </p>
          </div>

          <div className="contact-group">
            <p>
              <strong>Bệnh viện Đà Nẵng</strong>
            </p>
            <p>
              <span className="material-icons">Địa chỉ:</span> 402 Lê Văn Hiến,
              Quận Ngũ Hành Sơn, Đà Nẵng
            </p>
            <p>
              <span className="material-icons">Điện thoại:</span> 0236 3821 118
            </p>
          </div>
          <div className="contact-group">
            <p>
              <strong>Bệnh viện Phụ sản - Nhi Đà Nẵng</strong>
            </p>
            <p>
              <span className="material-icons">Địa chỉ:</span> 402 Lê Văn Hiến,
              Quận Ngũ Hành Sơn, Đà Nẵng
            </p>
            <p>
              <span className="material-icons">Điện thoại:</span> 0236 3957 777
            </p>
          </div>
          <div className="contact-group">
            <p>
              <strong>Bệnh viện Ung bướu Đà Nẵng</strong>
            </p>
            <p>
              <span className="material-icons">Địa chỉ:</span> 42 Ung Văn Khiêm,
              Phường Hòa Minh, Quận Liên Chiểu, Đà Nẵng
            </p>
            <p>
              <span className="material-icons">Điện thoại:</span> 0236 3717 717
            </p>
          </div>
          <div className="contact-group">
            <p>
              <strong>Hội Chữ Thập Đỏ TP Đà Nẵng</strong>
            </p>
            <p>
              <span className="material-icons">Địa chỉ:</span> 522 Ông Ích
              Khiêm, Quận Hải Châu, Đà Nẵng
            </p>
            <p>
              <span className="material-icons">Điện thoại:</span> 0236 3821 515
            </p>
          </div>
        </div>

        {/* Phần hỗ trợ */}
        <div className="footer-section support">
          <h3 className="footer-title">Hỗ trợ</h3>
          <p>Điều khoản sử dụng</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
