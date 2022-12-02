import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ControlLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function login() {
    let data = { username, password };
    let result = await fetch("/owner/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });
    let demo = await result.json();
    console.log(demo);
    navigate("/super-admin");
    console.log(demo);
    if (demo.success) {
      localStorage.setItem("token", demo.data.token);
      localStorage.setItem("contact_no", demo.data.contact_no);
      localStorage.setItem("first_name", demo.data.first_name);
      localStorage.setItem("role", demo.data.role);
      localStorage.setItem("status", demo.data.status);
      localStorage.setItem("username", demo.data.username);
      toast.success(demo.message);
      setTimeout(() => {
        navigate("/super-admin/all-matches");
      }, 1000);
    } else {
      toast.error(demo.message);
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="hold-transition login-page">
        <div className="login-box">
          <h2 className="text-center">
            Betexch <span>Super Admin</span>
          </h2>
          <div className="card card-primary">
            <div className="card-body">
              <p className="login-box-msg">Sign in to start your session</p>
              <form>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    name="username"
                    className="form-control"
                    placeholder="Email"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
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
                      <span className="fas fa-lock" />
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
