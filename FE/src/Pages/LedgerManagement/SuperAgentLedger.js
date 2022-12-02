import React, { Component } from "react";
import Card from "../../Components/Card";
import PageHeader from "../../Components/PageHeader";
import axios from "axios";
import { useState, useEffect } from "react";

export default function SuperAgentLedger(props) {

  //const { user } = this.props;
  

  let token = localStorage.getItem("token");
  let header = ({ 'x-access-token': `${token}` });
  let options = ({ headers: header });

  // let data;
  const [denaHai, setDenaHai] = useState([]);
  const [lenaHai, setLenaHai] = useState([]);
  const userlist = async () => {
    axios.get(`/subadmin/all-superagent-ledger?page=1&limit=10`, options)
      .then(res => {
         const data = res.data;
         const lenaHai = data.lena_hai.results.map((item, index) => {
          return(
            <> <tr key={index}>
            <td>{item.name}</td>
            <td>XYZ</td>
            <td>{item.contact_no}</td>
            <td>{item.open_bal}</td>
            <td>{item.current_bal}</td>
            <td>{item.close_bal}</td>
          </tr></>
          )
        })
         const denaHai = data.dena_hai.results.map((item, index) => {
          return(
            <> <tr key={index}>
            <td>{item.name}</td>
            <td>XYZ</td>
            <td>{item.contact_no}</td>
            <td>{item.open_bal}</td>
            <td>{item.current_bal}</td>
            <td>{item.close_bal}</td>
          </tr></>
          )
        })
        setDenaHai(denaHai);
        setLenaHai(lenaHai);
        // console.log(denaHai);
      })
  }

  useEffect(() => {
    userlist();
  }, []);


  return (
    <>
      <PageHeader title={`All ${props.user} Ledger`} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <Card title="">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-6">
                    <table className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th colSpan={6}>
                            PAYMENT RECEIVING FROM (LENA HE)
                          </th>
                        </tr>
                        <tr>
                          <th>Name</th>
                          <th>Reff</th>
                          <th>Contact</th>
                          <th>Open. Bal.</th>
                          <th>Curr. Bal.</th>
                          <th>Cls. Bal.</th>
                        </tr>
                      </thead>
                      <tbody>
                      {lenaHai}
                      </tbody>
                    </table>
                  </div>

                  <div className="col-sm-6">
                    <table className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th colSpan={6}>
                            PAYMENT RECEIVING FROM (DENA HE)
                          </th>
                        </tr>
                        <tr>
                          <th>Name</th>
                          <th>Reff</th>
                          <th>Contact</th>
                          <th>Open. Bal.</th>
                          <th>Curr. Bal.</th>
                          <th>Cls. Bal.</th>
                        </tr>
                      </thead>
                      <tbody>
                      {denaHai}

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
