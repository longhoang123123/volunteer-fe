import React, { useState } from 'react';
import { FaSignOutAlt } from 'react-icons/fa'; // Import icon logout
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { useAuthContext } from '../context/UserContext';
import "./Logout.css"

const Logout = () => {
  const [isConfirming, setIsConfirming] = useState(false); // State to handle confirmation dialog visibility
  const navigate = useNavigate(); // Hook for navigation
  const { logout } = useAuthContext();

  // Handle logout action (clear user data and navigate to login page)
  const handleLogout = () => {
    logout();
    // Navigate to login page
    navigate('/login');

    // Hide the confirmation dialog
    setIsConfirming(false);
  };

  // Show confirmation dialog
  const confirmLogout = () => {
    setIsConfirming(true);
  };

  // Hide confirmation dialog
  const cancelLogout = () => {
    setIsConfirming(false);
  };

  return (
    <div>
      {/* If confirming, show the confirmation dialog */}
      {isConfirming ? (
        <div className="logout-confirmation">
          <p>Bạn có chắc chắn muốn thoát tài khoản?</p>
          <div className="buttons">
            <button onClick={handleLogout}>Xác nhận</button>
            <button onClick={cancelLogout}>Hủy bỏ</button>
          </div>
        </div>
      ) : (
        <li onClick={confirmLogout}>
          <FaSignOutAlt style={{ marginRight: '10px' }} /> Thoát tài khoản
        </li>
      )}
    </div>
  );
};

export default Logout;
