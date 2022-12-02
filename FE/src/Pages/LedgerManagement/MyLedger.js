import React, { Component } from "react";
import Card from "../../Components/Card";
import PageHeader from "../../Components/PageHeader";
import { useState, useEffect } from "react";
import axios from "axios";

export default function MyLedger() {

  let token = localStorage.getItem("token");
  let header = ({ 'x-access-token': `${token}` });
  let options = ({ headers: header });

  const [data, setData] = useState([]);
  const [head, setHead] = useState([]);
  
  const myledger = async () => {
    axios.get(`/subadmin/my-ledger?page=1&limit=10`, options)
      .then(res => {
         const data = res.data.data.results;
         const head = res.data.head;
        setData(data);
        setHead(head);
        console.log(data);
      })
  }

  useEffect(() => {
    myledger();
  }, []);


    return (
      <>
        <PageHeader title="My Ledger" />

        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <Card>
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
                      <th>{head.total_debit}</th>
                      <th>{head.total_credit}</th> 
                      <th>{head.final_balance}</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                     
                     {data.map((item, index) => {
                    return(
                      <>
                       <tr key={index}>
                        <td>{index + 1}</td>
                      <td>{item.date}</td>
                      <td>{item.collection_name}</td>
                      <td>{item.debit}</td>
                      <td>{item.credit}</td>
                      <td>{item.balance}</td>
                      <td>{item.payment_type}</td>
                      <td>{item.remark}</td>
                    </tr>
                    </>
                    )
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