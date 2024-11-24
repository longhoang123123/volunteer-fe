import React from 'react';
import './AdviceForm.css'; 

const AdviceForm = () => {
  return (
    <div className="advice-form">
      <h2>Những lời khuyên trước và sau khi hiến máu</h2>

      <div className="advice-container">
        {/* Phần Không nên */}
        <div className="advice-section">
          <h3>Không nên:</h3>
          <ul>
            <li className="should-not">Uống sữa, rượu bia trước khi hiến máu.</li>
            <li className="should-not">Lái xe đi xa, khuân vác, làm việc nặng hoặc luyện tập thể thao gắng sức trong ngày lấy máu.</li>
          </ul>
          <p>Bác sĩ Ngô Văn Tân</p>
          <p>Trưởng khoa Khoa Tiếp nhận hiến máu, Bệnh viện Truyền máu Huyết học</p>
        </div>

        {/* Phần Lưu ý */}
        <div className="advice-section">
          <h3>Lưu ý:</h3>
          <ul>
            <li className="note">Nếu phát hiện chảy máu tại chỗ chích:</li>
            <ul>
              <li className="note">Giơ tay cao.</li>
              <li className="note">Lấy tay kia ấn nhẹ vào miếng bông hoặc băng dính.</li>
              <li className="note">Liên hệ nhân viên y tế để được hỗ trợ khi cần thiết.</li>
            </ul>
          </ul>
          <p>Bác sĩ Ngô Văn Tân</p>
          <p>Trưởng khoa Khoa Tiếp nhận hiến máu, Bệnh viện Truyền máu Huyết học</p>
        </div>

        {/* Phần Nên */}
        <div className="advice-section">
          <h3>Nên:</h3>
          <ul>
            <li className="should">Ăn nhẹ và uống nhiều nước (300-500ml) trước khi hiến máu.</li>
            <li className="should">Đè chặt miếng bông gòn cầm máu nơi kim chích 10 phút, giữ băng keo cá nhân trong 4-6 giờ.</li>
            <li className="should">Nằm và ngồi nghỉ tại chỗ 10 phút sau khi hiến máu.</li>
            <li className="should">Nằm nghỉ đầu thấp, kê chân cao nếu thấy chóng mặt, mệt, buồn nôn.</li>
            <li className="should">Chườm lạnh (túi chườm chuyên dụng hoặc cho đá vào khăn) chườm vết chích nếu bị sưng, bầm tím.</li>
          </ul>
          <p>Bác sĩ Ngô Văn Tân</p>
          <p>Trưởng khoa Khoa Tiếp nhận hiến máu, Bệnh viện Truyền máu Huyết học</p>
        </div>
      </div>
    </div>
  );
};

export default AdviceForm;
