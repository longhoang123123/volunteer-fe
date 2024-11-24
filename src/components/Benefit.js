import React from 'react';
import './Benefit.css'; // File CSS riêng cho form

const Benefit = () => {
  return (
    <div className="benefits-form">
      <h2>Quyền lợi của người hiến máu</h2>
      <div className="benefits-content">
        <div className="benefits-column">
          <ul>
            <li>Được khám và tư vấn sức khỏe miễn phí.</li>
            <li>Được xét nghiệm máu để kiểm tra các bệnh truyền nhiễm.</li>
            <li>Được bồi hoàn một phần chi phí đi lại và ăn uống.</li>
          </ul>
        </div>
        <div className="benefits-column">
          <ul>
            <li>Nhận giấy chứng nhận hiến máu tình nguyện.</li>
            <li>Được ưu tiên truyền máu miễn phí khi cần thiết.</li>
            <li>Tham gia các chương trình ưu đãi từ hội hiến máu.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
