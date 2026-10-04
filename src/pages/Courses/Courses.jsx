import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
ArrowRight,
Clock3,
Filter,
Monitor,
MapPin,
X,
} from "lucide-react";

import "./Courses.css";

const courses = [
{
id: 1,
title: "International Shipping Fundamentals",
category: "Maritime Operations",
description:
"Master the complexities of global trade, maritime operations, Incoterms 2020, and essential shipping documentation.",
level: "Beginner",
mode: "Online",
duration: "4 Weeks",
status: "in-progress",
progress: 65,
image:
"https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1200&q=85",
},
{
id: 2,
title: "Customs Clearance Pro",
category: "Customs & Compliance",
description:
"Learn practical customs clearance procedures, documentation, duties, and compliance requirements.",
level: "Intermediate",
mode: "Offline",
duration: "4 Weeks",
status: "not-started",
progress: 0,
image:
"https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1200&q=85",
},
{
id: 3,
title: "Advanced Freight Forwarding",
category: "Freight Forwarding",
description:
"Develop advanced freight forwarding skills covering multimodal transport, consolidation, and logistics planning.",
level: "Advanced",
mode: "Online",
duration: "6 Weeks",
status: "not-started",
progress: 0,
image:
"https://images.unsplash.com/photo-1586528116493-da8b2f0a5f6f?auto=format&fit=crop&w=1200&q=85",
},
];

const tabs = [
{
id: "all",
label: "All Courses",
},
{
id: "in-progress",
label: "In Progress",
},
{
id: "not-started",
label: "Not Started",
},
];

export default function Courses() {
const navigate = useNavigate();

const [activeTab, setActiveTab] = useState("all");
const [showFilters, setShowFilters] = useState(false);

const [levelFilter, setLevelFilter] = useState("All Levels");
const [modeFilter, setModeFilter] = useState("All Modes");

const openCourseDetails = () => {
navigate("/courses/international-shipping");
};

const handleCardKeyDown = (event) => {
if (event.key === "Enter" || event.key === " ") {
event.preventDefault();
openCourseDetails();
}
};

const filteredCourses = useMemo(() => {
return courses.filter((course) => {
if (
activeTab !== "all" &&
course.status !== activeTab
) {
return false;
}
  if (
    levelFilter !== "All Levels" &&
    course.level !== levelFilter
  ) {
    return false;
  }

  if (
    modeFilter !== "All Modes" &&
    course.mode !== modeFilter
  ) {
    return false;
  }

  return true;
});

}, [activeTab, levelFilter, modeFilter]);

const resetFilters = () => {
setLevelFilter("All Levels");
setModeFilter("All Modes");
};

const hasActiveFilters =
levelFilter !== "All Levels" ||
modeFilter !== "All Modes";

return ( <div className="courses-page">

  {/* =====================================================
      HEADER
  ====================================================== */}

  <section className="courses-header">
    <div className="courses-header-content">
      <p className="courses-eyebrow">
        LEARNING CENTER
      </p>

      <h1>Course Catalog</h1>

      <p className="courses-subtitle">
        Explore our professional courses and build practical
        skills for your logistics career.
      </p>
    </div>
  </section>

  {/* =====================================================
      STATS
  ====================================================== */}

  <section className="courses-stats">

    <div className="course-stat-card">
      <div className="course-stat-number">
        4
      </div>

      <div className="course-stat-content">
        <span>Active Courses</span>
        <small>Currently learning</small>
      </div>
    </div>

    <div className="course-stat-card">
      <div className="course-stat-number">
        12
      </div>

      <div className="course-stat-content">
        <span>Completed</span>
        <small>Courses finished</small>
      </div>
    </div>

    <div className="course-stat-card">
      <div className="course-stat-number">
        24
      </div>

      <div className="course-stat-content">
        <span>Available Courses</span>
        <small>Keep learning</small>
      </div>
    </div>

  </section>

  {/* =====================================================
      TOOLBAR
  ====================================================== */}

  <section className="courses-toolbar">

    <div className="courses-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          className={
            activeTab === tab.id
              ? "course-tab active"
              : "course-tab"
          }
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>

    <button
      type="button"
      className={
        showFilters || hasActiveFilters
          ? "filter-button active"
          : "filter-button"
      }
      onClick={() =>
        setShowFilters((current) => !current)
      }
    >
      <Filter size={17} />

      <span>Filters</span>

      {hasActiveFilters && (
        <span className="filter-count">
          2
        </span>
      )}
    </button>

  </section>

  {/* =====================================================
      FILTER PANEL
  ====================================================== */}

  {showFilters && (
    <section className="courses-filter-panel">

      <div className="filter-item">
        <label htmlFor="course-level">
          Level
        </label>

        <select
          id="course-level"
          value={levelFilter}
          onChange={(event) =>
            setLevelFilter(event.target.value)
          }
        >
          <option>All Levels</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>
      </div>

      <div className="filter-item">
        <label htmlFor="course-mode">
          Mode
        </label>

        <select
          id="course-mode"
          value={modeFilter}
          onChange={(event) =>
            setModeFilter(event.target.value)
          }
        >
          <option>All Modes</option>
          <option>Online</option>
          <option>Offline</option>
        </select>
      </div>

      {hasActiveFilters && (
        <button
          type="button"
          className="clear-filter-button"
          onClick={resetFilters}
        >
          <X size={16} />
          Clear filters
        </button>
      )}

    </section>
  )}

  {/* =====================================================
      COURSE GRID
  ====================================================== */}

  <section className="courses-grid">

    {filteredCourses.map((course) => {
      const isInProgress =
        course.status === "in-progress";

      return (
        <article
          key={course.id}
          className="course-card"
          role="button"
          tabIndex={0}
          onClick={openCourseDetails}
          onKeyDown={handleCardKeyDown}
        >

          {/* IMAGE */}

          <div className="course-image-wrapper">

            <img
              src={course.image}
              alt={course.title}
              className="course-image"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />

            <span className="course-badge core">
              {course.category}
            </span>

            <span className="course-mode">
              {course.mode}
            </span>

          </div>

          {/* CONTENT */}

          <div className="course-content">

            <div className="course-title-area">
              <h3>{course.title}</h3>
            </div>

            <p className="course-description">
              {course.description}
            </p>

            {/* META */}

            <div className="course-meta">

              <span>
                <Clock3 size={15} />
                {course.duration}
              </span>

              <span>
                {course.mode === "Online" ? (
                  <Monitor size={15} />
                ) : (
                  <MapPin size={15} />
                )}

                {course.mode}
              </span>

              <span>
                {course.level}
              </span>

            </div>

            {/* PROGRESS */}

            {isInProgress && (
              <div className="course-progress-area">

                <div className="course-progress-header">
                  <span>Progress</span>

                  <strong>
                    {course.progress}%
                  </strong>
                </div>

                <div className="course-progress-bar">
                  <div
                    style={{
                      width: `${course.progress}%`,
                    }}
                  />
                </div>

              </div>
            )}

            {/* ACTION */}

            <div className="course-bottom">

              {isInProgress ? (
                <button
                  type="button"
                  className="course-primary-button"
                  onClick={(event) => {
                    event.stopPropagation();
                    openCourseDetails();
                  }}
                >
                  Continue Learning

                  <ArrowRight size={17} />
                </button>
              ) : (
                <button
                  type="button"
                  className="course-outline-button"
                  onClick={(event) => {
                    event.stopPropagation();
                    openCourseDetails();
                  }}
                >
                  Enroll Now

                  <ArrowRight size={17} />
                </button>
              )}

            </div>

          </div>

        </article>
      );
    })}

  </section>

  {/* =====================================================
      EMPTY STATE
  ====================================================== */}

  {filteredCourses.length === 0 && (
    <div className="courses-empty">

      <div className="courses-empty-icon">
        <Filter size={24} />
      </div>

      <h3>No courses found</h3>

      <p>
        Try changing your filters or selecting
        another course category.
      </p>

      <button
        type="button"
        onClick={() => {
          setActiveTab("all");
          resetFilters();
        }}
      >
        Reset filters
      </button>

    </div>
  )}

</div>

);
}
