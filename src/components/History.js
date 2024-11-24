import React from 'react';
import './History.css';
import emptyImage from '../images/lich.jpg'; // Nhập ảnh vào component
import ScrollToTopButton from '../components/ScrollToTopButton';


const History = () => {
  return (
    <div className="appointment-history-container">
      
          <ScrollToTopButton />
      <h1>Lịch sử đặt hẹn</h1>
      
      <div className="empty-message">
        <img src={emptyImage} alt="No appointments" className="empty-image" /> {/* Hiển thị ảnh */}
        <p>Bạn chưa từng đặt lịch hẹn hiến máu nào.</p>
      </div>

      <button className="schedule-appointment-button">Đặt lịch</button>
    </div>
  );
};

export default History;
