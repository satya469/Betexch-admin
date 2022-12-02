import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import SuperSidebar from "../Components/SiderbarAllowFeatures/SuperSidebar";
import axios from "axios";

export default function SessionDesscion() {
  const [data, setData] = React.useState([]);
  let token = localStorage.getItem("token");
  let header = { "x-access-token": `${token}` };
  let options = { headers: header };
  useEffect(() => {
    getList();
  }, []);
  function getList() {
    axios.get("/owner/inplay-matches", options).then(async (resp) => {
      console.log(resp.data.matches);
      setData(resp.data.matches);
    });
  }

  return (
    <>
      <SuperSidebar />
      <div className="content-wrapper">
        <div className="container-fluid content-header">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">All InPlay Matches</h1>
            </div>

            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active">All InPlay Matches</li>
              </ol>
            </div>
          </div>
        </div>
        {/* <div className="d-flex justify-content-end mr-3 mb-3">
          <button className="btn btn-danger" onClick={getList}>Get List</button>
        </div> */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <table className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>S.No </th>
                        <th>Match Name </th>
                        <th>Action </th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((e, i) => {
                        return (
                          <tr>
                            <td>{i + 1}</td>
                            <td>
                              <Link to="">{e.match_name}</Link>
                            </td>
                            <td>
                              <button class="btn btn-warning" type="button">
                                Go to Session Desscion
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
