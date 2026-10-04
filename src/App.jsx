import React from "react";
import { Routes, Route } from "react-router-dom";

import AppLayout from "./layouts/AppLayout";

// Dashboard
import Dashboard from "./pages/Dashboard/Dashboard";

// Authentication
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

// Courses
import Courses from "./pages/Courses/Courses";
import CourseDetails from "./pages/CourseDetails/CourseDetails";

// Learning
import LearningRoadmap from "./pages/LearningRoadmap/LearningRoadmap";
import LearningModule from "./pages/LearningModule/LearningModule";
import EnrollmentDetails from "./pages/EnrollmentDetails/EnrollmentDetails";

// Simulations
import CaseSimulation from "./pages/CaseSimulation/CaseSimulation";
import CustomerInfo from "./pages/CustomerInfo/CustomerInfo";
import CustomerInfoSimulation from "./pages/CustomerInfoSimulation/CustomerInfoSimulation";
import GmailSimulation from "./pages/GmailSimulation/GmailSimulation";
import ZaloSimulation from "./pages/ZaloSimulation/ZaloSimulation";
import ZaloQuote from "./pages/ZaloQuote/ZaloQuote";
import WhatsAppSimulation from "./pages/WhatsAppSimulation/WhatsAppSimulation";
import IncotermsAssessment from "./pages/IncotermsAssessment/IncotermsAssessment";

// Recruiter
import Recruiter from "./pages/Recruiter/Recruiter";
import PostJob from "./pages/PostJob/PostJob";
import JobManagement from "./pages/JobManagement/JobManagement";
import CandidateProfile from "./pages/CandidateProfile/CandidateProfile";
import RecruiterSimulationReview from "./pages/RecruiterSimulationReview/RecruiterSimulationReview";

// Profile
import Profile from "./pages/Profile/Profile";
import Portfolio from "./pages/Portfolio/Portfolio";

// 404
import NotFound from "./pages/NotFound/NotFound";

export default function App() {
  return (
    <Routes>
      {/* =========================
          AUTHENTICATION
          Không dùng AppLayout
      ========================= */}

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      {/* =========================
          MAIN APPLICATION
          Dùng Topbar + Sidebar
      ========================= */}

      <Route element={<AppLayout />}>

        {/* Dashboard */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* =========================
            COURSES
        ========================= */}

        <Route
          path="/courses"
          element={<Courses />}
        />

        <Route
          path="/courses/international-shipping"
          element={<CourseDetails />}
        />

        {/* =========================
            LEARNING
        ========================= */}

        <Route
          path="/learning/roadmap"
          element={<LearningRoadmap />}
        />

        <Route
          path="/learning/module"
          element={<LearningModule />}
        />

        <Route
          path="/enrollments"
          element={<EnrollmentDetails />}
        />

        {/* =========================
            SIMULATIONS
        ========================= */}

        <Route
          path="/simulations/case"
          element={<CaseSimulation />}
        />

        <Route
          path="/simulations/customer-info"
          element={<CustomerInfo />}
        />

        <Route
          path="/simulations/customer-info-group"
          element={<CustomerInfoSimulation />}
        />

        <Route
          path="/simulations/gmail"
          element={<GmailSimulation />}
        />

        <Route
          path="/simulations/zalo-chat"
          element={<ZaloSimulation />}
        />

        <Route
          path="/simulations/zalo-quote"
          element={<ZaloQuote />}
        />

        <Route
          path="/simulations/whatsapp-notification"
          element={<WhatsAppSimulation />}
        />

        <Route
          path="/simulations/incoterms-assessment"
          element={<IncotermsAssessment />}
        />

        {/* =========================
            RECRUITER
        ========================= */}

        <Route
          path="/recruiter"
          element={<Recruiter />}
        />

        <Route
          path="/recruiter/post-job"
          element={<PostJob />}
        />

        <Route
          path="/recruiter/jobs/manage"
          element={<JobManagement />}
        />

        <Route
          path="/recruiter/candidate-profile"
          element={<CandidateProfile />}
        />

        <Route
          path="/recruiter/simulation-review"
          element={<RecruiterSimulationReview />}
        />

        {/* =========================
            PROFILE
        ========================= */}

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/profile/portfolio"
          element={<Portfolio />}
        />

        {/* =========================
            404
        ========================= */}

        <Route
          path="*"
          element={<NotFound />}
        />

      </Route>
    </Routes>
  );
}