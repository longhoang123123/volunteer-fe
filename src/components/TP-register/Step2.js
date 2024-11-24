import React, { useState } from "react";
import "./Step2.css";

const Step2 = ({ handleStepChange, donor, setDonor }) => {
  const handleNext = () => {
    // Thêm logic xác thực nếu cần
    handleStepChange(3); // Chuyển sang Step3
  };

  const handleChange = (e) => {
    setDonor((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <h2>Hồ Sơ Người Hiến Máu</h2>
      <p>
        Vui lòng nhập thông tin người hiến máu để hoàn thành hồ sơ người hiến
        máu.
      </p>

      {/* Số điện thoại */}
      <div className="form-group">
        <label htmlFor="mobile">Điện thoại di động (*)</label>
        <input
          name="phone"
          type="tel"
          id="mobile"
          placeholder="VD: 0909090909"
          value={donor.phone}
          onChange={(e) => handleChange(e)}
          pattern="[0-9]{10}"
          required
        />
        <small>
          Số điện thoại của bạn hoặc bất kỳ số nào mà chúng tôi có thể liên lạc.
          Số điên thoại di động gồm 10 chữ số.
        </small>
      </div>

      {/* Nhóm máu */}
      <div className="form-group">
        <label htmlFor="blood_type">Nhóm máu (*)</label>
        <select
          name="blood_type"
          id="blood_type"
          value={donor.blood_type}
          onChange={(e) => handleChange(e)}
          required
        >
          <option value="">Chọn nhóm máu</option>
          <option value="A+">A+</option>
          <option value="B+">B+</option>
          <option value="AB+">AB+</option>
          <option value="O+">O+</option>
          <option value="A-">A-</option>
          <option value="B-">B-</option>
          <option value="AB-">AB-</option>
          <option value="O-">O-</option>
        </select>
        <small>Vui lòng chọn nhóm máu của bạn.</small>
      </div>

      {/* Cân nặng */}
      <div className="form-group">
        <label htmlFor="weight">Cân nặng (kg) (*)</label>
        <input
          name="weight"
          type="number"
          id="weight"
          placeholder="VD: 60"
          value={donor.weight}
          onChange={(e) => handleChange(e)}
          required
        />
        <small>Vui lòng nhập cân nặng của bạn (kg).</small>
      </div>

      {/* Số lần hiến máu */}
      <div className="form-group">
        <label htmlFor="donation_count">Số lần đã hiến máu (*)</label>
        <input
          name="donation_count"
          type="number"
          max="4"
          min="0"
          id="donation_count"
          placeholder="VD: 3, giới hạn 4 lần"
          value={donor.donation_count}
          onChange={(e) => handleChange(e)}
          required
        />
        <small>Vui lòng nhập số lần bạn đã tham gia hiến máu.</small>
      </div>

      <div className="button-container-step2">
        <button className="back-button" onClick={() => handleStepChange(1)}>
          Quay về
        </button>
        <button className="next-button" onClick={handleNext}>
          Tiếp theo
        </button>
      </div>
    </div>
  );
};

export default Step2;
