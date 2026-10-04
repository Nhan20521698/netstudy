
import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock3,
  FileText,
  Globe2,
  Headphones,
  Languages,
  PlayCircle,
  ShieldCheck,
  Star,
  Terminal,
  Users,
  X,
} from "lucide-react";

import "./EnrollmentDetails.css";

const curriculum = [
  {
    number: "01",
    title: "Tổng quan Vận tải Biển & Tuyến Hành trình Hàng hải",
    info: "4 bài học • 3.5 giờ",
  },
  {
    number: "02",
    title: "Quy chuẩn Incoterms 2020 & Quản trị Rủi ro Hàng hải",
    info: "5 bài học • 4 giờ",
  },
  {
    number: "03",
    title: "Cơ cấu Giá cước Hãng tàu & Tối ưu hóa FCL / LCL",
    info: "5 bài học • 4.5 giờ",
  },
  {
    number: "04",
    title: "Thực hành Chứng từ Vận tải trên Hệ thống Phần mềm Mô phỏng",
    info: "1 Simulation Lab",
    simulation: true,
  },
];

const benefits = [
  {
    icon: PlayCircle,
    text: "Truy cập trọn đời 28 bài giảng chất lượng cao",
  },
  {
    icon: Terminal,
    text: "Tặng tài khoản 20 giờ thực hành Simulation Room 3D",
  },
  {
    icon: FileText,
    text: "Bộ biểu mẫu chứng từ hàng hải tiêu chuẩn quốc tế",
  },
  {
    icon: ShieldCheck,
    text: "Chứng chỉ hoàn thành có mã tra cứu NetStudy",
  },
];

export default function EnrollmentDetails() {
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [showConsultModal, setShowConsultModal] = useState(false);
  const [showAllCurriculum, setShowAllCurriculum] = useState(false);

  const displayedCurriculum = showAllCurriculum
    ? curriculum
    : curriculum.slice(0, 4);

  const handleConsultSubmit = (event) => {
    event.preventDefault();
    setShowConsultModal(false);
    alert("Yêu cầu tư vấn đã được ghi nhận.");
  };

  return (
    <div className="ed-page">
      <div className="ed-container">
        {/* Breadcrumb */}
        <nav className="ed-breadcrumb">
          <span>Courses</span>
          <ChevronRight size={15} />
          <span>Maritime Logistics</span>
          <ChevronRight size={15} />
          <strong>International Shipping Fundamentals</strong>
        </nav>

        <div className="ed-layout">
          {/* LEFT COLUMN */}
          <div className="ed-main">
            {/* Hero */}
            <section className="ed-card ed-hero-card">
              <div className="ed-hero">
                <img
                  src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1600&q=85"
                  alt="International Shipping"
                />

                <div className="ed-hero-overlay" />

                <div className="ed-hero-content">
                  <div className="ed-hero-badges">
                    <span className="ed-badge-primary">
                      Professional Certificate
                    </span>

                    <span className="ed-badge-secondary">
                      Level: Intermediate
                    </span>
                  </div>

                  <h1>International Shipping Fundamentals</h1>

                  <p>
                    Nắm vững nền tảng vận tải biển quốc tế, nghiệp vụ chứng từ
                    xuất nhập khẩu, Incoterms 2020 và quy trình tối ưu hóa chuỗi
                    cung ứng logistics toàn cầu.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="ed-stats">
                <div className="ed-stat">
                  <Star size={18} fill="currentColor" />
                  <strong>4.9</strong>
                  <span>(148 đánh giá)</span>
                </div>

                <div className="ed-stat">
                  <Users size={18} />
                  <span>1,420 học viên</span>
                </div>

                <div className="ed-stat">
                  <Clock3 size={18} />
                  <span>10 tuần (40 giờ học)</span>
                </div>

                <div className="ed-stat">
                  <Languages size={18} />
                  <span>Tiếng Việt & Thuật ngữ Anh</span>
                </div>
              </div>
            </section>

            {/* Learning objectives */}
            <section className="ed-card ed-section-card">
              <div className="ed-section-title">
                <CheckCircle2 size={22} />
                <h2>Mục tiêu đào tạo & Kiến thức đạt được</h2>
              </div>

              <div className="ed-benefit-grid">
                <div className="ed-learning-item">
                  <CheckCircle2 size={20} />
                  <p>
                    Hiểu tường tận dòng chảy chứng từ vận tải biển quốc tế
                    (B/L, Booking Note, Arrival Notice).
                  </p>
                </div>

                <div className="ed-learning-item">
                  <CheckCircle2 size={20} />
                  <p>
                    Thực hành áp dụng chuẩn xác Incoterms 2020 trong việc phân
                    bổ chi phí và chuyển giao rủi ro.
                  </p>
                </div>

                <div className="ed-learning-item">
                  <CheckCircle2 size={20} />
                  <p>
                    Làm chủ phương pháp định giá, tối ưu cước container (FCL &
                    LCL) và các loại phụ phí hãng tàu.
                  </p>
                </div>

                <div className="ed-learning-item">
                  <CheckCircle2 size={20} />
                  <p>
                    Trải nghiệm tương tác phòng mô phỏng 3D xử lý thủ tục Hải
                    quan điện tử và điều độ cảng.
                  </p>
                </div>
              </div>
            </section>

            {/* Curriculum */}
            <section className="ed-card ed-section-card">
              <div className="ed-curriculum-header">
                <div>
                  <h2>Lộ trình học tập (Curriculum)</h2>
                  <p>
                    6 Chuyên đề • 28 Bài giảng số • 4 Giờ thực hành mô phỏng
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowAllCurriculum((prev) => !prev)}
                >
                  {showAllCurriculum ? "Thu gọn" : "Mở rộng tất cả"}
                  <ChevronDown
                    size={15}
                    className={showAllCurriculum ? "ed-rotate" : ""}
                  />
                </button>
              </div>

              <div className="ed-curriculum-list">
                {displayedCurriculum.map((item) => (
                  <div className="ed-curriculum-item" key={item.number}>
                    <div className="ed-curriculum-left">
                      <span className="ed-number">{item.number}</span>

                      <h3>{item.title}</h3>
                    </div>

                    {item.simulation ? (
                      <span className="ed-simulation-badge">
                        1 Simulation Lab
                      </span>
                    ) : (
                      <span className="ed-curriculum-info">
                        {item.info}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Instructor */}
            <section className="ed-card ed-section-card">
              <h2 className="ed-instructor-title">
                Giảng viên phụ trách
              </h2>

              <div className="ed-instructor">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80"
                  alt="Giảng viên"
                />

                <div className="ed-instructor-info">
                  <h3>ThS. Trần Văn Hải</h3>

                  <strong>
                    Chuyên gia Logistics Hàng hải cấp cao • 15 năm kinh nghiệm
                  </strong>

                  <p>
                    Cựu Giám đốc Vận hành tại Hãng tàu quốc tế, cố vấn chuyển
                    đổi số chuỗi cung ứng cảng biển, trực tiếp xây dựng giáo
                    trình chuẩn FIATA.
                  </p>

                  <div className="ed-instructor-meta">
                    <span>
                      <Star size={14} fill="currentColor" />
                      4.9 Đánh giá
                    </span>

                    <span>•</span>

                    <span>4,800+ Học viên tốt nghiệp</span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN */}
          <aside className="ed-sidebar">
            <div className="ed-card ed-enrollment-card">
              <div className="ed-price">
                <span>Học phí trọn gói</span>

                <div>
                  <strong>359.000</strong>
                  <b>₫</b>
                </div>

                <small>Tiết kiệm 45% (Giá gốc 650.000₫)</small>
              </div>

              <div className="ed-actions">
                <button
                  type="button"
                  className="ed-enroll-button"
                  onClick={() => setShowEnrollModal(true)}
                >
                  Đăng Ký Ngay
                  <ArrowRight size={19} />
                </button>

                <button
                  type="button"
                  className="ed-consult-button"
                  onClick={() => setShowConsultModal(true)}
                >
                  <Headphones size={18} />
                  Tư vấn thêm
                </button>
              </div>

              <div className="ed-benefits">
                <h3>Quyền lợi ghi danh khóa học:</h3>

                {benefits.map((benefit) => {
                  const Icon = benefit.icon;

                  return (
                    <div className="ed-benefit" key={benefit.text}>
                      <Icon size={18} />
                      <span>{benefit.text}</span>
                    </div>
                  );
                })}
              </div>

              <div className="ed-guarantee">
                <ShieldCheck size={19} />

                <p>
                  Cam kết hoàn tiền 100% trong vòng 7 ngày nếu nội dung không
                  đáp ứng kỳ vọng chuyên môn của học viên.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* ENROLL MODAL */}
      {showEnrollModal && (
        <div
          className="ed-modal-overlay"
          onClick={() => setShowEnrollModal(false)}
        >
          <div
            className="ed-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="ed-modal-header">
              <h2>Xác Nhận Đăng Ký Khóa Học</h2>

              <button
                type="button"
                onClick={() => setShowEnrollModal(false)}
              >
                <X size={20} />
              </button>
            </div>

            <p className="ed-modal-description">
              Bạn đang tiến hành ghi danh khóa học{" "}
              <strong>International Shipping Fundamentals</strong> tại
              NetStudy Academy.
            </p>

            <div className="ed-qr-box">
              <span>QUÉT MÃ QR ĐỂ THANH TOÁN</span>

              <div className="ed-qr-placeholder">
                <div className="ed-qr-grid">
                  {Array.from({ length: 64 }).map((_, index) => (
                    <span key={index} />
                  ))}
                </div>
              </div>

              <p>
                Sau khi chuyển khoản, vui lòng gửi minh chứng qua Zalo
                Hotline:
              </p>

              <strong>0868 468 052</strong>
            </div>

            <div className="ed-payment-summary">
              <span>Học phí cần thanh toán:</span>
              <strong>359.000₫</strong>
            </div>

            <div className="ed-modal-actions">
              <button
                type="button"
                className="ed-cancel-button"
                onClick={() => setShowEnrollModal(false)}
              >
                Hủy bỏ
              </button>

              <button
                type="button"
                className="ed-confirm-button"
                onClick={() => {
                  setShowEnrollModal(false);
                  alert("Đăng ký khóa học thành công!");
                }}
              >
                Tôi đã thanh toán
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CONSULT MODAL */}
      {showConsultModal && (
        <div
          className="ed-modal-overlay"
          onClick={() => setShowConsultModal(false)}
        >
          <div
            className="ed-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="ed-modal-header">
              <h2>Yêu Cầu Tư Vấn Khóa Học</h2>

              <button
                type="button"
                onClick={() => setShowConsultModal(false)}
              >
                <X size={20} />
              </button>
            </div>

            <p className="ed-modal-description">
              Vui lòng để lại thông tin liên lạc, ban cố vấn đào tạo của
              NetStudy sẽ gọi lại hỗ trợ chi tiết lộ trình.
            </p>

            <form
              className="ed-consult-form"
              onSubmit={handleConsultSubmit}
            >
              <label>
                Họ và tên của bạn
                <input
                  required
                  type="text"
                  placeholder="Nguyễn Văn A"
                />
              </label>

              <label>
                Số điện thoại hoặc Zalo
                <input
                  required
                  type="tel"
                  placeholder="0901234567"
                />
              </label>

              <label>
                Nội dung cần tư vấn
                <textarea
                  rows="4"
                  placeholder="Tôi muốn được tư vấn về..."
                />
              </label>

              <button type="submit" className="ed-confirm-button">
                Gửi yêu cầu
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
