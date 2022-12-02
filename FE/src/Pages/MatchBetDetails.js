import React, { Component } from "react";
import PageHeader from "../Components/PageHeader";

export default class MatchBetDetails extends Component {
  render() {
    return (
      <>
        <PageHeader title="Match Bet Details" />

        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <form
                    action="/game/i/2124/viewMatchReport"
                    id="myForm"
                    method="post"
                  >
                    <input
                      type="hidden"
                      name="_csrf"
                      defaultValue="36452e6a-d80b-4485-9d76-2519cc7343f9"
                    />
                    <div className="card-header ">
                      <div className="form-row col-md-6">
                        <table
                          className="table table-bordered table-striped"
                          data-select2-id={5}
                        >
                          <thead className="text-bold">
                            <tr>
                              <th>Manchester Originals</th>
                              <th className="text-blue" id={1}>
                                <span style={{ color: "##4289FF" }}>
                                  1020.99
                                </span>{" "}
                              </th>
                            </tr>
                            <tr>
                              <th>Welsh Fire</th>
                              <th className="text-blue" id={2}>
                                <span style={{ color: "##4289FF" }}>131</span>{" "}
                              </th>
                            </tr>
                            <tr>
                              <th>Client</th>
                              <th data-select2-id={4}>
                                <select
                                  className="form-control select2 select2-hidden-accessible"
                                  required
                                  onchange="Selectid()"
                                  id="client_id"
                                  placeholder="Select Client"
                                  name="client"
                                  data-select2-id="client_id"
                                  tabIndex={-1}
                                  aria-hidden="true"
                                >
                                  <option value data-select2-id={2}>
                                    Select Client...
                                  </option>
                                  <option value={1083}>C2083 Tanmay</option>
                                  <option value={3258}>C4258 Saurabh</option>
                                  <option value={3406}>C4406 Udi</option>
                                  <option value={2591}>C3591 Om shanti</option>
                                  <option value={3374}>C4374 Abcd</option>
                                  <option value={3241}>C4241 Shyam gb</option>
                                  <option value={3218}>C4218 Naina h</option>
                                  <option value={2805}>C3805 Raj</option>
                                  <option value={3240}>C4240 Monu gb</option>
                                  <option value={2017}>C3017 Momeen</option>
                                  <option value={2629}>C3629 Surandj</option>
                                  <option value={2219}>C3219 Hemandra</option>
                                  <option value={2530}>C3530 Rajendra</option>
                                  <option value={3096}>C4096 Pramod</option>
                                  <option value={1092}>C2092 Ramveer</option>
                                  <option value={3237}>C4237 Raaz</option>
                                  <option value={3232}>C4232 Jai bhai</option>
                                  <option value={2429}>C3429 Sudi</option>
                                  <option value={2993}>C3993 Jain</option>
                                  <option value={1061}>C2061 dewasis</option>
                                  <option value={541}>C1541 Ank</option>
                                  <option value={1361}>C2361 Bhaskar</option>
                                  <option value={2665}>C3665 Noida1</option>
                                  <option value={2291}>C3291 Deepak</option>
                                  <option value={2670}>C3670 Monish</option>
                                  <option value={3301}>C4301 Dinesh</option>
                                  <option value={1416}>C2416 AC</option>
                                  <option value={1656}>C2656 Akash</option>
                                  <option value={1752}>C2752 Jeetu</option>
                                  <option value={2921}>C3921 TANNU</option>
                                  <option value={3267}>C4267 Sanju</option>
                                  <option value={3193}>C4193 Chiku</option>
                                  <option value={2765}>C3765 Rahul k</option>
                                  <option value={1319}>C2319 Golu</option>
                                  <option value={2335}>C3335 Saurabh</option>
                                  <option value={1856}>C2856 Sudhir</option>
                                  <option value={3346}>C4346 Vinod</option>
                                  <option value={2016}>C3016 Rana</option>
                                  <option value={3307}>C4307 Narendra</option>
                                  <option value={1310}>
                                    C2310 Neeraj bhaiya35
                                  </option>
                                  <option value={3276}>C4276 Kuldeep</option>
                                  <option value={3127}>C4127 Bablu</option>
                                  <option value={2318}>C3318 Boss</option>
                                  <option value={2025}>C3025 Balaji</option>
                                  <option value={3257}>C4257 Subhas</option>
                                  <option value={2410}>C3410 Raina</option>
                                  <option value={2514}>C3514 Shivam</option>
                                  <option value={3388}>C4388 Aaaaa</option>
                                  <option value={3195}>C4195 BABA BHAI</option>
                                  <option value={1558}>C2558 GIRI</option>
                                  <option value={3261}>C4261 Tony 2 b</option>
                                  <option value={1546}>C2546 Golu bhai</option>
                                  <option value={3248}>C4248 Bhrt bk</option>
                                  <option value={3405}>C4405 Yuvi</option>
                                  <option value={3094}>C4094 Love</option>
                                  <option value={3382}>C4382 BT</option>
                                  <option value={2040}>C3040 Juber</option>
                                  <option value={2414}>C3414 Sonu</option>
                                  <option value={3274}>C4274 Kapil</option>
                                  <option value={1225}>C2225 Laxman</option>
                                  <option value={1806}>C2806 Sk</option>
                                  <option value={3414}>C4414 Amitabh</option>
                                  <option value={3220}>C4220 Kuldeep h</option>
                                  <option value={2896}>C3896 Sumit</option>
                                  <option value={3088}>C4088 Raj bhai</option>
                                  <option value={1552}>
                                    C2552 SHUBHAM GNGA
                                  </option>
                                  <option value={2404}>C3404 Annaaa</option>
                                  <option value={3001}>C4001 Jaljjjjj</option>
                                  <option value={2727}>C3727 Rohit</option>
                                  <option value={1584}>C2584 DEEPAK R</option>
                                  <option value={2108}>C3108 Tarun</option>
                                  <option value={3199}>C4199 ANNU BHAI</option>
                                  <option value={2667}>C3667 Kkkk</option>
                                  <option value={3247}>C4247 Bunty</option>
                                  <option value={2795}>C3795 Ashok k</option>
                                  <option value={3139}>C4139 Aham</option>
                                  <option value={2721}>
                                    C3721 Rahul bhai 2
                                  </option>
                                  <option value={3246}>C4246 Jitendra</option>
                                  <option value={2945}>C3945 Tannu</option>
                                  <option value={1099}>C2099 Sunel</option>
                                  <option value={413}>C1413 Lodi</option>
                                  <option value={882}>
                                    C1882 Kuldeep bundela
                                  </option>
                                  <option value={916}>
                                    C1916 Bholeshankar
                                  </option>
                                  <option value={3390}>C4390 Mk002</option>
                                  <option value={3341}>C4341 Sachin</option>
                                  <option value={2398}>C3398 Bata</option>
                                  <option value={2106}>C3106 Daru bala</option>
                                  <option value={2588}>C3588 Rinku ji</option>
                                  <option value={3084}>C4084 Dimpal</option>
                                  <option value={3114}>C4114 Man 6428</option>
                                  <option value={3095}>C4095 Poste</option>
                                  <option value={3224}>C4224 Manik bb</option>
                                  <option value={432}>C1432 Mohan</option>
                                  <option value={2533}>C3533 Bhanu</option>
                                  <option value={856}>C1856 Deepae</option>
                                  <option value={1536}>C2536 Roxsatar</option>
                                  <option value={2313}>C3313 Monty</option>
                                  <option value={617}>C1617 MDJI</option>
                                  <option value={3242}>C4242 Babua gb</option>
                                  <option value={3354}>C4354 Khunda 100</option>
                                  <option value={3345}>C4345 Ankesh</option>
                                  <option value={3227}>C4227 Samar bb</option>
                                  <option value={2383}>C3383 Suneet</option>
                                  <option value={3415}>C4415 Rencho</option>
                                  <option value={1773}>C2773 Vivek jiii</option>
                                  <option value={3367}>C4367 Big B</option>
                                  <option value={1515}>C2515 SUNIL</option>
                                  <option value={3421}>C4421 Rahul</option>
                                  <option value={1563}>C2563 GOWDA</option>
                                  <option value={2270}>
                                    C3270 Afzaal bhai
                                  </option>
                                  <option value={983}>C1983 Vikrant</option>
                                  <option value={1891}>C2891 Vina</option>
                                  <option value={3377}>C4377 Manish</option>
                                  <option value={1227}>C2227 Dr a singh</option>
                                  <option value={1566}>C2566 PREMA HB</option>
                                  <option value={3116}>C4116 Jeet</option>
                                  <option value={1314}>C2314 Ashu</option>
                                  <option value={2405}>C3405 Ramkarn</option>
                                  <option value={688}>C1688 Anil</option>
                                  <option value={2816}>C3816 Ram</option>
                                  <option value={3413}>C4413 Vipin</option>
                                  <option value={1866}>C2866 M Vishnu</option>
                                  <option value={3215}>C4215 Kk nb</option>
                                  <option value={1169}>C2169 Aarab</option>
                                  <option value={3191}>C4191 Viney</option>
                                  <option value={1283}>C2283 Raju</option>
                                  <option value={3170}>C4170 Irfan</option>
                                  <option value={2435}>
                                    C3435 Khatu baba 2
                                  </option>
                                  <option value={3407}>C4407 Guru</option>
                                  <option value={2138}>C3138 Vinay</option>
                                  <option value={2806}>C3806 Deepak</option>
                                  <option value={2735}>C3735 agdhhcg</option>
                                  <option value={1834}>C2834 N k</option>
                                  <option value={859}>C1859 Alok</option>
                                  <option value={3177}>C4177 Kaushik</option>
                                  <option value={813}>
                                    C1813 Half engineering
                                  </option>
                                  <option value={2756}>C3756 PRASHANT</option>
                                  <option value={1835}>C2835 Man 2</option>
                                  <option value={1572}>C2572 MANJUSSAM</option>
                                  <option value={2406}>C3406 Mahte</option>
                                  <option value={2564}>
                                    C3564 Shanshnk bhiya
                                  </option>
                                  <option value={2372}>C3372 Pawar</option>
                                  <option value={3383}>C4383 Vishal</option>
                                  <option value={2469}>C3469 Y kushwah</option>
                                  <option value={3254}>C4254 Rishab</option>
                                  <option value={1555}>C2555 AMRIT RAJ</option>
                                  <option value={2683}>C3683 Lucky bhai</option>
                                  <option value={2794}>C3794 Rohan</option>
                                  <option value={3046}>C4046 Vinod bhai</option>
                                  <option value={3381}>C4381 Atul 2</option>
                                  <option value={1052}>C2052 Veeru</option>
                                  <option value={2898}>C3898 Lala 2</option>
                                  <option value={2635}>C3635 Vikash</option>
                                  <option value={2763}>C3763 Bunty</option>
                                  <option value={2537}>C3537 New bhola</option>
                                  <option value={1576}>
                                    C2576 RAVI PRASAD
                                  </option>
                                  <option value={1569}>C2569 GUNTAGANI</option>
                                  <option value={2618}>C3618 Adety</option>
                                  <option value={3364}>C4364 Shivji</option>
                                  <option value={1972}>C2972 Bhola</option>
                                  <option value={3251}>C4251 Rocky</option>
                                  <option value={3028}>C4028 G</option>
                                  <option value={1664}>C2664 Akash ji</option>
                                  <option value={2579}>C3579 Sarman</option>
                                  <option value={889}>C1889 Mr.singh</option>
                                  <option value={3391}>C4391 Pradeep</option>
                                  <option value={2037}>C3037 Raju</option>
                                  <option value={3112}>
                                    C4112 Annnnkur vis
                                  </option>
                                  <option value={1274}>C2274 Ashish</option>
                                  <option value={2129}>C3129 Manoj</option>
                                  <option value={1777}>C2777 ??????</option>
                                  <option value={1772}>C2772 Bhola</option>
                                  <option value={1568}>C2568 SURESH J</option>
                                  <option value={2971}>C3971 Sameer</option>
                                  <option value={1609}>C2609 Kirar ji</option>
                                  <option value={2133}>
                                    C3133 Mannu khare
                                  </option>
                                  <option value={1242}>C2242 Raj</option>
                                  <option value={2500}>
                                    C3500 Mahesh soni
                                  </option>
                                  <option value={3371}>C4371 Sugreeve</option>
                                  <option value={2539}>C3539 Chillu</option>
                                  <option value={3285}>C4285 Mula bhai</option>
                                  <option value={1591}>C2591 BEEREGOWDA</option>
                                  <option value={1291}>C2291 Rahul 2</option>
                                  <option value={3335}>C4335 Sakal1</option>
                                </select>
                                <span
                                  className="select2 select2-container select2-container--default"
                                  dir="ltr"
                                  data-select2-id={1}
                                  style={{ width: "299.031px" }}
                                >
                                  <span className="selection">
                                    <span
                                      className="select2-selection select2-selection--single"
                                      role="combobox"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      tabIndex={0}
                                      aria-disabled="false"
                                      aria-labelledby="select2-client_id-container"
                                    >
                                      <span
                                        className="select2-selection__rendered"
                                        id="select2-client_id-container"
                                        role="textbox"
                                        aria-readonly="true"
                                        title="Select Client..."
                                      >
                                        Select Client...
                                      </span>
                                      <span
                                        className="select2-selection__arrow"
                                        role="presentation"
                                      >
                                        <b role="presentation" />
                                      </span>
                                    </span>
                                  </span>
                                  <span
                                    className="dropdown-wrapper"
                                    aria-hidden="true"
                                  />
                                </span>
                              </th>
                            </tr>
                          </thead>
                        </table>
                      </div>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body">
                      <div>
                        <div className="row">
                          <div className="col-md-12">
                            <table className="table table-striped table-bordered">
                              <thead>
                                <tr>
                                  <th>#</th>
                                  <th>Client</th>
                                  <th>Rate</th>
                                  <th>Team</th>
                                  <th>Mode</th>
                                  <th>Amount</th>
                                  <th>Date &amp; Time</th>
                                  <th id>Manchester Originals</th>
                                  <th id>Welsh Fire</th>
                                  <th>IP</th>
                                </tr>
                              </thead>
                              <tbody id="match_bets">
                                <tr className>
                                  <td>1</td>
                                  <td>(C4170) Irfan</td>
                                  <td>0.30</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:22:11</td>
                                  <td>30</td>
                                  <td>-100</td>
                                  <td>
                                    2409:4070:4e0a:474b:c509:11cb:ebc1:143d
                                  </td>
                                </tr>
                                <tr className>
                                  <td>2</td>
                                  <td>(C3404) Annaaa</td>
                                  <td>0.29</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:22:01</td>
                                  <td>290</td>
                                  <td>-1000</td>
                                  <td>2409:4043:30e:fb9d:438d:d73c:e89:fab3</td>
                                </tr>
                                <tr className>
                                  <td>3</td>
                                  <td>(C4170) Irfan</td>
                                  <td>0.30</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>5000</td>
                                  <td>16-08-2022 23:21:55</td>
                                  <td>1500</td>
                                  <td>-5000</td>
                                  <td>
                                    2409:4070:4e0a:474b:c509:11cb:ebc1:143d
                                  </td>
                                </tr>
                                <tr className>
                                  <td>4</td>
                                  <td>(C2283) Raju</td>
                                  <td>0.30</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:21:52</td>
                                  <td>150</td>
                                  <td>-500</td>
                                  <td>
                                    2401:4900:55c3:4830:9f39:3bd6:9f3b:f8c0
                                  </td>
                                </tr>
                                <tr className>
                                  <td>5</td>
                                  <td>(C3765) Rahul k</td>
                                  <td>0.28</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>KHAI</td>
                                  <td>5000</td>
                                  <td>16-08-2022 23:21:35</td>
                                  <td>-1400</td>
                                  <td>5000</td>
                                  <td>
                                    2401:4900:1a5c:641a:c04b:b3d7:8ceb:ca81
                                  </td>
                                </tr>
                                <tr className>
                                  <td>6</td>
                                  <td>(C4237) Raaz</td>
                                  <td>0.30</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:21:29</td>
                                  <td>300</td>
                                  <td>-1000</td>
                                  <td>
                                    2401:4900:1c22:27fc:6c64:f5b0:c086:89c9
                                  </td>
                                </tr>
                                <tr className>
                                  <td>7</td>
                                  <td>(C4191) Viney</td>
                                  <td>0.30</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:21:28</td>
                                  <td>150</td>
                                  <td>-500</td>
                                  <td>
                                    2405:201:6818:d045:586d:409e:5423:f7a0
                                  </td>
                                </tr>
                                <tr className>
                                  <td>8</td>
                                  <td>(C3500) Mahesh soni</td>
                                  <td>0.30</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:21:27</td>
                                  <td>300</td>
                                  <td>-1000</td>
                                  <td>
                                    2409:4063:6e96:494a:ebd8:d848:36e7:f5c3
                                  </td>
                                </tr>
                                <tr className>
                                  <td>9</td>
                                  <td>(C3429) Sudi</td>
                                  <td>0.29</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:20:15</td>
                                  <td>29</td>
                                  <td>-100</td>
                                  <td>2409:4043:2099:7ea:34e3:47d2:e8c3:713</td>
                                </tr>
                                <tr className>
                                  <td>10</td>
                                  <td>(C2283) Raju</td>
                                  <td>0.29</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:20:10</td>
                                  <td>145</td>
                                  <td>-500</td>
                                  <td>
                                    2401:4900:55c3:4830:9f39:3bd6:9f3b:f8c0
                                  </td>
                                </tr>
                                <tr className>
                                  <td>11</td>
                                  <td>(C3500) Mahesh soni</td>
                                  <td>0.29</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:20:07</td>
                                  <td>290</td>
                                  <td>-1000</td>
                                  <td>
                                    2409:4063:6e96:494a:ebd8:d848:36e7:f5c3
                                  </td>
                                </tr>
                                <tr className>
                                  <td>12</td>
                                  <td>(C2242) Raj</td>
                                  <td>0.29</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:19:49</td>
                                  <td>290</td>
                                  <td>-1000</td>
                                  <td>2409:4063:209e:865b::1e18:40a5</td>
                                </tr>
                                <tr className>
                                  <td>13</td>
                                  <td>(C2242) Raj</td>
                                  <td>0.29</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:19:42</td>
                                  <td>290</td>
                                  <td>-1000</td>
                                  <td>2409:4063:209e:865b::1e18:40a5</td>
                                </tr>
                                <tr className>
                                  <td>14</td>
                                  <td>(C3564) Shanshnk bhiya</td>
                                  <td>0.32</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:18:54</td>
                                  <td>320</td>
                                  <td>-1000</td>
                                  <td>
                                    2405:201:301c:d8c8:a047:bf96:6eec:c4c8
                                  </td>
                                </tr>
                                <tr className>
                                  <td>15</td>
                                  <td>(C2609) Kirar ji</td>
                                  <td>0.32</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:18:39</td>
                                  <td>32</td>
                                  <td>-100</td>
                                  <td>
                                    2401:4900:1a56:6089:4497:4028:d2f8:dcaf
                                  </td>
                                </tr>
                                <tr className>
                                  <td>16</td>
                                  <td>(C3794) Rohan</td>
                                  <td>0.32</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:18:38</td>
                                  <td>32</td>
                                  <td>-100</td>
                                  <td>
                                    2405:201:5c0a:7204:c573:4a1c:c5f3:736b
                                  </td>
                                </tr>
                                <tr className>
                                  <td>17</td>
                                  <td>(C4407) Guru</td>
                                  <td>0.32</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:18:38</td>
                                  <td>320</td>
                                  <td>-1000</td>
                                  <td>103.179.114.238</td>
                                </tr>
                                <tr className>
                                  <td>18</td>
                                  <td>(C3794) Rohan</td>
                                  <td>0.35</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:18:08</td>
                                  <td>350</td>
                                  <td>-1000</td>
                                  <td>
                                    2405:201:5c0a:7204:c573:4a1c:c5f3:736b
                                  </td>
                                </tr>
                                <tr className>
                                  <td>19</td>
                                  <td>(C3971) Sameer</td>
                                  <td>0.35</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:18:01</td>
                                  <td>350</td>
                                  <td>-1000</td>
                                  <td>2405:204:a028:450a::1b84:c8a1</td>
                                </tr>
                                <tr className>
                                  <td>20</td>
                                  <td>(C3727) Rohit</td>
                                  <td>0.35</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:17:48</td>
                                  <td>350</td>
                                  <td>-1000</td>
                                  <td>
                                    2409:4063:4c86:2337:f1b:4a2b:35d0:d00b
                                  </td>
                                </tr>
                                <tr className>
                                  <td>21</td>
                                  <td>(C4406) Udi</td>
                                  <td>0.35</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>5000</td>
                                  <td>16-08-2022 23:16:45</td>
                                  <td>1750</td>
                                  <td>-5000</td>
                                  <td>
                                    2401:4900:1c48:96cf:85a0:43c3:6920:4b7b
                                  </td>
                                </tr>
                                <tr className>
                                  <td>22</td>
                                  <td>(C2777) ??????</td>
                                  <td>0.35</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>10000</td>
                                  <td>16-08-2022 23:16:45</td>
                                  <td>3500</td>
                                  <td>-10000</td>
                                  <td>2409:4043:4e04:9cd2::1009:ed0d</td>
                                </tr>
                                <tr className>
                                  <td>23</td>
                                  <td>(C2806) Sk</td>
                                  <td>0.33</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>KHAI</td>
                                  <td>400</td>
                                  <td>16-08-2022 23:16:38</td>
                                  <td>-132</td>
                                  <td>400</td>
                                  <td>
                                    2409:4053:78a:a448:fc38:59ff:fe22:2d96
                                  </td>
                                </tr>
                                <tr className>
                                  <td>24</td>
                                  <td>(C4248) Bhrt bk</td>
                                  <td>0.33</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>KHAI</td>
                                  <td>20000</td>
                                  <td>16-08-2022 23:16:09</td>
                                  <td>-6600</td>
                                  <td>20000</td>
                                  <td>45.251.43.161</td>
                                </tr>
                                <tr className>
                                  <td>25</td>
                                  <td>(C2806) Sk</td>
                                  <td>0.32</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>KHAI</td>
                                  <td>5000</td>
                                  <td>16-08-2022 23:15:56</td>
                                  <td>-1600</td>
                                  <td>5000</td>
                                  <td>
                                    2409:4053:78a:a448:fc38:59ff:fe22:2d96
                                  </td>
                                </tr>
                                <tr className>
                                  <td>26</td>
                                  <td>(C2806) Sk</td>
                                  <td>0.32</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>KHAI</td>
                                  <td>10000</td>
                                  <td>16-08-2022 23:15:44</td>
                                  <td>-3200</td>
                                  <td>10000</td>
                                  <td>
                                    2409:4053:78a:a448:fc38:59ff:fe22:2d96
                                  </td>
                                </tr>
                                <tr className>
                                  <td>27</td>
                                  <td>(C4191) Viney</td>
                                  <td>0.34</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:15:43</td>
                                  <td>170</td>
                                  <td>-500</td>
                                  <td>
                                    2405:201:6818:d045:586d:409e:5423:f7a0
                                  </td>
                                </tr>
                                <tr className>
                                  <td>28</td>
                                  <td>(C2806) Sk</td>
                                  <td>0.32</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>KHAI</td>
                                  <td>10000</td>
                                  <td>16-08-2022 23:15:37</td>
                                  <td>-3200</td>
                                  <td>10000</td>
                                  <td>
                                    2409:4053:78a:a448:fc38:59ff:fe22:2d96
                                  </td>
                                </tr>
                                <tr className>
                                  <td>29</td>
                                  <td>(C3405) Ramkarn</td>
                                  <td>0.34</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>10000</td>
                                  <td>16-08-2022 23:15:37</td>
                                  <td>3400</td>
                                  <td>-10000</td>
                                  <td>
                                    2402:8100:2398:64d3:778:5634:1232:5476
                                  </td>
                                </tr>
                                <tr className>
                                  <td>30</td>
                                  <td>(C4112) Annnnkur vis</td>
                                  <td>0.40</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>5000</td>
                                  <td>16-08-2022 23:15:15</td>
                                  <td>2000</td>
                                  <td>-5000</td>
                                  <td>
                                    2401:4900:544b:1157:58d8:aa0f:cb6f:3cc4
                                  </td>
                                </tr>
                                <tr className>
                                  <td>31</td>
                                  <td>(C4191) Viney</td>
                                  <td>0.40</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:15:06</td>
                                  <td>200</td>
                                  <td>-500</td>
                                  <td>
                                    2405:201:6818:d045:586d:409e:5423:f7a0
                                  </td>
                                </tr>
                                <tr className>
                                  <td>32</td>
                                  <td>(C4139) Aham</td>
                                  <td>0.41</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>KHAI</td>
                                  <td>10000</td>
                                  <td>16-08-2022 23:14:13</td>
                                  <td>-4100</td>
                                  <td>10000</td>
                                  <td>2409:4043:2e98:8029::8549:3515</td>
                                </tr>
                                <tr className>
                                  <td>33</td>
                                  <td>(C2283) Raju</td>
                                  <td>0.45</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:12:56</td>
                                  <td>225</td>
                                  <td>-500</td>
                                  <td>
                                    2401:4900:55c3:4830:9f39:3bd6:9f3b:f8c0
                                  </td>
                                </tr>
                                <tr className>
                                  <td>34</td>
                                  <td>(C4406) Udi</td>
                                  <td>0.44</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>10000</td>
                                  <td>16-08-2022 23:12:51</td>
                                  <td>4400</td>
                                  <td>-10000</td>
                                  <td>
                                    2401:4900:1c48:96cf:85a0:43c3:6920:4b7b
                                  </td>
                                </tr>
                                <tr className>
                                  <td>35</td>
                                  <td>(C3405) Ramkarn</td>
                                  <td>0.44</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>10000</td>
                                  <td>16-08-2022 23:12:39</td>
                                  <td>4400</td>
                                  <td>-10000</td>
                                  <td>
                                    2402:8100:2398:64d3:778:5634:1232:5476
                                  </td>
                                </tr>
                                <tr className>
                                  <td>36</td>
                                  <td>(C4028) G</td>
                                  <td>0.44</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:12:36</td>
                                  <td>440</td>
                                  <td>-1000</td>
                                  <td>2405:205:c961:2111:7510:6f81:20e1:9c2</td>
                                </tr>
                                <tr className>
                                  <td>37</td>
                                  <td>(C4251) Rocky</td>
                                  <td>0.43</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>25000</td>
                                  <td>16-08-2022 23:12:24</td>
                                  <td>10750</td>
                                  <td>-25000</td>
                                  <td>
                                    2401:4900:1c64:5804:b46b:cd43:8a89:a833
                                  </td>
                                </tr>
                                <tr className>
                                  <td>38</td>
                                  <td>(C2314) Ashu</td>
                                  <td>0.43</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>5000</td>
                                  <td>16-08-2022 23:12:21</td>
                                  <td>2150</td>
                                  <td>-5000</td>
                                  <td>
                                    2409:4043:49c:20cb:e0f6:d4c9:6c41:4c5e
                                  </td>
                                </tr>
                                <tr className>
                                  <td>39</td>
                                  <td>(C3564) Shanshnk bhiya</td>
                                  <td>0.43</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:12:21</td>
                                  <td>430</td>
                                  <td>-1000</td>
                                  <td>
                                    2405:201:301c:d8c8:a047:bf96:6eec:c4c8
                                  </td>
                                </tr>
                                <tr className>
                                  <td>40</td>
                                  <td>(C2576) RAVI PRASAD</td>
                                  <td>0.51</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>5000</td>
                                  <td>16-08-2022 23:11:53</td>
                                  <td>2550</td>
                                  <td>-5000</td>
                                  <td>2401:4900:16fb:5111:1:1:9c22:d9b</td>
                                </tr>
                                <tr className>
                                  <td>41</td>
                                  <td>(C3469) Y kushwah</td>
                                  <td>0.48</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>KHAI</td>
                                  <td>5000</td>
                                  <td>16-08-2022 23:10:39</td>
                                  <td>-2400</td>
                                  <td>5000</td>
                                  <td>
                                    2401:4900:1a59:50c2:abd5:aa1:a0f5:4749
                                  </td>
                                </tr>
                                <tr className>
                                  <td>42</td>
                                  <td>(C4261) Tony 2 b</td>
                                  <td>0.48</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:10:23</td>
                                  <td>240</td>
                                  <td>-500</td>
                                  <td>2409:4053:2e0f:ba3d::528b:340b</td>
                                </tr>
                                <tr className>
                                  <td>43</td>
                                  <td>(C3591) Om shanti</td>
                                  <td>0.48</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>5000</td>
                                  <td>16-08-2022 23:10:21</td>
                                  <td>2400</td>
                                  <td>-5000</td>
                                  <td>
                                    2401:4900:55bd:67d9:2578:2b5b:385a:cf13
                                  </td>
                                </tr>
                                <tr className>
                                  <td>44</td>
                                  <td>(C4261) Tony 2 b</td>
                                  <td>0.43</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>KHAI</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:09:41</td>
                                  <td>-215</td>
                                  <td>500</td>
                                  <td>2409:4053:2e0f:ba3d::528b:340b</td>
                                </tr>
                                <tr className>
                                  <td>45</td>
                                  <td>(C2314) Ashu</td>
                                  <td>0.46</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>5000</td>
                                  <td>16-08-2022 23:09:32</td>
                                  <td>2300</td>
                                  <td>-5000</td>
                                  <td>
                                    2409:4043:49c:20cb:e0f6:d4c9:6c41:4c5e
                                  </td>
                                </tr>
                                <tr className>
                                  <td>46</td>
                                  <td>(C4248) Bhrt bk</td>
                                  <td>0.43</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>KHAI</td>
                                  <td>3000</td>
                                  <td>16-08-2022 23:09:31</td>
                                  <td>-1290</td>
                                  <td>3000</td>
                                  <td>45.251.43.161</td>
                                </tr>
                                <tr className>
                                  <td>47</td>
                                  <td>(C3469) Y kushwah</td>
                                  <td>0.46</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>5000</td>
                                  <td>16-08-2022 23:09:29</td>
                                  <td>2300</td>
                                  <td>-5000</td>
                                  <td>
                                    2401:4900:1a59:50c2:abd5:aa1:a0f5:4749
                                  </td>
                                </tr>
                                <tr className>
                                  <td>48</td>
                                  <td>(C4139) Aham</td>
                                  <td>0.43</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>KHAI</td>
                                  <td>50000</td>
                                  <td>16-08-2022 23:09:26</td>
                                  <td>-21500</td>
                                  <td>50000</td>
                                  <td>2409:4043:2e98:8029::8549:3515</td>
                                </tr>
                                <tr className>
                                  <td>49</td>
                                  <td>(C3372) Pawar</td>
                                  <td>0.47</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>31000</td>
                                  <td>16-08-2022 23:09:05</td>
                                  <td>14570</td>
                                  <td>-31000</td>
                                  <td>27.63.20.220</td>
                                </tr>
                                <tr className>
                                  <td>50</td>
                                  <td>(C3564) Shanshnk bhiya</td>
                                  <td>0.47</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:08:48</td>
                                  <td>470</td>
                                  <td>-1000</td>
                                  <td>
                                    2405:201:301c:d8c8:a047:bf96:6eec:c4c8
                                  </td>
                                </tr>
                                <tr className>
                                  <td>51</td>
                                  <td>(C2283) Raju</td>
                                  <td>0.51</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:08:30</td>
                                  <td>510</td>
                                  <td>-1000</td>
                                  <td>
                                    2401:4900:55c3:4830:9f39:3bd6:9f3b:f8c0
                                  </td>
                                </tr>
                                <tr className>
                                  <td>52</td>
                                  <td>(C2835) Man 2</td>
                                  <td>0.52</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:08:13</td>
                                  <td>1040</td>
                                  <td>-2000</td>
                                  <td>2409:4043:4e14:79a::4c48:4b0e</td>
                                </tr>
                                <tr className>
                                  <td>53</td>
                                  <td>(C2834) N k</td>
                                  <td>0.52</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:08:12</td>
                                  <td>520</td>
                                  <td>-1000</td>
                                  <td>
                                    2409:4041:2d1d:2d71:d9e6:7d80:ec4:5924
                                  </td>
                                </tr>
                                <tr className>
                                  <td>54</td>
                                  <td>(C1413) Lodi</td>
                                  <td>0.49</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>KHAI</td>
                                  <td>5000</td>
                                  <td>16-08-2022 23:08:10</td>
                                  <td>-2450</td>
                                  <td>5000</td>
                                  <td>106.76.75.9</td>
                                </tr>
                                <tr className>
                                  <td>55</td>
                                  <td>(C3138) Vinay</td>
                                  <td>0.48</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>KHAI</td>
                                  <td>5000</td>
                                  <td>16-08-2022 23:07:46</td>
                                  <td>-2400</td>
                                  <td>5000</td>
                                  <td>
                                    2401:4900:6194:1718:7d7c:1222:feeb:685
                                  </td>
                                </tr>
                                <tr className>
                                  <td>56</td>
                                  <td>(C4407) Guru</td>
                                  <td>0.48</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:07:25</td>
                                  <td>480</td>
                                  <td>-1000</td>
                                  <td>103.179.114.238</td>
                                </tr>
                                <tr className>
                                  <td>57</td>
                                  <td>(C2866) M Vishnu</td>
                                  <td>0.45</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>KHAI</td>
                                  <td>5000</td>
                                  <td>16-08-2022 23:07:12</td>
                                  <td>-2250</td>
                                  <td>5000</td>
                                  <td>2402:8100:2285:29f0:0:c:ee6a:f401</td>
                                </tr>
                                <tr className>
                                  <td>58</td>
                                  <td>(C1413) Lodi</td>
                                  <td>0.48</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>5000</td>
                                  <td>16-08-2022 23:07:12</td>
                                  <td>2400</td>
                                  <td>-5000</td>
                                  <td>106.76.75.9</td>
                                </tr>
                                <tr className>
                                  <td>59</td>
                                  <td>(C4232) Jai bhai</td>
                                  <td>0.48</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:07:05</td>
                                  <td>960</td>
                                  <td>-2000</td>
                                  <td>117.99.31.179</td>
                                </tr>
                                <tr className>
                                  <td>60</td>
                                  <td>(C2866) M Vishnu</td>
                                  <td>0.45</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>KHAI</td>
                                  <td>50000</td>
                                  <td>16-08-2022 23:06:46</td>
                                  <td>-22500</td>
                                  <td>50000</td>
                                  <td>2402:8100:2285:29f0:0:c:ee6a:f401</td>
                                </tr>
                                <tr className>
                                  <td>61</td>
                                  <td>(C4247) Bunty</td>
                                  <td>0.49</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>5000</td>
                                  <td>16-08-2022 23:06:43</td>
                                  <td>2450</td>
                                  <td>-5000</td>
                                  <td>2402:3a80:1a5c:54d5::ba80:ec52</td>
                                </tr>
                                <tr className>
                                  <td>62</td>
                                  <td>(C4215) Kk nb</td>
                                  <td>0.46</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>KHAI</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:06:41</td>
                                  <td>-92</td>
                                  <td>200</td>
                                  <td>2401:4900:ef7:d76d:edc7:52bf:704e:5c7</td>
                                </tr>
                                <tr className>
                                  <td>63</td>
                                  <td>(C4191) Viney</td>
                                  <td>0.49</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:06:32</td>
                                  <td>490</td>
                                  <td>-1000</td>
                                  <td>
                                    2405:201:6818:d045:586d:409e:5423:f7a0
                                  </td>
                                </tr>
                                <tr className>
                                  <td>64</td>
                                  <td>(C4215) Kk nb</td>
                                  <td>0.44</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>KHAI</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:06:14</td>
                                  <td>-880</td>
                                  <td>2000</td>
                                  <td>2401:4900:ef7:d76d:edc7:52bf:704e:5c7</td>
                                </tr>
                                <tr className>
                                  <td>65</td>
                                  <td>(C2866) M Vishnu</td>
                                  <td>0.44</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>KHAI</td>
                                  <td>50000</td>
                                  <td>16-08-2022 23:06:12</td>
                                  <td>-22000</td>
                                  <td>50000</td>
                                  <td>2402:8100:2285:29f0:0:c:ee6a:f401</td>
                                </tr>
                                <tr className>
                                  <td>66</td>
                                  <td>(C3405) Ramkarn</td>
                                  <td>0.47</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>10000</td>
                                  <td>16-08-2022 23:06:03</td>
                                  <td>4700</td>
                                  <td>-10000</td>
                                  <td>
                                    2402:8100:2398:64d3:778:5634:1232:5476
                                  </td>
                                </tr>
                                <tr className>
                                  <td>67</td>
                                  <td>(C2314) Ashu</td>
                                  <td>0.47</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>10000</td>
                                  <td>16-08-2022 23:05:59</td>
                                  <td>4700</td>
                                  <td>-10000</td>
                                  <td>
                                    2409:4043:49c:20cb:e0f6:d4c9:6c41:4c5e
                                  </td>
                                </tr>
                                <tr className>
                                  <td>68</td>
                                  <td>(C3727) Rohit</td>
                                  <td>0.48</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:05:49</td>
                                  <td>480</td>
                                  <td>-1000</td>
                                  <td>
                                    2409:4063:4c86:2337:f1b:4a2b:35d0:d00b
                                  </td>
                                </tr>
                                <tr className>
                                  <td>69</td>
                                  <td>(C4224) Manik bb</td>
                                  <td>0.45</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>KHAI</td>
                                  <td>10000</td>
                                  <td>16-08-2022 23:05:45</td>
                                  <td>-4500</td>
                                  <td>10000</td>
                                  <td>2409:4053:598:4bff::2289:30b1</td>
                                </tr>
                                <tr className>
                                  <td>70</td>
                                  <td>(C3270) Afzaal bhai</td>
                                  <td>0.60</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:05:00</td>
                                  <td>60</td>
                                  <td>-100</td>
                                  <td>
                                    2405:201:6014:315a:74f5:6ee7:78a5:8d88
                                  </td>
                                </tr>
                                <tr className>
                                  <td>71</td>
                                  <td>(C3383) Suneet</td>
                                  <td>0.75</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>400</td>
                                  <td>16-08-2022 23:04:37</td>
                                  <td>300</td>
                                  <td>-400</td>
                                  <td>2409:4050:2e4b:e806::bb4a:6707</td>
                                </tr>
                                <tr className>
                                  <td>72</td>
                                  <td>(C3335) Saurabh</td>
                                  <td>0.71</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>KHAI</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:04:37</td>
                                  <td>-355</td>
                                  <td>500</td>
                                  <td>
                                    2401:4900:5c3b:8ec4:acb3:8b28:e4b4:bc2c
                                  </td>
                                </tr>
                                <tr className>
                                  <td>73</td>
                                  <td>(C3335) Saurabh</td>
                                  <td>0.71</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>KHAI</td>
                                  <td>5000</td>
                                  <td>16-08-2022 23:04:32</td>
                                  <td>-3550</td>
                                  <td>5000</td>
                                  <td>
                                    2401:4900:5c3b:8ec4:acb3:8b28:e4b4:bc2c
                                  </td>
                                </tr>
                                <tr className>
                                  <td>74</td>
                                  <td>(C4088) Raj bhai</td>
                                  <td>0.70</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>KHAI</td>
                                  <td>5000</td>
                                  <td>16-08-2022 23:04:24</td>
                                  <td>-3500</td>
                                  <td>5000</td>
                                  <td>2405:204:a591:d4b1::b13:38a5</td>
                                </tr>
                                <tr className>
                                  <td>75</td>
                                  <td>(C3383) Suneet</td>
                                  <td>0.74</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>10000</td>
                                  <td>16-08-2022 23:04:23</td>
                                  <td>7400</td>
                                  <td>-10000</td>
                                  <td>2409:4050:2e4b:e806::bb4a:6707</td>
                                </tr>
                                <tr className>
                                  <td>76</td>
                                  <td>(C4257) Subhas</td>
                                  <td>0.82</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>KHAI</td>
                                  <td>5000</td>
                                  <td>16-08-2022 23:03:48</td>
                                  <td>-4100</td>
                                  <td>5000</td>
                                  <td>
                                    2409:4052:6e0c:9cf5:cfb8:eba3:cec:4f45
                                  </td>
                                </tr>
                                <tr className>
                                  <td>77</td>
                                  <td>(C3383) Suneet</td>
                                  <td>0.82</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>KHAI</td>
                                  <td>10000</td>
                                  <td>16-08-2022 23:03:48</td>
                                  <td>-8200</td>
                                  <td>10000</td>
                                  <td>2409:4050:2e4b:e806::bb4a:6707</td>
                                </tr>
                                <tr className>
                                  <td>78</td>
                                  <td>(C2552) SHUBHAM GNGA</td>
                                  <td>0.75</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>KHAI</td>
                                  <td>4900</td>
                                  <td>16-08-2022 23:03:09</td>
                                  <td>-3675</td>
                                  <td>4900</td>
                                  <td>
                                    2409:4071:e81:bb47:3e90:eb0e:7aec:6f4d
                                  </td>
                                </tr>
                                <tr className>
                                  <td>79</td>
                                  <td>(C3765) Rahul k</td>
                                  <td>0.78</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>5000</td>
                                  <td>16-08-2022 23:03:03</td>
                                  <td>3900</td>
                                  <td>-5000</td>
                                  <td>
                                    2401:4900:1a5c:641a:c04b:b3d7:8ceb:ca81
                                  </td>
                                </tr>
                                <tr className>
                                  <td>80</td>
                                  <td>(C4224) Manik bb</td>
                                  <td>0.78</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>10000</td>
                                  <td>16-08-2022 23:02:59</td>
                                  <td>7800</td>
                                  <td>-10000</td>
                                  <td>2409:4053:598:4bff::2289:30b1</td>
                                </tr>
                                <tr className>
                                  <td>81</td>
                                  <td>(C4139) Aham</td>
                                  <td>0.72</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>50000</td>
                                  <td>16-08-2022 23:01:27</td>
                                  <td>36000</td>
                                  <td>-50000</td>
                                  <td>2409:4043:2e98:8029::8549:3515</td>
                                </tr>
                                <tr className>
                                  <td>82</td>
                                  <td>(C4247) Bunty</td>
                                  <td>0.72</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>10000</td>
                                  <td>16-08-2022 23:01:21</td>
                                  <td>7200</td>
                                  <td>-10000</td>
                                  <td>2402:3a80:1a5c:54d5::ba80:ec52</td>
                                </tr>
                                <tr className>
                                  <td>83</td>
                                  <td>(C3727) Rohit</td>
                                  <td>0.76</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:00:51</td>
                                  <td>760</td>
                                  <td>-1000</td>
                                  <td>
                                    2409:4063:4c86:2337:f1b:4a2b:35d0:d00b
                                  </td>
                                </tr>
                                <tr className>
                                  <td>84</td>
                                  <td>(C4088) Raj bhai</td>
                                  <td>0.70</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>KHAI</td>
                                  <td>5000</td>
                                  <td>16-08-2022 23:00:31</td>
                                  <td>-3500</td>
                                  <td>5000</td>
                                  <td>2405:204:a591:d4b1::b13:38a5</td>
                                </tr>
                                <tr className>
                                  <td>85</td>
                                  <td>(C2806) Sk</td>
                                  <td>0.72</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>10000</td>
                                  <td>16-08-2022 22:59:50</td>
                                  <td>7200</td>
                                  <td>-10000</td>
                                  <td>
                                    2409:4053:78a:a448:fc38:59ff:fe22:2d96
                                  </td>
                                </tr>
                                <tr className>
                                  <td>86</td>
                                  <td>(C4248) Bhrt bk</td>
                                  <td>0.72</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>3000</td>
                                  <td>16-08-2022 22:59:22</td>
                                  <td>2160</td>
                                  <td>-3000</td>
                                  <td>45.251.43.161</td>
                                </tr>
                                <tr className>
                                  <td>87</td>
                                  <td>(C4257) Subhas</td>
                                  <td>0.66</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>KHAI</td>
                                  <td>10000</td>
                                  <td>16-08-2022 22:56:41</td>
                                  <td>-6600</td>
                                  <td>10000</td>
                                  <td>
                                    2409:4052:6e0c:9cf5:cfb8:eba3:cec:4f45
                                  </td>
                                </tr>
                                <tr className>
                                  <td>88</td>
                                  <td>(C3016) Rana</td>
                                  <td>0.72</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>5000</td>
                                  <td>16-08-2022 22:55:49</td>
                                  <td>3600</td>
                                  <td>-5000</td>
                                  <td>2409:4053:10b:b4c3::23e9:80a5</td>
                                </tr>
                                <tr className>
                                  <td>89</td>
                                  <td>(C2416) AC</td>
                                  <td>0.68</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>KHAI</td>
                                  <td>2800</td>
                                  <td>16-08-2022 22:54:09</td>
                                  <td>-1904</td>
                                  <td>2800</td>
                                  <td>
                                    2409:4043:291:7ed5:f472:afa3:53e2:c2ff
                                  </td>
                                </tr>
                                <tr className>
                                  <td>90</td>
                                  <td>(C2416) AC</td>
                                  <td>0.66</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>KHAI</td>
                                  <td>3000</td>
                                  <td>16-08-2022 22:51:51</td>
                                  <td>-1980</td>
                                  <td>3000</td>
                                  <td>
                                    2409:4043:291:7ed5:f472:afa3:53e2:c2ff
                                  </td>
                                </tr>
                                <tr className>
                                  <td>91</td>
                                  <td>(C4232) Jai bhai</td>
                                  <td>0.70</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>1500</td>
                                  <td>16-08-2022 22:48:16</td>
                                  <td>1050</td>
                                  <td>-1500</td>
                                  <td>117.99.31.179</td>
                                </tr>
                                <tr className>
                                  <td>92</td>
                                  <td>(C4237) Raaz</td>
                                  <td>0.65</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>KHAI</td>
                                  <td>1000</td>
                                  <td>16-08-2022 22:47:13</td>
                                  <td>-650</td>
                                  <td>1000</td>
                                  <td>
                                    2401:4900:1c22:27fc:6c64:f5b0:c086:89c9
                                  </td>
                                </tr>
                                <tr className>
                                  <td>93</td>
                                  <td>(C3530) Rajendra</td>
                                  <td>0.68</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>2000</td>
                                  <td>16-08-2022 22:46:19</td>
                                  <td>1360</td>
                                  <td>-2000</td>
                                  <td>
                                    2401:4900:447e:7279:874:87ed:8ec5:a15e
                                  </td>
                                </tr>
                                <tr className>
                                  <td>94</td>
                                  <td>(C4218) Naina h</td>
                                  <td>0.64</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>KHAI</td>
                                  <td>200</td>
                                  <td>16-08-2022 22:45:10</td>
                                  <td>-128</td>
                                  <td>200</td>
                                  <td>2402:8100:2050:5bb8::1f52:3a03</td>
                                </tr>
                                <tr className>
                                  <td>95</td>
                                  <td>(C4406) Udi</td>
                                  <td>0.66</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>KHAI</td>
                                  <td>5000</td>
                                  <td>16-08-2022 22:43:08</td>
                                  <td>-3300</td>
                                  <td>5000</td>
                                  <td>
                                    2401:4900:1c48:96cf:85a0:43c3:6920:4b7b
                                  </td>
                                </tr>
                                <tr className>
                                  <td>96</td>
                                  <td>(C3591) Om shanti</td>
                                  <td>0.70</td>
                                  <td>MANCHESTER ORIGINALS</td>
                                  <td>LAGAI</td>
                                  <td>5000</td>
                                  <td>16-08-2022 22:42:45</td>
                                  <td>3500</td>
                                  <td>-5000</td>
                                  <td>
                                    2401:4900:55bd:67d9:2578:2b5b:385a:cf13
                                  </td>
                                </tr>
                              </tbody>
                              <tfoot>
                                <tr>
                                  <th className="text-center" colSpan={6} />
                                  <th className="text-center">Total Amount</th>
                                  <th className={1}>
                                    <span style={{ color: "#007bff" }}>
                                      21032
                                    </span>
                                  </th>
                                  <th className={2}>
                                    <span style={{ color: "red" }}>-2400</span>
                                  </th>
                                </tr>
                              </tfoot>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /.card-body */}
                  </form>
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </section>
      </>
    );
  }
}
