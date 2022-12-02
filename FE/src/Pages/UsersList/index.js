import React, { Component } from "react";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import PageHeader from "../../Components/PageHeader";
import Card from "../../Components/Card";
import axios from "axios";
import { useState, useEffect } from "react";


export default function UsersList(props) {
  
////////////token localStorage//////
const token = localStorage.getItem("token");
const header = ({ 'x-access-token': `${token}` });
const options = ({ headers: header });

const[getTableData, setData]=useState('');

console.log(getTableData);
// console.log(token);
// if(props.role !== '')
// {
 ///////api call //////////
  const userlist = async () => {
  axios.get(`/subadmin/my-masters?page=1&limit=10`, options)
      .then(res => {
          const data = res.data.data.results;
          // const total = res.data.rows;
          // const totalPage = (Math.ceil(total / limit));
          // setpageCount(totalPage);
           setData(data);
          // SetSelectvalue('');
          console.log(data);
      })
//////////////////
// }
}
useEffect(() => {
  userlist();
}, []);
// else
// {
 
// }


 const getCardHeader = [

      <div className="form-group">
        <Link
          to="/create?role=admin&page_name=admin&list_type=admin"
          className="btn btn-primary"
        >
          New <i className="fa fa-plus-circle" />
        </Link>
        <button
          className="btn btn-success"
          onclick="bulk_status('active')"
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
          // onclick={(e) => userlist(e)}
        > 
          All DeActivate <i className="fa fa-ban" />
        </button>
        <a href="limit?page_name=admin" className="btn btn-primary">
          Limit Update
        </a>
        {/* <button onClick={props.clickst}>{props.clickst}</button> */}
      </div>
    ];



 const getTableColumns = [
    {
      name: "#",
      sortable: true,
      selector: (row) => row.id,
    },
    {
      name: "Code",
      sortable: true,
      selector: (row) => row.uid,
    },
    {
      name: "Name",
      sortable: true,
      selector: (row) => <> {row.first_name} {row.last_name}</>,
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
      selector: (row) => row.status,
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
        <PageHeader title={props.title} />
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <Card header={getCardHeader} >
                <DataTable
                  columns={getTableColumns}
                  data={getTableData}
                  className="table table-bordered table-hover"
                  selectableRows
                />
              </Card>
            </div>
          </div>
        </div>
      </>
    );
}
