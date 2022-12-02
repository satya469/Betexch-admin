import React from 'react';
import { Link } from 'react-router-dom';

export default function Welcome() {
    return (
        <>
            <div role="dialog" aria-modal="true" className="fade welcome-screen modal show" tabindex="-1" style={{display: "block"}}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="text-center modal-body">
                            {/* <h4 className="text-white" style="position: absolute; top: -36px; left: 0px; font-size: 24px; font-family: Bebas Neue; font-style: normal; font-weight: 400;">
                            </h4> */}
                            <h4>Welcome To</h4>
                            <h5 className="mb-1">Daimond Matka</h5>
                            <p className="text-primary"></p>
                            <Link to="/user-terms" className="w-100 btn btn-primary mt-3">CONTINUE</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}