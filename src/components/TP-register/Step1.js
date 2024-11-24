import React, { useState } from "react";
import "./Step1.css";
import { convertDateFormat } from "../../utils";

const Step1 = ({ handleStepChange, data }) => {
  const [idNumber, setIdNumber] = useState(data?.cccd_id); // Số căn cước công dân
  const [firstName, setFirstName] = useState(
    data?.full_name.split(" ").slice(0, -1).join(" ")
  ); // Họ
  const [lastName, setLastName] = useState(
    data?.full_name.split(" ").slice(-1).join(" ")
  ); // Tên
  const [dateOfBirth, setDateOfBirth] = useState(convertDateFormat(data?.dob)); // Ngày sinh
  const [gender, setGender] = useState(data?.gender); // Giới tính
  const [fullAddress, setFullAddress] = useState(data?.residence); // Địa chỉ tổng hợp

  // Cập nhật địa chỉ tổng hợp khi bấm nút Xác nhận
  const handleConfirm = () => {
    setFullAddress("Địa chỉ đã được xác nhận");
    handleStepChange(2); // Chuyển sang bước tiếp theo
  };

  return (
    <div>
      <h2>Nhập thông tin cá nhân</h2>
      <p className="instruction">
        Vui lòng nhập thông tin cá nhân và bấm <strong>“xác nhận”</strong> để
        hoàn thành.
      </p>

      {/* Số căn cước công dân */}
      <div className="form-group">
        <label>Số căn cước công dân (*)</label>
        <input
          type="text"
          value={idNumber}
          onChange={(e) => setIdNumber(e.target.value)}
          placeholder="Nhập đầy đủ 09 chữ số được in trên căn cước"
          disabled
        />
        <small>'VD: 123456789'</small>
      </div>

      {/* Họ và tên */}
      <div className="form-group">
        <label>Họ (*)</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Nhập họ"
          disabled
        />
      </div>

      <div className="form-group">
        <label>Tên (*)</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Nhập tên"
          disabled
        />
      </div>

      {/* Ngày sinh */}
      <div className="form-group">
        <label>Ngày sinh (*)</label>
        <input
          type="text"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          placeholder="Nhập ngày tháng năm sinh theo định dạng: Ngày/Tháng/Năm"
          disabled
        />
        <small>VD: 01/01/1900</small>
      </div>

      {/* Giới tính */}
      <div className="form-group">
        <label>Giới tính (*)</label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          disabled
        >
          <option value="">Chọn giới tính</option>
          <option value="Nam">Nam</option>
          <option value="Nữ">Nữ</option>
        </select>
      </div>

      {/* Địa chỉ tổng hợp */}
      <div className="form-group">
        <label>Địa chỉ đã chọn</label>
        <input
          type="text"
          value={fullAddress}
          readOnly
          placeholder="Địa chỉ sẽ hiển thị ở đây sau khi xác nhận"
          disabled
        />
      </div>

      <div className="button-container-step1">
        <button className="back-button" onClick={() => handleStepChange(0)}>
          Quay về
        </button>
        <button className="next-button" onClick={handleConfirm}>
          Xác nhận
        </button>
      </div>
    </div>
  );
};

export default Step1;
