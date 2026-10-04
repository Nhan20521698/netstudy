import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Scale,
  CheckCircle,
  Clock3,
  Download,
  FileText,
  Gavel,
  Group,
  Languages,
  Lock,
  PlayCircle,
  Ship,
  Signal,
  Star,
} from "lucide-react";

import "./CourseDetails.css";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDNwNFtO4dCyEr_0GVtqeReaL3O_Nfa2syWBLXR1j4UlJNHC1AL8lIUa-TuSGZvzijg9hb8BuXpWvwOvRcDTOyuDmbcP-QCDHhTqqr53J5PIp8kE2x0reOKZFMlmXQFCbEjDdSrlLDpn5YukGNX4Pn7Bnvnm7vimtH89YjmDgVIl8TKCTLcB2rkBo8mh2EUPV2Yt1FSYARpH2ZXXBEG-ZfalRp3WNMFnCoUQeqqniJmypE2LJ7dHjdr";

const INSTRUCTOR_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAJu3XBXw206UIr7dO4Qb65JJ1Dx1MVJ7z0y4uufFurypod94qtj-vhuO2aJX4P1u3vZQ2H_GXPTr7-5Q5Ty09w5IJ-ncUhOcKAd-QNTBh7zr1nWinn-cZG6ZToZ1o8gOkuXinKQMt65suX_GszhlwOBaiTD5FwsFZqExbZmon5SEKNRZeA_AmNK_P-iMd1DyyiZAj-zUz-HTtj-5VYd6uOyhrHVjCqgZesnf8pa-FJ35G9rVDJrOcf";

const modules = [
  {
    id: 1,
    title: "Module 1: Overview of Global Trade",
    duration: "45 mins",
    description:
      "Introduction to maritime economics and the role of shipping in the global supply chain.",
    status: "completed",
  },
  {
    id: 2,
    title: "Module 2: Mastering Incoterms 2020",
    duration: "1h 20m",
    description:
      "Detailed breakdown of all 11 rules, risk transfer points, and cost allocations.",
    status: "completed",
  },
  {
    id: 3,
    title: "Module 3: The Bill of Lading (B/L)",
    duration: "1h 15m",
    description:
      "Functions, types (Straight, Order, Bearer), and legal implications of the B/L.",
    status: "in-progress",
  },
  {
    id: 4,
    title: "Module 4: Freight Forwarding & Logistics",
    duration: "55 mins",
    description:
      "The role of intermediaries, NVOCCs, and consolidation services.",
    status: "locked",
  },
];

export default function CourseDetails() {
  const navigate = useNavigate();

  const [rating, setRating] = useState(4);
  const [comment, setComment] = useState("");

  const handleContinue = () => {
    navigate("/learning/module");
  };

  const handleModuleClick = (module) => {
    if (module.status === "locked") {
      return;
    }

    navigate("/learning/module");
  };

  const handleSubmitComment = (event) => {
    event.preventDefault();

    if (!comment.trim()) {
      return;
    }

    console.log("Course review:", {
      rating,
      comment,
    });

    setComment("");
  };

  return (
    <div className="course-details-page">
      {/* =========================
          COURSE HERO
      ========================= */}

      <section className="course-details-hero">
        <div
          className="course-details-hero-image"
          style={{
            backgroundImage: `url("${HERO_IMAGE}")`,
          }}
        />

        <div className="course-details-hero-content">
          <div className="course-details-hero-info">
            <span className="course-category">
              Maritime Operations
            </span>

            <h1>International Shipping Fundamentals</h1>

            <div className="course-hero-meta">
              <div className="hero-rating">
                <Star
                  size={16}
                  fill="currentColor"
                />

                <strong>4.8</strong>

                <span>(1,245 ratings)</span>
              </div>

              <div className="hero-students">
                <Group size={16} />

                <span>12,500+ Students</span>
              </div>
            </div>
          </div>

          <div className="course-progress-card">
            <div className="course-progress-header">
              <span>Course Progress</span>
              <strong>65%</strong>
            </div>

            <div className="course-progress-track">
              <div
                className="course-progress-value"
                style={{ width: "65%" }}
              />
            </div>

            <button
              type="button"
              className="continue-button"
              onClick={handleContinue}
            >
              Continue Learning
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </section>

      {/* =========================
          CONTENT
      ========================= */}

      <div className="course-details-layout">
        {/* =========================
            LEFT COLUMN
        ========================= */}

        <main className="course-details-main">
          {/* About */}
          <section className="course-section">
            <h2>About this course</h2>

            <div className="course-about-text">
              <p>
                Master the complexities of global trade with our
                comprehensive guide to International Shipping
                Fundamentals. This course is designed to provide
                maritime professionals, logistics coordinators,
                and supply chain managers with a robust
                understanding of the mechanisms that drive
                international freight.
              </p>

              <p>
                You will explore key concepts including vessel
                types, containerization, port operations, and the
                critical documentation required for seamless
                cross-border transit. Special emphasis is placed
                on mastering{" "}
                <strong>Incoterms 2020</strong> to accurately
                delineate responsibilities, risks, and costs
                between buyers and sellers.
              </p>
            </div>

            <div className="course-feature-grid">
              <div className="course-feature">
                <Ship size={30} />
                <span>Vessel Ops</span>
              </div>

              <div className="course-feature">
                <FileText size={30} />
                <span>Documentation</span>
              </div>

              <div className="course-feature">
                <Scale size={30} />
                <span>Incoterms</span>
              </div>

              <div className="course-feature">
                <Gavel size={30} />
                <span>Compliance</span>
              </div>
            </div>
          </section>

          {/* Modules */}
          <section className="course-section">
            <div className="section-heading">
              <h2>Course Modules</h2>

              <span className="module-count">
                8 Modules
              </span>
            </div>

            <div className="module-list">
              {modules.map((module) => {
                const isCompleted =
                  module.status === "completed";

                const isProgress =
                  module.status === "in-progress";

                const isLocked =
                  module.status === "locked";

                return (
                  <button
                    key={module.id}
                    type="button"
                    disabled={isLocked}
                    className={[
                      "module-card",
                      isProgress
                        ? "module-progress"
                        : "",
                      isLocked
                        ? "module-locked"
                        : "",
                    ].join(" ")}
                    onClick={() =>
                      handleModuleClick(module)
                    }
                  >
                    {isProgress && (
                      <div className="module-active-line" />
                    )}

                    <div className="module-icon">
                      {isCompleted && (
                        <CheckCircle
                          size={21}
                          fill="currentColor"
                        />
                      )}

                      {isProgress && (
                        <PlayCircle
                          size={22}
                          fill="currentColor"
                        />
                      )}

                      {isLocked && (
                        <Lock size={20} />
                      )}
                    </div>

                    <div className="module-content">
                      <div className="module-heading">
                        <h3>{module.title}</h3>

                        <span>
                          {module.duration}
                        </span>
                      </div>

                      <p>{module.description}</p>

                      {isProgress && (
                        <span className="module-status">
                          IN PROGRESS
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Reviews */}
          <section className="course-section">
            <div className="section-heading">
              <h2>ĐÁNH GIÁ CHƯƠNG TRÌNH</h2>

              <span className="module-count">
                12 Đánh giá
              </span>
            </div>

            {/* Rating */}
            <div className="rating-input">
              <span>Đánh giá của bạn:</span>

              <div className="rating-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() =>
                      setRating(star)
                    }
                    aria-label={`Rate ${star}`}
                  >
                    <Star
                      size={20}
                      fill={
                        star <= rating
                          ? "currentColor"
                          : "none"
                      }
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Comment form */}
            <form
              className="review-form"
              onSubmit={handleSubmitComment}
            >
              <div className="review-avatar user">
                US
              </div>

              <div className="review-form-content">
                <textarea
                  value={comment}
                  onChange={(e) =>
                    setComment(e.target.value)
                  }
                  placeholder="Chia sẻ cảm nghĩ của bạn..."
                />

                <div className="review-submit-row">
                  <button
                    type="submit"
                    className="review-submit"
                  >
                    Gửi
                  </button>
                </div>
              </div>
            </form>

            {/* Instructor comment */}
            <div className="review-card instructor-review">
              <div className="review-avatar-image">
                <img
                  src={INSTRUCTOR_IMAGE}
                  alt="Instructor"
                />
              </div>

              <div className="review-content">
                <div className="review-author">
                  <span className="author-name">
                    Capt. Nguyễn Văn A
                  </span>

                  <span className="instructor-badge">
                    Giảng viên
                  </span>

                  <span className="review-time">
                    2 giờ trước
                  </span>
                </div>

                <p>
                  Chào các bạn, nếu có bất kỳ thắc mắc
                  nào về vận đơn (Bill of Lading) trong
                  Module 3, hãy đặt câu hỏi tại đây nhé!
                </p>

                <div className="review-actions">
                  <button type="button">
                    Trả lời
                  </button>

                  <button type="button">
                    Thích
                  </button>
                </div>
              </div>
            </div>

            {/* Student comment */}
            <div className="review-card">
              <div className="review-avatar student">
                TV
              </div>

              <div className="review-content">
                <div className="review-author">
                  <span className="author-name">
                    Trần Văn B - Học viên
                  </span>

                  <span className="review-time">
                    5 giờ trước
                  </span>
                </div>

                <p>
                  Khóa học rất chi tiết, phần Incoterms
                  2020 giúp tôi hiểu rõ hơn về trách nhiệm
                  của người mua và người bán.
                </p>

                <div className="review-actions">
                  <button type="button">
                    Trả lời
                  </button>

                  <button type="button">
                    Thích
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* =========================
            RIGHT COLUMN
        ========================= */}

        <aside className="course-details-sidebar">
          {/* Course details */}
          <section className="sidebar-card">
            <h3>Course Details</h3>

            <div className="course-info-list">
              <div className="course-info-item">
                <div className="course-info-icon">
                  <Clock3 size={17} />
                </div>

                <div>
                  <span>Duration</span>
                  <strong>
                    4 Weeks (Estimated)
                  </strong>
                </div>
              </div>

              <div className="course-info-item">
                <div className="course-info-icon">
                  <Signal size={17} />
                </div>

                <div>
                  <span>Level</span>
                  <strong>
                    Beginner / Foundational
                  </strong>
                </div>
              </div>

              <div className="course-info-item">
                <div className="course-info-icon">
                  <Languages size={17} />
                </div>

                <div>
                  <span>Language</span>
                  <strong>
                    Vietnamese (Tiếng Việt)
                  </strong>
                </div>
              </div>
            </div>
          </section>

          {/* Instructor */}
          <section className="sidebar-card instructor-card">
            <div className="instructor-image">
              <img
                src={INSTRUCTOR_IMAGE}
                alt="Capt. Nguyen Van A"
              />
            </div>

            <h3>Capt. Nguyen Van A</h3>

            <p className="instructor-role">
              Senior Logistics Expert & Master Mariner
            </p>

            <div className="instructor-stats">
              <div>
                <strong>15+</strong>
                <span>Years Exp</span>
              </div>

              <div className="instructor-divider" />

              <div>
                <strong>4.9</strong>
                <span>Rating</span>
              </div>
            </div>

            <button
              type="button"
              className="profile-button"
            >
              View Profile
            </button>
          </section>

          {/* Resources */}
          <section className="sidebar-card">
            <h3>Resources</h3>

            <div className="resource-list">
              <a href="#syllabus">
                <div className="resource-icon pdf">
                  <FileText size={17} />
                </div>

                <div className="resource-info">
                  <strong>
                    Course_Syllabus_2023.pdf
                  </strong>

                  <span>2.4 MB</span>
                </div>

                <Download size={17} />
              </a>

              <a href="#incoterms">
                <div className="resource-icon pdf">
                  <FileText size={17} />
                </div>

                <div className="resource-info">
                  <strong>
                    Incoterms_2020_Chart.pdf
                  </strong>

                  <span>1.1 MB</span>
                </div>

                <Download size={17} />
              </a>

              <a href="#bol">
                <div className="resource-icon document">
                  <FileText size={17} />
                </div>

                <div className="resource-info">
                  <strong>
                    Sample_Bill_of_Lading.docx
                  </strong>

                  <span>850 KB</span>
                </div>

                <Download size={17} />
              </a>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}