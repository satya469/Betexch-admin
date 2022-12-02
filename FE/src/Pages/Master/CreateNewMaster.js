import React from "react";
// import Sidebar from "../../components/Sidebar";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
export default function CreateNewMaster() {
  const navigate = useNavigate();
  let token = localStorage.getItem("token");
  let header = { "x-access-token": `${token}` };
  let options = { headers: header };
  const location = useLocation();
  const { uid } = location.state.SelecteName;

  const [limit, setlimit] = useState([]);
  const [share, setshare] = useState([]);
  const [cassinoShare, setcassinoShare] = useState([]);
  const [cassinoCommission, setcassinoCommission] = useState([]);
  const [RandemPass, setRandemPass] = useState();
  const [Isloader, setIsloader] = useState(false);
  const [IsNumberTen, setIsNumberTen] = useState(false);
  useEffect(() => {
    generateRandemNumber();
    userProfile();
  }, []);
  const data = {
    userId: uid,
  };
  const userProfile = async () => {
    axios.post(`/user-profile-byId`, data, options).then((res) => {
      const data = res.data.data;
      console.log("data---->", data);
      setlimit(data.limit);
      setshare(data.share);
      setcassinoCommission(data.commission);
    });
  };
  const myFormData = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    if (IsNumberTen == false) {
      const Formvlaues = Object.fromEntries(data.entries());
      Formvlaues.createdBy = uid;
      console.log("form data is.... ==> ", Formvlaues);
      const response = await axios.post(
        "/admins/master-create",
        Formvlaues,
        options
      );
      // console.log(response.message);
      if (response.data.success) {
        setIsloader(false);
        const data = response.data;
        if (data.success) {
          navigate(`/masters`);
          toast.success(data.message);
          e.target.reset();
        } else {
          toast.error(data.message);
        }
      } else {
        toast.error(data.message);
      }
    } else {
      setIsloader(false);
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
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Create Master</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/home" href="#">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active">
                    <Link to="/master">Master</Link>
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
          <input
            type="hidden"
            // name="superagent"
            // value="1"
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
                    <label for="code">Code</label>
                    <input
                      type="text"
                      name="code"
                      value="Auto Generate"
                      readOnly
                      className="readonly form-control"
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
                      // value="2"
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
                        className="form-control readonly"
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
                      <label for="mshare">Sub Admin Limit</label>
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
                      <label for="share">Master Share</label>

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
                      <label for="mshare">Sub Admin Share</label>
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
                      <label for="share"> Master Commission</label>
                      <input
                        type="number"
                        defaultValue
                        className="form-control"
                        placeholder="Master Commission"
                        min={0}
                        max={cassinoShare}
                        //  step="0.01"
                        //  id="master_commission"
                        //  required
                        name="commission"
                      />
                    </div>

                    <div className="form-group col-md-6">
                      <label for="mshare">Sub Admin Commission </label>
                      <input
                        id="parent_admin_comm"
                        type="text"
                        min={0}
                        max={cassinoCommission}
                        className="form-control"
                        readOnly
                        defaultValue={cassinoCommission}
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
                disabled={Isloader}
              >
                Create New Master
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
