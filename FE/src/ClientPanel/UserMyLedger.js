import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Components/Footer';
import PageHeader from './Components/PageHeader';
import { useState, useEffect } from "react";
import axios from "axios";


export default function UserMyLedger() {

    let token = localStorage.getItem("token");
    let header = ({ 'x-access-token': `${token}` });
    let options = ({ headers: header });
  
    const [data, setData] = useState([]);
    const [head, setHead] = useState([]);
    
    const myledger = async () => {
      axios.get(`/game/ledger?page=1&limit=10`, options)
        .then(res => {
           const data = res.data.data.results;
           const head = res.data;
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
            <div className="position-relative userTheme bg-light">
                <div className="position-relative">
                 <PageHeader title="LEDGER" />
                    <div className="container-fluid table-responsive">
                    <table class="ledger table table-striped table-bordered table-hover text-uppercase">
                        <thead>
                            <tr>
                            <th>Total Credit</th>
                            <th>{head.total_credit}</th>
                            <th>Total Debit</th>
                            <th>{head.total_debit}</th>
                            <th>Balance</th>
                            <th>{head.balance}</th>
                            </tr>
                            <tr>
                            <th>Date</th>
                            <th>Remark</th>
                            <th>Won By</th>
                            <th>Won</th>
                            <th>Lost</th>
                            <th>Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                        {data.map((item, index) => {
                    return(
                      <>
                       <tr key={index}>
                      <td>{item.date}</td>
                      <td>{item.remark}</td>
                      <td>{item.won_by}</td>
                      <td>{item.won}</td>
                      <td>{item.lost}</td>
                      <td>{item.balance}</td>
                    </tr>
                    </>
                    )
                  })}
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <Footer />

        </>
    );
}