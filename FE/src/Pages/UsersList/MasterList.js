import React, { Component } from "react";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import PageHeader from "../../Components/PageHeader";
import Card from "../../Components/Card";
import axios from "axios";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';

export default function MasterList(props) {
  ////////////token localStorage//////
  const token = localStorage.getItem("token");
  const header = ({ 'x-access-token': `${token}` });
  const options = ({ headers: header });

  const [getTableData, setData] = useState('');

  const userlist = async () => {
    axios.get(`/subadmin/my-masters?page=1&limit=30`, options)
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
  useEffect(() => {
    userlist();
  }, []);

  /////////active all user list /////////////
  const AllActiveList = () => {
    axios.get(`/subadmin/master-active?page=1&limit=10`, options)
      .then(res => {
        const data = res.data;
        const message = data;
        setData(data.data);
        console.log(message);
        if (message.succes !== true) {
          toast.success(data.message);
        } else {
          toast.error("data.message");
        }
      })
  }

  ///////// active user /////////////
  const ActiveUser = (uid) => {
    axios.post(`/subadmin/activate-master`, { uid: uid }, options)
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
    axios.post(`/subadmin/deactivate-master`, { uid: uid }, options)
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
    axios.get(`/subadmin/master-deactive?page=1&limit=10`, options)
      .then(res => {
        const data = res.data;
        const message = data;
        setData(data.data);
        console.log(message);
        if (message.succes !== true) {
          toast.success(data.message);
        } else {
          toast.error("data.message");
        }
      })
  }

  const [role, setRole] = useState([])
  useEffect(() => {
    const roleGet = localStorage.getItem("role");
    setRole(roleGet);
  }, []);

  const getCardHeader = [
    <div className="form-group">
      <Link
        to="/masters/create-master"
        className="btn btn-primary">
        New <i className="fa fa-plus-circle" />
      </Link>
      <button
        className="btn btn-success"
        onclick="bulk_status('active')"
        type="submit"
        name="check"
        value={1}
        onClick={AllActiveList}
      >
        All Active
      </button>
      <button
        className="btn btn-danger"
        onclick="bulk_status('inactive')"
        type="submit"
        name="check"
        onClick={AllDeActiveUser}
      >
        All DeActivate <i className="fa fa-ban" />
      </button>
      <Link to="/masters/limit-master" className="btn btn-primary">
        Limit Update
      </Link>
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
        <button onClick={() => { DeActiveUser(row.uid) }} style={{ padding: "6px 20px" }}
          class="btn btn-success" type="submit" name="check">Active</button></> : <>
        <button onClick={() => { ActiveUser(row.uid) }} class="btn btn-danger" id="allInActive" type="submit" name="check">Inactive</button>
      </>}</>,
    },
  ];

  // const getTableData = [
  //   {
  //     id: 1,
  //     username: "Abc1",
  //     name: "ABC",
  //     mobile: "9876543210",
  //     password: "123456",
  //     limit: 10000,
  //     match_commission: 3.0,
  //     session_commission: 2.0,
  //     share: 80,
  //     status: "Active",
  //   },  ];
  // const { title } = this.props;
  return (
    <>
      <ToastContainer />

      <PageHeader title={props.title} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">

            <div className="card">
              {role == "Subadmin" ? <>
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
