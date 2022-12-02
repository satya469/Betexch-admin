import React, { Component } from "react";
import Card from "../Components/Card";
import PageHeader from "../Components/PageHeader";

export default class ClientPlusMinus extends Component {
  render() {
    return (
      <>
        <PageHeader title="Plus Minus" />

        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Client Report</h3>
                  <br />
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-sm-3">
                        <div className="form-group">
                          <label>Client</label>
                          <select className="form-control w-100">
                            <option>C1</option>
                            <option>C2</option>
                            <option>C3</option>
                            <option>C4</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-sm-3">
                        <div className="form-group">
                          <label>Date From</label>
                          <input
                            type="date"
                            name="from_date"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-sm-3">
                        <div className="form-group">
                          <label>Date To</label>
                          <input
                            type="date"
                            name="to_date"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-sm-3 d-flex">
                        <div className="form-group w-100 align-self-end">
                          <button className="btn btn-primary btn-block">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <table className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th colspan="2"></th>
                        <th colspan="3">Match</th>
                        <th colspan="3">Session</th>
                        <th colspan="2">Other Amount</th>
                        <th></th>
                      </tr>
                      <tr>
                        <th>Date</th>
                        <th>Match Name</th>
                        <th>Match</th>
                        <th>Session</th>
                        <th>Total</th>
                        <th>Match</th>
                        <th>Session</th>
                        <th>Total</th>
                        <th>Mob</th>
                        <th>Final</th>
                        <th>Balance</th>
                      </tr>
                      <tr>
                        <td colspan={10} className="text-right">
                          Opening Balance
                        </td>
                        <td></td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>01-08-2022</td>
                        <td>CHEPAUK SUPER GILLIES VS LYCA KOVAI KINGS</td>
                        <td>0</td>
                        <td>600</td>
                        <td>600</td>
                        <td>0</td>
                        <td>18</td>
                        <td>18</td>
                        <td>0</td>
                        <td>618</td>
                        <td>618</td>
                      </tr>
                      <tr>
                        <td>01-08-2022</td>
                        <td>CHEPAUK SUPER GILLIES VS LYCA KOVAI KINGS</td>
                        <td>0</td>
                        <td>600</td>
                        <td>600</td>
                        <td>0</td>
                        <td>18</td>
                        <td>18</td>
                        <td>0</td>
                        <td>618</td>
                        <td>618</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
