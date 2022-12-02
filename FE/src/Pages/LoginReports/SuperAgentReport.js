import React, { Component } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import PageHeader from "../../Components/PageHeader";

export default function SuperAgentLoginReport(props) {
  
  let token = localStorage.getItem("token");
  let header = ({ 'x-access-token': `${token}` });
  let options = ({ headers: header });

  const [data, setData] = useState([]);
  const [nodata, setError] = useState([]);
  
  const myledger = async () => {
   const formdata = {uid : "C19"}
    axios.post(`/subadmin/superagent-login-report?page=1&limit=10`, formdata, options)
      .then(res => {
        const data = res.data.data.results;
        setData(data);
        console.log(data);
      })
      .catch(err => {
        setError(err.response.status);
        console.log(err.response.status);
      })
  }

  useEffect(() => {
    myledger();
  }, []);

  
    return (
      <>
        <PageHeader title="Report" />

        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
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
                        <th>Code</th>
                        <th>Login Name</th>
                        <th>IPAddress</th>
                        <th>DateTime</th>
                        <th>Last Activity</th>
                      </tr>
                    </thead>
                    <tbody>
                   {nodata == 400 ? <>
                   <tr className="bg-white">
                        <td colSpan="6"><h6 className="text-center p-5">There are no records to display</h6></td>
                     
                    </tr>
                   </> : <>
                   {data.map((item, index) => {
                    return(
                      <>
                       <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.uid}</td>
                        <td></td>
                      <td>{item.ip}</td>
                      <td>{item.date_time}</td>
                      <td></td>
                      
                    </tr>
                    </>
                    )
                  })}
                   </>}
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

