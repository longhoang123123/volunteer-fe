import React, { useEffect, useState } from "react";
import "./PersonalInfoPage.css";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const PersonalInfoPage = () => {
  const [donor, setDonor] = useState(null);

  useEffect(() => {
    const getDonor = async () => {
      try {
        const accessToken = localStorage.getItem("access_token");
        const decodedToken = jwtDecode(accessToken);
        const res = await axios.get(
          `http://localhost:8000/api/blood/donors/users/${decodedToken.user_id}/`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setDonor(res.data);
      } catch {}
    };

    getDonor();
  }, []);

  return (
    <div className="personal-info-container">
      <h1>Thông tin cá nhân</h1>
      <div className="info-section">
        <div className="info-item">
          <strong>Họ và tên:</strong> {donor?.user.first_name}{" "}
          {donor?.user.last_name}
        </div>
        <div className="info-item">
          <strong>Email:</strong> {donor?.user.email}
        </div>
        <div className="info-item">
          <strong>Số điện thoại:</strong> {donor?.phone}
        </div>
        <div className="info-item">
          <strong>Địa chỉ:</strong> {donor?.address}
        </div>
        <div className="info-item">
          <strong>Ngày sinh:</strong> {donor?.date_of_birth}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoPage;
