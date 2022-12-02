import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import SuperSidebar from "../Components/SiderbarAllowFeatures/SuperSidebar";
import axios from "axios";
import { toast } from "react-toastify";

export default function AllMatches() {
  let token = localStorage.getItem("token");
  let header = { "x-access-token": `${token}` };
  let options = { headers: header };
  const [data, setData] = React.useState([]);
  const [inPlayData, setInPlayData] = React.useState([]);
  useEffect(() => {
    getList();
    getInPlayList();
  }, []);
  function getList() {
    axios
      .get("http://marketsarket.in:3000/getcricketmatches")
      .then(async (resp) => {
        setData(resp.data);
      });
  }
  function getInPlayList() {
    axios.get("/owner/inplay-matches", options).then(async (resp) => {
      setInPlayData(resp.data.matches);
    });
  }

  async function addInPlay(e, item) {
    try {
      await axios.post("/owner/add-inplay", item, options).then((res) => {
        console.log(res.data);
        toast.success(res.data.message);
        getInPlayList();
        getList();
      });
    } catch (error) {
      toast.error(error.data.message);
      console.log("error>", error);
    }
  }
  async function RemoveFromInPlay(e) {
    const data = {
      gameId: e.target.value,
    };
    try {
      await axios
        .post("/owner/remove-inplay-match", data, options)
        .then((res) => {
          console.log(res.data);
          toast.success(res.data.message);
          getInPlayList();
          getList();
        });
    } catch (error) {
      console.log("error>", error);
      toast.error(error.data.message);
    }
  }

  return (
    <>
      <SuperSidebar />
      <div className="content-wrapper">
        <div className="container-fluid content-header">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">All Matches</h1>
            </div>

            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active">All Matches</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end mr-3 mb-3">
          <button className="btn btn-danger" onClick={getList}>
            Get List
          </button>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <table className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>S.No </th>
                        <th>Match Name </th>
                        <th>Match Date </th>
                        <th>Evant Id</th>
                        <th> Team Name1/Team Selection Id1</th>
                        <th>Team Name1/Team Selection Id1</th>
                        <th>Start to Upcoming Match</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((e, i) => {
                        return (
                          <tr>
                            <td>{i + 1}</td>
                            <td>{e.eventName}</td>
                            <td>{e.eventName.split("/")[1]}</td>
                            <td>{e.gameId}</td>
                            <td>{e.eventName.split("v")[0]}</td>
                            <td>{e.eventName.split("v")[1]}</td>
                            <td>
                              {inPlayData.find((x) => x.game_id == e.gameId) ? (
                                <>
                                  <button
                                    onClick={(e) => {
                                      RemoveFromInPlay(e);
                                    }}
                                    className="btn btn-danger inplay badge bg-danger"
                                    value={e.gameId}
                                  >
                                    Remove From Inplay
                                  </button>
                                </>
                              ) : (
                                <>
                                  <button
                                    onClick={(ele) => addInPlay(ele, e)}
                                    className="btn btn-succes inplay badge bg-success"
                                    value={e}
                                  >
                                    Add Inplay
                                  </button>
                                </>
                              )}

                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
