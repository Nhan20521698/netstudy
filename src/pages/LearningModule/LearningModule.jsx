import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
ArrowLeft,
ArrowRight,
Check,
ChevronRight,
Expand,
Lock,
MessageCircle,
Pause,
Play,
Volume2,
} from "lucide-react";

import "./LearningModule.css";

const lessons = [
{
id: 1,
title: "Lesson 1: Incoterms 2020",
description: "15 min video • Reading",
status: "active",
},
{
id: 2,
title: "Lesson 2: Bill of Lading",
description: "12 min video",
status: "available",
},
{
id: 3,
title: "Lesson 3: Commercial Invoice",
description: "10 min video • Quiz",
status: "available",
},
{
id: 4,
title: "Lesson 4: Packing List",
description: "Locked",
status: "locked",
},
{
id: 5,
title: "Module 2 Assessment",
description: "Locked",
status: "locked",
},
];

export default function LearningModule() {
const navigate = useNavigate();

const [isPlaying, setIsPlaying] = useState(false);
const [currentLesson, setCurrentLesson] = useState(1);

const currentLessonData =
lessons.find((lesson) => lesson.id === currentLesson) || lessons[0];

const handleLessonClick = (lesson) => {
if (lesson.status === "locked") {
return;
}

```
setCurrentLesson(lesson.id);
setIsPlaying(false);
```

};

const handlePrevious = () => {
if (currentLesson <= 1) {
return;
}

```
setCurrentLesson((current) => current - 1);
setIsPlaying(false);
```

};

const handleNext = () => {
if (currentLesson >= 3) {
return;
}

```
setCurrentLesson((current) => current + 1);
setIsPlaying(false);
```

};

const getLessonTitle = () => {
if (currentLesson === 1) {
return "Lesson 1: Incoterms 2020 Overview";
}

```
return currentLessonData.title;
```

};

return ( <main className="lm-page">
{/* =====================================================
CENTER COLUMN
===================================================== */} <section className="lm-center"> <div className="lm-container">
{/* Breadcrumb */} <div className="lm-breadcrumb">
<button
type="button"
className="lm-breadcrumb-link"
onClick={() => navigate("/courses/international-shipping")}
>
Global Logistics Fundamentals </button>

```
        <ChevronRight size={15} />

        <button
          type="button"
          className="lm-breadcrumb-link"
          onClick={() => navigate("/learning/roadmap")}
        >
          Module 2: International Trade Terms
        </button>

        <ChevronRight size={15} />

        <span>Lesson {currentLesson}: Incoterms 2020</span>
      </div>

      {/* Video */}
      <div className="lm-video">
        <div className="lm-video-background" />

        <button
          type="button"
          className="lm-video-play"
          onClick={() => setIsPlaying((value) => !value)}
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? (
            <Pause size={34} fill="currentColor" />
          ) : (
            <Play size={36} fill="currentColor" />
          )}
        </button>

        <div className="lm-video-controls">
          <div className="lm-video-controls-inner">
            <button
              type="button"
              className="lm-video-control"
              onClick={() => setIsPlaying((value) => !value)}
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause size={17} fill="currentColor" />
              ) : (
                <Play size={17} fill="currentColor" />
              )}
            </button>

            <div className="lm-video-progress">
              <div className="lm-video-progress-fill" />
            </div>

            <span className="lm-video-time">
              04:12 / 15:30
            </span>

            <button
              type="button"
              className="lm-video-control"
              aria-label="Volume"
            >
              <Volume2 size={17} />
            </button>

            <button
              type="button"
              className="lm-video-control"
              aria-label="Fullscreen"
            >
              <Expand size={17} />
            </button>
          </div>
        </div>
      </div>

      {/* Lesson title */}
      <div className="lm-lesson-header">
        <h1>{getLessonTitle()}</h1>

        <p>
          Understand the fundamental framework of International Commercial
          Terms (Incoterms) established by the International Chamber of
          Commerce. This lesson covers the obligations, risks, and costs
          involved in the delivery of goods from seller to buyer.
        </p>
      </div>

      {/* Lesson content */}
      <article className="lm-content">
        <h3>The Role of Incoterms</h3>

        <p>
          Incoterms clearly communicate the tasks, costs, and risks
          associated with the global or international transportation and
          delivery of goods. They are essential for smooth global trade,
          ensuring both buyers and sellers understand their responsibilities
          at every stage of the logistics chain.
        </p>

        {/* Key Concept */}
        <div className="lm-key-concept">
          <div className="lm-key-concept-inner">
            <span>KEY CONCEPT</span>

            <p>
              Incoterms do NOT determine ownership or transfer title to the
              goods, nor do they cover payment terms. They strictly address
              delivery mechanisms.
            </p>
          </div>
        </div>

        <h3>Classification by Transport Mode</h3>

        <p>
          The 2020 rules are divided into two primary categories based on
          the mode of transport:
        </p>

        <ul>
          <li>
            <strong>
              Rules for any mode or modes of transport:
            </strong>{" "}
            EXW, FCA, CPT, CIP, DAP, DPU, DDP
          </li>

          <li>
            <strong>
              Rules for sea and inland waterway transport:
            </strong>{" "}
            FAS, FOB, CFR, CIF
          </li>
        </ul>

        {/* Diagram */}
        <div className="lm-diagram-card">
          <h4>Risk and Cost Transfer Diagram</h4>

          <div className="lm-diagram-image">
            <div className="lm-diagram-background" />
          </div>

          <p>
            Figure 1.1: Typical transfer points for FOB vs CIF agreements.
          </p>
        </div>
      </article>

      {/* Navigation */}
      <div className="lm-navigation">
        <button
          type="button"
          className="lm-navigation-button lm-navigation-previous"
          onClick={handlePrevious}
          disabled={currentLesson === 1}
        >
          <ArrowLeft size={16} />
          Previous Lesson
        </button>

        <button
          type="button"
          className="lm-navigation-button lm-navigation-next"
          onClick={handleNext}
          disabled={currentLesson >= 3}
        >
          Next Lesson
          <ArrowRight size={16} />
        </button>
      </div>

      <div className="lm-bottom-space" />
    </div>
  </section>

  {/* =====================================================
      RIGHT SIDEBAR
      ===================================================== */}
  <aside className="lm-sidebar">
    <div className="lm-sidebar-inner">
      {/* Header */}
      <div className="lm-sidebar-header">
        <h3>Module 2 Contents</h3>

        <div className="lm-sidebar-info">
          <span>1 of 5 Lessons</span>
          <span>20% Complete</span>
        </div>

        <div className="lm-sidebar-progress">
          <div className="lm-sidebar-progress-fill" />
        </div>
      </div>

      {/* Lesson list */}
      <div className="lm-sidebar-list">
        <ul>
          {lessons.map((lesson) => {
            const isActive = lesson.id === currentLesson;
            const isLocked = lesson.status === "locked";

            return (
              <li key={lesson.id}>
                <button
                  type="button"
                  className={[
                    "lm-sidebar-item",
                    isActive ? "lm-sidebar-item-active" : "",
                    isLocked ? "lm-sidebar-item-locked" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => handleLessonClick(lesson)}
                  disabled={isLocked}
                >
                  <div
                    className={[
                      "lm-sidebar-icon",
                      isActive ? "lm-sidebar-icon-active" : "",
                      isLocked ? "lm-sidebar-icon-locked" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {isActive ? (
                      <Play size={13} fill="currentColor" />
                    ) : lesson.id === 2 ? (
                      <Check size={14} />
                    ) : isLocked ? (
                      <Lock size={15} />
                    ) : null}
                  </div>

                  <div className="lm-sidebar-text">
                    <span className="lm-sidebar-title">
                      {lesson.title}
                    </span>

                    <span className="lm-sidebar-description">
                      {lesson.description}
                    </span>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Ask instructor */}
      <div className="lm-sidebar-footer">
        <button
          type="button"
          onClick={() =>
            window.alert(
              "Ask Instructor sẽ được kết nối với hệ thống chat sau."
            )
          }
        >
          <MessageCircle size={17} />
          Ask Instructor
        </button>
      </div>
    </div>
  </aside>
</main>

);
}
