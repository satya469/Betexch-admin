import React, { Component } from "react";

import PageHeader from "../Components/PageHeader";
import Card from "../Components/Card";
import { Link } from "react-router-dom";

export default class Casino extends Component {
  state = {
    games: [
      {
        code: 1,
        name: this.props.game_type,
        date_time: "08/06/2022 07:00:00 PM",
        plus_minus: 12345,
      },
      {
        code: 2,
        name: this.props.game_type,
        date_time: "08/06/2022 07:00:00 PM",
        plus_minus: 12345,
      },
    ],
  };

  render() {
    const { games } = this.state;
    const { game_type } = this.props;
    return (
      <>
        <PageHeader title={game_type} />

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
                      <th>Plus Minus</th>
                    </tr>
                  </thead>
                  <tbody>
                    {games.map((game, i) => {
                      return (
                        <tr>
                          <td>
                            <div className="btn-group">
                              <button
                                type="button"
                                className="btn btn-primary dropdown-toggle dropdown-icon"
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
                                  to="/casino-bets"
                                >
                                  {game_type} Bets
                                </Link>
                              </div>
                            </div>
                          </td>
                          <td>{i}</td>
                          <td>{game.code}</td>
                          <td>{game.name}</td>
                          <td>{game.date_time}</td>
                          <td>{game.plus_minus}</td>
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
