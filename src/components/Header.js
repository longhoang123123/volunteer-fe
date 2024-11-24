// src/components/Header.js
import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { useAuthContext } from "../context/UserContext";

const Header = () => {
  const { user } = useAuthContext();
  return (
    <div className="header">
      <div className="menu">
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Trang chủ
            </NavLink>
          </li>
          {user && (
            <>
              <li>
                <NavLink to="/appointment" activeClassName="active">
                  Lịch hẹn của bạn
                </NavLink>
              </li>
              <li>
                <NavLink to="/events" activeClassName="active">
                  Sự kiện
                </NavLink>
              </li>
              <li>
                <NavLink to="/certificate" activeClassName="active">
                  Chứng nhận
                </NavLink>
              </li>
            </>
          )}
          <li>
            <NavLink to="/faq" activeClassName="active">
              Hỏi - Đáp
            </NavLink>
          </li>
          <li>
            <NavLink to="/news" activeClassName="active">
              Tin Tức
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Liên Hệ
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
