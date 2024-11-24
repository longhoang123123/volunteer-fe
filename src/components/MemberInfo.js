// MemberInfo.js
import React from 'react';
import './MemberInfo.css'; 
const MemberInfo = () => {
  return (
    <div className="member-info">
      <div className="member-info-content">
        <div className="member-item">
          <h3>Đơn vị thành viên:</h3>
          <img src={require('../images/OIP.jpg')} alt="CTDBTHBTH" className="member-logo" />
        </div>
        
        <div className="member-item">
          <h3>Chỉ đạo thực hiện:</h3>
          <img src={require('../images/OIP.jpg')} alt="HCAHCTD" className="member-logo" />
        </div>
        
        <div className="member-item">
          <h3>Tổ chức và Phát triển bởi:</h3>
          <img src={require('../images/OIP.jpg')} alt="QTSCINTELIN" className="member-logo" />
        </div>
        
        <div className="member-item">
          <h3>Tài trợ:</h3>
          <img src={require('../images/OIP.jpg')} alt="STG" className="member-logo" />
        </div>
      </div>
      <p>Bản quyền © 2024 - Phiên bản 1.4.4</p>
    </div>
  );
};

export default MemberInfo;
