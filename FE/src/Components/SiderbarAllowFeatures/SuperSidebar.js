import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../Header";

export default function SuperSidebar() {
  return (
    <>
    <Header />
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <Link to="/" className="brand-link">
          <img
            src="../dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: "0.8" }}
          />
          <span className="brand-text font-weight-light">SIXPRO</span>
        </Link>

        <div className="sidebar">
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
               <li className="nav-item">
                <NavLink to="/super-admin/all-matches" className="nav-link">
                  <i className="nav-icon far fa-plus-square" />
                  <p>All Matches</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/super-admin/inplay-list" className="nav-link">
                  <i className="nav-icon fas fa-play" />
                  <p>Inplay List</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/super-admin/Session-Min-Max-Limit" className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>Session Min/Max Limit</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/super-admin/session-desscion" className="nav-link">
                  <i className="nav-icon fas fa-columns" />
                  <p>Session Desscion</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/super-admin/repeat-session-desscion" className="nav-link">
                  <i className="nav-icon far fa-calendar" />
                  <p>Repeat Session Desscion</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/super-admin/match-desscion" className="nav-link">
                  <i className="nav-icon far fa-plus-square" />
                  <p>Match desscion</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/super-admin/complete-sports" className="nav-link">
                  <i className="nav-icon far fa-calendar-alt" />
                  <p>Complete Sport's</p>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

    </>
  );
};


