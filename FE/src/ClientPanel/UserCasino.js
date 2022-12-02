import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Components/Footer';
import PageHeader from './Components/PageHeader';

export default function UserCasino() {
    return (
      <>
        <div className="position-relative userTheme bg-light">
            <div className="position-relative">
                <PageHeader title="LEDGER" />
                <div class="container">
                    <div class="align-items-end row">
                        <div class="text-center col-sm-4 col-6"><a class="casino-thumbnails" href="#"><img src="/images/teen-patti.2670c40dadaeb73660e2.webp" alt="" class="w-100" /><b>20-20 Teen Patti</b></a></div>
                        <div class="text-center col-sm-4 col-6"><a class="casino-thumbnails" href="#"><img src="/images/dragon-tiger.245a6b901b9f76dc5879.webp" alt="" class="w-100" /><b>Dragon Tiger</b></a></div>
                        <div class="text-center col-sm-4 col-6"><a class="casino-thumbnails" href="#"><img src="/images/Lucky7.e5ba50ab910aabad04cb.webp" alt="" class="w-100" /><b>Lucky 7</b></a></div>
                        <div class="text-center col-sm-4 col-6"><a class="casino-thumbnails" href="#"><img src="/images/aaa.9af3d3d40e8b48d9ab0a.jpeg" alt="" class="w-100" /><b>AAA</b></a></div>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </>
    );
}
