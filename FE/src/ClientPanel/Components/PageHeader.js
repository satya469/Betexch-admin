import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function PageHeader(props) {
    
  const[wallet, setwallet] = useState([])
  useEffect(() => {
    const wallet = localStorage.getItem("wallet");
    setwallet(wallet);
    console.log(wallet);
  }, []);


    return (
        <>

            <div className="page-header">
                <h4 className="m-0">{props.title}</h4>
                <p className="m-0"><span>
                    <box-icon color="#fff" name="wallet"></box-icon>
                 </span><span>Coins : <span> {wallet}  </span></span></p>
            </div>



        </>
    );
}