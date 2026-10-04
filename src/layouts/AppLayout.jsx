import React from "react";
import { Outlet } from "react-router-dom";

import Topbar from "../components/Topbar/Topbar";
import Sidebar from "../components/Sidebar/Sidebar";

import "./AppLayout.css";

export default function AppLayout() {
  return (
    <div className="app-shell">
      <Topbar />

      <div className="app-body">
        <Sidebar />

        <main className="app-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}