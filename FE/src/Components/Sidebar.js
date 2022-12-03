import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import AdminSidebar from "./SiderbarAllowFeatures/AdminSidebar";
import Subadmin from "./SiderbarAllowFeatures/SubAdmin";
import MasterSidebar from "./SiderbarAllowFeatures/Master";
import SuperAgentSidebar from "./SiderbarAllowFeatures/SuperAgent";
import AgentSidebar from "./SiderbarAllowFeatures/Agent.js";
import Header from "./Header";

export default function Sidebar() {
  const [role, setRole] = useState([]);
  useEffect(() => {
    const roleGet = localStorage.getItem("role");
    setRole(roleGet);
    console.log(roleGet);
  }, []);

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <Link to="/" className="brand-link">
        <img
          src="../dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: "0.8" }}
        />
        <span className="brand-text font-weight-light">Betexch</span>
      </Link>
      <div className="sidebar">
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {role === "admin" ? (
              <>
                {" "}
                <AdminSidebar />
              </>
            ) : null}
            {role === "subadmin" ? (
              <>
                {" "}
                <Subadmin />
              </>
            ) : null}
            {role === "master" ? (
              <>
                {" "}
                <MasterSidebar />
              </>
            ) : null}
            {role === "superagent" ? (
              <>
                {" "}
                <SuperAgentSidebar />
              </>
            ) : null}
            {role === "agent" ? (
              <>
                {" "}
                <AgentSidebar />
              </>
            ) : null}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
