import React, { useState } from "react";
import "./ImageSlider.css";

const ImageSlider = () => {
  // Mảng chứa danh sách các ảnh
  const images = [
    require("../images/1.jpg"),
    require("../images/2.png"),
    require("../images/4.jpg"),
  ];

  // State để lưu chỉ số ảnh hiện tại
  const [currentIndex, setCurrentIndex] = useState(0);

  // Hàm xử lý khi nhấn nút bên trái
  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Hàm xử lý khi nhấn nút bên phải
  const handleNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div>
      <div className="slider-header">
        <h1>Các hoạt động hiến máu nhân đạo</h1>
      </div>
      <div className="slider">
        <div className="slider-arrow left-arrow" onClick={handlePrev}>
          &#10094;
        </div>

        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slider-image"
        />

        <div className="slider-arrow right-arrow" onClick={handleNext}>
          &#10095;
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
