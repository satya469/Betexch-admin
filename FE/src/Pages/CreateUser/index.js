import React, { Component } from "react";
import PageHeader from "../../Components/PageHeader";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from "react";

export default function CreateUser() {

  let token = localStorage.getItem("token");
  let header = ({ 'x-access-token': `${token}` });
  let options = ({ headers: header });

  const[limit, setlimit] = useState([]);
  const[share, setshare] = useState([]);
  const[cassinoShare, setcassinoShare] = useState([]);
  const[cassinoCommission, setcassinoCommission] = useState([]);
  const[matchCommission, setmatchCommission] = useState([]);
  const[sessionCommission, setsessionCommission] = useState([]);
  useEffect(() => {
    const limit = localStorage.getItem("limit");
    setlimit(limit);
    const share = localStorage.getItem("share");
    setshare(share);
    const cassinoShare = localStorage.getItem("cassinoShare");
    setcassinoShare(cassinoShare);
    const cassinoCommission = localStorage.getItem("cassinoCommission");
    setcassinoCommission(cassinoCommission);
    const matchCommission = localStorage.getItem("matchCommission");
    setmatchCommission(matchCommission);
    const sessionCommission = localStorage.getItem("sessionCommission");
    setsessionCommission(sessionCommission);
  }, []);

  console.log(options);
  
  const myFormData = async (e) => {
    e.preventDefault();
        const data = new FormData(e.target);
        const Formvlaues = Object.fromEntries(data.entries());
        console.log("form data is == ", Formvlaues);
        const response = await axios.post('/subadmin/super-agent-create', Formvlaues, options)
        // console.log(response.message);
        if (response.data.success) {
          const data = response.data;
          if (data.success) {
              //navigate(`/poll`);
              toast.success(data.message);
              e.target.reset();
          } else {
              toast.error(data.message);
          }
      }
      else {
          toast.error(data.message);
      }
      }
  


    return (
      <>
        <PageHeader title={"Admin"} />
        <ToastContainer />
        <form onSubmit={(e) => myFormData(e)}>
          <div className="container-fluid" id="accordion">
           
            <div className="row">
              <div className="col-sm-6">
                <div className="card card-primary">
                  <div className="card-header">
                    <h4 className="card-title w-100">
                      <a
                        className="d-block w-100"
                        data-toggle="collapse"
                        href="#collapseOne"
                      >
                        General
                      </a>
                    </h4>
                  </div>
                  
                  <div
                    id="collapseOne"
                    className="collapse show"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <div className="form-group">
                        <label>Code</label>
                        <input
                          type="text"
                          readOnly
                          value="Auto Generate"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          type="text"
                          name="first_name"
                          className="form-control"
                        />
                        <input
                          type="hidden"
                          name="last_name"
                          value="test    "
                          className="form-control"
                        />
                        <input
                          type="text"
                          name="email"
                          // value="test@gmail.com"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label>Reference</label>
                        <input
                          type="text"
                          name="reference"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input
                          type="text"
                          name="password"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label>Contact No</label>
                        <input
                          type="text"
                          name="contact_no"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="card card-gray">
                  <div className="card-header">
                    <h4 className="card-title w-100">
                      <a
                        className="d-block w-100"
                        data-toggle="collapse"
                        href="#collapseOne"
                      >
                        Share and Commission
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse show"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <div className="form-group row">
                        <div className="form-group col-md-6">
                          <label htmlFor="user_coins">Share Limit</label>
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
                            // defaultValue={0.0}
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="parent_coins">My Limit</label>
                          <input
                            type="number"
                            placeholder="Limit"
                            className="form-control"
                            defaultValue={limit}
                            id="parent_coins"
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="form-group col-md-6">
                          <label htmlFor="user_share">My Share</label>
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
                          <label htmlFor="parent_user_share">My Share</label>
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
                          <label htmlFor="user_casino_share">
                            Casino Share
                          </label>
                          <input
                            type="number"
                            max={cassinoShare}
                            min={0}
                            placeholder="Casino Share"
                            className="form-control"
                            id="user_casino_share"
                            step="0.01"
                            required
                            name="cassinoShare"
                            defaultValue
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="parent_casino_user_share">
                            My Share
                          </label>
                          <input
                            type="number"
                            placeholder="Share"
                            className="form-control"
                            defaultValue={cassinoShare}
                            id="parent_casino_user_share"
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="form-group row" id="match_comm">
                        <div className="form-group col-md-6">
                          <label htmlFor="user_casino_comm">
                            Casino Commision
                          </label>
                          <input
                            type="number"
                            defaultValue
                            className="form-control"
                            placeholder="Casino Commission (Only On Minus)"
                            min={0}
                            max={cassinoShare}
                            step="0.01"
                            id="casino_commission"
                            required
                            name="cassinoCommission"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="parent_user_casino_comm">
                            My Casino Commission
                          </label>
                          <input
                            id="parent_user_casino_comm"
                            type="text"
                            min={0}
                            max={cassinoCommission}
                            className="form-control"
                            readOnly
                            defaultValue={cassinoCommission}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="user_casino_perm">Casino Status</label>
                        <select
                          id="user_casino_perm"
                          name="cassinoStatus"
                          className="form-control"
                        >
                          <option selected="selected" value={0}>
                            OFF
                          </option>
                          <option value={1}>ON</option>
                        </select>
                      </div>
                      {/*        <div class="form-group row">
<div class="form-group col-md-6">
<label for="user_mobile_share"> Admin Mobile Share</label>
<input type="number" min="0" placeholder="Mobile Share" class="form-control" max="100" step="0.01" id="user_mobile_share" required="" name="user[user_mobile_share]" value="">
</div>

<div class="form-group col-md-6">
<label for="mobile_share">My Mobile Share</label>
<input type="number" min="0" placeholder="Mobile Share" class="form-control" max="100" step="0.01" readonly="" required="" id="mobileshare" name="mobileshare" value="100">
</div>
</div>

*/}
                      {/* <input
                        type="hidden"
                        min={0}
                        placeholder="Mobile Share"
                        className="form-control"
                        max={0}
                        step="0.01"
                        id="user_mobile_share"
                        required
                        name="user[user_mobile_share]"
                        defaultValue={0}
                      />
                      <input
                        type="hidden"
                        min={0}
                        placeholder="Mobile Share"
                        className="form-control"
                        max={100}
                        step="0.01"
                        readOnly
                        required
                        id="mobileshare"
                        name="mobileshare"
                        defaultValue={0}
                      /> */}
                      <div className="form-group">
                        <label htmlFor="user_comm_type">Commission Type</label>
                        <select
                          id="user_comm_type"
                          name="commissionType"
                          className="form-control"
                          onchange="change_commission()"
                        >
                          <option value="bet-by-bet">No Comm</option>
                          {/*  <option value='OM'>Only On Minus</option> */}
                          <option value="no_comm">Bet By Bet</option>
                        </select>
                      </div>
                      <div className="form-group row" id="match_comm">
                        <div className="form-group col-md-6">
                          <label htmlFor="user_match_comm">
                            Match Commision
                          </label>
                          <input
                            type="number"
                            defaultValue={0}
                            className="form-control"
                            placeholder="Match Commission"
                            min={0}
                            max={matchCommission}
                            step="0.01"
                            id="match_commission"
                            required
                            name="matchCommission"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="mc">My Match Commission</label>
                          <input
                            id="mc"
                            type="text"
                            min={0}
                            defaultValue={matchCommission}
                            className="form-control"
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="form-group row" id="session_comm">
                        <div className="form-group col-md-6">
                          <label htmlFor="user_session_comm">
                            Session Commission
                          </label>
                          <input
                            type="number"
                            defaultValue={0}
                            className="form-control"
                            placeholder="Match"
                            min={0}
                            max={sessionCommission}
                            step="0.01"
                            id="user_session_comm"
                            required
                            name="sessionCommission"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="mc">My Session Commission</label>
                          <input
                            type="number"
                            defaultValue={sessionCommission}
                            id="sc"
                            className="form-control"
                            placeholder="Session Commission"
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <a href="#" className="btn btn-secondary">
                  Cancel
                </a>
                <button
                  type="submit"
                  className="btn btn-success float-right"
                  id="submitBtn"
                >
                  Create New Admin
                </button>
              </div>
            </div>
          </div>
        </form>
      </>
    );
}
