import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Components/Footer';
import PageHeader from './Components/PageHeader';
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';


export default function UserProfile() {

    let token = localStorage.getItem("token");
    let header = ({ 'x-access-token': `${token}` });
    let options = ({ headers: header });

    const [data, setData] = useState([]);

    const profiledetail = async () => {
        axios.get(`/game/profile`, options)
            .then(res => {
                const data = res.data.data;
                setData(data);
                console.log(data);
            })
    }

    useEffect(() => {
        profiledetail();
    }, []);


    const [open, setOpen] = React.useState(false);

    const viewfun = async () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    //////////////change password //////////////////
    const myFormData = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const Formvlaues = Object.fromEntries(data.entries());
        console.log("form data is == ", Formvlaues);
        const response = await axios.post('/game/change-password', Formvlaues, options)
        // console.log(response.response.status);
        const data1 = response.data;
        if (data1.success) {
            toast.success(data1.message);
            e.target.reset();
        }
        else {
            toast.error(data1.message);
        }
    }




    return (
        <>
            <ToastContainer />
            <div className="position-relative userTheme bg-light">
                <div className="position-relative">
                    <PageHeader title="PROFILE" />
                    <div className="container table-responsive">
                        <section className="content mt-5">
                        
                                <input type="hidden" name="superagent" value='1' className="readonly" />
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card card-primary">
                                            <div className="card-header" style={{ background: "#292961" }}>
                                                <h3 className="card-title">PERSONAL INFORMATION</h3>

                                                <div className="card-tools">
                                                    <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="card-body">

                                                <div className="form-group">
                                                    <label htmlFor="code">CLIENT CODE</label>
                                                    <input type="text" name="code" value={data.uid} readOnly="" className="readonly form-control" />

                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="name">USERNAME</label>
                                                    <input type="text" id="name" className="form-control readonly" value={data.name} placeholder="Name" min="2" required="" name="name" />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="name">CONTACT NO :</label>
                                                    <input type="text" id="name" className="form-control readonly" value={data.contact_no} placeholder="Name" min="2" required="" name="name" />
                                                </div>

                                                {/* <div className="form-group">
                                                    <label htmlFor="name">DATE OF JOINING :</label>
                                                    <input type="text" id="name" className="form-control" value="2022-10-11 00:03:19" placeholder="Name" min="2" required="" name="name" />
                                                </div> */}



                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <form onSubmit={(e) => myFormData(e)}>
                                            <div className="card card-secondary">
                                                <div className="card-header">
                                                    <h3 className="card-title">CHANGE PASSWORD</h3>
                                                </div>
                                                <div className="card-body">
                                                    <div className="form-group">
                                                        <label htmlFor="code"> CURRENT PASSWORD</label>
                                                        <input type="password" name="current_pass" className="form-control" placeholder='Current Password' />

                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="name">NEW PASSWORD</label>
                                                        <input type="password" id="name" className="form-control" min="2" required=""
                                                            placeholder='New Password'
                                                            name="new_pass" />
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="name">CONFIRM PASSWORD</label>
                                                        <input type="password" id="name" className="form-control" min="2" required=""
                                                            placeholder='Confirm Password'
                                                            name="confirm" />
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-12 text-center">

                                                            <button type="submit" className="btn btn-success btn-bg" id="btn">CHANGE PASSWORD</button>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                           
                            <br />

                        </section>
                    </div>
                </div>
            </div>

            <Footer />


        </>
    );
}