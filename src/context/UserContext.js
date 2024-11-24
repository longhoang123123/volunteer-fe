import React, { createContext, useContext, useState } from "react";

// Tạo context để quản lý người dùng
const AuthContext = createContext();

// Tạo Provider để cung cấp context cho các component con
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Thông tin người dùng

  const login = (name, image) => {
    setUser({ name, image }); // Đăng nhập và lưu thông tin người dùng
  };

  const logout = () => {
    setUser(null); // Đăng xuất và xóa thông tin người dùng
    localStorage.removeItem("access_token");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook để sử dụng context
export const useAuthContext = () => useContext(AuthContext);
