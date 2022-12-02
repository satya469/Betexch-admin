import React, { Component } from "react";

import { Link } from "react-router-dom";

import Card from "../Components/Card";
import PageHeader from "../Components/PageHeader";

export default class InPlay extends Component {
  state = {
    inplay_games: [
      {
        code: 1,
        name: "TRENT ROCKETS VS BIRMINGHAM PHOENIX",
        date_time: "08/06/2022 07:00:00 PM",
        match_type: "T-20",
      },
      {
        code: 2,
        name: "TRENT ROCKETS VS BIRMINGHAM PHOENIX",
        date_time: "08/06/2022 07:00:00 PM",
        match_type: "T-20",
      },
    ],
  };

  render() {
    const { inplay_games } = this.state;
    return (
      <>
        <PageHeader title="Games" />

        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 table-responsive">
              <Card header={"Sport Details"}>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>S. No.</th>
                      <th>Code</th>
                      <th>Name</th>
                      <th>Date Time</th>
                      <th>Match Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inplay_games.map((game, i) => {
                      return (
                        <tr>
                          <td>
                            <div className="btn-group">
                              <button
                                type="button"
                                className="btn btn-outline-primary dropdown-toggle dropdown-icon"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <span className="sr-only">Toggle Dropdown</span>
                              </button>
                              <div
                                className="dropdown-menu"
                                role="menu"
                                style={{}}
                              >
                                <Link
                                  className="dropdown-item"
                                  to="/live-report"
                                >
                                  Match & Session Position
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  to="/match-session-pm"
                                >
                                  Match Session plus minus
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  to="/bet-details"
                                >
                                  Display Match and Session Bets
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  to="/match-bet-details"
                                >
                                  Display Match Bets
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  to="/session-bet-details"
                                >
                                  Display Session Bets
                                </Link>
                              </div>
                            </div>
                          </td>
                          <td>{i}</td>
                          <td>{game.code}</td>
                          <td>{game.name}</td>
                          <td>{game.date_time}</td>
                          <td>{game.match_type}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </Card>
            </div>
          </div>
        </div>
      </>
    );
  }
}
