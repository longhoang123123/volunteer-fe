import React from 'react';
import './Certificate.css'; // Nhập file CSS cho trang
import ScrollToTopButton from '../components/ScrollToTopButton';


const Certificate = () => {
  return (
    <div className="certificate-container">
          <ScrollToTopButton />
      <h1>Chứng nhận hiến máu</h1>
      
      <p>Thêm giấy chứng nhận hiến máu của bạn tại đây. Nếu bạn chưa từng đặt lịch hiến trên hệ thống, hãy nhớ cập nhật thông tin cá nhân trước khi thực hiện thao tác này để quản trị có thể đối chiếu thông tin.</p>
      
      <button className="add-certificate-button">Thêm chứng nhận</button>
    </div>
  );
};

export default Certificate;
