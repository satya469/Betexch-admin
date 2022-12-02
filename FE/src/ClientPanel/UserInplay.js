import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Components/Footer';
import PageHeader from './Components/PageHeader';
import { useState, useEffect } from "react";
import axios from "axios";

export default function UserInplay() {

  let token = localStorage.getItem("token");
  let header = ({ 'x-access-token': `${token}` });
  let options = ({ headers: header });

  const [data, setData] = useState([]);

  const profiledetail = async () => {
    axios.get(`/game/in-play`, options)
      .then(res => {
        console.log(res.data.data);
        const data = res.data.data;
        setData(data);
      })
  }

  useEffect(() => {
    profiledetail();
  }, []);


  return (
    <>
      <div className="position-relative userTheme bg-light">
        <div className="position-relative">
          <PageHeader title="IN PLAY" />
          <div class="container-fluid">

            {data.map((item, index) => {
              return (
                <>
                  <div class="row" key={index}>
                    <div class="my-3 match-detail">
                      <div class="match-timings"><span>23-10-22 01:30:00 PM</span></div><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAZCAYAAAB+Sg0DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM2SURBVHgB3ZjPTxNBHMW/0y4tINYWW0CM9Qc9eNJqIgnQKCZCMF404WgiN2PC/wDcTPTgwYM3S/RIokcjHhoVSSBR4rkIYsBCIdQKtNu0XedNu7UsXbpuvXQ/ybI7s0M7r+87bzbLqMh86Ea/YmdjRCzIm26qG5QI5Wmy+8N0GC2GP/NXB8cURuNUxzCFxq+8fzvB5voHRkhhz8kC5Fj+uo0UukcWwa6wMRs3q58sAwvayFq4JfrPNAe6qH34Nu1Fv9H61KtSv72lhfyj9ym3s0ur4Zel65Wnz8R9T6iH3KFeWuP3jg8NkrOjbd/n/l74Sptvpqt+f1VBNqeTnJ0d5PB5iUkS5WWZsr+SlP6xKq612FuOkJdPCBMoFyQV++XYuhDhCfWJsaog3IOg9anX5ApeoKP80FKzIEebj5rO+IWQcoHob2htpdTyd8psxMkMENYcOMedaBfXcBDsRRdLYyBWbWf4GCPoCsLEVTGePl4OvT0kedwkr8Uo8WmWkp+/8PunhVuVnKrGXjQqBKFEC+K6RJnuH7MonP4XdEOh8dRJIcZ1+RJ5b90UYgDKr334jhDJJLtom0Eu/uIoO7iDcyYWo1rRFSS5XOLs5hOvxLHeQr/D5yMzqILgjBoAsqasvEMD1DlyVxxG0S+5Rqc4O09UdqCh6BhcMkOquDbgjKOj8B3l6wcgKFSQfkbQFaRks6LksokESe6Dz6ryz0J5mFk/4v9jG+LcHAiU1o7WobXwC0obDAMV3ZLLxDfFefvjbMX7iZlCP0LBDLmdHSEA5ebgSQe0DiV5IGzxqN4yENcqug4hzbD3INHy6bRYSyg/OLY9U0g5uIj9yCzYWBHbruBFIRDtWtEVhFJKLa1Q01m/mDyOciAmtbxiuuSAGt1wSOuOWQ7dWDPxOGWTSRHhSD0EBYSgHOHgYWIw0fNPHpXaSw8fHxijrh08RcAhLf7RB6V+7EerfE3VJAhg0toNzwjYWyo9vpRTHgK7FRzCj/J3rLE9is1dG1TIQiDlEmQhuCBlgSyDErHlmDJBVoHRpK0n8i7C3/jUvSho6I5Mh5naMcvf/tjFC5O6eseQwJJBlcEYdPwBoyNhub69PdAAAAAASUVORK5CYII=" class="live-match" />
                      <div class="teams"><span class="team-vs">VS</span>
                        <div class="team-details"><span><img src="/images/teamicon.jpg" alt="" /></span>
                          <p>{item.first_team_name}</p>
                        </div>
                        <div class="team-details"><span><img src="/images/teamicon.jpg" alt="" /></span>
                          <p>{item.second_team_name}</p>
                        </div>
                      </div>
                      <div class="matchData"><span class="game-bet-data">Match Bets <br />0</span><span class="game-bet-data">Session Bets <br />0</span></div>
                    </div>
                  </div>
                </>
              )
            })}


          </div>
        </div>
      </div>


      <Footer />

    </>
  );
}
