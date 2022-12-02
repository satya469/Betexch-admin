import React, { Component } from "react";
import PageHeader from "../Components/PageHeader";

export default class LiveReport extends Component {
  render() {
    return (
      <>
        <PageHeader title="Match Position" />
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card card-secondary text-center">
                  <span id="score">
                    <h5 className="card-header" id="scoreMsg">
                      4th T20 Match(1st Inning)
                    </h5>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-5 text-md">
                          <span className="text-secondary">
                            <b id="localTeam">Josh Little* (7)</b>
                          </span>
                          <br />
                          <span className="text-secondary">
                            <b id="visitorTeam">George Dockrell (30)</b>
                          </span>
                        </div>
                        <div className="col-5 text-md">
                          <span className="text-secondary">
                            <b id="localTeam">Ireland 101/9(10.0)</b>
                          </span>
                          <br />
                          <span className="text-secondary">
                            <b id="visitorTeam">Afghanistan 132/6 (11)</b>
                          </span>
                        </div>
                        <div className="col-2 score_image text-md">
                          <span
                            className="text-justify"
                            style={{
                              color: "white",
                              fontSize: "15px !important",
                            }}
                          >
                            <b>Bowler Stop</b>
                          </span>
                        </div>
                      </div>
                    </div>
                  </span>
                  <div className="form-row">
                    <div className="col-md-6">
                      <table className="table table-bordered" id="mOdds">
                        <thead>
                          <tr>
                            <th>Team</th>
                            <th className="text-red" style={{ width: 40 }}>
                              KHAI
                            </th>
                            <th className="text-blue" style={{ width: 40 }}>
                              LAGAI
                            </th>
                            <th>
                              <b className="text-blue">PLUS</b>/
                              <b className="text-red">MINUS</b>
                            </th>
                          </tr>
                        </thead>
                        <tbody id="match">
                          <tr>
                            <td>
                              <a
                                href="#"
                                className="btn username"
                                onclick="show_bets('match')"
                              >
                                {" "}
                                Afghanistan{" "}
                              </a>
                            </td>
                            <td>
                              <a href="#" className="btn text-red">
                                0.00
                              </a>
                            </td>
                            <td>
                              <a href="#" className="btn text-blue">
                                0.03
                              </a>
                            </td>
                            <td>
                              {" "}
                              <a
                                id="undefined_position"
                                href="#"
                                className="btn text-bold "
                              >
                                {" "}
                                <span style={{ color: "#007bff" }}>
                                  <span style={{ color: "#007BFF" }}>
                                    2309.29
                                  </span>
                                </span>{" "}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a
                                href="#"
                                className="btn username"
                                onclick="show_bets('match')"
                              >
                                {" "}
                                Ireland{" "}
                              </a>
                            </td>
                            <td>
                              <a href="#" className="btn text-red">
                                0.00
                              </a>
                            </td>
                            <td>
                              <a href="#" className="btn text-blue">
                                0.00
                              </a>
                            </td>
                            <td>
                              {" "}
                              <a
                                id="undefined_position"
                                href="#"
                                className="btn text-bold "
                              >
                                {" "}
                                <span style={{ color: "#007bff" }}>
                                  <span style={{ color: "red" }}>-12345</span>
                                </span>{" "}
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="col-md-6">
                      <table className="table table-bordered" id="sOdds">
                        <thead>
                          <tr>
                            <th>Session</th>
                            <th className=" text-red">NOT</th>
                            <th className="text-blue">YES</th>
                            <th>
                              <b className="text-blue">PLUS</b>/
                              <b className="text-red">MINUS</b>
                            </th>
                          </tr>
                        </thead>
                        <tbody id="session" />
                      </table>
                    </div>
                  </div>
                  <div className="row" id="match_bets">
                    <div className="col-lg-12">
                      <table className="table table-bordered table-striped table-hover table-responsive-md">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Rate</th>
                            <th>Amount</th>
                            <th>Mode</th>
                            <th>Team</th>
                            <th>Client</th>
                            <th>Ireland</th>
                            <th>Afghanistan</th>
                            <th>Date &amp; Time</th>
                          </tr>
                        </thead>
                        <tbody id="load_data">
                          <tr className>
                            <td>1</td>
                            <td>0.01</td>
                            <td>10000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C3753) Rohit</td>
                            <td>-10000</td>
                            <td>100</td>
                            <td>15-08-2022 23:50:57</td>
                          </tr>
                          <tr className>
                            <td>2</td>
                            <td>0.01</td>
                            <td>10000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C1209) Dev</td>
                            <td>-10000</td>
                            <td>100</td>
                            <td>15-08-2022 23:43:07</td>
                          </tr>
                          <tr className>
                            <td>3</td>
                            <td>0.01</td>
                            <td>10000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C1209) Dev</td>
                            <td>-10000</td>
                            <td>100</td>
                            <td>15-08-2022 23:43:01</td>
                          </tr>
                          <tr className>
                            <td>4</td>
                            <td>0.02</td>
                            <td>5000</td>
                            <td>KHAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C1209) Dev</td>
                            <td>5000</td>
                            <td>-100</td>
                            <td>15-08-2022 23:41:56</td>
                          </tr>
                          <tr className>
                            <td>5</td>
                            <td>0.01</td>
                            <td>20000</td>
                            <td>KHAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C1209) Dev</td>
                            <td>20000</td>
                            <td>-200</td>
                            <td>15-08-2022 23:41:17</td>
                          </tr>
                          <tr className>
                            <td>6</td>
                            <td>0.04</td>
                            <td>2000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C2897) Pinku</td>
                            <td>-2000</td>
                            <td>80</td>
                            <td>15-08-2022 23:40:17</td>
                          </tr>
                          <tr className>
                            <td>7</td>
                            <td>0.03</td>
                            <td>20000</td>
                            <td>KHAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C1209) Dev</td>
                            <td>20000</td>
                            <td>-600</td>
                            <td>15-08-2022 23:39:58</td>
                          </tr>
                          <tr className>
                            <td>8</td>
                            <td>0.04</td>
                            <td>5000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C2897) Pinku</td>
                            <td>-5000</td>
                            <td>200</td>
                            <td>15-08-2022 23:39:47</td>
                          </tr>
                          <tr className>
                            <td>9</td>
                            <td>0.04</td>
                            <td>10000</td>
                            <td>KHAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C1209) Dev</td>
                            <td>10000</td>
                            <td>-400</td>
                            <td>15-08-2022 23:39:27</td>
                          </tr>
                          <tr className>
                            <td>10</td>
                            <td>0.04</td>
                            <td>570</td>
                            <td>KHAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C3868) RAJAT</td>
                            <td>570</td>
                            <td>-22.8</td>
                            <td>15-08-2022 23:39:04</td>
                          </tr>
                          <tr className>
                            <td>11</td>
                            <td>0.03</td>
                            <td>50000</td>
                            <td>KHAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C3617) Motja</td>
                            <td>50000</td>
                            <td>-1500</td>
                            <td>15-08-2022 23:38:28</td>
                          </tr>
                          <tr className>
                            <td>12</td>
                            <td>0.03</td>
                            <td>10000</td>
                            <td>KHAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C4147) Mayank</td>
                            <td>10000</td>
                            <td>-300</td>
                            <td>15-08-2022 23:38:20</td>
                          </tr>
                          <tr className>
                            <td>13</td>
                            <td>0.07</td>
                            <td>10000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C1797) V kmkk</td>
                            <td>-10000</td>
                            <td>700</td>
                            <td>15-08-2022 23:29:38</td>
                          </tr>
                          <tr className>
                            <td>14</td>
                            <td>0.07</td>
                            <td>10000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C3742) Awasthi jii</td>
                            <td>-10000</td>
                            <td>700</td>
                            <td>15-08-2022 23:29:07</td>
                          </tr>
                          <tr className>
                            <td>15</td>
                            <td>0.05</td>
                            <td>1000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C3576) Gurjar shab</td>
                            <td>-1000</td>
                            <td>50</td>
                            <td>15-08-2022 23:28:35</td>
                          </tr>
                          <tr className>
                            <td>16</td>
                            <td>0.05</td>
                            <td>10000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C1209) Dev</td>
                            <td>-10000</td>
                            <td>500</td>
                            <td>15-08-2022 23:28:31</td>
                          </tr>
                          <tr className>
                            <td>17</td>
                            <td>0.05</td>
                            <td>10000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C1450) Rally</td>
                            <td>-10000</td>
                            <td>500</td>
                            <td>15-08-2022 23:28:21</td>
                          </tr>
                          <tr className>
                            <td>18</td>
                            <td>0.05</td>
                            <td>20000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C4308) POPAT</td>
                            <td>-20000</td>
                            <td>1000</td>
                            <td>15-08-2022 23:28:20</td>
                          </tr>
                          <tr className>
                            <td>19</td>
                            <td>0.05</td>
                            <td>1000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C3740) Rohan1</td>
                            <td>-1000</td>
                            <td>50</td>
                            <td>15-08-2022 23:28:20</td>
                          </tr>
                          <tr className>
                            <td>20</td>
                            <td>0.05</td>
                            <td>1000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C1206) Rajiiv</td>
                            <td>-1000</td>
                            <td>50</td>
                            <td>15-08-2022 23:28:14</td>
                          </tr>
                          <tr className>
                            <td>21</td>
                            <td>0.04</td>
                            <td>10000</td>
                            <td>KHAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C1797) V kmkk</td>
                            <td>10000</td>
                            <td>-400</td>
                            <td>15-08-2022 23:27:55</td>
                          </tr>
                          <tr className>
                            <td>22</td>
                            <td>0.11</td>
                            <td>5000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C1206) Rajiiv</td>
                            <td>-5000</td>
                            <td>550</td>
                            <td>15-08-2022 23:27:23</td>
                          </tr>
                          <tr className>
                            <td>23</td>
                            <td>0.09</td>
                            <td>50000</td>
                            <td>KHAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C1274) Zzz</td>
                            <td>50000</td>
                            <td>-4500</td>
                            <td>15-08-2022 23:26:54</td>
                          </tr>
                          <tr className>
                            <td>24</td>
                            <td>0.12</td>
                            <td>170</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C3868) RAJAT</td>
                            <td>-170</td>
                            <td>20.4</td>
                            <td>15-08-2022 23:26:25</td>
                          </tr>
                          <tr className>
                            <td>25</td>
                            <td>0.12</td>
                            <td>400</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C3745) titu</td>
                            <td>-400</td>
                            <td>48</td>
                            <td>15-08-2022 23:26:17</td>
                          </tr>
                          <tr className>
                            <td>26</td>
                            <td>0.12</td>
                            <td>20000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C3617) Motja</td>
                            <td>-20000</td>
                            <td>2400</td>
                            <td>15-08-2022 23:26:07</td>
                          </tr>
                          <tr className>
                            <td>27</td>
                            <td>0.10</td>
                            <td>1000</td>
                            <td>KHAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C3753) Rohit</td>
                            <td>1000</td>
                            <td>-100</td>
                            <td>15-08-2022 23:25:36</td>
                          </tr>
                          <tr className>
                            <td>28</td>
                            <td>0.13</td>
                            <td>1000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C1209) Dev</td>
                            <td>-1000</td>
                            <td>130</td>
                            <td>15-08-2022 23:25:32</td>
                          </tr>
                          <tr className>
                            <td>29</td>
                            <td>0.11</td>
                            <td>3600</td>
                            <td>KHAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C2897) Pinku</td>
                            <td>3600</td>
                            <td>-396</td>
                            <td>15-08-2022 23:25:25</td>
                          </tr>
                          <tr className>
                            <td>30</td>
                            <td>0.13</td>
                            <td>2000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C1209) Dev</td>
                            <td>-2000</td>
                            <td>260</td>
                            <td>15-08-2022 23:25:23</td>
                          </tr>
                          <tr className>
                            <td>31</td>
                            <td>0.11</td>
                            <td>400</td>
                            <td>KHAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C2897) Pinku</td>
                            <td>400</td>
                            <td>-44</td>
                            <td>15-08-2022 23:25:20</td>
                          </tr>
                          <tr className>
                            <td>32</td>
                            <td>0.29</td>
                            <td>2000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C1209) Dev</td>
                            <td>-2000</td>
                            <td>580</td>
                            <td>15-08-2022 23:24:29</td>
                          </tr>
                          <tr className>
                            <td>33</td>
                            <td>0.27</td>
                            <td>5000</td>
                            <td>KHAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C1243) Clint npk</td>
                            <td>5000</td>
                            <td>-1350</td>
                            <td>15-08-2022 23:23:47</td>
                          </tr>
                          <tr className>
                            <td>34</td>
                            <td>0.27</td>
                            <td>10000</td>
                            <td>KHAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C1243) Clint npk</td>
                            <td>10000</td>
                            <td>-2700</td>
                            <td>15-08-2022 23:23:44</td>
                          </tr>
                          <tr className>
                            <td>35</td>
                            <td>0.30</td>
                            <td>400</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C3868) RAJAT</td>
                            <td>-400</td>
                            <td>120</td>
                            <td>15-08-2022 23:23:32</td>
                          </tr>
                          <tr className>
                            <td>36</td>
                            <td>0.32</td>
                            <td>2000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C1797) V kmkk</td>
                            <td>-2000</td>
                            <td>640</td>
                            <td>15-08-2022 23:22:59</td>
                          </tr>
                          <tr className>
                            <td>37</td>
                            <td>0.32</td>
                            <td>5000</td>
                            <td>KHAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C3925) Awasthi ji 2</td>
                            <td>5000</td>
                            <td>-1600</td>
                            <td>15-08-2022 23:22:32</td>
                          </tr>
                          <tr className>
                            <td>38</td>
                            <td>0.32</td>
                            <td>20000</td>
                            <td>KHAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C1797) V kmkk</td>
                            <td>20000</td>
                            <td>-6400</td>
                            <td>15-08-2022 23:22:26</td>
                          </tr>
                          <tr className>
                            <td>39</td>
                            <td>0.38</td>
                            <td>300</td>
                            <td>KHAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C4266) Master</td>
                            <td>300</td>
                            <td>-114</td>
                            <td>15-08-2022 23:21:23</td>
                          </tr>
                          <tr className>
                            <td>40</td>
                            <td>0.36</td>
                            <td>10000</td>
                            <td>KHAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C3742) Awasthi jii</td>
                            <td>10000</td>
                            <td>-3600</td>
                            <td>15-08-2022 23:21:02</td>
                          </tr>
                          <tr className>
                            <td>41</td>
                            <td>0.34</td>
                            <td>1000</td>
                            <td>KHAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C4266) Master</td>
                            <td>1000</td>
                            <td>-340</td>
                            <td>15-08-2022 23:20:55</td>
                          </tr>
                          <tr className>
                            <td>42</td>
                            <td>0.23</td>
                            <td>1000</td>
                            <td>KHAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C4266) Master</td>
                            <td>1000</td>
                            <td>-230</td>
                            <td>15-08-2022 23:20:02</td>
                          </tr>
                          <tr className>
                            <td>43</td>
                            <td>0.28</td>
                            <td>20000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C2533) Jems bond</td>
                            <td>-20000</td>
                            <td>5600</td>
                            <td>15-08-2022 23:19:04</td>
                          </tr>
                          <tr className>
                            <td>44</td>
                            <td>0.25</td>
                            <td>1000</td>
                            <td>KHAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C1209) Dev</td>
                            <td>1000</td>
                            <td>-250</td>
                            <td>15-08-2022 23:18:58</td>
                          </tr>
                          <tr className>
                            <td>45</td>
                            <td>0.25</td>
                            <td>1000</td>
                            <td>KHAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C1209) Dev</td>
                            <td>1000</td>
                            <td>-250</td>
                            <td>15-08-2022 23:18:54</td>
                          </tr>
                          <tr className>
                            <td>46</td>
                            <td>0.25</td>
                            <td>2000</td>
                            <td>KHAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C1209) Dev</td>
                            <td>2000</td>
                            <td>-500</td>
                            <td>15-08-2022 23:18:49</td>
                          </tr>
                          <tr className>
                            <td>47</td>
                            <td>0.25</td>
                            <td>2000</td>
                            <td>KHAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C1209) Dev</td>
                            <td>2000</td>
                            <td>-500</td>
                            <td>15-08-2022 23:18:36</td>
                          </tr>
                          <tr className>
                            <td>48</td>
                            <td>0.24</td>
                            <td>500</td>
                            <td>KHAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C3753) Rohit</td>
                            <td>500</td>
                            <td>-120</td>
                            <td>15-08-2022 23:17:44</td>
                          </tr>
                          <tr className>
                            <td>49</td>
                            <td>0.27</td>
                            <td>1500</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C3753) Rohit</td>
                            <td>-1500</td>
                            <td>405</td>
                            <td>15-08-2022 23:17:37</td>
                          </tr>
                          <tr className>
                            <td>50</td>
                            <td>0.26</td>
                            <td>10000</td>
                            <td>KHAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C1542) Sonu</td>
                            <td>10000</td>
                            <td>-2600</td>
                            <td>15-08-2022 23:17:08</td>
                          </tr>
                          <tr className>
                            <td>51</td>
                            <td>0.30</td>
                            <td>1000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C4266) Master</td>
                            <td>-1000</td>
                            <td>300</td>
                            <td>15-08-2022 23:16:48</td>
                          </tr>
                          <tr className>
                            <td>52</td>
                            <td>0.28</td>
                            <td>1200</td>
                            <td>KHAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C3868) RAJAT</td>
                            <td>1200</td>
                            <td>-336</td>
                            <td>15-08-2022 23:16:44</td>
                          </tr>
                          <tr className>
                            <td>53</td>
                            <td>0.30</td>
                            <td>20000</td>
                            <td>KHAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C3617) Motja</td>
                            <td>20000</td>
                            <td>-6000</td>
                            <td>15-08-2022 23:16:28</td>
                          </tr>
                          <tr className>
                            <td>54</td>
                            <td>0.30</td>
                            <td>2000</td>
                            <td>KHAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C3753) Rohit</td>
                            <td>2000</td>
                            <td>-600</td>
                            <td>15-08-2022 23:16:18</td>
                          </tr>
                          <tr className>
                            <td>55</td>
                            <td>0.48</td>
                            <td>10000</td>
                            <td>KHAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C3753) Rohit</td>
                            <td>10000</td>
                            <td>-4800</td>
                            <td>15-08-2022 23:15:48</td>
                          </tr>
                          <tr className>
                            <td>56</td>
                            <td>0.53</td>
                            <td>500</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C4266) Master</td>
                            <td>-500</td>
                            <td>265</td>
                            <td>15-08-2022 23:15:46</td>
                          </tr>
                          <tr className>
                            <td>57</td>
                            <td>0.53</td>
                            <td>200</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C1511) Mmmm</td>
                            <td>-200</td>
                            <td>106</td>
                            <td>15-08-2022 23:15:36</td>
                          </tr>
                          <tr className>
                            <td>58</td>
                            <td>0.45</td>
                            <td>5000</td>
                            <td>KHAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C4147) Mayank</td>
                            <td>5000</td>
                            <td>-2250</td>
                            <td>15-08-2022 23:15:28</td>
                          </tr>
                          <tr className>
                            <td>59</td>
                            <td>0.45</td>
                            <td>2000</td>
                            <td>KHAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C1209) Dev</td>
                            <td>2000</td>
                            <td>-900</td>
                            <td>15-08-2022 23:15:27</td>
                          </tr>
                          <tr className>
                            <td>60</td>
                            <td>0.30</td>
                            <td>2000</td>
                            <td>KHAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C1209) Dev</td>
                            <td>2000</td>
                            <td>-600</td>
                            <td>15-08-2022 23:14:57</td>
                          </tr>
                          <tr className>
                            <td>61</td>
                            <td>0.34</td>
                            <td>200</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C1511) Mmmm</td>
                            <td>-200</td>
                            <td>68</td>
                            <td>15-08-2022 23:14:53</td>
                          </tr>
                          <tr className>
                            <td>62</td>
                            <td>0.34</td>
                            <td>500</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C4266) Master</td>
                            <td>-500</td>
                            <td>170</td>
                            <td>15-08-2022 23:14:53</td>
                          </tr>
                          <tr className>
                            <td>63</td>
                            <td>0.23</td>
                            <td>2000</td>
                            <td>KHAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C1209) Dev</td>
                            <td>2000</td>
                            <td>-460</td>
                            <td>15-08-2022 23:14:00</td>
                          </tr>
                          <tr className>
                            <td>64</td>
                            <td>0.20</td>
                            <td>20000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C1243) Clint npk</td>
                            <td>-20000</td>
                            <td>4000</td>
                            <td>15-08-2022 23:13:16</td>
                          </tr>
                          <tr className>
                            <td>65</td>
                            <td>0.17</td>
                            <td>10000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C2533) Jems bond</td>
                            <td>-10000</td>
                            <td>1700</td>
                            <td>15-08-2022 23:12:15</td>
                          </tr>
                          <tr className>
                            <td>66</td>
                            <td>0.19</td>
                            <td>5000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C3745) titu</td>
                            <td>-5000</td>
                            <td>950</td>
                            <td>15-08-2022 23:09:33</td>
                          </tr>
                          <tr className>
                            <td>67</td>
                            <td>0.16</td>
                            <td>1200</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C3868) RAJAT</td>
                            <td>-1200</td>
                            <td>192</td>
                            <td>15-08-2022 23:08:22</td>
                          </tr>
                          <tr className>
                            <td>68</td>
                            <td>0.15</td>
                            <td>50000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C2533) Jems bond</td>
                            <td>-50000</td>
                            <td>7500</td>
                            <td>15-08-2022 23:07:43</td>
                          </tr>
                          <tr className>
                            <td>69</td>
                            <td>0.15</td>
                            <td>10000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C1209) Dev</td>
                            <td>-10000</td>
                            <td>1500</td>
                            <td>15-08-2022 23:07:04</td>
                          </tr>
                          <tr className>
                            <td>70</td>
                            <td>0.15</td>
                            <td>10000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C1209) Dev</td>
                            <td>-10000</td>
                            <td>1500</td>
                            <td>15-08-2022 23:06:59</td>
                          </tr>
                          <tr className>
                            <td>71</td>
                            <td>0.15</td>
                            <td>500</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C3740) Rohan1</td>
                            <td>-500</td>
                            <td>75</td>
                            <td>15-08-2022 23:06:55</td>
                          </tr>
                          <tr className>
                            <td>72</td>
                            <td>0.15</td>
                            <td>1000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C3740) Rohan1</td>
                            <td>-1000</td>
                            <td>150</td>
                            <td>15-08-2022 23:06:45</td>
                          </tr>
                          <tr className>
                            <td>73</td>
                            <td>0.16</td>
                            <td>10000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C1450) Rally</td>
                            <td>-10000</td>
                            <td>1600</td>
                            <td>15-08-2022 23:05:48</td>
                          </tr>
                          <tr className>
                            <td>74</td>
                            <td>0.16</td>
                            <td>1250</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C4327) Gopal</td>
                            <td>-1250</td>
                            <td>200</td>
                            <td>15-08-2022 23:03:27</td>
                          </tr>
                          <tr className>
                            <td>75</td>
                            <td>0.16</td>
                            <td>5000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C4327) Gopal</td>
                            <td>-5000</td>
                            <td>800</td>
                            <td>15-08-2022 23:00:08</td>
                          </tr>
                          <tr className>
                            <td>76</td>
                            <td>0.16</td>
                            <td>50000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C1274) Zzz</td>
                            <td>-50000</td>
                            <td>8000</td>
                            <td>15-08-2022 22:59:57</td>
                          </tr>
                          <tr className>
                            <td>77</td>
                            <td>0.15</td>
                            <td>500</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C3576) Gurjar shab</td>
                            <td>-500</td>
                            <td>75</td>
                            <td>15-08-2022 22:59:42</td>
                          </tr>
                          <tr className>
                            <td>78</td>
                            <td>0.15</td>
                            <td>500</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C4266) Master</td>
                            <td>-500</td>
                            <td>75</td>
                            <td>15-08-2022 22:58:59</td>
                          </tr>
                          <tr className>
                            <td>79</td>
                            <td>0.15</td>
                            <td>2000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C4072) Rawat ji</td>
                            <td>-2000</td>
                            <td>300</td>
                            <td>15-08-2022 22:57:37</td>
                          </tr>
                          <tr className>
                            <td>80</td>
                            <td>0.14</td>
                            <td>5000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C1223) Nayak ji</td>
                            <td>-5000</td>
                            <td>700</td>
                            <td>15-08-2022 22:57:21</td>
                          </tr>
                          <tr className>
                            <td>81</td>
                            <td>0.12</td>
                            <td>10000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C1143) Pintu</td>
                            <td>-10000</td>
                            <td>1200</td>
                            <td>15-08-2022 22:56:41</td>
                          </tr>
                          <tr className>
                            <td>82</td>
                            <td>0.11</td>
                            <td>9000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C3753) Rohit</td>
                            <td>-9000</td>
                            <td>990</td>
                            <td>15-08-2022 22:55:51</td>
                          </tr>
                          <tr className>
                            <td>83</td>
                            <td>0.11</td>
                            <td>50000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C3617) Motja</td>
                            <td>-50000</td>
                            <td>5500</td>
                            <td>15-08-2022 22:53:38</td>
                          </tr>
                          <tr className>
                            <td>84</td>
                            <td>0.11</td>
                            <td>20000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C3742) Awasthi jii</td>
                            <td>-20000</td>
                            <td>2200</td>
                            <td>15-08-2022 22:53:06</td>
                          </tr>
                          <tr className>
                            <td>85</td>
                            <td>0.11</td>
                            <td>5000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C1209) Dev</td>
                            <td>-5000</td>
                            <td>550</td>
                            <td>15-08-2022 22:52:58</td>
                          </tr>
                          <tr className>
                            <td>86</td>
                            <td>0.15</td>
                            <td>2000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C1209) Dev</td>
                            <td>-2000</td>
                            <td>300</td>
                            <td>15-08-2022 22:51:53</td>
                          </tr>
                          <tr className>
                            <td>87</td>
                            <td>0.17</td>
                            <td>10000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C3753) Rohit</td>
                            <td>-10000</td>
                            <td>1700</td>
                            <td>15-08-2022 22:50:54</td>
                          </tr>
                          <tr className>
                            <td>88</td>
                            <td>0.17</td>
                            <td>5000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C1209) Dev</td>
                            <td>-5000</td>
                            <td>850</td>
                            <td>15-08-2022 22:50:46</td>
                          </tr>
                          <tr className>
                            <td>89</td>
                            <td>0.18</td>
                            <td>5000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C1209) Dev</td>
                            <td>-5000</td>
                            <td>900</td>
                            <td>15-08-2022 22:49:41</td>
                          </tr>
                          <tr className>
                            <td>90</td>
                            <td>0.22</td>
                            <td>200</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C2897) Pinku</td>
                            <td>-200</td>
                            <td>44</td>
                            <td>15-08-2022 22:48:36</td>
                          </tr>
                          <tr className>
                            <td>91</td>
                            <td>0.24</td>
                            <td>4000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C2897) Pinku</td>
                            <td>-4000</td>
                            <td>960</td>
                            <td>15-08-2022 22:48:09</td>
                          </tr>
                          <tr className>
                            <td>92</td>
                            <td>0.31</td>
                            <td>5000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C4072) Rawat ji</td>
                            <td>-5000</td>
                            <td>1550</td>
                            <td>15-08-2022 22:47:30</td>
                          </tr>
                          <tr className>
                            <td>93</td>
                            <td>0.31</td>
                            <td>5000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C4147) Mayank</td>
                            <td>-5000</td>
                            <td>1550</td>
                            <td>15-08-2022 22:47:27</td>
                          </tr>
                          <tr className>
                            <td>94</td>
                            <td>0.29</td>
                            <td>500</td>
                            <td>KHAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C4266) Master</td>
                            <td>500</td>
                            <td>-145</td>
                            <td>15-08-2022 22:47:01</td>
                          </tr>
                          <tr className>
                            <td>95</td>
                            <td>0.42</td>
                            <td>5000</td>
                            <td>KHAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C1209) Dev</td>
                            <td>5000</td>
                            <td>-2100</td>
                            <td>15-08-2022 22:44:27</td>
                          </tr>
                          <tr className>
                            <td>96</td>
                            <td>0.56</td>
                            <td>3000</td>
                            <td>KHAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C3753) Rohit</td>
                            <td>3000</td>
                            <td>-1680</td>
                            <td>15-08-2022 22:38:58</td>
                          </tr>
                          <tr className>
                            <td>97</td>
                            <td>0.46</td>
                            <td>500</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C2529) Raju</td>
                            <td>-500</td>
                            <td>230</td>
                            <td>15-08-2022 22:30:45</td>
                          </tr>
                          <tr className>
                            <td>98</td>
                            <td>0.56</td>
                            <td>500</td>
                            <td>KHAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C2529) Raju</td>
                            <td>500</td>
                            <td>-280</td>
                            <td>15-08-2022 22:29:11</td>
                          </tr>
                          <tr className>
                            <td>99</td>
                            <td>0.60</td>
                            <td>300</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C2532) Akash yogender</td>
                            <td>-300</td>
                            <td>180</td>
                            <td>15-08-2022 22:28:49</td>
                          </tr>
                          <tr className>
                            <td>100</td>
                            <td>0.54</td>
                            <td>1000</td>
                            <td>KHAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C3696) Krishna</td>
                            <td>1000</td>
                            <td>-540</td>
                            <td>15-08-2022 22:27:10</td>
                          </tr>
                          <tr className>
                            <td>101</td>
                            <td>0.47</td>
                            <td>1000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C4173) Aman ahmad</td>
                            <td>-1000</td>
                            <td>470</td>
                            <td>15-08-2022 22:25:31</td>
                          </tr>
                          <tr className>
                            <td>102</td>
                            <td>0.41</td>
                            <td>500</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C2529) Raju</td>
                            <td>-500</td>
                            <td>205</td>
                            <td>15-08-2022 22:23:58</td>
                          </tr>
                          <tr className>
                            <td>103</td>
                            <td>0.50</td>
                            <td>500</td>
                            <td>KHAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C2529) Raju</td>
                            <td>500</td>
                            <td>-250</td>
                            <td>15-08-2022 22:21:58</td>
                          </tr>
                          <tr className>
                            <td>104</td>
                            <td>0.70</td>
                            <td>10000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C4147) Mayank</td>
                            <td>-10000</td>
                            <td>7000</td>
                            <td>15-08-2022 22:19:02</td>
                          </tr>
                          <tr className>
                            <td>105</td>
                            <td>0.24</td>
                            <td>2000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C3696) Krishna</td>
                            <td>-2000</td>
                            <td>480</td>
                            <td>15-08-2022 22:15:08</td>
                          </tr>
                          <tr className>
                            <td>106</td>
                            <td>0.24</td>
                            <td>300</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C2532) Akash yogender</td>
                            <td>-300</td>
                            <td>72</td>
                            <td>15-08-2022 22:15:04</td>
                          </tr>
                          <tr className>
                            <td>107</td>
                            <td>0.24</td>
                            <td>500</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C2529) Raju</td>
                            <td>-500</td>
                            <td>120</td>
                            <td>15-08-2022 22:14:58</td>
                          </tr>
                          <tr className>
                            <td>108</td>
                            <td>0.23</td>
                            <td>5000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C4072) Rawat ji</td>
                            <td>-5000</td>
                            <td>1150</td>
                            <td>15-08-2022 22:13:46</td>
                          </tr>
                          <tr className>
                            <td>109</td>
                            <td>0.22</td>
                            <td>5000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C3760) Shelly</td>
                            <td>-5000</td>
                            <td>1100</td>
                            <td>15-08-2022 22:13:28</td>
                          </tr>
                          <tr className>
                            <td>110</td>
                            <td>0.22</td>
                            <td>10000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C4072) Rawat ji</td>
                            <td>-10000</td>
                            <td>2200</td>
                            <td>15-08-2022 22:13:15</td>
                          </tr>
                          <tr className>
                            <td>111</td>
                            <td>0.20</td>
                            <td>10000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C3742) Awasthi jii</td>
                            <td>-10000</td>
                            <td>2000</td>
                            <td>15-08-2022 22:11:43</td>
                          </tr>
                          <tr className>
                            <td>112</td>
                            <td>0.19</td>
                            <td>5000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C3925) Awasthi ji 2</td>
                            <td>-5000</td>
                            <td>950</td>
                            <td>15-08-2022 22:08:58</td>
                          </tr>
                          <tr className>
                            <td>113</td>
                            <td>0.25</td>
                            <td>2000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C3925) Awasthi ji 2</td>
                            <td>-2000</td>
                            <td>500</td>
                            <td>15-08-2022 22:08:09</td>
                          </tr>
                          <tr className>
                            <td>114</td>
                            <td>0.33</td>
                            <td>1000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C3925) Awasthi ji 2</td>
                            <td>-1000</td>
                            <td>330</td>
                            <td>15-08-2022 22:06:52</td>
                          </tr>
                          <tr className>
                            <td>115</td>
                            <td>0.38</td>
                            <td>1000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C3925) Awasthi ji 2</td>
                            <td>-1000</td>
                            <td>380</td>
                            <td>15-08-2022 22:05:37</td>
                          </tr>
                          <tr className>
                            <td>116</td>
                            <td>0.49</td>
                            <td>1000</td>
                            <td>LAGAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C3925) Awasthi ji 2</td>
                            <td>-1000</td>
                            <td>490</td>
                            <td>15-08-2022 22:02:45</td>
                          </tr>
                          <tr className>
                            <td>117</td>
                            <td>0.61</td>
                            <td>500</td>
                            <td>KHAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C2529) Raju</td>
                            <td>500</td>
                            <td>-305</td>
                            <td>15-08-2022 22:00:59</td>
                          </tr>
                          <tr className>
                            <td>118</td>
                            <td>0.60</td>
                            <td>5000</td>
                            <td>KHAI</td>
                            <td>AFGHANISTAN</td>
                            <td>(C1223) Nayak ji</td>
                            <td>5000</td>
                            <td>-3000</td>
                            <td>15-08-2022 22:00:14</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    className="row"
                    style={{ display: "none" }}
                    id="session_bets"
                  >
                    <div className="col-lg-12">
                      <table
                        className="table table-bordered table-striped table-hover table-responsive-md"
                        id="matchBetsTable"
                      >
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Session</th>
                            <th>Runs</th>
                            <th>Rate</th>
                            <th>Mode</th>
                            <th>Amount</th>
                            <th>Client</th>
                            <th>Date &amp; Time</th>
                          </tr>
                        </thead>
                        <tbody id="session_bets_slip"></tbody>
                      </table>
                    </div>
                  </div>
                  {/* /.card-body */}
                </div>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
      </>
    );
  }
}
