import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  X,
} from "lucide-react";

import "./Login.css";

const BACKGROUND_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBOe1cbYFy0WWjjr5FisB-jyr0U2KrSG2OMh_tNOYO4JFkA-KCTAx5fim4yMt5OyNKW65NYJOEH5BTuamPQuWN3c9jWPDL3F404igD_byjq74XicCxgyiu8azjo1-ifMENXzAbiPLQiHRnL7L3gxnM_vo0p21Bpeo5jo1yE1bYCXbpLvwb8LJlaSkgn3odgBWJiJB3jAlZQRMClUtbusBRJPGZvJ56ymyekQ28wY-UYqiJFvv9YcNRC";

const LOGO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB4HEPjEdRUZMrtprVCUfEP_cx3wIrxDSA1IBp0fkGe_ibFK37-C8lFJ4d2c1AMYq75LSIeNDSpiTJ5lT850aQmPZoLI89zZafL2XqvqHVpSlijjj62bo5ar3hGVOfmhKxq2twYjIpnSW39hTJl-qZgdow9GiCDSK6DCLJdbwOriDNrNhQ_jsxk_O6LNqqF4w6PVnU49WLwFfFPAg8Vq3hNA7Irg9M5LwU3w-iUu3u4cR_t-q_tQRWSJfh2MaozDMv1Pw";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resetEmail, setResetEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Login:", {
      email,
      password,
    });

    // Sau này sẽ gọi API login ở đây.
    // navigate("/dashboard");
  };

  const handleResetPassword = (event) => {
    event.preventDefault();

    console.log("Reset password:", resetEmail);

    setShowForgotPassword(false);
  };

  return (
    <div className="login-page">
      {/* Background */}
      <div
        className="login-background"
        style={{
          backgroundImage: `url("${BACKGROUND_IMAGE}")`,
        }}
      />

      {/* Background overlay */}
      <div className="login-overlay" />

      {/* Main */}
      <main className="login-container">
        <div className="login-card">
          {/* Header */}
          <div className="login-header">
            <img
              src={LOGO_IMAGE}
              alt="NetStudy Logo"
              className="login-logo"
            />

            <p className="login-welcome">Welcome Back !</p>
          </div>

          {/* Form */}
          <form className="login-form" onSubmit={handleSubmit}>
            {/* Email */}
            <div className="login-field">
              <label htmlFor="email">Email Address</label>

              <div className="login-input-wrapper">
                <Mail
                  size={20}
                  strokeWidth={2}
                  className="login-input-icon"
                />

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="student@netstudy.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Password */}
            <div className="login-field">
              <div className="login-password-header">
                <label htmlFor="password">Password</label>

                <button
                  type="button"
                  className="forgot-password-link"
                  onClick={() => setShowForgotPassword(true)}
                >
                  Forgot Password?
                </button>
              </div>

              <div className="login-input-wrapper">
                <Lock
                  size={20}
                  strokeWidth={2}
                  className="login-input-icon"
                />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword((prev) => !prev)
                  }
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? (
                    <Eye size={20} strokeWidth={2} />
                  ) : (
                    <EyeOff size={20} strokeWidth={2} />
                  )}
                </button>
              </div>
            </div>

            {/* Sign In */}
            <button type="submit" className="login-submit">
              <span>Sign In</span>

              <ArrowRight
                size={20}
                strokeWidth={2}
              />
            </button>
          </form>

          {/* Divider */}
          <div className="login-divider">
            <div />
            <span>or</span>
            <div />
          </div>

          {/* Register */}
          <div className="login-register">
            <p>
              Bạn chưa có tài khoản?{" "}
              <button
                type="button"
                onClick={() => navigate("/register")}
              >
                Đăng ký ngay
              </button>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="login-footer">
          <p>© 2026 NetStudy Logistics Academy</p>
        </div>
      </main>

      {/* Forgot Password Modal */}
      {showForgotPassword && (
        <div className="forgot-modal-overlay">
          <div className="forgot-modal">
            <div className="forgot-modal-header">
              <h2>Quên mật khẩu</h2>

              <button
                type="button"
                onClick={() =>
                  setShowForgotPassword(false)
                }
                aria-label="Close"
              >
                <X size={22} strokeWidth={2} />
              </button>
            </div>

            <p className="forgot-description">
              Nhập email của bạn để nhận hướng dẫn khôi
              phục mật khẩu.
            </p>

            <form onSubmit={handleResetPassword}>
              <div className="login-field">
                <label htmlFor="reset-email">
                  Địa chỉ Email
                </label>

                <input
                  id="reset-email"
                  type="email"
                  placeholder="email@example.com"
                  value={resetEmail}
                  onChange={(e) =>
                    setResetEmail(e.target.value)
                  }
                />
              </div>

              <div className="forgot-actions">
                <button
                  type="submit"
                  className="forgot-send"
                >
                  Gửi yêu cầu
                </button>

                <button
                  type="button"
                  className="forgot-cancel"
                  onClick={() =>
                    setShowForgotPassword(false)
                  }
                >
                  Hủy
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}