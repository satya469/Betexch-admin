import React, { Component } from "react";
// import Sidebar from "../../components/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MasterLimitUpdate(props) {
  const [limit, setLimit] = useState([]);
  useEffect(() => {
    // userProfile();
  }, []);

  ////////////token localStorage//////
  const token = localStorage.getItem("token");
  const header = { "x-access-token": `${token}` };
  const options = { headers: header };
  //////////////users list call api//////////////
  const [DropDownValidation, setdropDownValidation] = useState(false);
  const [UidList, setUidList] = useState([]);
  const [data, setData] = useState([]);
  const [DropDownName, setDropDownName] = useState("")

  const userProfile = async (data) => {
    axios.post(`/user-profile-byId`, data, options).then((res) => {
      const data = res.data.data;
      // console.log(data);
      setLimit(data.limit);
    });
  };

  const handleSelectRole = async (e) => {
    if (e.target.value == 0) {
      return setDropDownName("")
    }
    const dataof = {
      userId: e.target.value,
    };
    userProfile(dataof)
    setDropDownName({ ...DropDownName, "UIname": e.target.value })
    setdropDownValidation(false);
  };
  useEffect(() => {
    userlist();
  }, [DropDownName])

  const userlist = async () => {
    axios.get(`/admins/my-masters?page=1&limit=10`, options).then((res) => {
      // console.log("list =>", res);
      const data = res.data.data;
      console.log("dropdownvalue=====", DropDownName)
      if (DropDownName == "") {
        return
      } else {
        setData([]);
        data.map((item) => {
          if (item.createdBy == DropDownName.UIname) {
            setData((prevNames) => [...prevNames, item]);
          }
        });
      }
    });
  };
  useEffect(() => {
    userlist();
    GetNameList();
  }, []);
  ///////////limit update call api//////////////
  const [PlusMinusValue, setPlusMinusValue] = useState();
  //login not implement working on drop down logic
  const myFormData = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const Formvlaues = Object.fromEntries(data.entries());
    Formvlaues.value = await PlusMinusValue;
    Formvlaues.limitUpdatedBy = await DropDownName.UIname;
    const dataof = {
      userId: DropDownName.UIname,
    };
    if (DropDownName !== "") {
      setdropDownValidation(false);
      const response = await axios.post(
        "/admins/change-master-limit",
        Formvlaues,
        options
      );
      if (response.data.success) {
        // setDropDownName("")
        userProfile(dataof)
        const data = response.data;
        if (data.success) {
          toast.success(data.message);
          e.target.reset();
          // userProfile();
          return userlist();
        } else {
          toast.error(data.message);
        }
      } else {
        toast.error(data.message);
      }
    } else {
      setdropDownValidation(true);
    }
  };
  // const myFormData = async (e) => {

  //   e.preventDefault();
  //   const data = new FormData(e.target);
  //   const Formvlaues = Object.fromEntries(data.entries());
  //   Formvlaues.value = await PlusMinusValue
  //   console.log("form data is == ", Formvlaues);
  //   await axios
  //   .post("/admins/change-master-limit", Formvlaues, options)
  //   .then((res) => {
  //     console.log("res====>", res.data);
  //     if (res.data.success) {
  //       const data = res.data;
  //       if (data.success) {
  //         //navigate(`/poll`);
  //         toast.success(data.message);
  //         e.target.reset();
  //         userProfile()
  //         return userlist();
  //       }
  //     }
  //   })
  //   .catch((error) => {
  //     toast.error(error.message);
  //   });

  // };
  const GetNameList = async () => {
    axios
      .get(`/admins/my-subadmins`, options)
      .then((res) => {
        // console.log(res);
        const data = res.data.data;
        data.map((item) => {
          if (item.status == "active") {
            setUidList((prevNames) => [...prevNames, item.uid]);
          }
        });
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
            <div className="row">
              <div className="col-8">
                <div className="card card card-indigo">
                  <div className="card-header ">
                    <div className="row">
                      <div className="col-md-4">
                        <h4>Master Coin Details</h4>
                        <h5>Total Limit : {limit}</h5>
                      </div>
                      <div className="col-md-4">
                        <label for="name" className="text-capitalize">
                          Select
                        </label>
                        <select
                          className="form-control"
                          width="100px"
                          name="uid"
                          onChange={(e) => {
                            handleSelectRole(e);
                          }}
                          required
                        >
                          <option value="0">
                            ---------Select Option--------
                          </option>
                          {UidList.length == 0 ? (
                            <></>
                          ) : (
                            UidList.map((item) => {
                              return (
                                <>
                                  <option value={`${item}`}>{item}</option>
                                </>
                              );
                            })
                          )}
                        </select>
                        {DropDownValidation && (
                          <span className="text-danger">required</span>
                        )}
                      </div>
                    </div>
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
                      {data && data.length != 0 ? (
                        <>
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
                                        name="Plusbtn"
                                        id="plus-btn"
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
                                        name="Minusbtn"
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
        </section>
      </div>
    </>
  );
}
