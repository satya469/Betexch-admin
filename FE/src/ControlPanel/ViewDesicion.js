
import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import SuperSidebar from "../Components/SiderbarAllowFeatures/SuperSidebar";
import axios from "axios";

export default function MatchDesscion() {
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
              <h1 className="m-0 ml-2">
                <i class="fa fa-home"></i> All Matches
              </h1>
            </div>

            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active"> All Matches</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <table className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>S.No </th>
                        <th>Session  Name </th>
                        <th>Dession Run /Submit</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((e, i) => {
                        return (
                          <tr>
                            <td>{i + 1}</td>
                            <td>
                              <Link to={`/session_inplay/:${e.match_id}`}>
                                {e.match_name}
                              </Link>{" "}
                            </td>
                            <td>
                                <input type="text" className="form-control input-lg" />
                                <button class="float-right btn btn-success  m-2" type="button">
                                Submit
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
