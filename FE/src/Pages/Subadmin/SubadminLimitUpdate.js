import React, { Component } from "react";
// import Sidebar from "../../components/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SubadminLimitUpdate() {
  const [limit, setLimit] = useState([]);
  useEffect(() => {
    userProfile();
  }, []);
  ////////////token localStorage//////
  const token = localStorage.getItem("token");
  const header = { "x-access-token": `${token}` };
  const options = { headers: header };

  //////////////users list call api//////////////
  const [data, setData] = useState([]);
  const userProfile = async () => {
    axios.get(`/user-profile`, options).then((res) => {
      const data = res.data.data;
      console.log(data);
      setLimit(data.limit);
    });
  };
  const userlist = async () => {
    axios.get(`/admins/my-subadmins`, options).then((res) => {
      const data = res.data.data;
      setData(data);
      // SetSelectvalue('');
      console.log("data=====>", data);
    });
  };
  useEffect(() => {
    userlist();
  }, []);

  ///////////limit update call api//////////////
  const [PlusMinusValue, setPlusMinusValue] = useState();
  const myFormData = async (e) => {
    e.preventDefault();
    console.log("e", e);
    const data = new FormData(e.target);
    const Formvlaues = Object.fromEntries(data.entries());
    Formvlaues.value = await PlusMinusValue;
    console.log("form data is == ", Formvlaues);
    await axios
      .post("/admins/change-subadmin-limit", Formvlaues, options)
      .then((res) => {
        console.log("res====>", res.data);
        if (res.data.success) {
          const data = res.data;
          if (data.success) {
            //navigate(`/poll`);
            toast.success(data.message);
            e.target.reset();
            userProfile();
            return userlist();
          }
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <>
      {/* <Sidebar /> */}
      <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              <div className="card card card-indigo">
                <div className="card-header ">
                  <h4>Subadmin Coin Details</h4>
                  <h5>Total Limit : {limit}</h5>
                </div>
                <table
                  id=""
                  className="table table-bordered dt-responsive nowra text-center"
                >
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Current Limit</th>
                      <th>Add/Minus Limit </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => {
                      return (
                        <>
                          <tr key={index}>
                            <td>{item.name} </td>
                            <td>{item.limit} </td>
                            <td className="limit_am">
                              <form onSubmit={(e) => myFormData(e)}>
                                <input
                                  type="hidden"
                                  name="uid"
                                  value={item.uid}
                                />
                                <input
                                  type="number"
                                  name="limit"
                                  min={0}
                                  max={limit}
                                  className="form-control table-input mr-3"
                                  style={{
                                    width: "50%",
                                    display: "inline-block",
                                  }}
                                  required
                                />
                                <button
                                  type="submit"
                                  name="plus"
                                  value="1"
                                  className="btn btn-success"
                                  onClick={(e) => {
                                    setPlusMinusValue(e.target.value);
                                  }}
                                >
                                  Add
                                </button>
                                &nbsp;
                                <button
                                  id="minus-btn"
                                  type="submit"
                                  name="minus"
                                  value="0"
                                  className="btn btn-danger"
                                  onClick={(e) => {
                                    setPlusMinusValue(e.target.value);
                                  }}
                                >
                                  Minus
                                </button>
                              </form>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
