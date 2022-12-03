import React from "react";
import { NavLink } from "react-router-dom";
export default function SuperAgentSidebar() {
  return (
        <>
            {/* <li className="nav-item">
              <NavLink to="sub-admin" className="nav-link">
                <i className="nav-icon fas fa-th" />
                <p>Sub Admin Agent Master</p>
              </NavLink>
             </li> */}

             <li className="nav-header">Master Details</li>

            <li className="nav-item">
              <NavLink to="agents" className="nav-link">
                <i className="nav-icon fas fa-th" />
                <p>Agent</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="clients" className="nav-link">
                <i className="nav-icon fas fa-th" />
                <p>Client</p>
              </NavLink>
            </li>
            <li className="nav-header">Games</li>
            <li className="nav-item">
              <NavLink to="inplay" className="nav-link">
                <i className="nav-icon fas fa-th" />
                <p>In Play</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="complete-games" className="nav-link">
                <i className="nav-icon fas fa-th" />
                <p>Complete Games</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>
                  Casino
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <NavLink to="teenpatti_t20" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>TEENPATTI T20</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="dragon_tiger" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Dragon Tiger</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="lucky7_a" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Lucky7 A</p>
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-header">Cash Transaction</li>
            <li className="nav-item">
              <NavLink to="transactions" className="nav-link">
                <i className="nav-icon fas fa-th" />
                <p>Debit/Credit Entry (C)</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="agent-transactions" className="nav-link">
                <i className="nav-icon fas fa-th" />
                <p>Debit/Credit Entry (A)</p>
              </NavLink>
            </li>
           
           
            {/* <li className="nav-item">
              <NavLink to="subadmin-transactions" className="nav-link">
                <i className="nav-icon fas fa-th" />
                <p>Debit/Credit Entry (AD)</p>
              </NavLink>
            </li> */}

            <li className="nav-header">Ledger</li>
            <li className="nav-item">
              <NavLink to="my-ledger" className="nav-link">
                <i className="nav-icon fas fa-th" />
                <p>My Ledger</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="client-plus-minus" className="nav-link">
                <i className="nav-icon fas fa-th" />
                <p>Client Plus/Minus</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="client-ledger" className="nav-link">
                <i className="nav-icon fas fa-th" />
                <p>All Client Ledger</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="agent-ledger" className="nav-link">
                <i className="nav-icon fas fa-th" />
                <p>All Agent Ledger</p>
              </NavLink>
            </li>
           
           
            {/* <li className="nav-item">
              <NavLink to="admin-ledger" className="nav-link">
                <i className="nav-icon fas fa-th" />
                <p>All Admin Ledger</p>
              </NavLink>
            </li> */}

            <li className="nav-header">Reports</li>
            {/* <li className="nav-item">
              <NavLink to="admin-report" className="nav-link">
                <i className="nav-icon fas fa-th" />
                <p>Admin Reports</p>
              </NavLink>
            </li> */}
           
           
            <li className="nav-item">
              <NavLink to="agent-report" className="nav-link">
                <i className="nav-icon fas fa-th" />
                <p>Agent Reports</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="client-report" className="nav-link">
                <i className="nav-icon fas fa-th" />
                <p>Client Reports</p>
              </NavLink>
            </li>

            {/* <li className="nav-item">
              <NavLink to="admin-login-report" className="nav-link">
                <i className="nav-icon fas fa-th" />
                <p>Admin Login Reports</p>
              </NavLink>
            </li> */}  
        
          
            <li className="nav-item">
              <NavLink to="agent-login-report" className="nav-link">
                <i className="nav-icon fas fa-th" />
                <p>Agent Login Reports</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="client-login-report" className="nav-link">
                <i className="nav-icon fas fa-th" />
                <p>Client Login Reports</p>
              </NavLink>
            </li>
            </>
  );
};


