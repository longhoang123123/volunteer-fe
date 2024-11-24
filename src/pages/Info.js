// src/pages/Info.js
import React, { useState } from 'react';
import './Info.css'; // Import file CSS nếu cần

const Info = () => {
  const [idNumber, setIdNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý xác nhận tại đây
    alert('Thông tin đã được xác nhận!');
  };

  return (
    <div className="info-container">
      <h2>Nhập Thông Tin Giấy Tờ</h2>
      <p>Vui lòng nhập thông tin trên giấy tờ và bấm "Xác nhận" để hoàn thành</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="documentType">Chọn loại giấy tờ:</label>
          <select id="documentType">
            <option value="cccd">CCCD</option>
            <option value="cmnd">CMND</option>
            <option value="passport">Hộ Chiếu</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="idNumber">Số chứng minh nhân dân (*):</label>
          <input
            type="text"
            id="idNumber"
            value={idNumber}
            placeholder="Nhập số giấy tờ"
            onChange={(e) => setIdNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="fullName">Họ và tên (*):</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            placeholder="Nhập họ và tên"
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Ngày sinh (*):</label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Giới tính (*):</label>
          <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
            <option value="">Chọn giới tính</option>
            <option value="male">Nam</option>
            <option value="female">Nữ</option>
            <option value="other">Khác</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="address">Địa chỉ thường trú (*):</label>
          <input
            type="text"
            id="address"
            value={address}
            placeholder="Nhập địa chỉ"
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <button type="submit">Xác nhận</button>
      </form>
    </div>
  );
};

export default Info;
