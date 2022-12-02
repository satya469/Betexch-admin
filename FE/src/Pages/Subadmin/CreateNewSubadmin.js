import React from "react";
// import Sidebar from "../../components/Sidebar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
export default function CreateNewSubadmin() {
  const navigate = useNavigate();
  let token = localStorage.getItem("token");
  let header = { "x-access-token": `${token}` };
  let options = { headers: header };
  const [limit, setlimit] = useState([]);
  const [share, setshare] = useState([]);
  const [IsNumberTen, setIsNumberTen] = useState(false);
  //not clear fields
  const [cassinoShare, setcassinoShare] = useState([]);
  const [adminCommission, setAdminCommission] = useState([]);
  const [matchCommission, setmatchCommission] = useState([]);
  const [sessionCommission, setsessionCommission] = useState([]);
  const [Isloader, setIsloader] = useState(false);
  const [RandemPass, setRandemPass] = useState();
  useEffect(() => {
    userProfile();
    generateRandemNumber();
  }, []);
  // console.log(options);
  const userProfile = async () => {
    axios.get(`/user-profile`, options).then((res) => {
      const data = res.data.data;
      console.log("userProfile", data);
      setlimit(data.limit);
      setshare(data.share);
      setAdminCommission(data.cassinoShare);
    });
  };
  const myFormData = async (e) => {
    e.preventDefault();
    if (IsNumberTen == false) {
      setIsloader(true);
      const data = new FormData(e.target);
      const Formvlaues = Object.fromEntries(data.entries());
      console.log("form data is == ", Formvlaues);
      const response = await axios.post(
        "/admins/subadmin-create",
        Formvlaues,
        options
      );
      // console.log(response.message);
      if (response.data.success) {
        setIsloader(false);
        const data = response.data;
        if (data.success) {
          navigate(`/sub-admin`);
          toast.success(data.message);
          e.target.reset();
        } else {
          toast.error(data.message);
        }
      } else {
        toast.error(data.message);
      }
    }
  };

  const generateRandemNumber = () => {
    const min = 9999;
    const max = 99999;
    const rand = Math.floor(min + Math.random() * (max - min));
    setRandemPass(rand);
  };
  const handleNumber = (e) => {
    const { name, value } = e.target;

    console.log(value.toString().length);
    if (value.toString().length == 10) {
      return setIsNumberTen(false);
    }
    setIsNumberTen(true);
  };

  return (
    <>
      {/* <Sidebar /> */}
      <form onSubmit={(e) => myFormData(e)}>
        <div className="content-wrapper">
        <section className="content">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Create Sub Admin</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/home" href="#">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active">
                    <Link to="/subadmin">Sub Admin Master</Link>
                  </li>
                  <li className="breadcrumb-item active">
                    <Link to="/subadmin">Back</Link>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="content">
          {/* <input
                type="hidden"
                name="superagent"
                value="1"
                className="readonly"
              /> */}
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
                    <label for="code">Code</label>
                    <input
                      type="text"
                      // name="code"
                      value="Auto Generate"
                      readOnly
                      className="form-control readonly"
                    />
                    <input
                      type="hidden"
                      // name="user_type"
                      value="Sub Admin"
                      readOnly=""
                      className="readonly"
                    />
                    <input
                      type="hidden"
                      // name="type"
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
                    />
                  </div>

                  <div className="form-group">
                    <label for="mobile">Contact No</label>
                    <input
                      type="Number"
                      className="form-control"
                      name="contact_no"
                      id="contact_no"
                      required
                      onChange={(e) => {
                        handleNumber(e);
                      }}
                    />
                    {IsNumberTen && (
                      <span className="text-danger">
                        Value must be equal 10
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <label for="password">Password</label>
                    <div className="input-group ">
                      <input
                        type="text"
                        name="password"
                        className="form-control"
                        value={RandemPass}
                        readOnly
                      />
                    </div>
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
                      <label for="share">Current Limit</label>
                      <input
                        type="number"
                        max={limit}
                        min={0}
                        placeholder="Client Limit"
                        className="form-control"
                        step="0.01"
                        required
                        id="user_coins"
                        name="limit"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label for="mshare">Admin Limit</label>
                      <input
                        type="number"
                        placeholder="Limit"
                        defaultValue={limit}
                        id="parent_coins"
                        className="form-control"
                        readOnly
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="form-group col-md-6">
                      <label for="share">Sub Admin Share</label>
                      <input
                        type="number"
                        max={share}
                        min={0}
                        placeholder="Share"
                        className="form-control"
                        id="user_share"
                        step="0.01"
                        required
                        name="share"
                        defaultValue
                      />
                    </div>

                    <div className="form-group col-md-6">
                      <label for="mshare">Admin Share</label>
                      <input
                        type="number"
                        placeholder="Share"
                        className="form-control"
                        defaultValue={share}
                        id="parent_user_share"
                        readOnly
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="form-group col-md-6">
                      <label for="share">Sub Admin Commission</label>
                      <input
                        type="number"
                        // defaultValue
                        className="form-control"
                        placeholder="Sub Admin Commission"
                        min={0}
                        max={adminCommission}
                        step="0.01"
                        id="sub_admin_commission"
                        // required
                        name="commission"
                      />
                    </div>

                    <div className="form-group col-md-6">
                      <label for="mshare">Admin Commission </label>
                      <input
                        id="parent_admin_comm"
                        type="text"
                        min={0}
                        //  max={cassinoCommission}
                        className="form-control"
                        readOnly
                        defaultValue={adminCommission}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Link to="/subadmin" className="btn btn-secondary">
                Cancel
              </Link>
              <button
                type="submit"
                className="btn btn-success float-right"
                id="submitBtn"
                disabled={Isloader}
              >
                Create New Sub Admin
                {Isloader && (
                  <span
                    class="spinner-grow spinner-grow-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                )}
              </button>
            </div>
          </div>
          <br />
        </section>
        </div>
      </form>
    </>
  );
}
