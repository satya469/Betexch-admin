import React, { Component } from "react";
import Card from "../Components/Card";
import PageHeader from "../Components/PageHeader";
import { useState, useEffect } from "react";
import axios from "axios";


export default function CompleteGames() {
 
  let token = localStorage.getItem("token");
  let header = ({ 'x-access-token': `${token}` });
  let options = ({ headers: header });

  const [data, setData] = useState([]);
  
  const CompleteGamesList = async () => {
    axios.get(`/subadmin/complete-game?page=1&limit=10`, options)
      .then(res => {
         const data = res.data.data.results;
        setData(data);
        console.log(data);
      })
  }

  useEffect(() => {
    CompleteGamesList();
  }, []);


   const inplay_games = [
      {
        code: 1,
        name: "TRENT ROCKETS VS BIRMINGHAM PHOENIX",
        date_time: "08/06/2022 07:00:00 PM",
        match_type: "T-20",
        declare: "Yes",
        winner: "Trent",
        plus_minus: "1234",
      },
      {
        code: 2,
        name: "TRENT ROCKETS VS BIRMINGHAM PHOENIX",
        date_time: "08/06/2022 07:00:00 PM",
        match_type: "T-20",
        declare: "Yes",
        winner: "Trent",
        plus_minus: "1234",
      },
    ]

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
                      <th>Declare</th>
                      <th>Won By</th>
                      <th>Plus Minus</th>
                    </tr>
                  </thead>
                  <tbody>

                  {data.map((item, index) => {
                    return(
                      <>
                       <tr key={index}>
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
                                <a className="dropdown-item" href="#">
                                  Match Session Plus Minus
                                </a>
                                <a className="dropdown-item" href="#">
                                  Display Match and Session Bets
                                </a>
                                <a className="dropdown-item" href="#">
                                  Display Match Bets
                                </a>
                                <a className="dropdown-item" href="#">
                                  Display Session Bets
                                </a>
                              </div>
                            </div>
                          </td>
                        <td>{index + 1}</td>
                       
                      <td></td>
                      <td>{item.team1} VS {item.team2}</td>
                      <td></td>
                      <td>{item.match_type}</td>
                      <td></td>
                      <td>{item.won_by}</td>
                      <td></td>
                    </tr>
                    </>
                    )
                  })}

                    {/* {inplay_games.map((game, i) => {
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
                                <a className="dropdown-item" href="#">
                                  Match Session Plus Minus
                                </a>
                                <a className="dropdown-item" href="#">
                                  Display Match and Session Bets
                                </a>
                                <a className="dropdown-item" href="#">
                                  Display Match Bets
                                </a>
                                <a className="dropdown-item" href="#">
                                  Display Session Bets
                                </a>
                              </div>
                            </div>
                          </td>
                          <td>{i}</td>
                          <td>{game.code}</td>
                          <td>{game.name}</td>
                          <td>{game.date_time}</td>
                          <td>{game.match_type}</td>
                          <td>{game.declare}</td>
                          <td>{game.winner}</td>
                          <td>{game.plus_minus}</td>
                        </tr>
                      );
                    })} */}
                  </tbody>
                </table>
              </Card>
            </div>
          </div>
        </div>
      </>
    );
  }
