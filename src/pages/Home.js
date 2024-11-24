// Home.js
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import ScrollToTopButton from "../components/ScrollToTopButton";
import AdviceForm from "../components/AdviceForm";
import ImageSlider from "../components/ImageSlider";
import EligibilityForm from "../components/EligibilityForm";
import Benefit from "../components/Benefit";
import ImportantNotice from "../components/ImportantNotice";

const Home = () => {
  const location = useLocation();
  const message = location.state?.message;
  const [showMessage, setShowMessage] = useState(!!message);

  useEffect(() => {
    if (message) {
      // Tạo timer để ẩn thông báo sau 2 giây
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 2000);

      // Hủy timer nếu component bị unmount hoặc message thay đổi
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className="home">
      {/* Sử dụng showMessage để điều khiển hiển thị */}
      {showMessage && <p className="success-message">{message}</p>}

      <ImageSlider />
      <Benefit />
      <EligibilityForm />
      <ImportantNotice />
      <AdviceForm />
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
