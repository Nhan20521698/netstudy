import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const courses = [
  {
    id: 1,
    title: "International Shipping Fundamentals",
    mode: "Online",
    status: "in-progress",
    badge: "CORE MODULE",
    deadline: "Đóng tuyển sinh vào: 20:00 - 30/11/2023",
    description:
      "Master the core concepts of global freight, Incoterms 2020, and documentation requirements for seamless cross-border transport.",
    duration: "4 Weeks",
    level: "Intermediate",
    progress: 65,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCTvV7wSOOlhQm7Ydz1Db3jTicU1VHFJ52OE1A4QNjehqw0zB4QBrLResYeeSjPvLH5YZeW46NxwcVTYwAbdQbv9-QTJG0GdeLAonSZ8IMuag9I1jnLXRqkoPk-eJpAiBbEdTOLztxFRUUuscx_bj8k_CsBrKO5w5g0fKBspcUuTwVNFwjzpwlkMIxFD73dEF2HOjbTR4a-yCR9AUB3mhCjfoUxYiEWxjrlr04jWCS8OHWAfYxPYTLG",
  },
  {
    id: 2,
    title: "Customs Clearance Pro",
    mode: "Offline",
    status: "not-started",
    badge: null,
    deadline: null,
    description:
      "Navigate complex international trade regulations, tariff classifications, and compliance audits with confidence.",
    duration: "4 Weeks",
    level: "Intermediate",
    progress: 0,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCWmwiGUfiPSW-eJOSoxG8TzTn5hNyZt-4qrD79I4qD89xifLYpnFDqPiQt1cSazqfq84cQAN1475AP9485bo7wBk22_1wl5W4sYyBnZ7k3Sa0JtJOx249YVEXB34cNX0IeKZUnbo4OsUUrgDX6UhrxOZrz_NQI0fm1SNRZcYCvXhU4wF9JZw_hVogfrJiFIsf3rrtNFhChx4xEOMN8s4XSs1l3QkNDVL3yLErAUzsBZl5zXV0EKNlZ",
  },
  {
    id: 3,
    title: "Advanced Freight Forwarding",
    mode: "Online",
    status: "not-started",
    badge: "NEW",
    deadline: "Đóng tuyển sinh vào: 20:00 - 30/11/2023",
    description:
      "Strategic carrier selection, route optimization algorithms, and managing multi-modal transport networks under pressure.",
    duration: "6 Weeks",
    level: "Advanced",
    progress: 0,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAXu-PIaeIgw-2lHtiXYbqC648ww9kLjcghKMA_Pji9_ohxXhYo5KGrPiU9cSWgI6IuOR3E50pfoUk-uu6yW7X0ybQA3Zx3jQC27FpTzl97UjFBIexpr-LzBEZpEoCHZEAUKMocBCixgBN2GvinDKCJdEPu53H6fEhgGofTx1Pj2Cmb5dA6Y8UeCOjLFZ4Ori4SrTXIaLsC98jXpFg44MpbhKjJWEtKmdVMx5nXZBABmvs46xsysd3l",
  },
];

export default function Dashboard() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [levelFilter, setLevelFilter] = useState("all");
  const [modeFilter, setModeFilter] = useState("all");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const statusMatch =
        activeTab === "all" || course.status === activeTab;

      const levelMatch =
        levelFilter === "all" || course.level === levelFilter;

      const modeMatch =
        modeFilter === "all" || course.mode === modeFilter;

      return statusMatch && levelMatch && modeMatch;
    });
  }, [activeTab, levelFilter, modeFilter]);

  const handleCourseAction = (course) => {
    if (course.status === "in-progress") {
      navigate("/learning/module");
    } else {
      navigate("/courses/international-shipping");
    }
  };

  return (
    <div className="dashboard">
      {/* Welcome */}
      <section className="dashboard-welcome">
        <div>
          <h1>Welcome back, Alex.</h1>

          <p>
            You're making great progress in the Global Logistics track.
            Continue your latest module or explore new certifications.
          </p>
        </div>

        <div className="dashboard-stats">
          <div className="stat-item">
            <strong>4</strong>
            <span>Active</span>
          </div>

          <div className="stat-divider" />

          <div className="stat-item">
            <strong>12</strong>
            <span>Completed</span>
          </div>
        </div>
      </section>

      {/* Course header */}
      <section className="course-header">
        <h2>Course Catalog</h2>

        <div className="course-filters">
          <button
            className={activeTab === "all" ? "filter-btn active" : "filter-btn"}
            onClick={() => setActiveTab("all")}
          >
            All Courses
          </button>

          <button
            className={
              activeTab === "in-progress"
                ? "filter-btn active"
                : "filter-btn"
            }
            onClick={() => setActiveTab("in-progress")}
          >
            In Progress
          </button>

          <button
            className={
              activeTab === "not-started"
                ? "filter-btn active"
                : "filter-btn"
            }
            onClick={() => setActiveTab("not-started")}
          >
            Not Started
          </button>

          <button
            className={
              showFilters
                ? "filter-btn filters-btn active-filter"
                : "filter-btn filters-btn"
            }
            onClick={() => setShowFilters((prev) => !prev)}
          >
            <span>☷</span>
            Filters
          </button>
        </div>
      </section>

      {/* Advanced filters */}
      {showFilters && (
        <div className="advanced-filters">
          <div className="filter-field">
            <label>Level</label>

            <select
              value={levelFilter}
              onChange={(e) => setLevelFilter(e.target.value)}
            >
              <option value="all">All levels</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          <div className="filter-field">
            <label>Mode</label>

            <select
              value={modeFilter}
              onChange={(e) => setModeFilter(e.target.value)}
            >
              <option value="all">All modes</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </div>

          <button
            className="clear-filter"
            onClick={() => {
              setLevelFilter("all");
              setModeFilter("all");
            }}
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Courses */}
      <section className="course-grid">
        {filteredCourses.map((course) => (
          <article className="course-card" key={course.id}>
            <div className="course-image-wrapper">
              <img
                src={course.image}
                alt={`${course.title} thumbnail`}
                className="course-image"
              />

              {course.badge && (
                <span className="course-badge">
                  {course.badge}
                </span>
              )}

              <span className="course-mode">
                {course.mode}
              </span>
            </div>

            <div className="course-body">
              <h3>{course.title}</h3>

              {course.deadline && (
                <div className="course-deadline">
                  ◷ {course.deadline}
                </div>
              )}

              <p>{course.description}</p>

              {course.status === "in-progress" ? (
                <div className="course-progress">
                  <div className="progress-header">
                    <span>Progress</span>
                    <strong>{course.progress}%</strong>
                  </div>

                  <div className="progress-track">
                    <div
                      className="progress-value"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>

                  <button
                    className="course-action primary"
                    onClick={() => handleCourseAction(course)}
                  >
                    Continue Learning
                    <span>→</span>
                  </button>
                </div>
              ) : (
                <div className="course-footer">
                  <div className="course-meta">
                    <span>◷</span>
                    <span>
                      {course.duration} • {course.level}
                    </span>
                  </div>

                  <button
                    className="course-action secondary"
                    onClick={() => handleCourseAction(course)}
                  >
                    Enroll Now
                  </button>
                </div>
              )}
            </div>
          </article>
        ))}

        {filteredCourses.length === 0 && (
          <div className="empty-courses">
            Không có khóa học phù hợp với bộ lọc hiện tại.
          </div>
        )}
      </section>
    </div>
  );
}