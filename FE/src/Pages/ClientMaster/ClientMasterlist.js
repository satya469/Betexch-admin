import React from "react";
// import Sidebar from "../../Components/Sidebar";
import { Link } from "react-router-dom";
import CommanPopUpModal from "../CommanModal/CommanPopUpModal";
import axios from "axios";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
export default function ClientMasterlist() {
  let token = localStorage.getItem("token");
  let header = { "x-access-token": `${token}` };
  let options = { headers: header };
  const [AllActiveLoader, setAllActiveLoader] = useState(false);
  const [AllDeactiveLoader, setAllDeactiveLoader] = useState(false);
  const [data, setData] = useState([]);

  const ClientmasterList = async () => {
    axios
      .get(`/admins/my-clients`, options)
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
    ClientmasterList();
  }, []);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const ClientAllActive = async () => {
    setAllActiveLoader(true);
    console.log("options", options);
    axios
      .get(`/admins/all-active-clients`, options)
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
        // toast.success(data.message);
      })
      .catch((err) => {
        setAllActiveLoader(false);
        console.log(err.response.status);
        toast.success(err.response.message);
      });
  };
  const ClientAllDeactive = async () => {
    setAllDeactiveLoader(true);
    axios
      .get(`/admins/all-inactive-clients`, options)
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
  // const LimitUpdateFun = async () => {
  //   axios
  //     .get(`/admins`, options)
  //     .then((res) => {
  //       const data = res.data;
  //       console.log(data.message);
  //       toast.success(data.message);
  //     })
  //     .catch((err) => {
  //       console.log(err.response.status);
  //     });
  // };
  const ActiveSigleData = async (e) => {
    const data = {
      uid: e.target.value,
    };
    axios
      .post(`/admins/activate-client`, data, options)
      .then((res) => {
        // console.log("res=====>", res);
        toast.success(res.data.message);
        ClientmasterList();
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
      .post("/admins/deactivate-client", data, options)
      .then((res) => {
        console.log("res=========>", res);
        toast.success(res.data.message);
        ClientmasterList();
      })
      .catch((err) => {
        console.log("error=>", err);
      });
  };
  // console.log("data", data);
  return (
    <>
      {/* <Sidebar /> */}
      <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1> Client Master</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link to="/home" href="#">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active">
                  <a href="#">Client Master</a>
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
                        to="/client/create"
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
                      onClick={ClientAllActive}
                      type="submit"
                      name="check"
                      disabled={AllActiveLoader}
                      value="1"
                    >
                      All Active{" "}
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
                      name="check"
                      onClick={ClientAllDeactive}
                      value="0"
                      disabled={AllDeactiveLoader}
                    >
                      All DeActivate <i className="fa fa-ban"></i>{" "}
                      {AllDeactiveLoader && (
                        <span
                          class="spinner-grow spinner-grow-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                      )}
                    </button>
                    <Link
                      to="/client/limitUpdate"
                      className="btn btn-primary mr-2"
                    >
                      {" "}
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
                                      <span className="mr-3">{index + 1}</span>
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
                                              pathname: "/client/update",
                                            }}
                                            state={{
                                              item: item,
                                            }}
                                          >
                                            Edit
                                          </Link>

                                          <Link className="dropdown-item" to="">
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
                                    <td></td>
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
      <CommanPopUpModal ClickName="ClientClick" />
      </div>
    </>
  );
}
