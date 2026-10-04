import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

import "./Register.css";

const BACKGROUND_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBOe1cbYFy0WWjjr5FisB-jyr0U2KrSG2OMh_tNOYO4JFkA-KCTAx5fim4Mt5OyNKW65NYJOEH5BTuamPQuWN3c9jWPDL3F404igD_byjq74XicCxgyiu8azjo1-ifMENXzAbiPLQiHRnL7L3gxnM_vo0p21Bpeo5jo1yE1bYCXbpLvwb8LJlaSkgn3odgBWJiJB3jAlZQRMClUtbusBRJPGZvJ56ymyekQ28wY-UYqiJFvv9YcNRC";

const LOGO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB4HEPjEdRUZMrtprVCUfEP_cx3wIrxDSA1IBp0fkGe_ibFK37-C8lFJ4d2c1AMYq75LSIeNDSpiTJ5lT850aQmPZoLI89zZafL2XqvqHVpSlijjj62bo5ar3hGVOfmhKxq2twYjIpnSW39hTJl-qZgdow9GiCDSK6DCLJdbwOriDNrNhQ_jsxk_O6LNqqF4w6PVnU49WLwFfFPAg8Vq3hNA7Irg9M5LwU3w-iUu3u4cR_t-q_tQRWSJfh2MaozDMv1Pw";

export default function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");

    if (
      !fullName ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      setError("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Mật khẩu xác nhận không khớp.");
      return;
    }

    console.log("Register:", {
      fullName,
      email,
      password,
    });

    // Sau này gọi API đăng ký ở đây.

    // Sau khi đăng ký thành công:
    // navigate("/login");
  };

  return (
    <div className="register-page">
      {/* Background */}
      <div
        className="register-background"
        style={{
          backgroundImage: `url("${BACKGROUND_IMAGE}")`,
        }}
      />

      {/* Overlay */}
      <div className="register-overlay" />

      {/* Main */}
      <main className="register-container">
        <div className="register-card">
          {/* Header */}
          <div className="register-header">
            <img
              src={LOGO_IMAGE}
              alt="NetStudy Logo"
              className="register-logo"
            />

            <h1>Create Your Account</h1>

            <p>
              Join NetStudy Logistics Academy today
            </p>
          </div>

          {/* Form */}
          <form
            className="register-form"
            onSubmit={handleSubmit}
          >
            {/* Full Name */}
            <div className="register-field">
              <label htmlFor="fullName">
                Full Name
              </label>

              <div className="register-input-wrapper">
                <User
                  size={20}
                  strokeWidth={2}
                  className="register-input-icon"
                />

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Nguyen Van A"
                  value={fullName}
                  onChange={(e) =>
                    setFullName(e.target.value)
                  }
                />
              </div>
            </div>

            {/* Email */}
            <div className="register-field">
              <label htmlFor="email">
                Email Address
              </label>

              <div className="register-input-wrapper">
                <Mail
                  size={20}
                  strokeWidth={2}
                  className="register-input-icon"
                />

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="student@netstudy.edu"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                />
              </div>
            </div>

            {/* Password */}
            <div className="register-field">
              <label htmlFor="password">
                Password
              </label>

              <div className="register-input-wrapper">
                <Lock
                  size={20}
                  strokeWidth={2}
                  className="register-input-icon"
                />

                <input
                  id="password"
                  name="password"
                  type={
                    showPassword ? "text" : "password"
                  }
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                />

                <button
                  type="button"
                  className="register-password-toggle"
                  onClick={() =>
                    setShowPassword(
                      (prev) => !prev
                    )
                  }
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? (
                    <Eye
                      size={20}
                      strokeWidth={2}
                    />
                  ) : (
                    <EyeOff
                      size={20}
                      strokeWidth={2}
                    />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="register-field">
              <label htmlFor="confirmPassword">
                Confirm Password
              </label>

              <div className="register-input-wrapper">
                <Lock
                  size={20}
                  strokeWidth={2}
                  className="register-input-icon"
                />

                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(
                      e.target.value
                    )
                  }
                />

                <button
                  type="button"
                  className="register-password-toggle"
                  onClick={() =>
                    setShowConfirmPassword(
                      (prev) => !prev
                    )
                  }
                  aria-label={
                    showConfirmPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showConfirmPassword ? (
                    <Eye
                      size={20}
                      strokeWidth={2}
                    />
                  ) : (
                    <EyeOff
                      size={20}
                      strokeWidth={2}
                    />
                  )}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="register-error">
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="register-submit"
            >
              <span>Create Account</span>

              <ArrowRight
                size={20}
                strokeWidth={2}
              />
            </button>
          </form>

          {/* Login */}
          <div className="register-login">
            <p>
              Bạn đã có tài khoản?{" "}
              <button
                type="button"
                onClick={() => navigate("/login")}
              >
                Đăng nhập ngay
              </button>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="register-footer">
          <p>
            © 2026 NetStudy Logistics Academy
          </p>
        </div>
      </main>
    </div>
  );
}