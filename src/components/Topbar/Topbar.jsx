import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Topbar.css";

const links = [
  { to: "/dashboard", label: "Trang chủ" },
  { to: "/courses", label: "Khóa học" },
  { to: "/learning/roadmap", label: "Lộ trình" },
  { to: "/simulations", label: "Mô phỏng" },
  { to: "/recruiter", label: "Nhà tuyển dụng" },
  { to: "/profile", label: "Hồ sơ" },
];

export default function Topbar() {
  const navigate = useNavigate();

  return (
    <header className="topbar">
      <button
        className="brand"
        onClick={() => navigate("/dashboard")}
      >
        <span className="brand-mark">N</span>
        <span>NetStudy</span>
      </button>

      <nav className="topnav">
        {links.map((x) => (
          <NavLink key={x.to} to={x.to}>
            {x.label}
          </NavLink>
        ))}
      </nav>

      <div className="top-actions">
        <NavLink to="/login" className="btn ghost">
          Đăng nhập
        </NavLink>

        <NavLink to="/register" className="btn primary">
          Đăng ký
        </NavLink>
      </div>
    </header>
  );
}