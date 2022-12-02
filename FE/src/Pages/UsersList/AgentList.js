import React, { Component } from "react";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import PageHeader from "../../Components/PageHeader";
import Card from "../../Components/Card";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

import { useState, useEffect } from "react";


export default function AgentList(props) {

  ////////////token localStorage//////
  const token = localStorage.getItem("token");
  const header = ({ 'x-access-token': `${token}` });
  const options = ({ headers: header });

  const [getTableData, setData] = useState('');
  const userlist = async () => {
    axios.get(`/subadmin/my-agents?page=1&limit=10`, options)
      .then(res => {
        const data = res.data.data.results;
        // const total = res.data.rows;
        // const totalPage = (Math.ceil(total / limit));
        // setpageCount(totalPage);
        setData(data);
        // SetSelectvalue('');
        console.log(data);
      })
  }
  const AllActiveList = () => {
    axios.get(`/subadmin/all-active-agents?page=1&limit=10`, options)
      .then(res => {
        const data = res.data.data.results;
        const message = res.data;
        setData(data);
        console.log(message);
        if (message.success == true) {
          toast.success(message.message);
        } else {
          toast.error(message.message);
        }
      })
  }
  ///////// active user /////////////
  const ActiveUser = (uid) => {
    axios.post(`/subadmin/activate-agent`, { uid: uid }, options)
      .then(res => {
        const data = res.data;
        if (data.succes !== true) {
          toast.success("Activated successfully");
          return userlist();
        } else {
          toast.error("something went wrong please try again..");
        }
      })
  }
  /////////de active user /////////////
  const DeActiveUser = (uid) => {
    axios.post(`/subadmin/deactivate-agent`, { uid: uid }, options)
      .then(res => {
        const data = res.data;
        if (data.succes !== true) {
          toast.success("DeActivate Successfully");
          return userlist();
        } else {
          toast.error("something went wrong please try again..");
        }
      })
  }

  /////////de active user /////////////
  const AllDeActiveUser = (uid) => {
    axios.get(`/subadmin/all-deactive-agents?page=1&limit=10`, options)
      .then(res => {
        const data = res.data.data.results;
        const message = res.data;
        setData(data);
        console.log(message);
        if (message.success == true) {
          toast.success(message.message);
        } else {
          toast.error(message.message);
        }
      })
  }

  useEffect(() => {
    userlist();
  }, []);



  const getCardHeader = [

    <div className="form-group">
      <Link
        to="/agents/create-agent"
        className="btn btn-primary"
      >
        New <i className="fa fa-plus-circle" />
      </Link>
      <button
        className="btn btn-success"
        onClick={AllActiveList}
        type="submit"
        name="check"
        value={1}
      >
        All Active
      </button>
      <button
        className="btn btn-danger"
        id="allInActive"
        type="submit"
        name="check"
        onClick={AllDeActiveUser}
      >
        All DeActivate <i className="fa fa-ban" />
      </button>
      <Link to='/agents/limit-agent' className="btn btn-primary">
        Limit Update
      </Link>
      {/* <button onClick={props.clickst}>{props.clickst}</button> */}
    </div>
  ];



  const getTableColumns = [
    // {
    //   name: "#",
    //   sortable: true,
    //   selector: (row) => row.id,
    // },
    {
      name: "Code",
      sortable: true,
      selector: (row) => row.uid,
    },
    {
      name: "Name",
      sortable: true,
      selector: (row) => <> {row.name}</>,
    },
    {
      name: "Mobile",
      sortable: true,
      selector: (row) => row.contact_no,
    },
    {
      name: "Password",
      sortable: true,
      selector: (row) => row.password,
    },
    {
      name: "Limit",
      sortable: true,
      selector: (row) => row.limit,
    },
    {
      name: "Match",
      sortable: true,
      selector: (row) => row.matchCommission,
    },
    {
      name: "Session",
      sortable: true,
      selector: (row) => row.sessionCommission,
    },
    {
      name: "Share",
      sortable: true,
      selector: (row) => row.share,
    },
    {
      name: "Status",
      sortable: true,
      selector: (row) => <>{row.status == "active" ? <>
        {role == "superagent" ? <> <button onClick={() => { DeActiveUser(row.uid) }} style={{ padding: "6px 20px" }}
          class="btn btn-success" type="submit" name="check">Active</button></> : <><span className="statusactive">Active</span></>}
      </> : <>

        {role == "superagent" ? <>  <button onClick={() => { ActiveUser(row.uid) }} class="btn btn-danger"
          id="allInActive" type="submit" name="check">Inactive
        </button> </> : <><span className="statusinactive">Inactive</span></>}
      </>
      }</>,
    },
  ];

  const [role, setRole] = useState([])
  useEffect(() => {
    const roleGet = localStorage.getItem("role");
    setRole(roleGet);
  }, []);


  return (
    <>
      <ToastContainer />
      <PageHeader title={props.title} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              {role == "superagent" ? <>
                <div className="card-header">
                  <div className="card-title">
                    {getCardHeader}
                  </div>
                </div>
              </> : null}
              <div className="card-body">
                <DataTable
                  columns={getTableColumns}
                  data={getTableData}
                  className="table table-bordered table-hover paddingTable"
                  selectableRows
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
