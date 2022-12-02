import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const navigate = useNavigate();
  const [uid, setUid] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    let data = { uid, password };
    let result = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });
    let demo = await result.json();
    console.log(demo);
    navigate("/");
    //console.log(demo.body[0].name);
    if (demo.success) {
      localStorage.setItem("token", demo.data.token);
      localStorage.setItem("uid", demo.data.uid);
      localStorage.setItem("name", demo.data.name);
      localStorage.setItem("role", demo.data.role);
      localStorage.setItem("share", demo.data.share);
      localStorage.setItem("cassinoShare", demo.data.cassinoShare);
      localStorage.setItem("cassinoCommission", demo.data.cassinoCommission);
      localStorage.setItem("sessionCommission", demo.data.sessionCommission);
      localStorage.setItem("commissionType", demo.data.commissionType);
      localStorage.setItem("status", demo.data.status);
      localStorage.setItem("wallet", demo.data.wallet);
      localStorage.setItem("createdBy", demo.data.createdBy);
      localStorage.setItem("limit", demo.data.limit);
      localStorage.setItem("matchCommission", demo.data.matchCommission);
      toast.success(demo.message);
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } else {
      toast.error(demo.message);
    }
  }

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <ToastContainer />
      <div className="hold-transition login-page">
        <div className="login-box">
          <h2 className="text-center">
            Betexch <span>AllAgent</span>
          </h2>
          <div className="card card-primary">
            <div className="card-body">
              <p className="login-box-msg">Sign in to start your session</p>
              <form>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    name="uid"
                    className="form-control"
                    placeholder="Email"
                    onChange={(e) => setUid(e.target.value)}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" onClick={handleClick} />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <Link to="/super-admin/login" class="fas fa-lock"></Link>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember">Remember Me</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      type="button"
                      onClick={login}
                      className="btn btn-primary btn-block"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
