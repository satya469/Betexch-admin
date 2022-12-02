import React, { Component } from "react";
import PageHeader from "../../Components/PageHeader";
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from "react";
import axios from "axios";

export default function MasterLimitUpdate(props) {

    const[limit, setLimit] = useState([])
    useEffect(() => {
      const limit = localStorage.getItem("limit");
      setLimit(limit);
    }, []);


    ////////////token localStorage//////
    const token = localStorage.getItem("token");
    const header = ({ 'x-access-token': `${token}` });
    const options = ({ headers: header });

    //////////////users list call api//////////////
    const[data, setData]=useState([]);
    const userlist = async () => {
    axios.get(`/subadmin/my-masters?page=1&limit=10`, options)
        .then(res => {
            const data = res.data.data.results;
            // const total = res.data.rows;
            // const totalPage = (Math.ceil(total / limit));
            // setpageCount(totalPage);
            setData(data);
            // SetSelectvalue('');
            console.log(data);
        })  
    }
    useEffect(() => {
    userlist();
    }, []);


///////////limit update call api//////////////
  
const myFormData = async (e) => {
    e.preventDefault();
        const data = new FormData(e.target);
        const Formvlaues = Object.fromEntries(data.entries());
        console.log("form data is == ", Formvlaues);
        const response = await axios.post('/subadmin/change-superagent-limit', Formvlaues, options)
        // console.log(response.message);
        if (response.data.success) {
          const data = response.data;
          if (data.success) {
              //navigate(`/poll`);
              toast.success(data.message);
              e.target.reset();
              return userlist();
          } else {
              toast.error(data.message);
          }
      }
      else {
          toast.error(data.message);
      }
      }
  

  
    return (
        <>
            <ToastContainer />
            <PageHeader title={props.title} />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8">
                        <div className="card card card-indigo">
                            <div className="card-header ">
                                <h4>Sub Admin Coin Details</h4>
                                <h5>Total Limit : {limit}</h5>
                            </div>
                            <table id="" className="table table-bordered dt-responsive nowra text-center">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Current Limit</th>
                                        <th>Add/Minus Limit </th>
                                    </tr>
                                </thead>
                                <tbody>
                                {data.map((item, index) => {
                                 return(
                                    <>
                                <tr key={index}>
                                <td>{item.name}  </td>
                                <td>{item.limit}  </td>
                                <td className="limit_am">
                                <form onSubmit={(e) => myFormData(e)}>
                                <input type="hidden" name="uid" value={item.uid} />
                                <input type="number" name="limit" min={0} max={limit} className="form-control table-input mr-3" style={{width: "50%", display: "inline-block"}} required="" />
                                <button type="submit" name="subtype" value="1" className="btn btn-success ">Add</button>
                                    &nbsp;<button id="minus-btn" type="submit" name="subtype" value="0" className="btn btn-danger">Minus</button>
                                </form>
                               </td>
                               
                                 </tr>
                                 </>
                                  )
                                })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
