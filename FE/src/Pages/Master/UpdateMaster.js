import React, { useEffect, useState } from "react";
// import Sidebar from "../../components/Sidebar";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function UpdateMaster() {
  const [SubmitLoader, setSubmitLoader] = useState(false);
  const navigate = useNavigate();
  let token = localStorage.getItem("token");
  let header = { "x-access-token": `${token}` };
  let options = { headers: header };
  const location = useLocation();
  const { item } = location.state;
  const [EditInput, setEditInput] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditInput({ ...EditInput, [name]: value });
  };
  const SubmitClientData = () => {
    setSubmitLoader(true);
    console.log("EditInput", EditInput);
    axios
      .post(`/admins/edit-master`, EditInput, options)
      .then((res) => {
        console.log("res====>", res);
        setSubmitLoader(false);
        toast.success(res.data.message);
        navigate(`/masters`);
        // const data = res.data.data;
        //  navigate(`/client`);
      })
      .catch((err) => {
        setSubmitLoader(false);
        navigate(`/masters`);
        console.log(err.response.success);
      });
  };
  useEffect(() => {
    getMasterbyId();
  }, []);
  const data = {
    userId: item.uid,
  };
  const getMasterbyId = () => {
    axios
      .post(`/user-profile-byId`, data, options)
      .then((res) => {
        console.log("res====>", res.data.data);
        setEditInput(res.data.data);
      })
      .catch((err) => {
        console.log(err.response.success);
      });
  };
  return (
    <>
      {/* <Sidebar /> */}
      <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Modify Master</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link to="/home" href="#">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active">
                  <Link to="/master">Modify Master</Link>
                </li>
                <li className="breadcrumb-item active">
                  <Link to="/master">Back</Link>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <form>
          <input
            type="hidden"
            name="superagent"
            value="1"
            className="readonly"
          />
          <div className="row">
            <div className="col-md-6">
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">General</h3>

                  <div className="card-tools">
                    <button
                      type="button"
                      className="btn btn-tool"
                      data-card-widget="collapse"
                      data-toggle="tooltip"
                      title="Collapse"
                    ></button>
                  </div>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <div className="form-group">
                      <div className="label-title">
                        <h6>Sub Admin </h6>
                      </div>
                      <div className="input-body">
                        <select
                          name="manager"
                          className="form-control"
                          required=""
                        >
                          <option value="1" selected="">
                            admin@777
                          </option>
                        </select>
                      </div>
                    </div>

                    <label for="code">Code</label>
                    <input
                      type="text"
                      name="code"
                      value={EditInput.uid}
                      readOnly
                      className="readonly form-control"
                    />
                    <input
                      type="hidden"
                      name="user_type"
                      value="Sub Admin"
                      readOnly=""
                      className="readonly"
                    />
                    <input
                      type="hidden"
                      name="type"
                      value="2"
                      readOnly=""
                      className="readonly"
                    />
                  </div>

                  <div className="form-group">
                    <label for="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      placeholder="Name"
                      min="2"
                      required
                      name="name"
                      onChange={handleChange}
                      value={EditInput.name}
                    />
                  </div>

                  <div className="form-group">
                    <label for="mobile">Contact No</label>
                    <input
                      type="Number"
                      className="form-control mt-3 "
                      name="contact_no"
                      onChange={handleChange}
                      value={EditInput.contact_no}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-secondary">
                <div className="card-header">
                  <h3 className="card-title">Share and Commission</h3>

                  <div className="card-tools">
                    <button
                      type="button"
                      className="btn btn-tool"
                      data-card-widget="collapse"
                      data-toggle="tooltip"
                      title="Collapse"
                    ></button>
                  </div>
                </div>
                <div className="card-body">
                  <div className="form-group row">
                    <div className="form-group col-md-6">
                      <label for="share">Master Share</label>

                      <input
                        type="number"
                        name="share"
                        value={EditInput.share}
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group col-md-6">
                      <label for="mshare">Sub Admin Share</label>
                      <input
                        type="number"
                        name=""
                        value="100"
                        className="form-control"
                        readOnly
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="form-group col-md-6">
                      <label for="share">Master Commission</label>
                      <input
                        type="number"
                        value={EditInput.commission}
                        name="commission"
                        max={20}
                        min={0}
                        onChange={handleChange}
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label for="mshare">Admin Commission </label>
                      <input
                        type="number"
                        value="20"
                        name="commission"
                        disabled
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Link to="/master" className="btn btn-secondary">
                Cancel
              </Link>
              <button
                type="submit"
                className="btn btn-success float-right"
                id="btn"
                onClick={SubmitClientData}
                disabled={SubmitLoader}
              >
                Update Master
                {SubmitLoader && (
                  <span
                    class="spinner-grow spinner-grow-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                )}
              </button>
            </div>
          </div>
        </form>

        <br />
      </section>
      </div>
    </>
  );
}
