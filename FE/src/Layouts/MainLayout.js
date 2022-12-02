import React, { Component } from "react";

import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

export default class MainLayout extends Component {
  render() {
    return (
      <>
        <Header />
        <Sidebar />
        {/* <div className="content-wrapper"> */}
          <Outlet />
        {/* </div> */}
        <Footer />
      </>
    );
  }
}
