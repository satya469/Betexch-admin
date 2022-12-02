import React from "react";
import { Link, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import SuperSidebar from "../Components/SiderbarAllowFeatures/SuperSidebar";
import axios from "axios";
import { toast } from "react-toastify";
export default function SessionInplay() {
  const [data, setData] = React.useState([]);
  let token = localStorage.getItem("token");
  let header = { "x-access-token": `${token}` };
  let options = { headers: header };
  let { gameId } = useParams();
  const [sessionData, setSessionData] = React.useState([]);
  const [inPlayData, setInPlayData] = React.useState([]);
  useEffect(() => {
    getList();
    getInPlayList();
  }, []);
  async function getList() {
    await axios
      .post("/owner/sessions-list", { matchId: gameId }, options)
      .then(async (resp) => {
        setSessionData(resp.data.data);
      });
  }

  async function getSession() {
    await axios
      .post("/owner/create-session", { gameId: gameId }, options)
      .then(async (resp) => {
        setData(resp.data.data);
        getList();
      });
  }

  function getInPlayList() {
    axios.get("/owner/inplay-sessions", options).then(async (resp) => {
      setInPlayData(resp.data.sessions);
    });
  }

  async function addInPlay(e, item) {
    try {
      await axios
        .post("/owner/add-sessions-inplay", item, options)
        .then((res) => {
          toast.success(res.data.message);
          getInPlayList();
          getList();
        });
    } catch (error) {
      toast.error(error.data.message);
    }
  }
  async function RemoveFromInPlay(e, item) {
    try {
      await axios
        .post("/owner/remove-sessions-inplay", item, options)
        .then((res) => {
          toast.success(res.data.message);
          getInPlayList();
          getList();
        });
    } catch (error) {
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
              <h1 className="m-0 ml-2">
                {" "}
                <i class="fa fa-home"></i> All Matches
              </h1>
            </div>

            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active"> All Matches</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div class="d-grid  gap-2 mt-2 d-md-flex justify-content-around  align-items-center">
                  <span>
                    <i class="fa fa-globe"></i> Sport Master All Matches Back{" "}
                  </span>
                  <button class="btn btn-success me-md-2" type="button">
                    Go to Session Desscion
                  </button>
                  <button class="btn btn-info" type="button">
                    Match Book
                  </button>
                  <button
                    class="btn btn-primary"
                    type="button"
                    onClick={getSession}
                  >
                    Get new session
                  </button>
                </div>

                <div className="card-body">
                  <table className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>S.No </th>
                        <th>Session Name </th>
                        <th>No</th>
                        <th>Yes</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sessionData.map((e, i) => {
                        return (
                          <tr>
                            <td>{i + 1}</td>
                            <td>
                              <Link to={`/session_inplay/:${e.sessionName}`}>
                                {e.sessionName}
                              </Link>{" "}
                            </td>
                            <td>
                              {e.noRun}/{e.noRate}
                            </td>
                            <td>
                              {e.yesRun}/{e.yesRate}
                            </td>
                            <td>
                              {inPlayData &&
                              inPlayData.find(
                                (x) =>
                                  x.sessionId == e.sessionId &&
                                  x.matchId == e.matchId
                              ) ? (
                                <>
                                  <button
                                    onClick={(ele) => {
                                      RemoveFromInPlay(ele, e);
                                    }}
                                    className="btn btn-danger inplay badge bg-danger"
                                    value={e}
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
