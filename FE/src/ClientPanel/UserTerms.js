import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Components/Footer';
export default function UserTerms() {
    return (
        <>
            <div role="dialog" aria-modal="true" class="fade rules-screen modal show" tabindex="-1" style={{ display: "block" }}>
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4>TERMS & CONDITIONS</h4>
                        </div>
                        <div class="modal-body">
                            <ol>
                                <li>Daimondmatka provides an online platform for playing matka. You will view this site on your own risk. You agree that you are solely responsible and liable for all activities relating to your use of the Website, Materials and Services. We warn you that matka gambling may be banned or illegal in your country. We are not responsible for any issues or scam. We respect all country rules/laws.
                                    Any changes we may make to our terms and conditions in the future will be posted on this page and on our Website.
                                    If any of your personal data changes, or if you have any questions, comments or requests regarding the protection of your personal data or this Policy, please contact us by email at support@Daimondmatka.in.</li>

                            </ol>
                            <ol>
                                <li>
                                Daimondmatka मटका खेलने के लिए एक ऑनलाइन मंच प्रदान करता है। आप इस साइट को अपने जोखिम पर देखेंगे। आप सहमत हैं कि वेबसाइट, सामग्री और सेवाओं के आपके उपयोग से संबंधित सभी गतिविधियों के लिए आप पूरी तरह से जिम्मेदार और उत्तरदायी हैं। हम आपको चेतावनी देते हैं कि आपके देश में मटका जुआ प्रतिबंधित या अवैध हो सकता है। हम किसी भी मुद्दे या घोटाले के लिए जिम्मेदार नहीं हैं। हम सभी देश के नियमों/कानूनों का सम्मान करते हैं। भविष्य में हमारे द्वारा अपने नियमों और शर्तों में किए जाने वाले किसी भी परिवर्तन को इस पृष्ठ और हमारी वेबसाइट पर पोस्ट किया जाएगा। यदि आपका कोई व्यक्तिगत डेटा बदलता है, या यदि आपके व्यक्तिगत डेटा या इस नीति की सुरक्षा के संबंध में आपके कोई प्रश्न, टिप्पणी या अनुरोध हैं, तो कृपया हमें ईमेल द्वारा support@Daimondmatka.in पर संपर्क करें।

                                </li>

                            </ol>
                        </div>
                        <div class="border-0 modal-footer text-start">
                           <div className='checkbox-label'>
                           <input type="checkbox" className="form-control checkprivacy" id='check' />
                           <label htmlFor='check'>TERMS & CONDITIONS</label>
                           </div>
                            <Link to="/user-ledger" class="w-100 btn btn-primary">CONTINUE</Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
           
        </>
    );
}