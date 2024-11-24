// EligibilityForm.js
import React from 'react';
import './EligibilityForm.css'; // Import file CSS cho form

const EligibilityForm = () => {
  return (
    <div className="eligibility-form">
      <h2>Tiêu chuẩn tham gia hiến máu</h2>
      <ul>
        <li>Mang theo chứng minh nhân dân/hộ chiếu</li>
        <li>Không nghiện ma túy, rượu bia và các chất kích thích</li>
        <li>
          Không mắc hoặc không có các hành vi nguy cơ lây nhiễm HIV, không nhiễm viêm gan B, viêm gan C, và các virus lây qua đường truyền máu
        </li>
        <li>Cân nặng: Nam ≥ 45 kg, Nữ ≥ 45 kg</li>
        <li>Không mắc các bệnh mãn tính hoặc cấp tính về tim mạch, huyết áp, hô hấp, dạ dày…</li>
        <li>
          Chỉ số huyết sắc tố (Hb) ≥120g/l (≥125g/l nếu hiến từ 350ml trở lên).
        </li>
        <li>Người khỏe mạnh trong độ tuổi từ đủ 18 đến 60 tuổi</li>
        <li>
          Thời gian tối thiểu giữa 2 lần hiến máu là 12 tuần đối với cả Nam và Nữ
        </li>
        <li>
          Kết quả test nhanh âm tính với kháng nguyên bề mặt của siêu vi B
        </li>
      </ul>
    </div>
    
  );
};

export default EligibilityForm;
