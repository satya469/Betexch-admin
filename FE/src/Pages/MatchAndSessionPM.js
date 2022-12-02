import React, { Component } from "react";
import PageHeader from "../Components/PageHeader";

export default class MatchAndSessionPM extends Component {
  render() {
    return (
      <>
        <PageHeader title="Match & Session Plus Minus Report" />
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                {/* /.card */}
                <div className="card">
                  <input
                    type="hidden"
                    name="market_id"
                    defaultValue="1.202079462"
                  />
                  <input type="hidden" name="page_name" defaultValue="match" />
                  <div className="card-header text-md-center text-bold">
                    <h5>MANCHESTER ORIGINALS VS WELSH FIRE (T-20)</h5>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    <div className="form-inline">
                      <label className="my-2 mr-3" htmlFor="type">
                        Preference
                      </label>
                      <select
                        id="type"
                        name="type"
                        className="custom-select my-3 mr-sm-4"
                      >
                        <option value="b">Both</option>
                        <option value="s">Session</option>
                      </select>
                      <button
                        type="submit"
                        onClick={() =>
                          (window.location.href = "/session-pm-list")
                        }
                        className="btn btn-primary my-3"
                      >
                        Show
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
