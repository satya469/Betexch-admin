import React, { Component } from "react";
import PageHeader from "../Components/PageHeader";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Reports(props) {

  // let token = localStorage.getItem("token");
  // let header = ({ 'x-access-token': `${token}` });
  // let options = ({ headers: header });

  // const [data, setData] = useState([]);
  // const [head, setHead] = useState([]);
  // const myledger = async () => {
  //  const formdata = {uid : "C19"}
  //   axios.post(`/subadmin/client-login-report?page=1&limit=10`, formdata, options)
  //     .then(res => {
  //        const data = res.data.data.results;
  //       setData(data);
  //       console.log(data);
  //     })
  // }

  // useEffect(() => {
  //   myledger();
  // }, []);

    return (
      <>
        <PageHeader title="Report" />

        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">{props.user} Reports</h3>
                  <br />
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-sm-3">
                        <div className="form-group">
                          <label>{props.user}</label>
                          <select className="form-control w-100">
                            <option>C1</option>
                            <option>C2</option>
                            <option>C3</option>
                            <option>C4</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-sm-2">
                        <div className="form-group">
                          <label>Report Type</label>
                          <select className="form-control w-100">
                            <option>All</option>
                            <option>Name</option>
                            <option>MobileAppCharge</option>
                            <option>ContactNo</option>
                            <option>Limit</option>
                            <option>MatchCommission</option>
                            <option>SessionCommission</option>
                            <option>Share</option>
                            <option>Status</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-sm-2">
                        <div className="form-group">
                          <label>Date From</label>
                          <input
                            type="date"
                            name="from_date"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-sm-2">
                        <div className="form-group">
                          <label>Date To</label>
                          <input
                            type="date"
                            name="to_date"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-sm-3 d-flex">
                        <div className="form-group w-100 align-self-end">
                          <button className="btn btn-primary btn-block">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <table className="table table-bordered table-striped">
                    <thead className="bg-yellow">
                      <tr>
                        <th>#</th>
                        <th>Admin</th>
                        <th>Type</th>
                        <th>Old</th>
                        <th>New</th>
                        <th>User</th>
                        <th>Date</th>
                        <th>IP</th>
                        <th>Note</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Sahre Client</td>
                        <td>Limit</td>
                        <td>0</td>
                        <td>40000</td>
                        <td>ADMUSR</td>
                        <td>11-08-2022 13:45:59</td>
                        <td>127.0.0.1</td>
                        <td>40000 Deposited</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Sahre Client</td>
                        <td>Limit</td>
                        <td>0</td>
                        <td>40000</td>
                        <td>ADMUSR</td>
                        <td>11-08-2022 13:45:59</td>
                        <td>127.0.0.1</td>
                        <td>40000 Deposited</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
