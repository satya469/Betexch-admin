import React, { Component } from "react";
import PageHeader from "../Components/PageHeader";

export default class CasinoBets extends Component {
  render() {
    return (
      <>
        <PageHeader title="Casino Bets" />

        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="card card-default">
                <div className="card-body">
                  <div className="card-default">
                    <div className="card-header text-center">
                      <h5 className="card-title text-center">
                        AGENT PLUS MINUS
                      </h5>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <select
                          name="client_id"
                          id="client_id"
                          className="select2 form-control select select2-hidden-accessible"
                          data-select2-id="client_id"
                          tabIndex={-1}
                          aria-hidden="true"
                        >
                          <option value={3421}>C4421 (Rahul)</option>
                          <option value={3422}>C4422 (Aman g)</option>
                          <option value={3423}>C4423 (Asok)</option>
                          <option value={3424}>C4424 (Gotam)</option>
                          <option value={3425}>C4425 (Raju tomar)</option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--default"
                          dir="ltr"
                          data-select2-id={1}
                          style={{ width: "876.359px" }}
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--single"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabIndex={0}
                              aria-disabled="false"
                              aria-labelledby="select2-client_id-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-client_id-container"
                                role="textbox"
                                aria-readonly="true"
                                title="Select Client"
                              >
                                Select Client
                              </span>
                              <span
                                className="select2-selection__arrow"
                                role="presentation"
                              >
                                <b role="presentation" />
                              </span>
                            </span>
                          </span>
                          <span
                            className="dropdown-wrapper"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="card-body">
                      <table
                        id="data"
                        className="table table-striped table-bordered"
                      >
                        <thead>
                          <tr>
                            <th colSpan={10}>Casino Bet Data</th>
                            <th />
                          </tr>
                          <tr>
                            <th className="text-uppercase">Sr. No.</th>
                            <th className="text-uppercase">Date</th>
                            <th className="text-uppercase">Client</th>
                            <th className="text-uppercase">Rate</th>
                            <th className="text-uppercase">Amount</th>
                            {/* <th class="text-uppercase">Profit</th>
							        <th class="text-uppercase">Loss</th> */}
                            <th className="text-uppercase">Player Name</th>
                            <th className="text-uppercase">Decision</th>
                            <th className="text-uppercase">Status</th>
                            <th className="text-uppercase">Market Id</th>
                            <th className="text-uppercase">Profit/Loss</th>
                            <th className="text-uppercase">IP</th>
                          </tr>
                        </thead>
                        <tbody id="load_data">
                          <tr
                            style={{
                              fontWeight: "bold",
                              backgroundColor: "white",
                            }}
                          >
                            <td className="text-uppercase">1</td>
                            <td className="text-uppercase">
                              16-08-2022 21:09:39
                            </td>
                            <td className="text-uppercase">Golu..(C4349)</td>
                            <td className="text-uppercase">1.98</td>
                            <td className="text-uppercase">300</td>
                            <td className="text-uppercase">Player B</td>
                            <td className="text-uppercase">Player A</td>
                            <td className="text-uppercase">YES</td>
                            <td className="text-uppercase">11.221608210958</td>
                            <td className="text-uppercase">
                              <span style={{ color: "red" }}>-300</span>
                            </td>
                            <td className="text-uppercase">157.34.216.23</td>
                          </tr>
                          <tr
                            style={{
                              fontWeight: "bold",
                              backgroundColor: "white",
                            }}
                          >
                            <td className="text-uppercase">2</td>
                            <td className="text-uppercase">
                              16-08-2022 21:09:37
                            </td>
                            <td className="text-uppercase">Ashok(C4161)</td>
                            <td className="text-uppercase">1.98</td>
                            <td className="text-uppercase">500</td>
                            <td className="text-uppercase">Player B</td>
                            <td className="text-uppercase">Player A</td>
                            <td className="text-uppercase">YES</td>
                            <td className="text-uppercase">11.221608210958</td>
                            <td className="text-uppercase">
                              <span style={{ color: "red" }}>-500</span>
                            </td>
                            <td className="text-uppercase">157.34.133.226</td>
                          </tr>
                          <tr
                            style={{
                              fontWeight: "bold",
                              backgroundColor: "white",
                            }}
                          >
                            <td className="text-uppercase">3</td>
                            <td className="text-uppercase">
                              16-08-2022 21:08:36
                            </td>
                            <td className="text-uppercase">Ashok(C4161)</td>
                            <td className="text-uppercase">1.98</td>
                            <td className="text-uppercase">100</td>
                            <td className="text-uppercase">Player B</td>
                            <td className="text-uppercase">Player A</td>
                            <td className="text-uppercase">YES</td>
                            <td className="text-uppercase">11.221608210846</td>
                            <td className="text-uppercase">
                              <span style={{ color: "red" }}>-100</span>
                            </td>
                            <td className="text-uppercase">157.34.133.226</td>
                          </tr>
                          <tr
                            style={{
                              fontWeight: "bold",
                              backgroundColor: "white",
                            }}
                          >
                            <td className="text-uppercase">4</td>
                            <td className="text-uppercase">
                              16-08-2022 21:08:30
                            </td>
                            <td className="text-uppercase">Golu..(C4349)</td>
                            <td className="text-uppercase">1.98</td>
                            <td className="text-uppercase">186</td>
                            <td className="text-uppercase">Player B</td>
                            <td className="text-uppercase">Player A</td>
                            <td className="text-uppercase">YES</td>
                            <td className="text-uppercase">11.221608210846</td>
                            <td className="text-uppercase">
                              <span style={{ color: "red" }}>-186</span>
                            </td>
                            <td className="text-uppercase">157.34.216.23</td>
                          </tr>
                          <tr
                            style={{
                              fontWeight: "bold",
                              backgroundColor: "white",
                            }}
                          >
                            <td className="text-uppercase">5</td>
                            <td className="text-uppercase">
                              16-08-2022 20:33:43
                            </td>
                            <td className="text-uppercase">
                              Pawan adhet(C4361)
                            </td>
                            <td className="text-uppercase">1.98</td>
                            <td className="text-uppercase">100</td>
                            <td className="text-uppercase">Player A</td>
                            <td className="text-uppercase">Player B</td>
                            <td className="text-uppercase">YES</td>
                            <td className="text-uppercase">11.221608203405</td>
                            <td className="text-uppercase">
                              <span style={{ color: "red" }}>-100</span>
                            </td>
                            <td className="text-uppercase">47.247.216.193</td>
                          </tr>
                          <tr
                            style={{
                              fontWeight: "bold",
                              backgroundColor: "white",
                            }}
                          >
                            <td className="text-uppercase">6</td>
                            <td className="text-uppercase">
                              16-08-2022 20:09:27
                            </td>
                            <td className="text-uppercase">Golu..(C4349)</td>
                            <td className="text-uppercase">1.98</td>
                            <td className="text-uppercase">296</td>
                            <td className="text-uppercase">Player A</td>
                            <td className="text-uppercase">Player A</td>
                            <td className="text-uppercase">YES</td>
                            <td className="text-uppercase">11.221608200951</td>
                            <td className="text-uppercase">
                              <span style={{ color: "#007bff" }}>290.08</span>
                            </td>
                            <td className="text-uppercase">157.34.216.23</td>
                          </tr>
                          <tr
                            style={{
                              fontWeight: "bold",
                              backgroundColor: "white",
                            }}
                          >
                            <td className="text-uppercase">7</td>
                            <td className="text-uppercase">
                              16-08-2022 19:26:28
                            </td>
                            <td className="text-uppercase">
                              HANUMANTHA(C2573)
                            </td>
                            <td className="text-uppercase">1.98</td>
                            <td className="text-uppercase">500</td>
                            <td className="text-uppercase">Player B</td>
                            <td className="text-uppercase">Player B</td>
                            <td className="text-uppercase">YES</td>
                            <td className="text-uppercase">11.221608192645</td>
                            <td className="text-uppercase">
                              <span style={{ color: "#007bff" }}>490</span>
                            </td>
                            <td className="text-uppercase">157.50.20.143</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr
                            className="text-uppercase"
                            style={{ backgroundColor: "white" }}
                          >
                            <td
                              colSpan={4}
                              style={{ color: "black", fontWeight: "bold" }}
                            >
                              Client Profit Loss Total
                            </td>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <th
                              style={{ color: "black" }}
                              id="total_user_amount"
                            >
                              <span style={{ color: "#007bff" }}>46427</span>
                            </th>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.row */}
        </section>
      </>
    );
  }
}
