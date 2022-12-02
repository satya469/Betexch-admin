import React, { Component } from "react";
import Card from "../Components/Card";
import SelectSearch from "react-select-search";
import PageHeader from "../Components/PageHeader";

export default class CashTransaction extends Component {
  options = [
    { name: "Swedish", value: "sv" },
    { name: "English", value: "en" },
  ];

  render() {
    const { user } = this.props;
    return (
      <>
        <PageHeader title="Cash Transaction" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <Card header={`${user} Ledger`}>
                <form>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-4 col-sm-6 col-12">
                        <div className="form-group">
                          <label>Minimal</label>
                          <SelectSearch
                            options={this.options}
                            value="sv"
                            name="language"
                            placeholder="Choose your language"
                            className="form-control"
                            search
                          />
                        </div>
                      </div>

                      <div className="col-md-4 col-sm-6 col-12">
                        <div className="form-group">
                          <label>Statement Type</label>
                          <select
                            name="statement_type"
                            className="form-control"
                          >
                            <option value="">All</option>
                            <option value="match">Match</option>
                            <option value="casino">Casino</option>
                            <option value="cash">Cash</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-4 col-sm-6 col-12">
                        <div className="form-group">
                          <label>Amount</label>
                          <input
                            type="text"
                            name="amount"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-4 col-sm-6 col-12">
                        <div className="form-group">
                          <label>Payment Type</label>
                          <select name="payment_type" className="form-control">
                            <option value="dena">Payment - Dena</option>
                            <option value="lena">Payment - Lena</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-4 col-sm-6 col-12">
                        <div className="form-group">
                          <label>Remark</label>
                          <input
                            type="text"
                            name="remark"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-4 col-sm-6 col-12 d-flex">
                        <div className="form-group align-self-end w-100">
                          <button className="btn btn-primary btn-block">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </Card>

              <Card header="Ledger">
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Date</th>
                      <th>Collection Name</th>
                      <th>Debit</th>
                      <th>Credit</th>
                      <th>Balance</th>
                      <th>Payment Type</th>
                      <th>Remark</th>
                    </tr>
                    <tr>
                      <th></th>
                      <th></th>
                      <th>Total Amount</th>
                      <th>123456</th>
                      <th>123456</th>
                      <th className="text-primary">123456</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>12-12-2021 12:12:12</td>
                      <td>TEST1 VS TEST2</td>
                      <td>0</td>
                      <td>3630</td>
                      <td>3630</td>
                      <td></td>
                      <td></td>
                    </tr>
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
