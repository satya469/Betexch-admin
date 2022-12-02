import React from "react";
import Sidebar from "../../Components/Sidebar";
import { Link } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MasterListModal from "../Master/MasterListModal";
import CommanPopUpModal from "../CommanModal/CommanPopUpModal";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
export default function SuperAgenetList() {
  let token = localStorage.getItem("token");
  let header = { "x-access-token": `${token}` };
  let options = { headers: header };
  const [Isloader, setIsloader] = useState(false);
  const [AllActiveLoader, setAllActiveLoader] = useState(false);
  const [AllDeactiveLoader, setAllDeactiveLoader] = useState(false);
  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const superAgentList = async () => {
    axios
      .get(`/admins/my-superagent`, options)
      .then((res) => {
        const data = res.data.data;
        setData(data);
        // console.log(data);
      })
      .catch((err) => {
        console.log(err.response.success);
      });
  };

  useEffect(() => {
    superAgentList();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const SuperAgentAllActive = async () => {
    setAllActiveLoader(true);
    // console.log("options",options)
    axios
      .get(`/admins/all-active-superagents`, options)
      .then((res) => {
        const data = res.data.data;
        if (res.data.success == false) {
          setData([]);
          setAllActiveLoader(false);
          return;
        }
        setData([]);
        setData(data);
        setAllActiveLoader(false);
      })
      .catch((err) => {
        setAllActiveLoader(false);
        console.log(err.response.status);
        toast.success(err.response.message);
      });
  };
  const SuperAgentAllDeactive = async () => {
    setAllDeactiveLoader(true);
    axios
      .get(`/admins/all-inactive-superagents`, options)
      .then((res) => {
        const data = res.data.data;
        if (res.data.success == false) {
          setData([]);
          setAllDeactiveLoader(false);
          return;
        }
        setData([]);
        setData(data);
        setAllDeactiveLoader(false);
        // toast.success(data.message);
      })
      .catch((err) => {
        setAllDeactiveLoader(false);
        console.log(err.response.status);
      });
  };
  const ActiveSigleData = async (e) => {
    const data = {
      uid: e.target.value,
    };
    axios
      .post(`/admins/activate-superagent`, data, options)
      .then((res) => {
        // console.log("res====>", res);
        toast.success(res.data.message);
        superAgentList();
      })
      .catch((err) => {
        console.log("error=>", err);
      });
  };
  const DeactiveSingleData = async (e) => {
    const data = {
      uid: e.target.value,
    };
    axios
      .post(`/admins/deactivate-superagent`, data, options)
      .then((res) => {
        // console.log("res=====>",res);
        toast.success(res.data.message);
        superAgentList();
      })
      .catch((err) => {
        console.log("error=>", err);
      });
  };
  return (
    <>
      <Sidebar />
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1> Super Agent</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/home" href="#">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active">
                    <a href="#">Super Agent</a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <div className="form-group">
                      {/* <Link
                        to="/superAgent/create"
                        className="btn btn-primary mr-2"
                      >
                        New <i className="fa fa-plus-circle"></i>
                      </Link> */}
                      <button
                        type="button"
                        class="btn btn-primary mr-2"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                      >
                        New <i className="fa fa-plus-circle"></i>
                      </button>

                      <button
                        className="btn btn-success mr-2"
                        id="allActive"
                        onClick={SuperAgentAllActive}
                        type="submit"
                        name="check"
                        value="1"
                        disabled={AllActiveLoader}
                      >
                        All Active
                        {AllActiveLoader && (
                          <span
                            class="spinner-grow spinner-grow-sm"
                            role="status"
                            aria-hidden="true"
                          ></span>
                        )}
                      </button>
                      <button
                        className="btn btn-danger mr-2"
                        id="allInActive"
                        type="submit"
                        onClick={SuperAgentAllDeactive}
                        name="check"
                        value="0"
                        disabled={AllDeactiveLoader}
                      >
                        All DeActivate <i className="fa fa-ban"></i>
                        {AllDeactiveLoader && (
                          <span
                            class="spinner-grow spinner-grow-sm"
                            role="status"
                            aria-hidden="true"
                          ></span>
                        )}
                      </button>

                      <Link
                        to="/superAgent/limitUpdate"
                        className="btn btn-primary mr-2"
                      >
                        Limit Update{" "}
                      </Link>
                    </div>
                  </div>

                  <div className="card-body">
                    <div className="table-responsive">
                      <table
                        id="datatable"
                        className="table table-bordered dt-responsive table-striped dataTable no-footer dtr-inline"
                        role="grid"
                        aria-describedby="example1_info"
                      >
                        <thead>
                          <tr>
                            <th>
                              <input type="checkbox" name="" />
                            </th>
                            <th>#</th>
                            <th className="pd12">Code</th>
                            <th className="pd12">Name</th>
                            <th>Super</th>
                            <th>Password</th>
                            <th>Contact</th>
                            {/* <th>D.O.J. </th> */}
                            <th>Share</th>
                            <th>Com</th>
                            <th>Limit</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data && data.length !== 0 ? (
                            <>
                              {data.map((item, index) => {
                                return (
                                  <>
                                    <tr key={index}>
                                      <td className="dtr-control">
                                        <input type="checkbox" name="" />
                                      </td>
                                      <td>
                                        <span className="mr-3">
                                          {index + 1}
                                        </span>
                                        <div className="btn-group">
                                          <button
                                            style={{ padding: "2px 8px" }}
                                            type="button"
                                            className="btn btn-outline-primary dropdown-toggle"
                                            data-toggle="dropdown"
                                            aria-expanded="false"
                                          >
                                            <span className="sr-only">
                                              Toggle Dropdown
                                            </span>
                                          </button>
                                          <div
                                            className="dropdown-menu"
                                            role="menu"
                                            style={{}}
                                          >
                                            <Link
                                              className="dropdown-item"
                                              to={{
                                                pathname: "/superAgent/update",
                                              }}
                                              state={{
                                                item: item,
                                              }}
                                            >
                                              Edit
                                            </Link>

                                            <Link
                                              className="dropdown-item"
                                              to=""
                                            >
                                              new one
                                            </Link>
                                          </div>
                                        </div>
                                        <span className="ml-3">
                                          {item.matkaName}
                                        </span>
                                      </td>
                                      <td>{item.uid}</td>
                                      <td>{item.name}</td>
                                      <td>{item.createdBy}</td>
                                      <td>{item.password}</td>
                                      <td>{item.contact_no}</td>
                                      {/* <td>{item.createdAt.slice(0, 10)}</td> */}
                                      <td>{item.share}</td>

                                      <td>{item.commission}</td>
                                      <td>{item.limit}</td>
                                      <td>
                                        {item.status == "active" ? (
                                          <>
                                            <button
                                              type="button"
                                              className="btn btn-success"
                                              value={item.uid}
                                              onClick={(e) => {
                                                DeactiveSingleData(e);
                                              }}
                                            >
                                              Active
                                            </button>
                                          </>
                                        ) : (
                                          <>
                                            <button
                                              type="button"
                                              class="btn btn-danger"
                                              value={item.uid}
                                              onClick={(e) => {
                                                ActiveSigleData(e);
                                              }}
                                            >
                                              Deactive
                                            </button>
                                          </>
                                        )}
                                      </td>
                                    </tr>
                                  </>
                                );
                              })}
                            </>
                          ) : (
                            <>
                              <tr>
                                <td colSpan={12} className="text-center p-5">
                                  <h6 className="p-5">No records to display</h6>
                                </td>
                              </tr>
                            </>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <Dialog open={open} onClose={handleClose}>
          <DialogTitle>
            <h5 class="modal-title ml-3" id="exampleModalLabel">
              Password Reset
            </h5>
          </DialogTitle>
          <DialogContent>
            <form>
              <div class="modal-body">
                <input
                  type="hidden"
                  name="urlr"
                  value="Admin_controller/sub_admin_details"
                />
                <input type="hidden" name="ids" value="405" />
                <input
                  type="text"
                  name="password"
                  class=" form-control input-password"
                  required=""
                />
                <button
                  type="button"
                  class="btn btn-success2"
                  name="show"
                  value="generate"
                >
                  Generate Password
                </button>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  onClick={handleClose}
                  data-dismiss="modal"
                  class="btn btn-cancel mt-0"
                >
                  Close
                </button>
                <button
                  type="submit"
                  onClick={handleClose}
                  class="btn btn-primary-bg"
                >
                  Confirm
                </button>
              </div>
            </form>
          </DialogContent>
        </Dialog> */}
        <CommanPopUpModal ClickName="SuperAgentMasterClick" />
      </div>
    </>
  );
}
