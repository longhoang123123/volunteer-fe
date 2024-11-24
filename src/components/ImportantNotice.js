import React from 'react';
import './ImportantNotice.css'; // File CSS riêng cho form
import Question from '../components/Question';

const ImportantNotice = () => {
  return (
    <div className="important-notice-form">
      <h1 className="faq-title">Lưu ý quan trọng</h1>
      <Question
        question="1. Ai có thể tham gia hiến máu?"
        answer={
          <ul>
            <li>Tất cả mọi người từ 18 - 60 tuổi, thực sự tình nguyện hiến máu của mình để cứu chữa người bệnh.</li>
            <li>Cân nặng ít nhất là 45kg đối với phụ nữ và nam giới. Lượng máu hiến mỗi lần không quá 9ml/kg cân nặng và không quá 500ml mỗi lần.</li>
            <li>Không bị nhiễm hoặc không có các hành vi lây nhiễm HIV và các bệnh lây nhiễm qua đường truyền máu khác.</li>
            <li>Thời gian giữa 2 lần hiến máu là 12 tuần đối với cả Nam và Nữ.</li>
            <li>Có giấy tờ tùy thân.</li>
          </ul>
        }
      />
      <Question
        question="2. Ai là người không nên hiến máu?"
        answer={
          <ul>
            <li>Người đã nhiễm hoặc đã thực hiện hành vi có nguy cơ nhiễm HIV, viêm gan B, viêm gan C, và các virus lây qua đường truyền máu.</li>
            <li>Người có các bệnh mãn tính: tim mạch, huyết áp, hô hấp, dạ dày.</li>
          </ul>
        }
      />
      <Question
        question="3. Máu của tôi sẽ được làm những xét nghiệm gì?"
        answer={
          <ul>
            <li>Tất cả những đơn vị máu thu được sẽ được kiểm tra nhóm máu (hệ ABO, hệ Rh), HIV, virus viêm gan B, virus viêm gan C, giang mai, sốt rét.</li>
            <li>Bạn sẽ được thông báo kết quả, được giữ kín và được tư vấn (miễn phí) khi phát hiện ra các bệnh nhiễm trùng nói trên.</li>
          </ul>
        }
      />
    </div>
  );
};

export default ImportantNotice;
