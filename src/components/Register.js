import React, { useEffect, useState } from "react";
import "./Register.css";
import Step0 from "./TP-register/Step0";
import Step1 from "./TP-register/Step1";
import Step2 from "./TP-register/Step2";
import Step3 from "./TP-register/Step3";
import Step4 from "./TP-register/Step4";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [file, setFile] = useState(null);
  const [cccdData, setCccdData] = useState(null);
  const [donor, setDonor] = useState({
    phone: "",
    blood_type: "",
    weight: 0,
    donation_count: 0,
  });
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [otpCode, setOtpCode] = useState(null);

  useEffect(() => {
    if (file) {
      const getCCCDData = async () => {
        const formData = new FormData();
        formData.append("file", file);

        const res = await axios.post(
          "http://localhost:8001/scan-qrcode/",
          formData
        );
        setCccdData(res.data.data);
      };

      getCCCDData();
    }
  }, [file]);

  useEffect(() => {
    if (user.email) {
      const createUser = async () => {
        let res = await axios.post("http://localhost:8000/api/v1/users/", {
          email: user.email,
          first_name: cccdData.full_name.split(" ").slice(0, -1).join(" "),
          last_name: cccdData.full_name.split(" ").slice(-1).join(" "),
          password: user.password,
        });

        const userCreated = res.data;
        res = await axios.post("http://localhost:8000/api/blood/donors/", {
          user_id: userCreated.id,
          gender: cccdData.gender,
          date_of_birth: cccdData.dob,
          id_number: cccdData.cccd_id,
          address: cccdData.residence,
          phone: donor.phone,
          blood_type: donor.blood_type,
          weight: donor.weight,
          donation_count: 4 - donor.donation_count,
        });
      };

      createUser();
    }
  }, [user]);

  useEffect(() => {
    if (otpCode) {
      const verifyOtp = async () => {
        await axios.post("http://localhost:8000/api/v1/users/verify-email/", {
          email: user.email,
          otp: otpCode,
        });
        navigate("/login", { state: { message: "Đăng ký thành công!" } });
      };

      verifyOtp();
    }
  }, [otpCode]);

  const handleStepChange = (step) => {
    if (step >= 0 && step <= 4) {
      setCurrentStep(step); // Chuyển đến bước tương ứng
    }
  };

  return (
    <div className="form-container">
      <div className="form-box">
        {" "}
        {/* Khung chứa form */}
        {/* Hiển thị hình tròn chỉ cho các bước từ 1 đến 4 */}
        <div className="circle-container">
          {[1, 2, 3, 4].map((step) => (
            <div className="step-item" key={step}>
              <div className={`circle ${currentStep === step ? "active" : ""}`}>
                {step}
              </div>
              <span className="circle-text">
                {step === 1 && "Giấy tờ tùy thân"}
                {step === 2 && "Hồ sơ người hiến máu"}
                {step === 3 && "Xác thực tài khoản"}
                {step === 4 && "Tạo mật khẩu"}
              </span>
            </div>
          ))}
        </div>
        {/* Hiển thị từng bước tương ứng */}
        {currentStep === 0 && (
          <Step0
            handleStepChange={handleStepChange}
            setFile={setFile}
            cccdData={cccdData}
          />
        )}
        {currentStep === 1 && (
          <Step1 handleStepChange={handleStepChange} data={cccdData} />
        )}
        {currentStep === 2 && (
          <Step2
            handleStepChange={handleStepChange}
            donor={donor}
            setDonor={setDonor}
          />
        )}
        {currentStep === 3 && (
          <Step3 handleStepChange={handleStepChange} setUser={setUser} />
        )}
        {currentStep === 4 && <Step4 setOtpCode={setOtpCode} />}
      </div>
    </div>
  );
};

export default Register;
