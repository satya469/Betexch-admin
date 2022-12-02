import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { NavLink } from "react-router-dom";


export default function Footer() {
    const navigate = useNavigate();
    const logout = ()=>{
     //alert("my fun call == ");
      localStorage.clear();
      toast.success("Logout Successfully");
      setTimeout(() => {
        navigate('/user-login');
      }, 1000); 
   }
  

    return (
        <>
         <ToastContainer />
            <div className="user-footer navbar-wrapper">
                <ul className="mob-navbar">
                    <li><NavLink to="/user-inplay">
                        <img src="/images/bxs-dashboard.30a44c8946a3450fce1735c082ab51ab.svg"
                        alt="" className="nav-icon " /><span>InPlay</span></NavLink>
                        </li>
                    
                    
                    <li>
                        <NavLink to="/user-casino">
                        <img src="/images/card.png" style={{filter: "contrast(0.5)"}}
                        alt="" className="nav-icon" /><span>My Ledger</span>
                        </NavLink>
                        </li>
                    <li>
                        <NavLink to="/user-ledger">
                        <img src="/images/bxs-food-menu.536a6aa7f801d5b3d4460bf063362ddb.svg"
                        alt="" className="nav-icon" /><span>My Ledger</span>
                        </NavLink>
                        </li>

                    <li>
                        <NavLink to="/user-complete-game"><img
                        src="/images/bxs-dashboard.30a44c8946a3450fce1735c082ab51ab.svg"
                        alt="" className="nav-icon" /><span>Complete</span></NavLink>
                        </li>
                    <li>
                        <NavLink to="/user-profile">
                        <img src="/images/bx-task.0acf87bb07d3c9faeabeaba3d12fe5d0.svg"
                        alt="" className="nav-icon" /><span>Profile</span></NavLink>
                        </li>
                    <li>
                        <a href="#" onClick={logout}>
                        <img src="/images/bx-log-out.dca47f76b9e8334de78793b73b494baf.svg"
                        alt="" className="nav-icon" /><span>Logout</span></a>
                        </li>
                </ul>
            </div>
        </>
    );
}