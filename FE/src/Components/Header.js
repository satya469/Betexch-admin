import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


const Header = () => {

  const navigate = useNavigate();
  const logout = ()=>{
   //alert("my fun call == ");
    localStorage.clear();
    toast.success("Logout Successfully");
    setTimeout(() => {
      navigate('/');
    }, 1000); 
 }

  const[userName, setuserName] = useState([])
  useEffect(() => {
    const userName = localStorage.getItem("name");
    setuserName(userName);
    console.log(userName);
  }, []);


  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ToastContainer />
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button">
            <i className="fas fa-bars" />
          </a>
        </li>
      </ul>
      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto">
        {/* Navbar Search */}
        <li className="nav-item dropdown user-menu">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            data-toggle="dropdown"
          >
            <img
              src="../../dist/img/user2-160x160.jpg"
              className="user-image img-circle elevation-2"
              alt="User Image"
            />
            <span className="d-none d-md-inline">{userName}</span>
          </a>
          <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            {/* User image */}
            <li className="user-header bg-primary">
              <img
                src="../../dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User Image"
              />
              <p>{userName}</p>
            </li>
            {/* Menu Footer*/}
            <li className="user-footer">
              <a href="#" className="btn btn-default btn-flat">
                Profile
              </a>
              <a href="#" onClick={logout} className="btn btn-default btn-flat float-right">
                Sign out
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
