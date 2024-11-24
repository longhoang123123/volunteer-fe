import React, { useState } from "react";
import qrImage from "../../images/QR.png";
import "./Step0.css";

const Step0 = ({ handleStepChange, setFile, cccdData }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const isImage = file.type.startsWith("image/");
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (!isImage) {
        setErrorMessage("Vui lòng chọn một tệp hình ảnh.");
        return;
      }
      if (file.size > maxSize) {
        setErrorMessage("Kích thước tệp phải nhỏ hơn 5MB.");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        setErrorMessage(""); // Clear error message if valid
      };
      reader.readAsDataURL(file);
      setFile(file);
    }
  };

  const handleNext = () => {
    handleStepChange(1); // Move to Step1
  };

  return (
    <div className="upload-container">
      <h2>Giấy Tờ Tùy Thân</h2>
      <p className="info">
        <span className="dot"></span>
        Để đăng ký tài khoản, vui lòng cung cấp thông tin giấy tờ tùy thân của
        người hiến máu.
      </p>
      <p className="info">
        <span className="dot"></span>
        Vui lòng chuẩn bị giấy tờ tùy thân để hệ thống ghi nhận lại mặt trước
        của giấy tờ tùy thân.
      </p>

      {/* Display error message if exists */}
      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <div className="upload-methods-container">
        <div className="form-group">
          <div className="upload-method">
            <div className="upload-area">
              <div className="cloud-icon">
                <i className="fa fa-cloud-upload"></i>
              </div>
              <div className="file-upload-content">
                <p className="file-upload-text">
                  Cách 1: Kéo và thả file tại đây
                </p>
                <p>Hoặc</p>
                {/* <label htmlFor="file-upload" className="file-upload-label">
                  Chọn file
                </label> */}
                <input
                  type="file"
                  id="file-upload"
                  onChange={handleFileChange}
                  accept="image/*"
                  className="file-upload" // Custom styling if needed
                />
              </div>
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Uploaded"
                  className="uploaded-image"
                />
              )}
            </div>
          </div>
        </div>

        <div className="divider">|</div>

        <div className="form-group">
          <div className="upload-method">
            <p className="file-upload-text">Cách 2: Quét mã QR Code</p>
            <p>Tải lên từ điện thoại</p>
            <div className="qr-code-placeholder">
              <img src={qrImage} alt="Mã QR" />
              <div className="qr-code-text">Nội dung mô tả ảnh</div>
            </div>
          </div>
        </div>
      </div>

      <div className="button-container">
        {cccdData && (
          <button type="button" className="next-button" onClick={handleNext}>
            Tiếp theo
          </button>
        )}
      </div>

      <p className="login-prompt">
        Đã có tài khoản?{" "}
        <a href="/login" className="login-link">
          Đăng nhập ngay
        </a>
      </p>
    </div>
  );
};

export default Step0;
