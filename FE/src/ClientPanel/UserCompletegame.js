import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Components/Footer';
import PageHeader from './Components/PageHeader';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from "@mui/material/Button";

export default function UserCompletegame() {

    const [open, setOpen] = React.useState(false);

    const viewfun = async () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    return (
        <>
            <div className="position-relative userTheme bg-light">
                <div className="position-relative">
                 <PageHeader title="COMPLETE GAME" />
                    <div className="container-fluid table-responsive">
                        <table className="ledger table table-striped table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>MATKA NAME</th>
                                    <th>MATKA BET</th>
                                    <th>RESULT</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td onClick={(e) => { viewfun(e)}}><span className='clickbutton'>kalyan</span></td>
                                <td>12</td>
                                <td  className="text-center">500</td>
                                </tr>
                                <tr>
                                <td onClick={(e) => { viewfun(e)}}><span className='clickbutton'>Golden Morning Start</span></td>
                                <td>12</td>
                                <td  className="text-center">250</td>
                                </tr>
                                <tr>
                                <td onClick={(e) => { viewfun(e)}}><span className='clickbutton'>Shridham</span></td>
                                <td>12</td>
                                <td  className="text-center">250</td>
                                </tr>
                                <tr>
                                <td onClick={(e) => { viewfun(e)}}><span className='clickbutton'>Golden</span></td>
                                <td>89</td>
                                <td  className="text-center">586</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <Footer />

            <Dialog className="notifi-style" open={open} onClose={handleClose}>
                    <DialogTitle><i className="fad fa-gamepad-alt"></i> &nbsp;BET LIST </DialogTitle>
                    <DialogContent>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <table className="ledger table table-striped table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>BET TYPE</th>
                                            <th>BET NUMBER </th>
                                            <th>AMOUNT</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>Jodi</td>
                                        <td>12</td>
                                        <td  className="text-center">500</td>
                                        </tr>
                                        <tr>
                                        <td>close</td>
                                        <td>8</td>
                                        <td  className="text-center">40</td>
                                        </tr>
                                        <tr>
                                        <td>Jodi</td>
                                        <td>12</td>
                                        <td  className="text-center">20</td>
                                        </tr>
                                        <tr>
                                        <td>Open</td>
                                        <td>2</td>
                                        <td  className="text-center">50</td>
                                        </tr>
                                       
                                    </tbody>
                                </table>
                        </div>
                    </div>
                    </DialogContent>
                    <DialogActions className="mb-2">
                            <Button variant="contained" className="mr-3 btn-pd btnBg" onClick={handleClose}>Cancel</Button>
                        </DialogActions>
                </Dialog>

        </>
    );
}