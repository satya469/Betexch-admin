import React, { Component } from "react";
import PageHeader from "../Components/PageHeader";

export default class SessionBetDetails extends Component {
  render() {
    return (
      <>
        <PageHeader title="Session Bet Details" />

        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                {/* /.card */}
                <div className="card">
                  <form action="client_session_bets" id="myForm" method="post">
                    <input
                      type="hidden"
                      name="market_id"
                      defaultValue="1.202079462"
                    />
                    <input
                      type="hidden"
                      name="page_name"
                      defaultValue="match"
                    />
                    <div className="card-header ">
                      <div className="form-row">
                        <div></div>
                        <div></div>
                        <table className="table table-bordered table-striped">
                          <thead className="text-bold">
                            <tr>
                              <th>Client</th>
                              <th
                                className="col-lg-4"
                                style={{ minWidth: 240 }}
                              >
                                <select
                                  className="form-control select2 select2-hidden-accessible"
                                  id="client_id"
                                  placeholder="Select Client"
                                  name="client_id"
                                  data-select2-id="name"
                                  tabIndex={-1}
                                  aria-hidden="true"
                                >
                                  <option value data-select2-id={2}>
                                    Select Client...
                                  </option>
                                  <option value={1083}>C2083 (Tanmay)</option>
                                  <option value={3258}>C4258 (Saurabh)</option>
                                  <option value={3406}>C4406 (Udi)</option>
                                  <option value={2591}>
                                    C3591 (Om shanti)
                                  </option>
                                  <option value={3374}>C4374 (Abcd)</option>
                                  <option value={3241}>C4241 (Shyam gb)</option>
                                  <option value={3218}>C4218 (Naina h)</option>
                                  <option value={2805}>C3805 (Raj)</option>
                                  <option value={3240}>C4240 (Monu gb)</option>
                                  <option value={2017}>C3017 (Momeen)</option>
                                  <option value={2629}>C3629 (Surandj)</option>
                                  <option value={2219}>C3219 (Hemandra)</option>
                                  <option value={2530}>C3530 (Rajendra)</option>
                                  <option value={3096}>C4096 (Pramod)</option>
                                  <option value={1092}>C2092 (Ramveer)</option>
                                  <option value={3237}>C4237 (Raaz)</option>
                                  <option value={3232}>C4232 (Jai bhai)</option>
                                  <option value={2429}>C3429 (Sudi)</option>
                                  <option value={2993}>C3993 (Jain)</option>
                                  <option value={1061}>C2061 (dewasis)</option>
                                  <option value={541}>C1541 (Ank)</option>
                                  <option value={1361}>C2361 (Bhaskar)</option>
                                  <option value={2665}>C3665 (Noida1)</option>
                                  <option value={2291}>C3291 (Deepak)</option>
                                  <option value={2670}>C3670 (Monish)</option>
                                  <option value={3301}>C4301 (Dinesh)</option>
                                  <option value={1416}>C2416 (AC)</option>
                                  <option value={1656}>C2656 (Akash)</option>
                                  <option value={1752}>C2752 (Jeetu)</option>
                                  <option value={2921}>C3921 (TANNU)</option>
                                  <option value={3267}>C4267 (Sanju)</option>
                                  <option value={3193}>C4193 (Chiku)</option>
                                  <option value={2765}>C3765 (Rahul k)</option>
                                  <option value={1319}>C2319 (Golu)</option>
                                  <option value={2335}>C3335 (Saurabh)</option>
                                  <option value={1856}>C2856 (Sudhir)</option>
                                  <option value={3346}>C4346 (Vinod)</option>
                                  <option value={2016}>C3016 (Rana)</option>
                                  <option value={3307}>C4307 (Narendra)</option>
                                  <option value={1310}>
                                    C2310 (Neeraj bhaiya35)
                                  </option>
                                  <option value={3276}>C4276 (Kuldeep)</option>
                                  <option value={3127}>C4127 (Bablu)</option>
                                  <option value={2318}>C3318 (Boss)</option>
                                  <option value={2025}>C3025 (Balaji)</option>
                                  <option value={3257}>C4257 (Subhas)</option>
                                  <option value={2410}>C3410 (Raina)</option>
                                  <option value={2514}>C3514 (Shivam)</option>
                                  <option value={3388}>C4388 (Aaaaa)</option>
                                  <option value={3195}>
                                    C4195 (BABA BHAI)
                                  </option>
                                  <option value={1558}>C2558 (GIRI)</option>
                                  <option value={3261}>C4261 (Tony 2 b)</option>
                                  <option value={1546}>
                                    C2546 (Golu bhai)
                                  </option>
                                  <option value={3248}>C4248 (Bhrt bk)</option>
                                  <option value={3405}>C4405 (Yuvi)</option>
                                  <option value={3094}>C4094 (Love)</option>
                                  <option value={3382}>C4382 (BT)</option>
                                  <option value={2040}>C3040 (Juber)</option>
                                  <option value={2414}>C3414 (Sonu)</option>
                                  <option value={3274}>C4274 (Kapil)</option>
                                  <option value={1225}>C2225 (Laxman)</option>
                                  <option value={1806}>C2806 (Sk)</option>
                                  <option value={3414}>C4414 (Amitabh)</option>
                                  <option value={3220}>
                                    C4220 (Kuldeep h)
                                  </option>
                                  <option value={2896}>C3896 (Sumit)</option>
                                  <option value={3088}>C4088 (Raj bhai)</option>
                                  <option value={1552}>
                                    C2552 (SHUBHAM GNGA)
                                  </option>
                                  <option value={2404}>C3404 (Annaaa)</option>
                                  <option value={3001}>C4001 (Jaljjjjj)</option>
                                  <option value={2727}>C3727 (Rohit)</option>
                                  <option value={1584}>C2584 (DEEPAK R)</option>
                                  <option value={2108}>C3108 (Tarun)</option>
                                  <option value={3199}>
                                    C4199 (ANNU BHAI)
                                  </option>
                                  <option value={2667}>C3667 (Kkkk)</option>
                                  <option value={3247}>C4247 (Bunty)</option>
                                  <option value={2795}>C3795 (Ashok k)</option>
                                  <option value={3139}>C4139 (Aham)</option>
                                  <option value={2721}>
                                    C3721 (Rahul bhai 2)
                                  </option>
                                  <option value={3246}>C4246 (Jitendra)</option>
                                  <option value={2945}>C3945 (Tannu)</option>
                                  <option value={1099}>C2099 (Sunel)</option>
                                  <option value={413}>C1413 (Lodi)</option>
                                  <option value={882}>
                                    C1882 (Kuldeep bundela)
                                  </option>
                                  <option value={916}>
                                    C1916 (Bholeshankar)
                                  </option>
                                  <option value={3390}>C4390 (Mk002)</option>
                                  <option value={3341}>C4341 (Sachin)</option>
                                  <option value={2398}>C3398 (Bata)</option>
                                  <option value={2106}>
                                    C3106 (Daru bala)
                                  </option>
                                  <option value={2588}>C3588 (Rinku ji)</option>
                                  <option value={3084}>C4084 (Dimpal)</option>
                                  <option value={3114}>C4114 (Man 6428)</option>
                                  <option value={3095}>C4095 (Poste)</option>
                                  <option value={3224}>C4224 (Manik bb)</option>
                                  <option value={432}>C1432 (Mohan)</option>
                                  <option value={2533}>C3533 (Bhanu)</option>
                                  <option value={856}>C1856 (Deepae)</option>
                                  <option value={1536}>C2536 (Roxsatar)</option>
                                  <option value={2313}>C3313 (Monty)</option>
                                  <option value={617}>C1617 (MDJI)</option>
                                  <option value={3242}>C4242 (Babua gb)</option>
                                  <option value={3354}>
                                    C4354 (Khunda 100)
                                  </option>
                                  <option value={3345}>C4345 (Ankesh)</option>
                                  <option value={3227}>C4227 (Samar bb)</option>
                                  <option value={2383}>C3383 (Suneet)</option>
                                  <option value={3415}>C4415 (Rencho)</option>
                                  <option value={1773}>
                                    C2773 (Vivek jiii)
                                  </option>
                                  <option value={3367}>C4367 (Big B)</option>
                                  <option value={1515}>C2515 (SUNIL)</option>
                                  <option value={3421}>C4421 (Rahul)</option>
                                  <option value={1563}>C2563 (GOWDA)</option>
                                  <option value={2270}>
                                    C3270 (Afzaal bhai)
                                  </option>
                                  <option value={983}>C1983 (Vikrant)</option>
                                  <option value={1891}>C2891 (Vina)</option>
                                  <option value={3377}>C4377 (Manish)</option>
                                  <option value={1227}>
                                    C2227 (Dr a singh)
                                  </option>
                                  <option value={1566}>C2566 (PREMA HB)</option>
                                  <option value={3116}>C4116 (Jeet)</option>
                                  <option value={1314}>C2314 (Ashu)</option>
                                  <option value={2405}>C3405 (Ramkarn)</option>
                                  <option value={688}>C1688 (Anil)</option>
                                  <option value={2816}>C3816 (Ram)</option>
                                  <option value={3413}>C4413 (Vipin)</option>
                                  <option value={1866}>C2866 (M Vishnu)</option>
                                  <option value={3215}>C4215 (Kk nb)</option>
                                  <option value={1169}>C2169 (Aarab)</option>
                                  <option value={3191}>C4191 (Viney)</option>
                                  <option value={1283}>C2283 (Raju)</option>
                                  <option value={3170}>C4170 (Irfan)</option>
                                  <option value={2435}>
                                    C3435 (Khatu baba 2)
                                  </option>
                                  <option value={3407}>C4407 (Guru)</option>
                                  <option value={2138}>C3138 (Vinay)</option>
                                  <option value={2806}>C3806 (Deepak)</option>
                                  <option value={2735}>C3735 (agdhhcg)</option>
                                  <option value={1834}>C2834 (N k)</option>
                                  <option value={859}>C1859 (Alok)</option>
                                  <option value={3177}>C4177 (Kaushik)</option>
                                  <option value={813}>
                                    C1813 (Half engineering)
                                  </option>
                                  <option value={2756}>C3756 (PRASHANT)</option>
                                  <option value={1835}>C2835 (Man 2)</option>
                                  <option value={1572}>
                                    C2572 (MANJUSSAM)
                                  </option>
                                  <option value={2406}>C3406 (Mahte)</option>
                                  <option value={2564}>
                                    C3564 (Shanshnk bhiya)
                                  </option>
                                  <option value={2372}>C3372 (Pawar)</option>
                                  <option value={3383}>C4383 (Vishal)</option>
                                  <option value={2469}>
                                    C3469 (Y kushwah)
                                  </option>
                                  <option value={3254}>C4254 (Rishab)</option>
                                  <option value={1555}>
                                    C2555 (AMRIT RAJ)
                                  </option>
                                  <option value={2683}>
                                    C3683 (Lucky bhai)
                                  </option>
                                  <option value={2794}>C3794 (Rohan)</option>
                                  <option value={3046}>
                                    C4046 (Vinod bhai)
                                  </option>
                                  <option value={3381}>C4381 (Atul 2)</option>
                                  <option value={1052}>C2052 (Veeru)</option>
                                  <option value={2898}>C3898 (Lala 2)</option>
                                  <option value={2635}>C3635 (Vikash)</option>
                                  <option value={2763}>C3763 (Bunty)</option>
                                  <option value={2537}>
                                    C3537 (New bhola)
                                  </option>
                                  <option value={1576}>
                                    C2576 (RAVI PRASAD)
                                  </option>
                                  <option value={1569}>
                                    C2569 (GUNTAGANI)
                                  </option>
                                  <option value={2618}>C3618 (Adety)</option>
                                  <option value={3364}>C4364 (Shivji)</option>
                                  <option value={1972}>C2972 (Bhola)</option>
                                  <option value={3251}>C4251 (Rocky)</option>
                                  <option value={3028}>C4028 (G)</option>
                                  <option value={1664}>C2664 (Akash ji)</option>
                                  <option value={2579}>C3579 (Sarman)</option>
                                  <option value={889}>C1889 (Mr.singh)</option>
                                  <option value={3391}>C4391 (Pradeep)</option>
                                  <option value={2037}>C3037 (Raju)</option>
                                  <option value={3112}>
                                    C4112 (Annnnkur vis)
                                  </option>
                                  <option value={1274}>C2274 (Ashish)</option>
                                  <option value={2129}>C3129 (Manoj)</option>
                                  <option value={1777}>C2777 (??????)</option>
                                  <option value={1772}>C2772 (Bhola)</option>
                                  <option value={1568}>C2568 (SURESH J)</option>
                                  <option value={2971}>C3971 (Sameer)</option>
                                  <option value={1609}>C2609 (Kirar ji)</option>
                                  <option value={2133}>
                                    C3133 (Mannu khare)
                                  </option>
                                  <option value={1242}>C2242 (Raj)</option>
                                  <option value={2500}>
                                    C3500 (Mahesh soni)
                                  </option>
                                  <option value={3371}>C4371 (Sugreeve)</option>
                                  <option value={2539}>C3539 (Chillu)</option>
                                  <option value={3285}>
                                    C4285 (Mula bhai)
                                  </option>
                                  <option value={1591}>
                                    C2591 (BEEREGOWDA)
                                  </option>
                                  <option value={1291}>C2291 (Rahul 2)</option>
                                  <option value={3335}>C4335 (Sakal1)</option>
                                  <option value={3101}>C4101 (Ashu)</option>
                                  <option value={3269}>C4269 (Rajneesh)</option>
                                  <option value={3380}>
                                    C4380 (Raju bhai)
                                  </option>
                                </select>
                                <span
                                  className="select2 select2-container select2-container--default"
                                  dir="ltr"
                                  data-select2-id={1}
                                  style={{ width: 351 }}
                                >
                                  <span className="selection">
                                    <span
                                      className="select2-selection select2-selection--single"
                                      role="combobox"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      tabIndex={-1}
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
                              <th />
                              <th>Declare @ null</th>
                            </tr>
                            <tr>
                              <th>Session</th>
                              <th
                                className="col-lg-4"
                                style={{ minWidth: 240 }}
                              >
                                <select
                                  className="form-control custom-select select2 select2-hidden-accessible"
                                  id="session"
                                  placeholder="Select Client"
                                  name="selection_id"
                                  data-select2-id="session"
                                  tabIndex={-1}
                                  aria-hidden="true"
                                >
                                  <option value data-select2-id={4}>
                                    All Session
                                  </option>
                                  <option value="7d9949bfd542eb54b524f656832c99af43c8b415">
                                    25 BALLS RUNS MO
                                  </option>
                                  <option value="f736a25b02de49dd915abc3257344360e98f12fd">
                                    5 BALLS RUNS
                                  </option>
                                  <option value="3848d06c844dbb4e931af0a722b59ba89040b1c9">
                                    100 BALLS RUNS MO
                                  </option>
                                  <option value="4ca37cc1195ffa253198108d8e4a8ffab6e33c70">
                                    1ST WKT RUNS MO
                                  </option>
                                  <option value="14765809fe786a5b1ebc0d76f5ac7bf82dc6a91c">
                                    J BUTTLER RUN
                                  </option>
                                  <option value="d385717cd6fea2e3dfd4b1e0327768d0c32758d1">
                                    P SALT RUN
                                  </option>
                                  <option value="8fd9092f841f95c536e4f50023a608cb7604a723">
                                    J BUTTLER BOUNDARIES
                                  </option>
                                  <option value="9f96b5450aeb4018ccacc2ab65e201b066f5b6a7">
                                    P SALT BOUNDARIES
                                  </option>
                                  <option value="4a72349e5331f01cffdac0d65dee7e8ed9e6693d">
                                    10 BALLS RUN MO
                                  </option>
                                  <option value="3cbd1c9504ded004b660e1a5b0858bfc6cc63e51">
                                    15 BALLS RUN MO
                                  </option>
                                  <option value="524b439e3be46ff2eaf15d1f595cde75274d6394">
                                    20 BALLS RUN MO
                                  </option>
                                  <option value="a94ac696253b38d159692ff18696eecf7dd3bb24">
                                    30 BALLS RUN MO
                                  </option>
                                  <option value="7bcc5d2aeaf861f55a4df11aeaa0639d8f031d9a">
                                    50 BALLS RUN MO
                                  </option>
                                  <option value="64c8baa8dd2e75377ffc76abd70ba89b080eb361">
                                    35 BALLS RUN MO
                                  </option>
                                  <option value="2b722d09dff6c89428227f9d634e516a30e8fda6">
                                    40 BALLS RUN MO
                                  </option>
                                  <option value="218914dec0d0dc71d3a89a9dfe7aaeabd4d8c6d3">
                                    2ND WKT RUNS MO
                                  </option>
                                  <option value="fb3799919d7372a683723d672b19b0cc74e401ce">
                                    W MADSEN RUN
                                  </option>
                                  <option value="23ae76be0d6e057842869adb9838a73dd544edb6">
                                    W MADSEN BOUNDARIES
                                  </option>
                                </select>
                                <span
                                  className="select2 select2-container select2-container--default"
                                  dir="ltr"
                                  data-select2-id={3}
                                  style={{ width: 351 }}
                                >
                                  <span className="selection">
                                    <span
                                      className="select2-selection select2-selection--single"
                                      role="combobox"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      tabIndex={0}
                                      aria-disabled="false"
                                      aria-labelledby="select2-session-container"
                                    >
                                      <span
                                        className="select2-selection__rendered"
                                        id="select2-session-container"
                                        role="textbox"
                                        aria-readonly="true"
                                        title="All Session"
                                      >
                                        All Session
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
                              <th>
                                <input
                                  type="submit"
                                  className="btn-primary "
                                  id="btn"
                                  name="submit"
                                  defaultValue="View"
                                />
                              </th>
                              <th className="text-red">0</th>
                            </tr>
                          </thead>
                        </table>
                      </div>
                    </div>
                    <div className="card-body">
                      <div>
                        <div className="row">
                          <div className="col-md-10">
                            <table className="table table-striped table-bordered">
                              <thead>
                                <tr>
                                  <th>#</th>
                                  <th>Client</th>
                                  <th>Session</th>
                                  <th>Rate</th>
                                  <th>Amount</th>
                                  <th>Runs</th>
                                  <th style={{ width: 40 }}>Mode</th>
                                  <th>Profit</th>
                                  <th>Loss</th>
                                  <th>Date &amp; Time</th>
                                  <th>Ip</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>(C2083) Tanmay</td>
                                  <td>1ST WKT MO</td>
                                  <td>1.1 </td>
                                  <td>2000 </td>
                                  <td>21</td>
                                  <td>NO</td>
                                  <td>2000</td>
                                  <td>2200</td>
                                  <td>16-08-2022 22:42:19</td>
                                  <td>49.36.17.138</td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>(C4258) Saurabh</td>
                                  <td>1ST WKT MO</td>
                                  <td>0.9 </td>
                                  <td>200 </td>
                                  <td>21</td>
                                  <td>YES</td>
                                  <td>180</td>
                                  <td>200</td>
                                  <td>16-08-2022 22:42:20</td>
                                  <td>
                                    2405:201:6800:719b:fdf0:b5ab:1062:4f1a
                                  </td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>(C4406) Udi</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>580 </td>
                                  <td>159</td>
                                  <td>NO</td>
                                  <td>580</td>
                                  <td>580</td>
                                  <td>16-08-2022 22:42:31</td>
                                  <td>
                                    2401:4900:1c48:96cf:85a0:43c3:6920:4b7b
                                  </td>
                                </tr>
                                <tr>
                                  <td>4</td>
                                  <td>(C2083) Tanmay</td>
                                  <td>5 BALLS RUNS</td>
                                  <td>1.00 </td>
                                  <td>528 </td>
                                  <td>7</td>
                                  <td>YES</td>
                                  <td>528</td>
                                  <td>528</td>
                                  <td>16-08-2022 22:42:32</td>
                                  <td>49.36.17.138</td>
                                </tr>
                                <tr>
                                  <td>5</td>
                                  <td>(C4374) Abcd</td>
                                  <td>5 BALLS RUNS</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>7</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 22:42:51</td>
                                  <td>2409:4043:2:9404:e85e:24ff:febb:e992</td>
                                </tr>
                                <tr>
                                  <td>6</td>
                                  <td>(C4241) Shyam gb</td>
                                  <td>J BUTTLER RUN</td>
                                  <td>0.9 </td>
                                  <td>2500 </td>
                                  <td>24</td>
                                  <td>YES</td>
                                  <td>2250</td>
                                  <td>2500</td>
                                  <td>16-08-2022 22:42:56</td>
                                  <td>
                                    2409:4053:284:8ea1:640a:a1ff:fe2e:ce3e
                                  </td>
                                </tr>
                                <tr>
                                  <td>7</td>
                                  <td>(C4374) Abcd</td>
                                  <td>P SALT RUN</td>
                                  <td>0.9 </td>
                                  <td>1111 </td>
                                  <td>19</td>
                                  <td>YES</td>
                                  <td>999.9</td>
                                  <td>1111</td>
                                  <td>16-08-2022 22:43:07</td>
                                  <td>2409:4043:2:9404:e85e:24ff:febb:e992</td>
                                </tr>
                                <tr>
                                  <td>8</td>
                                  <td>(C4374) Abcd</td>
                                  <td>J BUTTLER BOUNDARIES</td>
                                  <td>1.00 </td>
                                  <td>705 </td>
                                  <td>4</td>
                                  <td>YES</td>
                                  <td>705</td>
                                  <td>705</td>
                                  <td>16-08-2022 22:43:37</td>
                                  <td>2409:4043:2:9404:e85e:24ff:febb:e992</td>
                                </tr>
                                <tr>
                                  <td>9</td>
                                  <td>(C3805) Raj</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>3000 </td>
                                  <td>163</td>
                                  <td>YES</td>
                                  <td>3000</td>
                                  <td>3000</td>
                                  <td>16-08-2022 22:45:22</td>
                                  <td>2409:4043:2d8d:ee14::194a:213</td>
                                </tr>
                                <tr>
                                  <td>10</td>
                                  <td>(C4240) Monu gb</td>
                                  <td>J BUTTLER RUN</td>
                                  <td>0.9 </td>
                                  <td>300 </td>
                                  <td>24</td>
                                  <td>YES</td>
                                  <td>270</td>
                                  <td>300</td>
                                  <td>16-08-2022 22:45:26</td>
                                  <td>2409:4053:2d09:e080::8508:5600</td>
                                </tr>
                                <tr>
                                  <td>11</td>
                                  <td>(C3017) Momeen</td>
                                  <td>J BUTTLER RUN</td>
                                  <td>0.9 </td>
                                  <td>2000 </td>
                                  <td>24</td>
                                  <td>YES</td>
                                  <td>1800</td>
                                  <td>2000</td>
                                  <td>16-08-2022 22:45:31</td>
                                  <td>
                                    2409:4053:398:7e81:8857:2dff:fefa:571c
                                  </td>
                                </tr>
                                <tr>
                                  <td>12</td>
                                  <td>(C3629) Surandj</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>163</td>
                                  <td>YES</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 22:45:34</td>
                                  <td>2409:4043:4d12:e009::2608:520d</td>
                                </tr>
                                <tr>
                                  <td>13</td>
                                  <td>(C3219) Hemandra</td>
                                  <td>1ST WKT RUNS MO</td>
                                  <td>1.05 </td>
                                  <td>118 </td>
                                  <td>21</td>
                                  <td>YES</td>
                                  <td>123.9</td>
                                  <td>118</td>
                                  <td>16-08-2022 22:45:35</td>
                                  <td>
                                    2409:4063:4d9d:cbab:9132:ca4b:9f38:d543
                                  </td>
                                </tr>
                                <tr>
                                  <td>14</td>
                                  <td>(C3219) Hemandra</td>
                                  <td>J BUTTLER RUN</td>
                                  <td>0.9 </td>
                                  <td>100 </td>
                                  <td>24</td>
                                  <td>YES</td>
                                  <td>90</td>
                                  <td>100</td>
                                  <td>16-08-2022 22:45:40</td>
                                  <td>
                                    2409:4063:4d9d:cbab:9132:ca4b:9f38:d543
                                  </td>
                                </tr>
                                <tr>
                                  <td>15</td>
                                  <td>(C3017) Momeen</td>
                                  <td>J BUTTLER RUN</td>
                                  <td>0.9 </td>
                                  <td>1000 </td>
                                  <td>24</td>
                                  <td>YES</td>
                                  <td>900</td>
                                  <td>1000</td>
                                  <td>16-08-2022 22:45:47</td>
                                  <td>
                                    2409:4053:398:7e81:8857:2dff:fefa:571c
                                  </td>
                                </tr>
                                <tr>
                                  <td>16</td>
                                  <td>(C3219) Hemandra</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>150 </td>
                                  <td>163</td>
                                  <td>YES</td>
                                  <td>150</td>
                                  <td>150</td>
                                  <td>16-08-2022 22:45:53</td>
                                  <td>
                                    2409:4063:4d9d:cbab:9132:ca4b:9f38:d543
                                  </td>
                                </tr>
                                <tr>
                                  <td>17</td>
                                  <td>(C3530) Rajendra</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>10000 </td>
                                  <td>160</td>
                                  <td>NO</td>
                                  <td>10000</td>
                                  <td>10000</td>
                                  <td>16-08-2022 22:46:06</td>
                                  <td>
                                    2401:4900:447e:7279:874:87ed:8ec5:a15e
                                  </td>
                                </tr>
                                <tr>
                                  <td>18</td>
                                  <td>(C3530) Rajendra</td>
                                  <td>5 BALLS RUNS</td>
                                  <td>1.00 </td>
                                  <td>645 </td>
                                  <td>6</td>
                                  <td>NO</td>
                                  <td>645</td>
                                  <td>645</td>
                                  <td>16-08-2022 22:46:30</td>
                                  <td>
                                    2401:4900:447e:7279:874:87ed:8ec5:a15e
                                  </td>
                                </tr>
                                <tr>
                                  <td>19</td>
                                  <td>(C4096) Pramod</td>
                                  <td>5 BALLS RUNS</td>
                                  <td>1.00 </td>
                                  <td>400 </td>
                                  <td>7</td>
                                  <td>YES</td>
                                  <td>400</td>
                                  <td>400</td>
                                  <td>16-08-2022 22:46:45</td>
                                  <td>2409:4053:2c91:5f10::d04b:ce08</td>
                                </tr>
                                <tr>
                                  <td>20</td>
                                  <td>(C2092) Ramveer</td>
                                  <td>5 BALLS RUNS</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>6</td>
                                  <td>NO</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 22:46:57</td>
                                  <td>2401:4900:1b24:6cd5:2:1:cc70:3436</td>
                                </tr>
                                <tr>
                                  <td>21</td>
                                  <td>(C2092) Ramveer</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>163</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 22:47:09</td>
                                  <td>2401:4900:1b24:6cd5:2:1:cc70:3436</td>
                                </tr>
                                <tr>
                                  <td>22</td>
                                  <td>(C3429) Sudi</td>
                                  <td>5 BALLS RUNS</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>7</td>
                                  <td>YES</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 22:48:20</td>
                                  <td>2409:4043:2099:7ea:34e3:47d2:e8c3:713</td>
                                </tr>
                                <tr>
                                  <td>23</td>
                                  <td>(C3993) Jain</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>38</td>
                                  <td>NO</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 22:48:30</td>
                                  <td>2402:8100:2292:95e5:0:1:574f:4501</td>
                                </tr>
                                <tr>
                                  <td>24</td>
                                  <td>(C2061) dewasis</td>
                                  <td>5 BALLS RUNS</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>7</td>
                                  <td>YES</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 22:48:37</td>
                                  <td>223.239.60.96</td>
                                </tr>
                                <tr>
                                  <td>25</td>
                                  <td>(C2061) dewasis</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>40</td>
                                  <td>YES</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 22:48:41</td>
                                  <td>223.239.60.96</td>
                                </tr>
                                <tr>
                                  <td>26</td>
                                  <td>(C1541) Ank</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>10000 </td>
                                  <td>163</td>
                                  <td>YES</td>
                                  <td>10000</td>
                                  <td>10000</td>
                                  <td>16-08-2022 22:49:00</td>
                                  <td>2409:4043:2c9c:a57b::78c9:6f0b</td>
                                </tr>
                                <tr>
                                  <td>27</td>
                                  <td>(C1541) Ank</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>20000 </td>
                                  <td>40</td>
                                  <td>YES</td>
                                  <td>20000</td>
                                  <td>20000</td>
                                  <td>16-08-2022 22:49:04</td>
                                  <td>2409:4043:2c9c:a57b::78c9:6f0b</td>
                                </tr>
                                <tr>
                                  <td>28</td>
                                  <td>(C4374) Abcd</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>40</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 22:49:04</td>
                                  <td>2409:4043:2:9404:e85e:24ff:febb:e992</td>
                                </tr>
                                <tr>
                                  <td>29</td>
                                  <td>(C2361) Bhaskar</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>300 </td>
                                  <td>40</td>
                                  <td>YES</td>
                                  <td>300</td>
                                  <td>300</td>
                                  <td>16-08-2022 22:50:05</td>
                                  <td>2409:4043:2213:14c8::2678:58a5</td>
                                </tr>
                                <tr>
                                  <td>30</td>
                                  <td>(C3665) Noida1</td>
                                  <td>P SALT BOUNDARIES</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>3</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 22:50:23</td>
                                  <td>2401:4900:30db:c4cf:0:59:48f2:e701</td>
                                </tr>
                                <tr>
                                  <td>31</td>
                                  <td>(C3291) Deepak</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1690 </td>
                                  <td>40</td>
                                  <td>YES</td>
                                  <td>1690</td>
                                  <td>1690</td>
                                  <td>16-08-2022 22:51:18</td>
                                  <td>2409:4050:ecf:f451::72c8:c302</td>
                                </tr>
                                <tr>
                                  <td>32</td>
                                  <td>(C3670) Monish</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>40</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 22:51:34</td>
                                  <td>103.211.53.70</td>
                                </tr>
                                <tr>
                                  <td>33</td>
                                  <td>(C4301) Dinesh</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>5000 </td>
                                  <td>40</td>
                                  <td>YES</td>
                                  <td>5000</td>
                                  <td>5000</td>
                                  <td>16-08-2022 22:51:47</td>
                                  <td>
                                    2401:4900:5698:59dd:cc34:10e0:7ffa:4365
                                  </td>
                                </tr>
                                <tr>
                                  <td>34</td>
                                  <td>(C3219) Hemandra</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>250 </td>
                                  <td>40</td>
                                  <td>YES</td>
                                  <td>250</td>
                                  <td>250</td>
                                  <td>16-08-2022 22:52:01</td>
                                  <td>
                                    2409:4063:4d9d:cbab:9132:ca4b:9f38:d543
                                  </td>
                                </tr>
                                <tr>
                                  <td>35</td>
                                  <td>(C2656) Akash</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>130 </td>
                                  <td>40</td>
                                  <td>YES</td>
                                  <td>130</td>
                                  <td>130</td>
                                  <td>16-08-2022 22:52:05</td>
                                  <td>
                                    2401:4900:464a:4a94:9ccd:9451:c83d:63d6
                                  </td>
                                </tr>
                                <tr>
                                  <td>36</td>
                                  <td>(C2752) Jeetu</td>
                                  <td>P SALT BOUNDARIES</td>
                                  <td>1.00 </td>
                                  <td>121 </td>
                                  <td>3</td>
                                  <td>YES</td>
                                  <td>121</td>
                                  <td>121</td>
                                  <td>16-08-2022 22:52:37</td>
                                  <td>2409:4043:992:ae23::1a7e:8ac</td>
                                </tr>
                                <tr>
                                  <td>37</td>
                                  <td>(C3921) TANNU</td>
                                  <td>1ST WKT RUNS MO</td>
                                  <td>1.1 </td>
                                  <td>5000 </td>
                                  <td>21</td>
                                  <td>NO</td>
                                  <td>5000</td>
                                  <td>5500</td>
                                  <td>16-08-2022 22:52:41</td>
                                  <td>106.66.3.140</td>
                                </tr>
                                <tr>
                                  <td>38</td>
                                  <td>(C2752) Jeetu</td>
                                  <td>J BUTTLER BOUNDARIES</td>
                                  <td>1.00 </td>
                                  <td>101 </td>
                                  <td>4</td>
                                  <td>YES</td>
                                  <td>101</td>
                                  <td>101</td>
                                  <td>16-08-2022 22:52:46</td>
                                  <td>2409:4043:992:ae23::1a7e:8ac</td>
                                </tr>
                                <tr>
                                  <td>39</td>
                                  <td>(C4301) Dinesh</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>10000 </td>
                                  <td>161</td>
                                  <td>YES</td>
                                  <td>10000</td>
                                  <td>10000</td>
                                  <td>16-08-2022 22:53:06</td>
                                  <td>
                                    2401:4900:5698:59dd:cc34:10e0:7ffa:4365
                                  </td>
                                </tr>
                                <tr>
                                  <td>40</td>
                                  <td>(C4267) Sanju</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>400 </td>
                                  <td>40</td>
                                  <td>YES</td>
                                  <td>400</td>
                                  <td>400</td>
                                  <td>16-08-2022 22:53:19</td>
                                  <td>2409:4053:2c9f:f4f::ad8b:d208</td>
                                </tr>
                                <tr>
                                  <td>41</td>
                                  <td>(C4193) Chiku</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>564 </td>
                                  <td>40</td>
                                  <td>YES</td>
                                  <td>564</td>
                                  <td>564</td>
                                  <td>16-08-2022 22:53:44</td>
                                  <td>27.63.184.72</td>
                                </tr>
                                <tr>
                                  <td>42</td>
                                  <td>(C3765) Rahul k</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>40</td>
                                  <td>YES</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 22:53:49</td>
                                  <td>
                                    2401:4900:1a5c:641a:c04b:b3d7:8ceb:ca81
                                  </td>
                                </tr>
                                <tr>
                                  <td>43</td>
                                  <td>(C2319) Golu</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2150 </td>
                                  <td>40</td>
                                  <td>YES</td>
                                  <td>2150</td>
                                  <td>2150</td>
                                  <td>16-08-2022 22:53:58</td>
                                  <td>2409:4043:251c:fad9::fe6:90a5</td>
                                </tr>
                                <tr>
                                  <td>44</td>
                                  <td>(C3765) Rahul k</td>
                                  <td>5 BALLS RUNS</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>7</td>
                                  <td>YES</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 22:54:05</td>
                                  <td>
                                    2401:4900:1a5c:641a:c04b:b3d7:8ceb:ca81
                                  </td>
                                </tr>
                                <tr>
                                  <td>45</td>
                                  <td>(C3335) Saurabh</td>
                                  <td>1ST WKT RUNS MO</td>
                                  <td>0.9 </td>
                                  <td>300 </td>
                                  <td>21</td>
                                  <td>YES</td>
                                  <td>270</td>
                                  <td>300</td>
                                  <td>16-08-2022 22:54:12</td>
                                  <td>
                                    2401:4900:5c3b:8ec4:acb3:8b28:e4b4:bc2c
                                  </td>
                                </tr>
                                <tr>
                                  <td>46</td>
                                  <td>(C2856) Sudhir</td>
                                  <td>5 BALLS RUNS</td>
                                  <td>1.00 </td>
                                  <td>107 </td>
                                  <td>7</td>
                                  <td>YES</td>
                                  <td>107</td>
                                  <td>107</td>
                                  <td>16-08-2022 22:54:51</td>
                                  <td>2409:4063:4d80:9cb7::f89:cb02</td>
                                </tr>
                                <tr>
                                  <td>47</td>
                                  <td>(C4346) Vinod</td>
                                  <td>5 BALLS RUNS</td>
                                  <td>1.00 </td>
                                  <td>20000 </td>
                                  <td>6</td>
                                  <td>NO</td>
                                  <td>20000</td>
                                  <td>20000</td>
                                  <td>16-08-2022 22:54:54</td>
                                  <td>47.15.34.59</td>
                                </tr>
                                <tr>
                                  <td>48</td>
                                  <td>(C4346) Vinod</td>
                                  <td>5 BALLS RUNS</td>
                                  <td>1.00 </td>
                                  <td>20000 </td>
                                  <td>6</td>
                                  <td>NO</td>
                                  <td>20000</td>
                                  <td>20000</td>
                                  <td>16-08-2022 22:55:10</td>
                                  <td>47.15.34.59</td>
                                </tr>
                                <tr>
                                  <td>49</td>
                                  <td>(C4346) Vinod</td>
                                  <td>5 BALLS RUNS</td>
                                  <td>1.00 </td>
                                  <td>20000 </td>
                                  <td>6</td>
                                  <td>NO</td>
                                  <td>20000</td>
                                  <td>20000</td>
                                  <td>16-08-2022 22:55:19</td>
                                  <td>47.15.34.59</td>
                                </tr>
                                <tr>
                                  <td>50</td>
                                  <td>(C4346) Vinod</td>
                                  <td>5 BALLS RUNS</td>
                                  <td>1.00 </td>
                                  <td>20000 </td>
                                  <td>6</td>
                                  <td>NO</td>
                                  <td>20000</td>
                                  <td>20000</td>
                                  <td>16-08-2022 22:55:27</td>
                                  <td>47.15.34.59</td>
                                </tr>
                                <tr>
                                  <td>51</td>
                                  <td>(C4346) Vinod</td>
                                  <td>5 BALLS RUNS</td>
                                  <td>1.00 </td>
                                  <td>20000 </td>
                                  <td>6</td>
                                  <td>NO</td>
                                  <td>20000</td>
                                  <td>20000</td>
                                  <td>16-08-2022 22:55:32</td>
                                  <td>47.15.34.59</td>
                                </tr>
                                <tr>
                                  <td>52</td>
                                  <td>(C4307) Narendra</td>
                                  <td>5 BALLS RUNS</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>6</td>
                                  <td>NO</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 22:55:52</td>
                                  <td>
                                    2401:4900:55ca:2f77:3b15:7f9b:4617:b9bc
                                  </td>
                                </tr>
                                <tr>
                                  <td>53</td>
                                  <td>(C3765) Rahul k</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>40</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 22:55:55</td>
                                  <td>
                                    2401:4900:1a5c:641a:c04b:b3d7:8ceb:ca81
                                  </td>
                                </tr>
                                <tr>
                                  <td>54</td>
                                  <td>(C4307) Narendra</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>38</td>
                                  <td>NO</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 22:56:06</td>
                                  <td>
                                    2401:4900:55ca:2f77:3b15:7f9b:4617:b9bc
                                  </td>
                                </tr>
                                <tr>
                                  <td>55</td>
                                  <td>(C3765) Rahul k</td>
                                  <td>5 BALLS RUNS</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>7</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 22:56:06</td>
                                  <td>
                                    2401:4900:1a5c:641a:c04b:b3d7:8ceb:ca81
                                  </td>
                                </tr>
                                <tr>
                                  <td>56</td>
                                  <td>(C4276) Kuldeep</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>191 </td>
                                  <td>40</td>
                                  <td>YES</td>
                                  <td>191</td>
                                  <td>191</td>
                                  <td>16-08-2022 22:56:10</td>
                                  <td>
                                    2409:4052:239a:e934:1242:5fd2:34e6:bb84
                                  </td>
                                </tr>
                                <tr>
                                  <td>57</td>
                                  <td>(C4127) Bablu</td>
                                  <td>P SALT RUN</td>
                                  <td>0.9 </td>
                                  <td>2000 </td>
                                  <td>19</td>
                                  <td>YES</td>
                                  <td>1800</td>
                                  <td>2000</td>
                                  <td>16-08-2022 22:56:25</td>
                                  <td>2409:4043:4e98:2a2f::2c9:fd03</td>
                                </tr>
                                <tr>
                                  <td>58</td>
                                  <td>(C3318) Boss</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>20020 </td>
                                  <td>40</td>
                                  <td>YES</td>
                                  <td>20020</td>
                                  <td>20020</td>
                                  <td>16-08-2022 22:56:27</td>
                                  <td>
                                    2405:201:c404:801a:b90d:a00e:51ea:4532
                                  </td>
                                </tr>
                                <tr>
                                  <td>59</td>
                                  <td>(C4127) Bablu</td>
                                  <td>J BUTTLER RUN</td>
                                  <td>0.9 </td>
                                  <td>2000 </td>
                                  <td>24</td>
                                  <td>YES</td>
                                  <td>1800</td>
                                  <td>2000</td>
                                  <td>16-08-2022 22:56:29</td>
                                  <td>2409:4043:4e98:2a2f::2c9:fd03</td>
                                </tr>
                                <tr>
                                  <td>60</td>
                                  <td>(C3025) Balaji</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>40</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 22:56:30</td>
                                  <td>106.207.222.24</td>
                                </tr>
                                <tr>
                                  <td>61</td>
                                  <td>(C4127) Bablu</td>
                                  <td>1ST WKT RUNS MO</td>
                                  <td>0.8 </td>
                                  <td>1500 </td>
                                  <td>21</td>
                                  <td>YES</td>
                                  <td>1200</td>
                                  <td>1500</td>
                                  <td>16-08-2022 22:57:10</td>
                                  <td>2409:4043:4e98:2a2f::2c9:fd03</td>
                                </tr>
                                <tr>
                                  <td>62</td>
                                  <td>(C3410) Raina</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>605 </td>
                                  <td>161</td>
                                  <td>YES</td>
                                  <td>605</td>
                                  <td>605</td>
                                  <td>16-08-2022 22:57:16</td>
                                  <td>2409:4053:e04:7a56::c688:ee07</td>
                                </tr>
                                <tr>
                                  <td>63</td>
                                  <td>(C1541) Ank</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>10000 </td>
                                  <td>161</td>
                                  <td>YES</td>
                                  <td>10000</td>
                                  <td>10000</td>
                                  <td>16-08-2022 22:57:17</td>
                                  <td>2409:4043:2c9c:a57b::78c9:6f0b</td>
                                </tr>
                                <tr>
                                  <td>64</td>
                                  <td>(C3514) Shivam</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>38</td>
                                  <td>NO</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 22:57:30</td>
                                  <td>
                                    2409:4053:50a:ea5b:61b4:9d84:86b8:8d0d
                                  </td>
                                </tr>
                                <tr>
                                  <td>65</td>
                                  <td>(C3410) Raina</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>40</td>
                                  <td>YES</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 22:57:32</td>
                                  <td>2409:4053:e04:7a56::c688:ee07</td>
                                </tr>
                                <tr>
                                  <td>66</td>
                                  <td>(C4388) Aaaaa</td>
                                  <td>1ST WKT RUNS MO</td>
                                  <td>0.8 </td>
                                  <td>500 </td>
                                  <td>21</td>
                                  <td>YES</td>
                                  <td>400</td>
                                  <td>500</td>
                                  <td>16-08-2022 22:57:35</td>
                                  <td>
                                    2401:4900:1c08:3af3:5441:cbbb:6ea9:335e
                                  </td>
                                </tr>
                                <tr>
                                  <td>67</td>
                                  <td>(C4195) BABA BHAI</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>161</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 22:58:20</td>
                                  <td>2401:4900:58ac:2ed2::e26:4fd2</td>
                                </tr>
                                <tr>
                                  <td>68</td>
                                  <td>(C2558) GIRI</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>40</td>
                                  <td>YES</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 22:58:30</td>
                                  <td>2401:4900:5552:5f8a::82d:c91</td>
                                </tr>
                                <tr>
                                  <td>69</td>
                                  <td>(C3514) Shivam</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>5000 </td>
                                  <td>158</td>
                                  <td>NO</td>
                                  <td>5000</td>
                                  <td>5000</td>
                                  <td>16-08-2022 22:58:44</td>
                                  <td>
                                    2409:4053:50a:ea5b:61b4:9d84:86b8:8d0d
                                  </td>
                                </tr>
                                <tr>
                                  <td>70</td>
                                  <td>(C4261) Tony 2 b</td>
                                  <td>J BUTTLER RUN</td>
                                  <td>0.9 </td>
                                  <td>150 </td>
                                  <td>24</td>
                                  <td>YES</td>
                                  <td>135</td>
                                  <td>150</td>
                                  <td>16-08-2022 22:58:49</td>
                                  <td>2409:4053:2e0f:ba3d::528b:340b</td>
                                </tr>
                                <tr>
                                  <td>71</td>
                                  <td>(C4388) Aaaaa</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>161</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 22:58:55</td>
                                  <td>
                                    2401:4900:1c08:3af3:5441:cbbb:6ea9:335e
                                  </td>
                                </tr>
                                <tr>
                                  <td>72</td>
                                  <td>(C4261) Tony 2 b</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>38</td>
                                  <td>NO</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 22:58:58</td>
                                  <td>2409:4053:2e0f:ba3d::528b:340b</td>
                                </tr>
                                <tr>
                                  <td>73</td>
                                  <td>(C2546) Golu bhai</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>40</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 22:59:09</td>
                                  <td>
                                    2409:4043:2c9c:15e9:19fa:1314:3f69:c9bb
                                  </td>
                                </tr>
                                <tr>
                                  <td>74</td>
                                  <td>(C3514) Shivam</td>
                                  <td>1ST WKT RUNS MO</td>
                                  <td>1.1 </td>
                                  <td>2000 </td>
                                  <td>21</td>
                                  <td>NO</td>
                                  <td>2000</td>
                                  <td>2200</td>
                                  <td>16-08-2022 22:59:19</td>
                                  <td>
                                    2409:4053:50a:ea5b:61b4:9d84:86b8:8d0d
                                  </td>
                                </tr>
                                <tr>
                                  <td>75</td>
                                  <td>(C4405) Yuvi</td>
                                  <td>5 BALLS RUNS</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>7</td>
                                  <td>YES</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 22:59:34</td>
                                  <td>2409:4043:2b88:1f6d::cb49:800d</td>
                                </tr>
                                <tr>
                                  <td>76</td>
                                  <td>(C4094) Love</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>38</td>
                                  <td>NO</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 22:59:36</td>
                                  <td>
                                    2401:4900:5c42:210f:d44:1884:e9a9:af48
                                  </td>
                                </tr>
                                <tr>
                                  <td>77</td>
                                  <td>(C4248) Bhrt bk</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>159</td>
                                  <td>NO</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 22:59:39</td>
                                  <td>45.251.43.161</td>
                                </tr>
                                <tr>
                                  <td>78</td>
                                  <td>(C4382) BT</td>
                                  <td>5 BALLS RUNS</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>7</td>
                                  <td>YES</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 22:59:40</td>
                                  <td>2401:4900:1bc8:576d:1:2:74e6:822f</td>
                                </tr>
                                <tr>
                                  <td>79</td>
                                  <td>(C3040) Juber</td>
                                  <td>5 BALLS RUNS</td>
                                  <td>1.00 </td>
                                  <td>150 </td>
                                  <td>7</td>
                                  <td>YES</td>
                                  <td>150</td>
                                  <td>150</td>
                                  <td>16-08-2022 22:59:40</td>
                                  <td>2409:4043:2b17:884a::4c4a:3705</td>
                                </tr>
                                <tr>
                                  <td>80</td>
                                  <td>(C3514) Shivam</td>
                                  <td>5 BALLS RUNS</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>6</td>
                                  <td>NO</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 22:59:40</td>
                                  <td>
                                    2409:4053:50a:ea5b:61b4:9d84:86b8:8d0d
                                  </td>
                                </tr>
                                <tr>
                                  <td>81</td>
                                  <td>(C3414) Sonu</td>
                                  <td>5 BALLS RUNS</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>7</td>
                                  <td>YES</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 22:59:40</td>
                                  <td>
                                    2401:4900:5d81:8b4e:8dd0:e95b:ecf9:a74e
                                  </td>
                                </tr>
                                <tr>
                                  <td>82</td>
                                  <td>(C4405) Yuvi</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>40</td>
                                  <td>YES</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 22:59:42</td>
                                  <td>2409:4043:2b88:1f6d::cb49:800d</td>
                                </tr>
                                <tr>
                                  <td>83</td>
                                  <td>(C4274) Kapil</td>
                                  <td>5 BALLS RUNS</td>
                                  <td>1.00 </td>
                                  <td>3850 </td>
                                  <td>6</td>
                                  <td>NO</td>
                                  <td>3850</td>
                                  <td>3850</td>
                                  <td>16-08-2022 22:59:43</td>
                                  <td>
                                    2409:4053:59d:4522:9e9a:db2f:9be1:6524
                                  </td>
                                </tr>
                                <tr>
                                  <td>84</td>
                                  <td>(C2225) Laxman</td>
                                  <td>5 BALLS RUNS</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>7</td>
                                  <td>YES</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 22:59:48</td>
                                  <td>
                                    2409:4043:4d0e:86d3:6068:b676:e9a1:5992
                                  </td>
                                </tr>
                                <tr>
                                  <td>85</td>
                                  <td>(C2558) GIRI</td>
                                  <td>5 BALLS RUNS</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>6</td>
                                  <td>NO</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 22:59:50</td>
                                  <td>2401:4900:5552:5f8a::82d:c91</td>
                                </tr>
                                <tr>
                                  <td>86</td>
                                  <td>(C4405) Yuvi</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>4000 </td>
                                  <td>161</td>
                                  <td>YES</td>
                                  <td>4000</td>
                                  <td>4000</td>
                                  <td>16-08-2022 22:59:54</td>
                                  <td>2409:4043:2b88:1f6d::cb49:800d</td>
                                </tr>
                                <tr>
                                  <td>87</td>
                                  <td>(C4094) Love</td>
                                  <td>5 BALLS RUNS</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>6</td>
                                  <td>NO</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:00:05</td>
                                  <td>
                                    2401:4900:5c42:210f:d44:1884:e9a9:af48
                                  </td>
                                </tr>
                                <tr>
                                  <td>88</td>
                                  <td>(C4414) Amitabh</td>
                                  <td>J BUTTLER RUN</td>
                                  <td>0.9 </td>
                                  <td>2000 </td>
                                  <td>24</td>
                                  <td>YES</td>
                                  <td>1800</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:00:07</td>
                                  <td>
                                    2401:4900:472d:94ef:9559:964:8e58:96bc
                                  </td>
                                </tr>
                                <tr>
                                  <td>89</td>
                                  <td>(C4220) Kuldeep h</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>40</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:00:08</td>
                                  <td>2402:3a80:1a5e:3a6a::ba85:7237</td>
                                </tr>
                                <tr>
                                  <td>90</td>
                                  <td>(C3896) Sumit</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>38</td>
                                  <td>NO</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:00:16</td>
                                  <td>171.48.29.164</td>
                                </tr>
                                <tr>
                                  <td>91</td>
                                  <td>(C2552) SHUBHAM GNGA</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>38</td>
                                  <td>NO</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:00:29</td>
                                  <td>
                                    2409:4071:e81:bb47:3e90:eb0e:7aec:6f4d
                                  </td>
                                </tr>
                                <tr>
                                  <td>92</td>
                                  <td>(C3921) TANNU</td>
                                  <td>5 BALLS RUNS</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>7</td>
                                  <td>YES</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:00:29</td>
                                  <td>106.66.3.140</td>
                                </tr>
                                <tr>
                                  <td>93</td>
                                  <td>(C3896) Sumit</td>
                                  <td>5 BALLS RUNS</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>6</td>
                                  <td>NO</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:00:30</td>
                                  <td>171.48.29.164</td>
                                </tr>
                                <tr>
                                  <td>94</td>
                                  <td>(C3404) Annaaa</td>
                                  <td>5 BALLS RUNS</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>7</td>
                                  <td>YES</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:00:30</td>
                                  <td>2409:4043:30e:fb9d:438d:d73c:e89:fab3</td>
                                </tr>
                                <tr>
                                  <td>95</td>
                                  <td>(C4001) Jaljjjjj</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>161</td>
                                  <td>YES</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:00:31</td>
                                  <td>110.235.219.139</td>
                                </tr>
                                <tr>
                                  <td>96</td>
                                  <td>(C2584) DEEPAK R</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>38</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:00:53</td>
                                  <td>2409:4071:4e84:4aa2::278a:5d01</td>
                                </tr>
                                <tr>
                                  <td>97</td>
                                  <td>(C3805) Raj</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>800 </td>
                                  <td>38</td>
                                  <td>YES</td>
                                  <td>800</td>
                                  <td>800</td>
                                  <td>16-08-2022 23:01:19</td>
                                  <td>2409:4043:2d8d:ee14::194a:213</td>
                                </tr>
                                <tr>
                                  <td>98</td>
                                  <td>(C3667) Kkkk</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>37</td>
                                  <td>NO</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:01:19</td>
                                  <td>2409:4043:2e87:357::b98a:8d15</td>
                                </tr>
                                <tr>
                                  <td>99</td>
                                  <td>(C3108) Tarun</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>38</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:01:19</td>
                                  <td>2405:201:3007:f166:832:1412:9a1e:5a80</td>
                                </tr>
                                <tr>
                                  <td>100</td>
                                  <td>(C3219) Hemandra</td>
                                  <td>P SALT RUN</td>
                                  <td>0.9 </td>
                                  <td>150 </td>
                                  <td>19</td>
                                  <td>YES</td>
                                  <td>135</td>
                                  <td>150</td>
                                  <td>16-08-2022 23:01:19</td>
                                  <td>
                                    2409:4063:4d9d:cbab:9132:ca4b:9f38:d543
                                  </td>
                                </tr>
                                <tr>
                                  <td>101</td>
                                  <td>(C4199) ANNU BHAI</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>6000 </td>
                                  <td>38</td>
                                  <td>YES</td>
                                  <td>6000</td>
                                  <td>6000</td>
                                  <td>16-08-2022 23:01:21</td>
                                  <td>2409:4053:c99:d9d::ad88:500a</td>
                                </tr>
                                <tr>
                                  <td>102</td>
                                  <td>(C3795) Ashok k</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>38</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:01:24</td>
                                  <td>2402:8100:3847:eb81:1:1:db6e:8433</td>
                                </tr>
                                <tr>
                                  <td>103</td>
                                  <td>(C1541) Ank</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>20000 </td>
                                  <td>38</td>
                                  <td>YES</td>
                                  <td>20000</td>
                                  <td>20000</td>
                                  <td>16-08-2022 23:01:25</td>
                                  <td>2409:4043:2c9c:a57b::78c9:6f0b</td>
                                </tr>
                                <tr>
                                  <td>104</td>
                                  <td>(C3721) Rahul bhai 2</td>
                                  <td>5 BALLS RUNS</td>
                                  <td>0.85 </td>
                                  <td>500 </td>
                                  <td>5</td>
                                  <td>YES</td>
                                  <td>425</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:01:30</td>
                                  <td>
                                    2409:4043:4b9a:9b7d:147e:20f8:f253:8cf6
                                  </td>
                                </tr>
                                <tr>
                                  <td>105</td>
                                  <td>(C2584) DEEPAK R</td>
                                  <td>5 BALLS RUNS</td>
                                  <td>0.85 </td>
                                  <td>500 </td>
                                  <td>5</td>
                                  <td>YES</td>
                                  <td>425</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:01:30</td>
                                  <td>2409:4071:4e84:4aa2::278a:5d01</td>
                                </tr>
                                <tr>
                                  <td>106</td>
                                  <td>(C3721) Rahul bhai 2</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>38</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:01:35</td>
                                  <td>
                                    2409:4043:4b9a:9b7d:147e:20f8:f253:8cf6
                                  </td>
                                </tr>
                                <tr>
                                  <td>107</td>
                                  <td>(C4246) Jitendra</td>
                                  <td>5 BALLS RUNS</td>
                                  <td>0.85 </td>
                                  <td>500 </td>
                                  <td>5</td>
                                  <td>YES</td>
                                  <td>425</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:01:43</td>
                                  <td>223.227.73.55</td>
                                </tr>
                                <tr>
                                  <td>108</td>
                                  <td>(C3108) Tarun</td>
                                  <td>5 BALLS RUNS</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>4</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:01:56</td>
                                  <td>2405:201:3007:f166:832:1412:9a1e:5a80</td>
                                </tr>
                                <tr>
                                  <td>109</td>
                                  <td>(C4139) Aham</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>5000 </td>
                                  <td>37</td>
                                  <td>YES</td>
                                  <td>5000</td>
                                  <td>5000</td>
                                  <td>16-08-2022 23:01:58</td>
                                  <td>2409:4043:2e98:8029::8549:3515</td>
                                </tr>
                                <tr>
                                  <td>110</td>
                                  <td>(C3945) Tannu</td>
                                  <td>1ST WKT RUNS MO</td>
                                  <td>0.8 </td>
                                  <td>710 </td>
                                  <td>23</td>
                                  <td>YES</td>
                                  <td>568</td>
                                  <td>710</td>
                                  <td>16-08-2022 23:02:01</td>
                                  <td>2409:4043:796:6f5c::7d6:70a5</td>
                                </tr>
                                <tr>
                                  <td>111</td>
                                  <td>(C2099) Sunel</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>37</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:02:02</td>
                                  <td>2401:4900:414a:671a:0:1d:dadf:2101</td>
                                </tr>
                                <tr>
                                  <td>112</td>
                                  <td>(C4405) Yuvi</td>
                                  <td>5 BALLS RUNS</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>4</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:02:02</td>
                                  <td>2409:4043:2b88:1f6d::cb49:800d</td>
                                </tr>
                                <tr>
                                  <td>113</td>
                                  <td>(C1882) Kuldeep bundela</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>36</td>
                                  <td>NO</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:02:02</td>
                                  <td>
                                    2409:4043:220c:41f3:b94b:5cdc:9cbc:947a
                                  </td>
                                </tr>
                                <tr>
                                  <td>114</td>
                                  <td>(C4139) Aham</td>
                                  <td>1ST WKT RUNS MO</td>
                                  <td>0.8 </td>
                                  <td>10000 </td>
                                  <td>23</td>
                                  <td>YES</td>
                                  <td>8000</td>
                                  <td>10000</td>
                                  <td>16-08-2022 23:02:02</td>
                                  <td>2409:4043:2e98:8029::8549:3515</td>
                                </tr>
                                <tr>
                                  <td>115</td>
                                  <td>(C1916) Bholeshankar</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>159</td>
                                  <td>NO</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:02:04</td>
                                  <td>
                                    2405:201:3009:c864:9826:52c1:88f2:d23f
                                  </td>
                                </tr>
                                <tr>
                                  <td>116</td>
                                  <td>(C1413) Lodi</td>
                                  <td>1ST WKT RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>23</td>
                                  <td>NO</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:02:06</td>
                                  <td>106.76.75.9</td>
                                </tr>
                                <tr>
                                  <td>117</td>
                                  <td>(C4390) Mk002</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>37</td>
                                  <td>YES</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:02:06</td>
                                  <td>
                                    2405:205:1304:cbaf:dee2:484c:1142:edb9
                                  </td>
                                </tr>
                                <tr>
                                  <td>118</td>
                                  <td>(C4341) Sachin</td>
                                  <td>5 BALLS RUNS</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>4</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:02:07</td>
                                  <td>2402:8100:2290:57f3:0:19:7292:4401</td>
                                </tr>
                                <tr>
                                  <td>119</td>
                                  <td>(C3398) Bata</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>37</td>
                                  <td>YES</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:02:07</td>
                                  <td>2409:4053:e1b:1498::a0cb:f606</td>
                                </tr>
                                <tr>
                                  <td>120</td>
                                  <td>(C3414) Sonu</td>
                                  <td>5 BALLS RUNS</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>4</td>
                                  <td>YES</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:02:08</td>
                                  <td>
                                    2401:4900:5d81:8b4e:8dd0:e95b:ecf9:a74e
                                  </td>
                                </tr>
                                <tr>
                                  <td>121</td>
                                  <td>(C3404) Annaaa</td>
                                  <td>5 BALLS RUNS</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>4</td>
                                  <td>YES</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:02:09</td>
                                  <td>2409:4043:30e:fb9d:438d:d73c:e89:fab3</td>
                                </tr>
                                <tr>
                                  <td>122</td>
                                  <td>(C3106) Daru bala</td>
                                  <td>5 BALLS RUNS</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>4</td>
                                  <td>YES</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:02:09</td>
                                  <td>
                                    2409:4052:4d1c:9f23:5b66:6f89:8ee8:5490
                                  </td>
                                </tr>
                                <tr>
                                  <td>123</td>
                                  <td>(C3588) Rinku ji</td>
                                  <td>5 BALLS RUNS</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>4</td>
                                  <td>YES</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:02:13</td>
                                  <td>2409:4043:4b81:1818::208a:e706</td>
                                </tr>
                                <tr>
                                  <td>124</td>
                                  <td>(C4139) Aham</td>
                                  <td>1ST WKT RUNS MO</td>
                                  <td>0.8 </td>
                                  <td>10000 </td>
                                  <td>23</td>
                                  <td>YES</td>
                                  <td>8000</td>
                                  <td>10000</td>
                                  <td>16-08-2022 23:02:13</td>
                                  <td>2409:4043:2e98:8029::8549:3515</td>
                                </tr>
                                <tr>
                                  <td>125</td>
                                  <td>(C4267) Sanju</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>35</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:02:58</td>
                                  <td>2409:4053:2c9f:f4f::ad8b:d208</td>
                                </tr>
                                <tr>
                                  <td>126</td>
                                  <td>(C3721) Rahul bhai 2</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>35</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:02:58</td>
                                  <td>
                                    2409:4043:4b9a:9b7d:147e:20f8:f253:8cf6
                                  </td>
                                </tr>
                                <tr>
                                  <td>127</td>
                                  <td>(C4095) Poste</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>3865 </td>
                                  <td>35</td>
                                  <td>YES</td>
                                  <td>3865</td>
                                  <td>3865</td>
                                  <td>16-08-2022 23:02:59</td>
                                  <td>2409:4053:2e02:b11a::4b0a:90f</td>
                                </tr>
                                <tr>
                                  <td>128</td>
                                  <td>(C2552) SHUBHAM GNGA</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>35</td>
                                  <td>YES</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:03:00</td>
                                  <td>
                                    2409:4071:e81:bb47:3e90:eb0e:7aec:6f4d
                                  </td>
                                </tr>
                                <tr>
                                  <td>129</td>
                                  <td>(C4301) Dinesh</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>35</td>
                                  <td>YES</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:03:00</td>
                                  <td>
                                    2401:4900:5698:59dd:cc34:10e0:7ffa:4365
                                  </td>
                                </tr>
                                <tr>
                                  <td>130</td>
                                  <td>(C1541) Ank</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>20000 </td>
                                  <td>35</td>
                                  <td>YES</td>
                                  <td>20000</td>
                                  <td>20000</td>
                                  <td>16-08-2022 23:03:00</td>
                                  <td>2409:4043:2c9c:a57b::78c9:6f0b</td>
                                </tr>
                                <tr>
                                  <td>131</td>
                                  <td>(C1432) Mohan</td>
                                  <td>P SALT RUN</td>
                                  <td>1.00 </td>
                                  <td>300 </td>
                                  <td>19</td>
                                  <td>YES</td>
                                  <td>300</td>
                                  <td>300</td>
                                  <td>16-08-2022 23:03:01</td>
                                  <td>
                                    2401:4900:1c08:7385:bc06:5919:6959:6c91
                                  </td>
                                </tr>
                                <tr>
                                  <td>132</td>
                                  <td>(C3106) Daru bala</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>35</td>
                                  <td>YES</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:03:02</td>
                                  <td>
                                    2409:4052:4d1c:9f23:5b66:6f89:8ee8:5490
                                  </td>
                                </tr>
                                <tr>
                                  <td>133</td>
                                  <td>(C4307) Narendra</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>35</td>
                                  <td>YES</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:03:04</td>
                                  <td>
                                    2401:4900:55ca:2f77:3b15:7f9b:4617:b9bc
                                  </td>
                                </tr>
                                <tr>
                                  <td>134</td>
                                  <td>(C4084) Dimpal</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>159</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:03:04</td>
                                  <td>2409:4043:297:5504::19ea:a0a0</td>
                                </tr>
                                <tr>
                                  <td>135</td>
                                  <td>(C1413) Lodi</td>
                                  <td>J BUTTLER RUN</td>
                                  <td>0.9 </td>
                                  <td>200 </td>
                                  <td>25</td>
                                  <td>YES</td>
                                  <td>180</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:03:05</td>
                                  <td>106.76.75.9</td>
                                </tr>
                                <tr>
                                  <td>136</td>
                                  <td>(C3667) Kkkk</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>35</td>
                                  <td>YES</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:03:10</td>
                                  <td>2409:4043:2e87:357::b98a:8d15</td>
                                </tr>
                                <tr>
                                  <td>137</td>
                                  <td>(C2361) Bhaskar</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>35</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:03:11</td>
                                  <td>2409:4043:2213:14c8::2678:58a5</td>
                                </tr>
                                <tr>
                                  <td>138</td>
                                  <td>(C3533) Bhanu</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>5000 </td>
                                  <td>35</td>
                                  <td>YES</td>
                                  <td>5000</td>
                                  <td>5000</td>
                                  <td>16-08-2022 23:03:13</td>
                                  <td>27.63.18.57</td>
                                </tr>
                                <tr>
                                  <td>139</td>
                                  <td>(C1856) Deepae</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>35</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:03:13</td>
                                  <td>
                                    2409:4043:4d10:d93b:e515:85ff:c980:b9fb
                                  </td>
                                </tr>
                                <tr>
                                  <td>140</td>
                                  <td>(C1541) Ank</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>10000 </td>
                                  <td>159</td>
                                  <td>YES</td>
                                  <td>10000</td>
                                  <td>10000</td>
                                  <td>16-08-2022 23:03:13</td>
                                  <td>2409:4043:2c9c:a57b::78c9:6f0b</td>
                                </tr>
                                <tr>
                                  <td>141</td>
                                  <td>(C2536) Roxsatar</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>400 </td>
                                  <td>35</td>
                                  <td>YES</td>
                                  <td>400</td>
                                  <td>400</td>
                                  <td>16-08-2022 23:03:14</td>
                                  <td>2409:4043:2b9b:1fc8::528a:8615</td>
                                </tr>
                                <tr>
                                  <td>142</td>
                                  <td>(C3404) Annaaa</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>35</td>
                                  <td>YES</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:03:17</td>
                                  <td>2409:4043:30e:fb9d:438d:d73c:e89:fab3</td>
                                </tr>
                                <tr>
                                  <td>143</td>
                                  <td>(C4114) Man 6428</td>
                                  <td>P SALT RUN</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>19</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:03:18</td>
                                  <td>2409:4043:992:5f0c::2e7:60a5</td>
                                </tr>
                                <tr>
                                  <td>144</td>
                                  <td>(C3313) Monty</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>35</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:03:18</td>
                                  <td>2402:8100:2065:1f3a::d7a0:b14b</td>
                                </tr>
                                <tr>
                                  <td>145</td>
                                  <td>(C1617) MDJI</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>20000 </td>
                                  <td>35</td>
                                  <td>YES</td>
                                  <td>20000</td>
                                  <td>20000</td>
                                  <td>16-08-2022 23:03:21</td>
                                  <td>103.108.4.152</td>
                                </tr>
                                <tr>
                                  <td>146</td>
                                  <td>(C4114) Man 6428</td>
                                  <td>J BUTTLER RUN</td>
                                  <td>0.9 </td>
                                  <td>500 </td>
                                  <td>25</td>
                                  <td>YES</td>
                                  <td>450</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:03:22</td>
                                  <td>2409:4043:992:5f0c::2e7:60a5</td>
                                </tr>
                                <tr>
                                  <td>147</td>
                                  <td>(C4242) Babua gb</td>
                                  <td>J BUTTLER RUN</td>
                                  <td>0.9 </td>
                                  <td>1000 </td>
                                  <td>25</td>
                                  <td>YES</td>
                                  <td>900</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:03:23</td>
                                  <td>
                                    2409:4053:2e96:ca75:23e1:dbf2:4b65:38e1
                                  </td>
                                </tr>
                                <tr>
                                  <td>148</td>
                                  <td>(C1916) Bholeshankar</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>159</td>
                                  <td>YES</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:03:26</td>
                                  <td>
                                    2405:201:3009:c864:9826:52c1:88f2:d23f
                                  </td>
                                </tr>
                                <tr>
                                  <td>149</td>
                                  <td>(C1617) MDJI</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>20000 </td>
                                  <td>35</td>
                                  <td>YES</td>
                                  <td>20000</td>
                                  <td>20000</td>
                                  <td>16-08-2022 23:03:27</td>
                                  <td>103.108.4.152</td>
                                </tr>
                                <tr>
                                  <td>150</td>
                                  <td>(C3921) TANNU</td>
                                  <td>10 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>10</td>
                                  <td>YES</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:03:28</td>
                                  <td>106.66.3.140</td>
                                </tr>
                                <tr>
                                  <td>151</td>
                                  <td>(C4246) Jitendra</td>
                                  <td>10 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>10</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:03:29</td>
                                  <td>223.227.73.55</td>
                                </tr>
                                <tr>
                                  <td>152</td>
                                  <td>(C3530) Rajendra</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>10000 </td>
                                  <td>159</td>
                                  <td>YES</td>
                                  <td>10000</td>
                                  <td>10000</td>
                                  <td>16-08-2022 23:03:29</td>
                                  <td>
                                    2401:4900:447e:7279:874:87ed:8ec5:a15e
                                  </td>
                                </tr>
                                <tr>
                                  <td>153</td>
                                  <td>(C4088) Raj bhai</td>
                                  <td>1ST WKT RUNS MO</td>
                                  <td>0.9 </td>
                                  <td>500 </td>
                                  <td>23</td>
                                  <td>YES</td>
                                  <td>450</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:03:29</td>
                                  <td>2405:204:a591:d4b1::b13:38a5</td>
                                </tr>
                                <tr>
                                  <td>154</td>
                                  <td>(C1617) MDJI</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>20000 </td>
                                  <td>35</td>
                                  <td>YES</td>
                                  <td>20000</td>
                                  <td>20000</td>
                                  <td>16-08-2022 23:03:30</td>
                                  <td>103.108.4.152</td>
                                </tr>
                                <tr>
                                  <td>155</td>
                                  <td>(C4345) Ankesh</td>
                                  <td>10 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>3600 </td>
                                  <td>8</td>
                                  <td>YES</td>
                                  <td>3600</td>
                                  <td>3600</td>
                                  <td>16-08-2022 23:03:49</td>
                                  <td>2402:8100:2297:6e1:0:d:3be9:5a01</td>
                                </tr>
                                <tr>
                                  <td>156</td>
                                  <td>(C3921) TANNU</td>
                                  <td>10 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>8</td>
                                  <td>YES</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:03:49</td>
                                  <td>106.66.3.140</td>
                                </tr>
                                <tr>
                                  <td>157</td>
                                  <td>(C4274) Kapil</td>
                                  <td>10 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>3000 </td>
                                  <td>7</td>
                                  <td>NO</td>
                                  <td>3000</td>
                                  <td>3000</td>
                                  <td>16-08-2022 23:03:51</td>
                                  <td>
                                    2409:4053:59d:4522:9e9a:db2f:9be1:6524
                                  </td>
                                </tr>
                                <tr>
                                  <td>158</td>
                                  <td>(C4261) Tony 2 b</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>150 </td>
                                  <td>156</td>
                                  <td>NO</td>
                                  <td>150</td>
                                  <td>150</td>
                                  <td>16-08-2022 23:03:51</td>
                                  <td>2409:4053:2e0f:ba3d::528b:340b</td>
                                </tr>
                                <tr>
                                  <td>159</td>
                                  <td>(C3795) Ashok k</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>158</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:03:52</td>
                                  <td>2402:8100:3847:eb81:1:1:db6e:8433</td>
                                </tr>
                                <tr>
                                  <td>160</td>
                                  <td>(C1541) Ank</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>10000 </td>
                                  <td>34</td>
                                  <td>YES</td>
                                  <td>10000</td>
                                  <td>10000</td>
                                  <td>16-08-2022 23:03:54</td>
                                  <td>2409:4043:2c9c:a57b::78c9:6f0b</td>
                                </tr>
                                <tr>
                                  <td>161</td>
                                  <td>(C3108) Tarun</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>34</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:03:55</td>
                                  <td>2405:201:3007:f166:832:1412:9a1e:5a80</td>
                                </tr>
                                <tr>
                                  <td>162</td>
                                  <td>(C4341) Sachin</td>
                                  <td>10 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>8</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:03:55</td>
                                  <td>2402:8100:2290:57f3:0:19:7292:4401</td>
                                </tr>
                                <tr>
                                  <td>163</td>
                                  <td>(C4227) Samar bb</td>
                                  <td>J BUTTLER RUN</td>
                                  <td>0.9 </td>
                                  <td>350 </td>
                                  <td>25</td>
                                  <td>YES</td>
                                  <td>315</td>
                                  <td>350</td>
                                  <td>16-08-2022 23:03:55</td>
                                  <td>117.234.168.123</td>
                                </tr>
                                <tr>
                                  <td>164</td>
                                  <td>(C4127) Bablu</td>
                                  <td>10 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>8</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:03:55</td>
                                  <td>2409:4043:4e98:2a2f::2c9:fd03</td>
                                </tr>
                                <tr>
                                  <td>165</td>
                                  <td>(C4415) Rencho</td>
                                  <td>10 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>800 </td>
                                  <td>8</td>
                                  <td>YES</td>
                                  <td>800</td>
                                  <td>800</td>
                                  <td>16-08-2022 23:03:55</td>
                                  <td>
                                    2409:4053:70e:21b8:a5cd:8054:ae2c:7b6d
                                  </td>
                                </tr>
                                <tr>
                                  <td>166</td>
                                  <td>(C4246) Jitendra</td>
                                  <td>10 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>8</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:03:55</td>
                                  <td>223.227.73.55</td>
                                </tr>
                                <tr>
                                  <td>167</td>
                                  <td>(C2773) Vivek jiii</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>34</td>
                                  <td>YES</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:03:56</td>
                                  <td>2409:4043:59b:8235::223a:60a4</td>
                                </tr>
                                <tr>
                                  <td>168</td>
                                  <td>(C4367) Big B</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>34</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:03:56</td>
                                  <td>
                                    2409:4043:2486:95bb:6811:f0e4:7589:740f
                                  </td>
                                </tr>
                                <tr>
                                  <td>169</td>
                                  <td>(C4405) Yuvi</td>
                                  <td>10 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>4500 </td>
                                  <td>8</td>
                                  <td>YES</td>
                                  <td>4500</td>
                                  <td>4500</td>
                                  <td>16-08-2022 23:03:58</td>
                                  <td>2409:4043:2b88:1f6d::cb49:800d</td>
                                </tr>
                                <tr>
                                  <td>170</td>
                                  <td>(C2225) Laxman</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>300 </td>
                                  <td>34</td>
                                  <td>YES</td>
                                  <td>300</td>
                                  <td>300</td>
                                  <td>16-08-2022 23:04:00</td>
                                  <td>
                                    2409:4043:4d0e:86d3:6068:b676:e9a1:5992
                                  </td>
                                </tr>
                                <tr>
                                  <td>171</td>
                                  <td>(C2536) Roxsatar</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>34</td>
                                  <td>YES</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:04:00</td>
                                  <td>2409:4043:2b9b:1fc8::528a:8615</td>
                                </tr>
                                <tr>
                                  <td>172</td>
                                  <td>(C3530) Rajendra</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>10000 </td>
                                  <td>158</td>
                                  <td>YES</td>
                                  <td>10000</td>
                                  <td>10000</td>
                                  <td>16-08-2022 23:04:00</td>
                                  <td>
                                    2401:4900:447e:7279:874:87ed:8ec5:a15e
                                  </td>
                                </tr>
                                <tr>
                                  <td>173</td>
                                  <td>(C1916) Bholeshankar</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>161</td>
                                  <td>NO</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:04:21</td>
                                  <td>
                                    2405:201:3009:c864:9826:52c1:88f2:d23f
                                  </td>
                                </tr>
                                <tr>
                                  <td>174</td>
                                  <td>(C1413) Lodi</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>37</td>
                                  <td>NO</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:04:28</td>
                                  <td>106.76.75.9</td>
                                </tr>
                                <tr>
                                  <td>175</td>
                                  <td>(C2563) GOWDA</td>
                                  <td>1ST WKT RUNS MO</td>
                                  <td>0.9 </td>
                                  <td>100 </td>
                                  <td>29</td>
                                  <td>YES</td>
                                  <td>90</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:04:28</td>
                                  <td>
                                    2409:4041:e1b:3379:f1ef:a02a:5987:cc30
                                  </td>
                                </tr>
                                <tr>
                                  <td>176</td>
                                  <td>(C3514) Shivam</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>5000 </td>
                                  <td>161</td>
                                  <td>NO</td>
                                  <td>5000</td>
                                  <td>5000</td>
                                  <td>16-08-2022 23:04:31</td>
                                  <td>
                                    2409:4053:50a:ea5b:61b4:9d84:86b8:8d0d
                                  </td>
                                </tr>
                                <tr>
                                  <td>177</td>
                                  <td>(C1983) Vikrant</td>
                                  <td>10 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>13</td>
                                  <td>YES</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:04:32</td>
                                  <td>157.39.32.195</td>
                                </tr>
                                <tr>
                                  <td>178</td>
                                  <td>(C4261) Tony 2 b</td>
                                  <td>P SALT RUN</td>
                                  <td>0.9 </td>
                                  <td>100 </td>
                                  <td>25</td>
                                  <td>YES</td>
                                  <td>90</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:04:34</td>
                                  <td>2409:4053:2e0f:ba3d::528b:340b</td>
                                </tr>
                                <tr>
                                  <td>179</td>
                                  <td>(C4414) Amitabh</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>38</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:04:35</td>
                                  <td>
                                    2401:4900:472d:94ef:9559:964:8e58:96bc
                                  </td>
                                </tr>
                                <tr>
                                  <td>180</td>
                                  <td>(C1413) Lodi</td>
                                  <td>10 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>12</td>
                                  <td>NO</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:04:35</td>
                                  <td>106.76.75.9</td>
                                </tr>
                                <tr>
                                  <td>181</td>
                                  <td>(C2515) SUNIL</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>250 </td>
                                  <td>38</td>
                                  <td>YES</td>
                                  <td>250</td>
                                  <td>250</td>
                                  <td>16-08-2022 23:04:36</td>
                                  <td>27.63.245.196</td>
                                </tr>
                                <tr>
                                  <td>182</td>
                                  <td>(C2891) Vina</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>38</td>
                                  <td>YES</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:04:36</td>
                                  <td>
                                    2409:4053:619:2953:c6e0:9264:25b0:1d91
                                  </td>
                                </tr>
                                <tr>
                                  <td>183</td>
                                  <td>(C4139) Aham</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>5000 </td>
                                  <td>37</td>
                                  <td>NO</td>
                                  <td>5000</td>
                                  <td>5000</td>
                                  <td>16-08-2022 23:04:37</td>
                                  <td>2409:4043:2e98:8029::8549:3515</td>
                                </tr>
                                <tr>
                                  <td>184</td>
                                  <td>(C4377) Manish</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>42</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:04:53</td>
                                  <td>
                                    2409:4043:2b87:7d7c:810c:c444:ab5a:7b2
                                  </td>
                                </tr>
                                <tr>
                                  <td>185</td>
                                  <td>(C2227) Dr a singh</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>42</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:04:55</td>
                                  <td>2401:4900:417a:774d:0:20:d343:7e01</td>
                                </tr>
                                <tr>
                                  <td>186</td>
                                  <td>(C4267) Sanju</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>400 </td>
                                  <td>42</td>
                                  <td>YES</td>
                                  <td>400</td>
                                  <td>400</td>
                                  <td>16-08-2022 23:04:55</td>
                                  <td>2409:4053:2c9f:f4f::ad8b:d208</td>
                                </tr>
                                <tr>
                                  <td>187</td>
                                  <td>(C3530) Rajendra</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>10000 </td>
                                  <td>166</td>
                                  <td>NO</td>
                                  <td>10000</td>
                                  <td>10000</td>
                                  <td>16-08-2022 23:04:56</td>
                                  <td>
                                    2401:4900:447e:7279:874:87ed:8ec5:a15e
                                  </td>
                                </tr>
                                <tr>
                                  <td>188</td>
                                  <td>(C2099) Sunel</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>41</td>
                                  <td>NO</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:04:58</td>
                                  <td>2401:4900:414a:671a:0:1d:dadf:2101</td>
                                </tr>
                                <tr>
                                  <td>189</td>
                                  <td>(C3514) Shivam</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>41</td>
                                  <td>NO</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:04:58</td>
                                  <td>
                                    2409:4053:50a:ea5b:61b4:9d84:86b8:8d0d
                                  </td>
                                </tr>
                                <tr>
                                  <td>190</td>
                                  <td>(C2566) PREMA HB</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>3154 </td>
                                  <td>166</td>
                                  <td>NO</td>
                                  <td>3154</td>
                                  <td>3154</td>
                                  <td>16-08-2022 23:05:04</td>
                                  <td>
                                    2409:4071:248b:16f5:dc21:9d32:d73d:cf86
                                  </td>
                                </tr>
                                <tr>
                                  <td>191</td>
                                  <td>(C1541) Ank</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>20000 </td>
                                  <td>41</td>
                                  <td>NO</td>
                                  <td>20000</td>
                                  <td>20000</td>
                                  <td>16-08-2022 23:05:04</td>
                                  <td>2409:4043:2c9c:a57b::78c9:6f0b</td>
                                </tr>
                                <tr>
                                  <td>192</td>
                                  <td>(C3533) Bhanu</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>5000 </td>
                                  <td>41</td>
                                  <td>NO</td>
                                  <td>5000</td>
                                  <td>5000</td>
                                  <td>16-08-2022 23:05:05</td>
                                  <td>27.63.18.57</td>
                                </tr>
                                <tr>
                                  <td>193</td>
                                  <td>(C3108) Tarun</td>
                                  <td>10 BALLS RUN MO</td>
                                  <td>0.8 </td>
                                  <td>500 </td>
                                  <td>17</td>
                                  <td>YES</td>
                                  <td>400</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:05:06</td>
                                  <td>2405:201:3007:f166:832:1412:9a1e:5a80</td>
                                </tr>
                                <tr>
                                  <td>194</td>
                                  <td>(C4094) Love</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>41</td>
                                  <td>NO</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:05:08</td>
                                  <td>
                                    2401:4900:5c42:210f:d44:1884:e9a9:af48
                                  </td>
                                </tr>
                                <tr>
                                  <td>195</td>
                                  <td>(C2515) SUNIL</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>128 </td>
                                  <td>42</td>
                                  <td>YES</td>
                                  <td>128</td>
                                  <td>128</td>
                                  <td>16-08-2022 23:05:09</td>
                                  <td>27.63.245.196</td>
                                </tr>
                                <tr>
                                  <td>196</td>
                                  <td>(C3335) Saurabh</td>
                                  <td>1ST WKT RUNS MO</td>
                                  <td>0.9 </td>
                                  <td>250 </td>
                                  <td>35</td>
                                  <td>YES</td>
                                  <td>225</td>
                                  <td>250</td>
                                  <td>16-08-2022 23:05:09</td>
                                  <td>
                                    2401:4900:5c3b:8ec4:acb3:8b28:e4b4:bc2c
                                  </td>
                                </tr>
                                <tr>
                                  <td>197</td>
                                  <td>(C4390) Mk002</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>41</td>
                                  <td>NO</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:05:15</td>
                                  <td>
                                    2405:205:1304:cbaf:dee2:484c:1142:edb9
                                  </td>
                                </tr>
                                <tr>
                                  <td>198</td>
                                  <td>(C4139) Aham</td>
                                  <td>1ST WKT RUNS MO</td>
                                  <td>1.1 </td>
                                  <td>10000 </td>
                                  <td>35</td>
                                  <td>NO</td>
                                  <td>10000</td>
                                  <td>11000</td>
                                  <td>16-08-2022 23:05:18</td>
                                  <td>2409:4043:2e98:8029::8549:3515</td>
                                </tr>
                                <tr>
                                  <td>199</td>
                                  <td>(C4084) Dimpal</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>167</td>
                                  <td>NO</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:05:21</td>
                                  <td>2409:4043:297:5504::19ea:a0a0</td>
                                </tr>
                                <tr>
                                  <td>200</td>
                                  <td>(C4341) Sachin</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>42</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:05:27</td>
                                  <td>2402:8100:2290:57f3:0:19:7292:4401</td>
                                </tr>
                                <tr>
                                  <td>201</td>
                                  <td>(C4267) Sanju</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>400 </td>
                                  <td>46</td>
                                  <td>YES</td>
                                  <td>400</td>
                                  <td>400</td>
                                  <td>16-08-2022 23:05:47</td>
                                  <td>2409:4053:2c9f:f4f::ad8b:d208</td>
                                </tr>
                                <tr>
                                  <td>202</td>
                                  <td>(C3514) Shivam</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>5000 </td>
                                  <td>172</td>
                                  <td>NO</td>
                                  <td>5000</td>
                                  <td>5000</td>
                                  <td>16-08-2022 23:05:48</td>
                                  <td>
                                    2409:4053:50a:ea5b:61b4:9d84:86b8:8d0d
                                  </td>
                                </tr>
                                <tr>
                                  <td>203</td>
                                  <td>(C3530) Rajendra</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>10000 </td>
                                  <td>172</td>
                                  <td>NO</td>
                                  <td>10000</td>
                                  <td>10000</td>
                                  <td>16-08-2022 23:05:49</td>
                                  <td>
                                    2401:4900:447e:7279:874:87ed:8ec5:a15e
                                  </td>
                                </tr>
                                <tr>
                                  <td>204</td>
                                  <td>(C2083) Tanmay</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>46</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:05:54</td>
                                  <td>
                                    2405:201:3014:102c:dde2:7df9:bac0:972b
                                  </td>
                                </tr>
                                <tr>
                                  <td>205</td>
                                  <td>(C4199) ANNU BHAI</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>5000 </td>
                                  <td>46</td>
                                  <td>YES</td>
                                  <td>5000</td>
                                  <td>5000</td>
                                  <td>16-08-2022 23:05:58</td>
                                  <td>2409:4053:c99:d9d::ad88:500a</td>
                                </tr>
                                <tr>
                                  <td>206</td>
                                  <td>(C3404) Annaaa</td>
                                  <td>10 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>21</td>
                                  <td>YES</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:06:00</td>
                                  <td>2409:4043:30e:fb9d:438d:d73c:e89:fab3</td>
                                </tr>
                                <tr>
                                  <td>207</td>
                                  <td>(C3514) Shivam</td>
                                  <td>10 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>20</td>
                                  <td>NO</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:06:01</td>
                                  <td>
                                    2409:4053:50a:ea5b:61b4:9d84:86b8:8d0d
                                  </td>
                                </tr>
                                <tr>
                                  <td>208</td>
                                  <td>(C3945) Tannu</td>
                                  <td>1ST WKT RUNS MO</td>
                                  <td>0.9 </td>
                                  <td>700 </td>
                                  <td>40</td>
                                  <td>YES</td>
                                  <td>630</td>
                                  <td>700</td>
                                  <td>16-08-2022 23:06:03</td>
                                  <td>2409:4043:796:6f5c::7d6:70a5</td>
                                </tr>
                                <tr>
                                  <td>209</td>
                                  <td>(C1688) Anil</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>20000 </td>
                                  <td>174</td>
                                  <td>YES</td>
                                  <td>20000</td>
                                  <td>20000</td>
                                  <td>16-08-2022 23:06:04</td>
                                  <td>106.207.225.229</td>
                                </tr>
                                <tr>
                                  <td>210</td>
                                  <td>(C3816) Ram</td>
                                  <td>J BUTTLER RUN</td>
                                  <td>0.9 </td>
                                  <td>2000 </td>
                                  <td>25</td>
                                  <td>YES</td>
                                  <td>1800</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:06:04</td>
                                  <td>
                                    2409:4043:4e81:3368:6c6b:e44f:c956:b06c
                                  </td>
                                </tr>
                                <tr>
                                  <td>211</td>
                                  <td>(C4413) Vipin</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>4000 </td>
                                  <td>46</td>
                                  <td>YES</td>
                                  <td>4000</td>
                                  <td>4000</td>
                                  <td>16-08-2022 23:06:04</td>
                                  <td>2409:4043:16:60f1::17f0:c8a5</td>
                                </tr>
                                <tr>
                                  <td>212</td>
                                  <td>(C3588) Rinku ji</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>45</td>
                                  <td>NO</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:06:06</td>
                                  <td>2409:4043:4b81:1818::208a:e706</td>
                                </tr>
                                <tr>
                                  <td>213</td>
                                  <td>(C2563) GOWDA</td>
                                  <td>P SALT RUN</td>
                                  <td>0.9 </td>
                                  <td>100 </td>
                                  <td>37</td>
                                  <td>YES</td>
                                  <td>90</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:06:07</td>
                                  <td>
                                    2409:4041:e1b:3379:f1ef:a02a:5987:cc30
                                  </td>
                                </tr>
                                <tr>
                                  <td>214</td>
                                  <td>(C3530) Rajendra</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1290 </td>
                                  <td>45</td>
                                  <td>NO</td>
                                  <td>1290</td>
                                  <td>1290</td>
                                  <td>16-08-2022 23:06:08</td>
                                  <td>
                                    2401:4900:447e:7279:874:87ed:8ec5:a15e
                                  </td>
                                </tr>
                                <tr>
                                  <td>215</td>
                                  <td>(C4382) BT</td>
                                  <td>10 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>21</td>
                                  <td>YES</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:06:08</td>
                                  <td>2401:4900:1bc8:576d:1:2:74e6:822f</td>
                                </tr>
                                <tr>
                                  <td>216</td>
                                  <td>(C4193) Chiku</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>46</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:06:09</td>
                                  <td>27.63.184.72</td>
                                </tr>
                                <tr>
                                  <td>217</td>
                                  <td>(C1688) Anil</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>46</td>
                                  <td>YES</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:06:11</td>
                                  <td>106.207.225.229</td>
                                </tr>
                                <tr>
                                  <td>218</td>
                                  <td>(C4248) Bhrt bk</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>173</td>
                                  <td>NO</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:06:25</td>
                                  <td>45.251.43.161</td>
                                </tr>
                                <tr>
                                  <td>219</td>
                                  <td>(C3670) Monish</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>45</td>
                                  <td>NO</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:06:26</td>
                                  <td>103.211.53.70</td>
                                </tr>
                                <tr>
                                  <td>220</td>
                                  <td>(C3429) Sudi</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>45</td>
                                  <td>NO</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:06:28</td>
                                  <td>2409:4043:2099:7ea:34e3:47d2:e8c3:713</td>
                                </tr>
                                <tr>
                                  <td>221</td>
                                  <td>(C2169) Aarab</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>45</td>
                                  <td>NO</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:06:29</td>
                                  <td>2401:4900:5c4d:81e7::3e:5745</td>
                                </tr>
                                <tr>
                                  <td>222</td>
                                  <td>(C2283) Raju</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>199 </td>
                                  <td>45</td>
                                  <td>NO</td>
                                  <td>199</td>
                                  <td>199</td>
                                  <td>16-08-2022 23:06:33</td>
                                  <td>
                                    2401:4900:55bd:67d9:2578:2b5b:385a:cf13
                                  </td>
                                </tr>
                                <tr>
                                  <td>223</td>
                                  <td>(C1916) Bholeshankar</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>173</td>
                                  <td>NO</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:06:35</td>
                                  <td>
                                    2405:201:3009:c864:9826:52c1:88f2:d23f
                                  </td>
                                </tr>
                                <tr>
                                  <td>224</td>
                                  <td>(C3405) Ramkarn</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>173</td>
                                  <td>NO</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:06:36</td>
                                  <td>
                                    2402:8100:2398:64d3:778:5634:1232:5476
                                  </td>
                                </tr>
                                <tr>
                                  <td>225</td>
                                  <td>(C3219) Hemandra</td>
                                  <td>P SALT RUN</td>
                                  <td>0.9 </td>
                                  <td>120 </td>
                                  <td>38</td>
                                  <td>YES</td>
                                  <td>108</td>
                                  <td>120</td>
                                  <td>16-08-2022 23:06:40</td>
                                  <td>
                                    2409:4063:4d9d:cbab:9132:ca4b:9f38:d543
                                  </td>
                                </tr>
                                <tr>
                                  <td>226</td>
                                  <td>(C4170) Irfan</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>172</td>
                                  <td>NO</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:06:47</td>
                                  <td>
                                    2409:4070:4e0a:474b:c509:11cb:ebc1:143d
                                  </td>
                                </tr>
                                <tr>
                                  <td>227</td>
                                  <td>(C3721) Rahul bhai 2</td>
                                  <td>15 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>29</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:06:55</td>
                                  <td>
                                    2409:4043:4b9a:9b7d:147e:20f8:f253:8cf6
                                  </td>
                                </tr>
                                <tr>
                                  <td>228</td>
                                  <td>(C2083) Tanmay</td>
                                  <td>15 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>29</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:06:57</td>
                                  <td>
                                    2405:201:3014:102c:dde2:7df9:bac0:972b
                                  </td>
                                </tr>
                                <tr>
                                  <td>229</td>
                                  <td>(C3106) Daru bala</td>
                                  <td>15 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>29</td>
                                  <td>YES</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:07:00</td>
                                  <td>
                                    2409:4052:4d1c:9f23:5b66:6f89:8ee8:5490
                                  </td>
                                </tr>
                                <tr>
                                  <td>230</td>
                                  <td>(C2083) Tanmay</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>0.9 </td>
                                  <td>2000 </td>
                                  <td>45</td>
                                  <td>YES</td>
                                  <td>1800</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:07:02</td>
                                  <td>
                                    2405:201:3014:102c:dde2:7df9:bac0:972b
                                  </td>
                                </tr>
                                <tr>
                                  <td>231</td>
                                  <td>(C4367) Big B</td>
                                  <td>15 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>1100 </td>
                                  <td>29</td>
                                  <td>YES</td>
                                  <td>1100</td>
                                  <td>1100</td>
                                  <td>16-08-2022 23:07:03</td>
                                  <td>
                                    2409:4043:2486:95bb:6811:f0e4:7589:740f
                                  </td>
                                </tr>
                                <tr>
                                  <td>232</td>
                                  <td>(C2061) dewasis</td>
                                  <td>15 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>29</td>
                                  <td>YES</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:07:04</td>
                                  <td>223.239.60.96</td>
                                </tr>
                                <tr>
                                  <td>233</td>
                                  <td>(C4246) Jitendra</td>
                                  <td>15 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>29</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:07:08</td>
                                  <td>223.227.73.55</td>
                                </tr>
                                <tr>
                                  <td>234</td>
                                  <td>(C3435) Khatu baba 2</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>10000 </td>
                                  <td>172</td>
                                  <td>NO</td>
                                  <td>10000</td>
                                  <td>10000</td>
                                  <td>16-08-2022 23:07:08</td>
                                  <td>103.81.154.11</td>
                                </tr>
                                <tr>
                                  <td>235</td>
                                  <td>(C1882) Kuldeep bundela</td>
                                  <td>15 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>28</td>
                                  <td>NO</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:07:11</td>
                                  <td>
                                    2409:4043:220c:41f3:b94b:5cdc:9cbc:947a
                                  </td>
                                </tr>
                                <tr>
                                  <td>236</td>
                                  <td>(C3405) Ramkarn</td>
                                  <td>1ST WKT RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>42</td>
                                  <td>NO</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:07:16</td>
                                  <td>
                                    2402:8100:2398:64d3:778:5634:1232:5476
                                  </td>
                                </tr>
                                <tr>
                                  <td>237</td>
                                  <td>(C3921) TANNU</td>
                                  <td>15 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>27</td>
                                  <td>YES</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:07:41</td>
                                  <td>106.66.3.140</td>
                                </tr>
                                <tr>
                                  <td>238</td>
                                  <td>(C2225) Laxman</td>
                                  <td>15 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>27</td>
                                  <td>YES</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:07:42</td>
                                  <td>
                                    2409:4043:4d0e:86d3:6068:b676:e9a1:5992
                                  </td>
                                </tr>
                                <tr>
                                  <td>239</td>
                                  <td>(C3721) Rahul bhai 2</td>
                                  <td>15 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>27</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:07:43</td>
                                  <td>
                                    2409:4043:4b9a:9b7d:147e:20f8:f253:8cf6
                                  </td>
                                </tr>
                                <tr>
                                  <td>240</td>
                                  <td>(C2092) Ramveer</td>
                                  <td>15 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>27</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:07:45</td>
                                  <td>2401:4900:1b24:6cd5:2:1:cc70:3436</td>
                                </tr>
                                <tr>
                                  <td>241</td>
                                  <td>(C3806) Deepak</td>
                                  <td>15 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>27</td>
                                  <td>YES</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:07:46</td>
                                  <td>
                                    2401:4900:1f3a:50b0:c48b:20d4:f044:9f30
                                  </td>
                                </tr>
                                <tr>
                                  <td>242</td>
                                  <td>(C3404) Annaaa</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>43</td>
                                  <td>NO</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:07:47</td>
                                  <td>2409:4043:30e:fb9d:438d:d73c:e89:fab3</td>
                                </tr>
                                <tr>
                                  <td>243</td>
                                  <td>(C3735) agdhhcg</td>
                                  <td>15 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>5000 </td>
                                  <td>27</td>
                                  <td>YES</td>
                                  <td>5000</td>
                                  <td>5000</td>
                                  <td>16-08-2022 23:07:48</td>
                                  <td>
                                    2409:4043:2b00:ecad:586f:f553:3cb9:f761
                                  </td>
                                </tr>
                                <tr>
                                  <td>244</td>
                                  <td>(C2834) N k</td>
                                  <td>P SALT RUN</td>
                                  <td>1.2 </td>
                                  <td>500 </td>
                                  <td>38</td>
                                  <td>NO</td>
                                  <td>500</td>
                                  <td>600</td>
                                  <td>16-08-2022 23:07:49</td>
                                  <td>
                                    2409:4041:2d1d:2d71:d9e6:7d80:ec4:5924
                                  </td>
                                </tr>
                                <tr>
                                  <td>245</td>
                                  <td>(C4248) Bhrt bk</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>43</td>
                                  <td>NO</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:07:49</td>
                                  <td>45.251.43.161</td>
                                </tr>
                                <tr>
                                  <td>246</td>
                                  <td>(C1859) Alok</td>
                                  <td>15 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>1500 </td>
                                  <td>27</td>
                                  <td>YES</td>
                                  <td>1500</td>
                                  <td>1500</td>
                                  <td>16-08-2022 23:07:50</td>
                                  <td>2409:4043:4e1b:6bd3::8c8:9d08</td>
                                </tr>
                                <tr>
                                  <td>247</td>
                                  <td>(C4177) Kaushik</td>
                                  <td>15 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>300 </td>
                                  <td>27</td>
                                  <td>YES</td>
                                  <td>300</td>
                                  <td>300</td>
                                  <td>16-08-2022 23:07:51</td>
                                  <td>2409:4089:a299:94c0::207b:68ad</td>
                                </tr>
                                <tr>
                                  <td>248</td>
                                  <td>(C4246) Jitendra</td>
                                  <td>15 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>27</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:07:51</td>
                                  <td>223.227.73.55</td>
                                </tr>
                                <tr>
                                  <td>249</td>
                                  <td>(C2083) Tanmay</td>
                                  <td>1ST WKT RUNS MO</td>
                                  <td>0.8 </td>
                                  <td>1000 </td>
                                  <td>42</td>
                                  <td>YES</td>
                                  <td>800</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:07:52</td>
                                  <td>
                                    2405:201:3014:102c:dde2:7df9:bac0:972b
                                  </td>
                                </tr>
                                <tr>
                                  <td>250</td>
                                  <td>(C1813) Half engineering</td>
                                  <td>J BUTTLER RUN</td>
                                  <td>0.9 </td>
                                  <td>250 </td>
                                  <td>25</td>
                                  <td>YES</td>
                                  <td>225</td>
                                  <td>250</td>
                                  <td>16-08-2022 23:07:52</td>
                                  <td>2401:4900:5a4a:b51d::229:3f17</td>
                                </tr>
                                <tr>
                                  <td>251</td>
                                  <td>(C1432) Mohan</td>
                                  <td>P SALT RUN</td>
                                  <td>1.00 </td>
                                  <td>300 </td>
                                  <td>38</td>
                                  <td>YES</td>
                                  <td>300</td>
                                  <td>300</td>
                                  <td>16-08-2022 23:07:53</td>
                                  <td>
                                    2401:4900:1c08:7385:bc06:5919:6959:6c91
                                  </td>
                                </tr>
                                <tr>
                                  <td>252</td>
                                  <td>(C2092) Ramveer</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>43</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:08:06</td>
                                  <td>2401:4900:1b24:6cd5:2:1:cc70:3436</td>
                                </tr>
                                <tr>
                                  <td>253</td>
                                  <td>(C3025) Balaji</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>42</td>
                                  <td>NO</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:08:07</td>
                                  <td>
                                    2405:201:3002:e162:ec44:f202:feeb:e705
                                  </td>
                                </tr>
                                <tr>
                                  <td>254</td>
                                  <td>(C3530) Rajendra</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1290 </td>
                                  <td>43</td>
                                  <td>YES</td>
                                  <td>1290</td>
                                  <td>1290</td>
                                  <td>16-08-2022 23:08:09</td>
                                  <td>
                                    2401:4900:447e:7279:874:87ed:8ec5:a15e
                                  </td>
                                </tr>
                                <tr>
                                  <td>255</td>
                                  <td>(C4095) Poste</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>3000 </td>
                                  <td>42</td>
                                  <td>NO</td>
                                  <td>3000</td>
                                  <td>3000</td>
                                  <td>16-08-2022 23:08:13</td>
                                  <td>2409:4053:2e02:b11a::4b0a:90f</td>
                                </tr>
                                <tr>
                                  <td>256</td>
                                  <td>(C1983) Vikrant</td>
                                  <td>15 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>26</td>
                                  <td>YES</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:08:13</td>
                                  <td>157.39.32.195</td>
                                </tr>
                                <tr>
                                  <td>257</td>
                                  <td>(C2572) MANJUSSAM</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>169</td>
                                  <td>NO</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:08:13</td>
                                  <td>157.45.162.213</td>
                                </tr>
                                <tr>
                                  <td>258</td>
                                  <td>(C3435) Khatu baba 2</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>20000 </td>
                                  <td>169</td>
                                  <td>NO</td>
                                  <td>20000</td>
                                  <td>20000</td>
                                  <td>16-08-2022 23:08:16</td>
                                  <td>103.81.154.11</td>
                                </tr>
                                <tr>
                                  <td>259</td>
                                  <td>(C4345) Ankesh</td>
                                  <td>15 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>7200 </td>
                                  <td>26</td>
                                  <td>YES</td>
                                  <td>7200</td>
                                  <td>7200</td>
                                  <td>16-08-2022 23:08:16</td>
                                  <td>2402:8100:2297:6e1:0:d:3be9:5a01</td>
                                </tr>
                                <tr>
                                  <td>260</td>
                                  <td>(C2572) MANJUSSAM</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>169</td>
                                  <td>NO</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:08:16</td>
                                  <td>157.45.162.213</td>
                                </tr>
                                <tr>
                                  <td>261</td>
                                  <td>(C4414) Amitabh</td>
                                  <td>15 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>26</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:08:19</td>
                                  <td>
                                    2401:4900:472d:94ef:9559:964:8e58:96bc
                                  </td>
                                </tr>
                                <tr>
                                  <td>262</td>
                                  <td>(C3765) Rahul k</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>3000 </td>
                                  <td>42</td>
                                  <td>NO</td>
                                  <td>3000</td>
                                  <td>3000</td>
                                  <td>16-08-2022 23:08:20</td>
                                  <td>
                                    2401:4900:1a5c:641a:c04b:b3d7:8ceb:ca81
                                  </td>
                                </tr>
                                <tr>
                                  <td>263</td>
                                  <td>(C4267) Sanju</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>300 </td>
                                  <td>43</td>
                                  <td>YES</td>
                                  <td>300</td>
                                  <td>300</td>
                                  <td>16-08-2022 23:08:21</td>
                                  <td>2409:4053:2c9f:f4f::ad8b:d208</td>
                                </tr>
                                <tr>
                                  <td>264</td>
                                  <td>(C2572) MANJUSSAM</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>169</td>
                                  <td>NO</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:08:22</td>
                                  <td>157.45.162.213</td>
                                </tr>
                                <tr>
                                  <td>265</td>
                                  <td>(C3429) Sudi</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>43</td>
                                  <td>YES</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:08:24</td>
                                  <td>2409:4043:2099:7ea:34e3:47d2:e8c3:713</td>
                                </tr>
                                <tr>
                                  <td>266</td>
                                  <td>(C2834) N k</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>640 </td>
                                  <td>43</td>
                                  <td>YES</td>
                                  <td>640</td>
                                  <td>640</td>
                                  <td>16-08-2022 23:08:28</td>
                                  <td>
                                    2409:4041:2d1d:2d71:d9e6:7d80:ec4:5924
                                  </td>
                                </tr>
                                <tr>
                                  <td>267</td>
                                  <td>(C3219) Hemandra</td>
                                  <td>1ST WKT RUNS MO</td>
                                  <td>0.9 </td>
                                  <td>130 </td>
                                  <td>43</td>
                                  <td>YES</td>
                                  <td>117</td>
                                  <td>130</td>
                                  <td>16-08-2022 23:08:30</td>
                                  <td>
                                    2409:4063:4d9d:cbab:9132:ca4b:9f38:d543
                                  </td>
                                </tr>
                                <tr>
                                  <td>268</td>
                                  <td>(C4258) Saurabh</td>
                                  <td>1ST WKT RUNS MO</td>
                                  <td>0.9 </td>
                                  <td>200 </td>
                                  <td>46</td>
                                  <td>YES</td>
                                  <td>180</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:08:50</td>
                                  <td>
                                    2405:201:6800:719b:fdf0:b5ab:1062:4f1a
                                  </td>
                                </tr>
                                <tr>
                                  <td>269</td>
                                  <td>(C2572) MANJUSSAM</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>171</td>
                                  <td>NO</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:08:50</td>
                                  <td>157.45.162.213</td>
                                </tr>
                                <tr>
                                  <td>270</td>
                                  <td>(C1688) Anil</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>45</td>
                                  <td>YES</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:08:51</td>
                                  <td>106.207.225.229</td>
                                </tr>
                                <tr>
                                  <td>271</td>
                                  <td>(C4388) Aaaaa</td>
                                  <td>1ST WKT RUNS MO</td>
                                  <td>0.9 </td>
                                  <td>900 </td>
                                  <td>46</td>
                                  <td>YES</td>
                                  <td>810</td>
                                  <td>900</td>
                                  <td>16-08-2022 23:08:52</td>
                                  <td>
                                    2401:4900:1c08:3af3:5441:cbbb:6ea9:335e
                                  </td>
                                </tr>
                                <tr>
                                  <td>272</td>
                                  <td>(C4116) Jeet</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>45</td>
                                  <td>YES</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:08:55</td>
                                  <td>2409:4041:e18:7841::f04a:b505</td>
                                </tr>
                                <tr>
                                  <td>273</td>
                                  <td>(C3406) Mahte</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>130 </td>
                                  <td>45</td>
                                  <td>YES</td>
                                  <td>130</td>
                                  <td>130</td>
                                  <td>16-08-2022 23:08:57</td>
                                  <td>
                                    2401:4900:55b2:78e5:f948:5c1b:dfd2:5fe4
                                  </td>
                                </tr>
                                <tr>
                                  <td>274</td>
                                  <td>(C4415) Rencho</td>
                                  <td>15 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>28</td>
                                  <td>NO</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:08:58</td>
                                  <td>
                                    2409:4053:70e:21b8:a5cd:8054:ae2c:7b6d
                                  </td>
                                </tr>
                                <tr>
                                  <td>275</td>
                                  <td>(C2536) Roxsatar</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>45</td>
                                  <td>YES</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:08:58</td>
                                  <td>2409:4043:2b9b:1fc8::528a:8615</td>
                                </tr>
                                <tr>
                                  <td>276</td>
                                  <td>(C2572) MANJUSSAM</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>171</td>
                                  <td>NO</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:08:59</td>
                                  <td>157.45.162.213</td>
                                </tr>
                                <tr>
                                  <td>277</td>
                                  <td>(C4170) Irfan</td>
                                  <td>1ST WKT RUNS MO</td>
                                  <td>1.1 </td>
                                  <td>500 </td>
                                  <td>46</td>
                                  <td>NO</td>
                                  <td>500</td>
                                  <td>550</td>
                                  <td>16-08-2022 23:08:59</td>
                                  <td>
                                    2409:4070:4e0a:474b:c509:11cb:ebc1:143d
                                  </td>
                                </tr>
                                <tr>
                                  <td>278</td>
                                  <td>(C2563) GOWDA</td>
                                  <td>J BUTTLER RUN</td>
                                  <td>0.9 </td>
                                  <td>100 </td>
                                  <td>29</td>
                                  <td>YES</td>
                                  <td>90</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:09:00</td>
                                  <td>
                                    2409:4041:e1b:3379:f1ef:a02a:5987:cc30
                                  </td>
                                </tr>
                                <tr>
                                  <td>279</td>
                                  <td>(C3765) Rahul k</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>44</td>
                                  <td>NO</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:09:03</td>
                                  <td>
                                    2401:4900:1a5c:641a:c04b:b3d7:8ceb:ca81
                                  </td>
                                </tr>
                                <tr>
                                  <td>280</td>
                                  <td>(C4274) Kapil</td>
                                  <td>15 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>3700 </td>
                                  <td>28</td>
                                  <td>NO</td>
                                  <td>3700</td>
                                  <td>3700</td>
                                  <td>16-08-2022 23:09:07</td>
                                  <td>
                                    2409:4053:59d:4522:9e9a:db2f:9be1:6524
                                  </td>
                                </tr>
                                <tr>
                                  <td>281</td>
                                  <td>(C3514) Shivam</td>
                                  <td>1ST WKT RUNS MO</td>
                                  <td>1.1 </td>
                                  <td>5000 </td>
                                  <td>47</td>
                                  <td>NO</td>
                                  <td>5000</td>
                                  <td>5500</td>
                                  <td>16-08-2022 23:09:23</td>
                                  <td>
                                    2409:4053:50a:ea5b:61b4:9d84:86b8:8d0d
                                  </td>
                                </tr>
                                <tr>
                                  <td>282</td>
                                  <td>(C4248) Bhrt bk</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>45</td>
                                  <td>NO</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:09:24</td>
                                  <td>45.251.43.161</td>
                                </tr>
                                <tr>
                                  <td>283</td>
                                  <td>(C2283) Raju</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>46</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:09:24</td>
                                  <td>
                                    2401:4900:55c3:4830:9f39:3bd6:9f3b:f8c0
                                  </td>
                                </tr>
                                <tr>
                                  <td>284</td>
                                  <td>(C4383) Vishal</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>3500 </td>
                                  <td>46</td>
                                  <td>YES</td>
                                  <td>3500</td>
                                  <td>3500</td>
                                  <td>16-08-2022 23:09:26</td>
                                  <td>
                                    2401:4900:c0f:204f:c52b:c624:2978:46f3
                                  </td>
                                </tr>
                                <tr>
                                  <td>285</td>
                                  <td>(C4421) Rahul</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>46</td>
                                  <td>YES</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:09:27</td>
                                  <td>2409:4043:2187:934::2582:60a4</td>
                                </tr>
                                <tr>
                                  <td>286</td>
                                  <td>(C2834) N k</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>45</td>
                                  <td>NO</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:09:29</td>
                                  <td>
                                    2409:4041:2d1d:2d71:d9e6:7d80:ec4:5924
                                  </td>
                                </tr>
                                <tr>
                                  <td>287</td>
                                  <td>(C4374) Abcd</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>45</td>
                                  <td>NO</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:09:31</td>
                                  <td>2409:4043:2:9404:e85e:24ff:febb:e992</td>
                                </tr>
                                <tr>
                                  <td>288</td>
                                  <td>(C4341) Sachin</td>
                                  <td>15 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>29</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:09:34</td>
                                  <td>2402:8100:2290:57f3:0:19:7292:4401</td>
                                </tr>
                                <tr>
                                  <td>289</td>
                                  <td>(C4261) Tony 2 b</td>
                                  <td>J BUTTLER RUN</td>
                                  <td>0.8 </td>
                                  <td>200 </td>
                                  <td>31</td>
                                  <td>YES</td>
                                  <td>160</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:09:36</td>
                                  <td>2409:4053:2e0f:ba3d::528b:340b</td>
                                </tr>
                                <tr>
                                  <td>290</td>
                                  <td>(C3665) Noida1</td>
                                  <td>P SALT BOUNDARIES</td>
                                  <td>0.85 </td>
                                  <td>500 </td>
                                  <td>6</td>
                                  <td>YES</td>
                                  <td>425</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:09:37</td>
                                  <td>2401:4900:30db:c4cf:0:59:48f2:e701</td>
                                </tr>
                                <tr>
                                  <td>291</td>
                                  <td>(C4220) Kuldeep h</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>43</td>
                                  <td>NO</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:09:53</td>
                                  <td>2402:3a80:1a5e:3a6a::ba85:7237</td>
                                </tr>
                                <tr>
                                  <td>292</td>
                                  <td>(C4407) Guru</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>170</td>
                                  <td>NO</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:09:54</td>
                                  <td>103.179.114.238</td>
                                </tr>
                                <tr>
                                  <td>293</td>
                                  <td>(C3313) Monty</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>150 </td>
                                  <td>44</td>
                                  <td>YES</td>
                                  <td>150</td>
                                  <td>150</td>
                                  <td>16-08-2022 23:09:57</td>
                                  <td>2402:8100:2065:1f3a::d7a0:b14b</td>
                                </tr>
                                <tr>
                                  <td>294</td>
                                  <td>(C4261) Tony 2 b</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>43</td>
                                  <td>NO</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:10:01</td>
                                  <td>2409:4053:2e0f:ba3d::528b:340b</td>
                                </tr>
                                <tr>
                                  <td>295</td>
                                  <td>(C4254) Rishab</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>3000 </td>
                                  <td>43</td>
                                  <td>NO</td>
                                  <td>3000</td>
                                  <td>3000</td>
                                  <td>16-08-2022 23:10:03</td>
                                  <td>27.63.190.37</td>
                                </tr>
                                <tr>
                                  <td>296</td>
                                  <td>(C4374) Abcd</td>
                                  <td>P SALT BOUNDARIES</td>
                                  <td>0.85 </td>
                                  <td>511 </td>
                                  <td>6</td>
                                  <td>YES</td>
                                  <td>434.35</td>
                                  <td>511</td>
                                  <td>16-08-2022 23:10:03</td>
                                  <td>2409:4043:2:9404:e85e:24ff:febb:e992</td>
                                </tr>
                                <tr>
                                  <td>297</td>
                                  <td>(C4246) Jitendra</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>0.9 </td>
                                  <td>500 </td>
                                  <td>44</td>
                                  <td>YES</td>
                                  <td>450</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:10:08</td>
                                  <td>223.227.73.55</td>
                                </tr>
                                <tr>
                                  <td>298</td>
                                  <td>(C1856) Deepae</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>0.9 </td>
                                  <td>1000 </td>
                                  <td>44</td>
                                  <td>YES</td>
                                  <td>900</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:10:09</td>
                                  <td>
                                    2409:4043:4d10:d93b:e515:85ff:c980:b9fb
                                  </td>
                                </tr>
                                <tr>
                                  <td>299</td>
                                  <td>(C4267) Sanju</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>0.9 </td>
                                  <td>300 </td>
                                  <td>44</td>
                                  <td>YES</td>
                                  <td>270</td>
                                  <td>300</td>
                                  <td>16-08-2022 23:10:11</td>
                                  <td>2409:4053:2c9f:f4f::ad8b:d208</td>
                                </tr>
                                <tr>
                                  <td>300</td>
                                  <td>(C1916) Bholeshankar</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>172</td>
                                  <td>YES</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:10:12</td>
                                  <td>
                                    2405:201:3009:c864:9826:52c1:88f2:d23f
                                  </td>
                                </tr>
                                <tr>
                                  <td>301</td>
                                  <td>(C1541) Ank</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>10000 </td>
                                  <td>170</td>
                                  <td>NO</td>
                                  <td>10000</td>
                                  <td>10000</td>
                                  <td>16-08-2022 23:10:12</td>
                                  <td>2409:4043:2c9c:a57b::78c9:6f0b</td>
                                </tr>
                                <tr>
                                  <td>302</td>
                                  <td>(C4261) Tony 2 b</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>170</td>
                                  <td>NO</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:10:16</td>
                                  <td>2409:4053:2e0f:ba3d::528b:340b</td>
                                </tr>
                                <tr>
                                  <td>303</td>
                                  <td>(C4139) Aham</td>
                                  <td>1ST WKT RUNS MO</td>
                                  <td>0.9 </td>
                                  <td>10000 </td>
                                  <td>47</td>
                                  <td>YES</td>
                                  <td>9000</td>
                                  <td>10000</td>
                                  <td>16-08-2022 23:10:16</td>
                                  <td>2409:4043:2e98:8029::8549:3515</td>
                                </tr>
                                <tr>
                                  <td>304</td>
                                  <td>(C4254) Rishab</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.1 </td>
                                  <td>1000 </td>
                                  <td>44</td>
                                  <td>NO</td>
                                  <td>1000</td>
                                  <td>1100</td>
                                  <td>16-08-2022 23:10:17</td>
                                  <td>27.63.190.37</td>
                                </tr>
                                <tr>
                                  <td>305</td>
                                  <td>(C4127) Bablu</td>
                                  <td>1ST WKT RUNS MO</td>
                                  <td>0.9 </td>
                                  <td>2000 </td>
                                  <td>47</td>
                                  <td>YES</td>
                                  <td>1800</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:10:17</td>
                                  <td>2409:4043:4e98:2a2f::2c9:fd03</td>
                                </tr>
                                <tr>
                                  <td>306</td>
                                  <td>(C3683) Lucky bhai</td>
                                  <td>P SALT RUN</td>
                                  <td>0.9 </td>
                                  <td>20000 </td>
                                  <td>38</td>
                                  <td>YES</td>
                                  <td>18000</td>
                                  <td>20000</td>
                                  <td>16-08-2022 23:10:19</td>
                                  <td>
                                    2409:4043:2c16:1a8e:b272:2f05:c104:7409
                                  </td>
                                </tr>
                                <tr>
                                  <td>307</td>
                                  <td>(C3721) Rahul bhai 2</td>
                                  <td>20 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>36</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:10:28</td>
                                  <td>
                                    2409:4043:4b9a:9b7d:147e:20f8:f253:8cf6
                                  </td>
                                </tr>
                                <tr>
                                  <td>308</td>
                                  <td>(C3921) TANNU</td>
                                  <td>20 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>36</td>
                                  <td>YES</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:10:29</td>
                                  <td>106.66.3.140</td>
                                </tr>
                                <tr>
                                  <td>309</td>
                                  <td>(C4341) Sachin</td>
                                  <td>20 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>36</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:10:30</td>
                                  <td>2402:8100:2290:57f3:0:19:7292:4401</td>
                                </tr>
                                <tr>
                                  <td>310</td>
                                  <td>(C3794) Rohan</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>170</td>
                                  <td>NO</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:10:31</td>
                                  <td>
                                    2405:201:5c0a:7204:c573:4a1c:c5f3:736b
                                  </td>
                                </tr>
                                <tr>
                                  <td>311</td>
                                  <td>(C1882) Kuldeep bundela</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>44</td>
                                  <td>NO</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:10:32</td>
                                  <td>
                                    2409:4043:220c:41f3:b94b:5cdc:9cbc:947a
                                  </td>
                                </tr>
                                <tr>
                                  <td>312</td>
                                  <td>(C4046) Vinod bhai</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>44</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:10:47</td>
                                  <td>
                                    2409:4050:2e01:ce46:b6ee:cfb8:e5b1:bf84
                                  </td>
                                </tr>
                                <tr>
                                  <td>313</td>
                                  <td>(C1983) Vikrant</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>44</td>
                                  <td>YES</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:10:49</td>
                                  <td>157.39.32.195</td>
                                </tr>
                                <tr>
                                  <td>314</td>
                                  <td>(C2555) AMRIT RAJ</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>5000 </td>
                                  <td>44</td>
                                  <td>YES</td>
                                  <td>5000</td>
                                  <td>5000</td>
                                  <td>16-08-2022 23:10:50</td>
                                  <td>
                                    2405:201:a404:cbbc:8175:1d42:1fde:2e16
                                  </td>
                                </tr>
                                <tr>
                                  <td>315</td>
                                  <td>(C4088) Raj bhai</td>
                                  <td>1ST WKT RUNS MO</td>
                                  <td>0.9 </td>
                                  <td>500 </td>
                                  <td>48</td>
                                  <td>YES</td>
                                  <td>450</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:10:50</td>
                                  <td>2405:204:a591:d4b1::b13:38a5</td>
                                </tr>
                                <tr>
                                  <td>316</td>
                                  <td>(C4381) Atul 2</td>
                                  <td>20 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>675 </td>
                                  <td>35</td>
                                  <td>NO</td>
                                  <td>675</td>
                                  <td>675</td>
                                  <td>16-08-2022 23:10:50</td>
                                  <td>
                                    2401:4900:51c2:9f43:3df3:32bb:8625:85c8
                                  </td>
                                </tr>
                                <tr>
                                  <td>317</td>
                                  <td>(C2052) Veeru</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>44</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:10:51</td>
                                  <td>
                                    2409:4043:4e81:3368:6c6b:e44f:c956:b06c
                                  </td>
                                </tr>
                                <tr>
                                  <td>318</td>
                                  <td>(C4382) BT</td>
                                  <td>20 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>36</td>
                                  <td>YES</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:10:52</td>
                                  <td>2401:4900:1bc8:576d:1:2:74e6:822f</td>
                                </tr>
                                <tr>
                                  <td>319</td>
                                  <td>(C4177) Kaushik</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>172</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:10:52</td>
                                  <td>2409:4089:a299:94c0::207b:68ad</td>
                                </tr>
                                <tr>
                                  <td>320</td>
                                  <td>(C3898) Lala 2</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>140 </td>
                                  <td>44</td>
                                  <td>YES</td>
                                  <td>140</td>
                                  <td>140</td>
                                  <td>16-08-2022 23:10:52</td>
                                  <td>2409:4043:496:d95a::9f7:b1</td>
                                </tr>
                                <tr>
                                  <td>321</td>
                                  <td>(C1859) Alok</td>
                                  <td>20 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>1500 </td>
                                  <td>36</td>
                                  <td>YES</td>
                                  <td>1500</td>
                                  <td>1500</td>
                                  <td>16-08-2022 23:10:56</td>
                                  <td>2409:4043:4e1b:6bd3::8c8:9d08</td>
                                </tr>
                                <tr>
                                  <td>322</td>
                                  <td>(C4405) Yuvi</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>4000 </td>
                                  <td>170</td>
                                  <td>NO</td>
                                  <td>4000</td>
                                  <td>4000</td>
                                  <td>16-08-2022 23:10:57</td>
                                  <td>2409:4043:2b88:1f6d::cb49:800d</td>
                                </tr>
                                <tr>
                                  <td>323</td>
                                  <td>(C3405) Ramkarn</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>170</td>
                                  <td>NO</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:10:58</td>
                                  <td>
                                    2402:8100:2398:64d3:778:5634:1232:5476
                                  </td>
                                </tr>
                                <tr>
                                  <td>324</td>
                                  <td>(C4274) Kapil</td>
                                  <td>20 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>4000 </td>
                                  <td>35</td>
                                  <td>NO</td>
                                  <td>4000</td>
                                  <td>4000</td>
                                  <td>16-08-2022 23:11:03</td>
                                  <td>
                                    2409:4053:59d:4522:9e9a:db2f:9be1:6524
                                  </td>
                                </tr>
                                <tr>
                                  <td>325</td>
                                  <td>(C4094) Love</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>42</td>
                                  <td>NO</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:11:14</td>
                                  <td>
                                    2401:4900:5c42:210f:d44:1884:e9a9:af48
                                  </td>
                                </tr>
                                <tr>
                                  <td>326</td>
                                  <td>(C4246) Jitendra</td>
                                  <td>20 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>34</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:11:16</td>
                                  <td>223.227.73.55</td>
                                </tr>
                                <tr>
                                  <td>327</td>
                                  <td>(C2225) Laxman</td>
                                  <td>20 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>34</td>
                                  <td>YES</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:11:17</td>
                                  <td>
                                    2409:4043:4d0e:86d3:6068:b676:e9a1:5992
                                  </td>
                                </tr>
                                <tr>
                                  <td>328</td>
                                  <td>(C3993) Jain</td>
                                  <td>20 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>33</td>
                                  <td>NO</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:11:18</td>
                                  <td>2402:8100:2292:95e5:0:1:574f:4501</td>
                                </tr>
                                <tr>
                                  <td>329</td>
                                  <td>(C4248) Bhrt bk</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>43</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:11:19</td>
                                  <td>45.251.43.161</td>
                                </tr>
                                <tr>
                                  <td>330</td>
                                  <td>(C3514) Shivam</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>42</td>
                                  <td>NO</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:11:19</td>
                                  <td>
                                    2409:4053:50a:ea5b:61b4:9d84:86b8:8d0d
                                  </td>
                                </tr>
                                <tr>
                                  <td>331</td>
                                  <td>(C3763) Bunty</td>
                                  <td>20 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>33</td>
                                  <td>NO</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:11:23</td>
                                  <td>2409:4053:228b:d414::84:8b1</td>
                                </tr>
                                <tr>
                                  <td>332</td>
                                  <td>(C3591) Om shanti</td>
                                  <td>1ST WKT RUNS MO</td>
                                  <td>1.1 </td>
                                  <td>500 </td>
                                  <td>48</td>
                                  <td>NO</td>
                                  <td>500</td>
                                  <td>550</td>
                                  <td>16-08-2022 23:11:24</td>
                                  <td>
                                    2401:4900:55bd:67d9:2578:2b5b:385a:cf13
                                  </td>
                                </tr>
                                <tr>
                                  <td>333</td>
                                  <td>(C4414) Amitabh</td>
                                  <td>20 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>34</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:11:25</td>
                                  <td>
                                    2401:4900:472d:94ef:9559:964:8e58:96bc
                                  </td>
                                </tr>
                                <tr>
                                  <td>334</td>
                                  <td>(C4345) Ankesh</td>
                                  <td>20 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>14400 </td>
                                  <td>34</td>
                                  <td>YES</td>
                                  <td>14400</td>
                                  <td>14400</td>
                                  <td>16-08-2022 23:11:27</td>
                                  <td>2402:8100:2297:6e1:0:d:3be9:5a01</td>
                                </tr>
                                <tr>
                                  <td>335</td>
                                  <td>(C3735) agdhhcg</td>
                                  <td>20 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>5000 </td>
                                  <td>34</td>
                                  <td>YES</td>
                                  <td>5000</td>
                                  <td>5000</td>
                                  <td>16-08-2022 23:11:28</td>
                                  <td>
                                    2409:4043:2b00:ecad:586f:f553:3cb9:f761
                                  </td>
                                </tr>
                                <tr>
                                  <td>336</td>
                                  <td>(C3537) New bhola</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>43</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:11:31</td>
                                  <td>2409:4043:2c82:d946::9a09:c811</td>
                                </tr>
                                <tr>
                                  <td>337</td>
                                  <td>(C2092) Ramveer</td>
                                  <td>20 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>34</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:11:31</td>
                                  <td>2401:4900:1b24:6cd5:2:1:cc70:3436</td>
                                </tr>
                                <tr>
                                  <td>338</td>
                                  <td>(C4084) Dimpal</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>171</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:11:33</td>
                                  <td>2409:4043:297:5504::19ea:a0a0</td>
                                </tr>
                                <tr>
                                  <td>339</td>
                                  <td>(C3537) New bhola</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>44</td>
                                  <td>NO</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:11:47</td>
                                  <td>2409:4043:2c82:d946::9a09:c811</td>
                                </tr>
                                <tr>
                                  <td>340</td>
                                  <td>(C3591) Om shanti</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>123 </td>
                                  <td>44</td>
                                  <td>NO</td>
                                  <td>123</td>
                                  <td>123</td>
                                  <td>16-08-2022 23:11:55</td>
                                  <td>
                                    2401:4900:55bd:67d9:2578:2b5b:385a:cf13
                                  </td>
                                </tr>
                                <tr>
                                  <td>341</td>
                                  <td>(C4191) Viney</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>45</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:11:57</td>
                                  <td>
                                    2405:201:6818:d045:586d:409e:5423:f7a0
                                  </td>
                                </tr>
                                <tr>
                                  <td>342</td>
                                  <td>(C3618) Adety</td>
                                  <td>P SALT BOUNDARIES</td>
                                  <td>0.85 </td>
                                  <td>210 </td>
                                  <td>7</td>
                                  <td>YES</td>
                                  <td>178.5</td>
                                  <td>210</td>
                                  <td>16-08-2022 23:12:00</td>
                                  <td>2409:4043:99e:d5d5::2425:98ad</td>
                                </tr>
                                <tr>
                                  <td>343</td>
                                  <td>(C4415) Rencho</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>44</td>
                                  <td>NO</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:12:02</td>
                                  <td>
                                    2409:4053:70e:21b8:a5cd:8054:ae2c:7b6d
                                  </td>
                                </tr>
                                <tr>
                                  <td>344</td>
                                  <td>(C3108) Tarun</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>45</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:12:02</td>
                                  <td>2405:201:3007:f166:832:1412:9a1e:5a80</td>
                                </tr>
                                <tr>
                                  <td>345</td>
                                  <td>(C4364) Shivji</td>
                                  <td>1ST WKT RUNS MO</td>
                                  <td>0.8 </td>
                                  <td>100 </td>
                                  <td>52</td>
                                  <td>YES</td>
                                  <td>80</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:12:04</td>
                                  <td>2402:8100:22b9:a9a9:52cb:4:1c17:4a55</td>
                                </tr>
                                <tr>
                                  <td>346</td>
                                  <td>(C2972) Bhola</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>45</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:12:05</td>
                                  <td>
                                    2409:4053:50c:6407:eccd:d3c3:3f81:e6b6
                                  </td>
                                </tr>
                                <tr>
                                  <td>347</td>
                                  <td>(C3735) agdhhcg</td>
                                  <td>20 BALLS RUN MO</td>
                                  <td>0.85 </td>
                                  <td>5000 </td>
                                  <td>36</td>
                                  <td>YES</td>
                                  <td>4250</td>
                                  <td>5000</td>
                                  <td>16-08-2022 23:12:05</td>
                                  <td>
                                    2409:4043:2b00:ecad:586f:f553:3cb9:f761
                                  </td>
                                </tr>
                                <tr>
                                  <td>348</td>
                                  <td>(C4139) Aham</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>10000 </td>
                                  <td>175</td>
                                  <td>NO</td>
                                  <td>10000</td>
                                  <td>10000</td>
                                  <td>16-08-2022 23:12:20</td>
                                  <td>2409:4043:2e98:8029::8549:3515</td>
                                </tr>
                                <tr>
                                  <td>349</td>
                                  <td>(C4267) Sanju</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>0.9 </td>
                                  <td>400 </td>
                                  <td>49</td>
                                  <td>YES</td>
                                  <td>360</td>
                                  <td>400</td>
                                  <td>16-08-2022 23:12:24</td>
                                  <td>2409:4053:2c9f:f4f::ad8b:d208</td>
                                </tr>
                                <tr>
                                  <td>350</td>
                                  <td>(C3945) Tannu</td>
                                  <td>1ST WKT RUNS MO</td>
                                  <td>0.9 </td>
                                  <td>700 </td>
                                  <td>59</td>
                                  <td>YES</td>
                                  <td>630</td>
                                  <td>700</td>
                                  <td>16-08-2022 23:12:26</td>
                                  <td>2409:4043:796:6f5c::7d6:70a5</td>
                                </tr>
                                <tr>
                                  <td>351</td>
                                  <td>(C3025) Balaji</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>0.9 </td>
                                  <td>500 </td>
                                  <td>49</td>
                                  <td>YES</td>
                                  <td>450</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:12:28</td>
                                  <td>
                                    2405:201:3002:e162:ec44:f202:feeb:e705
                                  </td>
                                </tr>
                                <tr>
                                  <td>352</td>
                                  <td>(C4261) Tony 2 b</td>
                                  <td>J BUTTLER RUN</td>
                                  <td>0.8 </td>
                                  <td>100 </td>
                                  <td>33</td>
                                  <td>YES</td>
                                  <td>80</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:12:29</td>
                                  <td>2409:4053:2e0f:ba3d::528b:340b</td>
                                </tr>
                                <tr>
                                  <td>353</td>
                                  <td>(C4084) Dimpal</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>175</td>
                                  <td>NO</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:12:29</td>
                                  <td>2409:4043:297:5504::19ea:a0a0</td>
                                </tr>
                                <tr>
                                  <td>354</td>
                                  <td>(C3405) Ramkarn</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>175</td>
                                  <td>NO</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:12:32</td>
                                  <td>
                                    2402:8100:2398:64d3:778:5634:1232:5476
                                  </td>
                                </tr>
                                <tr>
                                  <td>355</td>
                                  <td>(C4139) Aham</td>
                                  <td>1ST WKT RUNS MO</td>
                                  <td>1.1 </td>
                                  <td>5000 </td>
                                  <td>59</td>
                                  <td>NO</td>
                                  <td>5000</td>
                                  <td>5500</td>
                                  <td>16-08-2022 23:12:35</td>
                                  <td>2409:4043:2e98:8029::8549:3515</td>
                                </tr>
                                <tr>
                                  <td>356</td>
                                  <td>(C1413) Lodi</td>
                                  <td>J BUTTLER RUN</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>33</td>
                                  <td>NO</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:12:37</td>
                                  <td>106.76.75.9</td>
                                </tr>
                                <tr>
                                  <td>357</td>
                                  <td>(C4414) Amitabh</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>48</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:12:50</td>
                                  <td>
                                    2401:4900:472d:94ef:9559:964:8e58:96bc
                                  </td>
                                </tr>
                                <tr>
                                  <td>358</td>
                                  <td>(C3765) Rahul k</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>47</td>
                                  <td>NO</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:12:51</td>
                                  <td>
                                    2401:4900:1a5c:641a:c04b:b3d7:8ceb:ca81
                                  </td>
                                </tr>
                                <tr>
                                  <td>359</td>
                                  <td>(C4246) Jitendra</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>47</td>
                                  <td>NO</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:12:54</td>
                                  <td>223.227.73.55</td>
                                </tr>
                                <tr>
                                  <td>360</td>
                                  <td>(C4274) Kapil</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>5000 </td>
                                  <td>47</td>
                                  <td>NO</td>
                                  <td>5000</td>
                                  <td>5000</td>
                                  <td>16-08-2022 23:12:55</td>
                                  <td>
                                    2409:4053:59d:4522:9e9a:db2f:9be1:6524
                                  </td>
                                </tr>
                                <tr>
                                  <td>361</td>
                                  <td>(C4095) Poste</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>47</td>
                                  <td>NO</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:12:56</td>
                                  <td>2409:4053:2e02:b11a::4b0a:90f</td>
                                </tr>
                                <tr>
                                  <td>362</td>
                                  <td>(C3721) Rahul bhai 2</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>48</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:12:56</td>
                                  <td>
                                    2409:4043:4b9a:9b7d:147e:20f8:f253:8cf6
                                  </td>
                                </tr>
                                <tr>
                                  <td>363</td>
                                  <td>(C4191) Viney</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>47</td>
                                  <td>NO</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:12:58</td>
                                  <td>
                                    2405:201:6818:d045:586d:409e:5423:f7a0
                                  </td>
                                </tr>
                                <tr>
                                  <td>364</td>
                                  <td>(C3335) Saurabh</td>
                                  <td>1ST WKT RUNS MO</td>
                                  <td>0.9 </td>
                                  <td>250 </td>
                                  <td>59</td>
                                  <td>YES</td>
                                  <td>225</td>
                                  <td>250</td>
                                  <td>16-08-2022 23:12:59</td>
                                  <td>
                                    2401:4900:5c3b:8ec4:acb3:8b28:e4b4:bc2c
                                  </td>
                                </tr>
                                <tr>
                                  <td>365</td>
                                  <td>(C3435) Khatu baba 2</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>20000 </td>
                                  <td>174</td>
                                  <td>NO</td>
                                  <td>20000</td>
                                  <td>20000</td>
                                  <td>16-08-2022 23:13:02</td>
                                  <td>103.81.154.11</td>
                                </tr>
                                <tr>
                                  <td>366</td>
                                  <td>(C3721) Rahul bhai 2</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>47</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:13:03</td>
                                  <td>
                                    2409:4043:4b9a:9b7d:147e:20f8:f253:8cf6
                                  </td>
                                </tr>
                                <tr>
                                  <td>367</td>
                                  <td>(C4267) Sanju</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>300 </td>
                                  <td>47</td>
                                  <td>YES</td>
                                  <td>300</td>
                                  <td>300</td>
                                  <td>16-08-2022 23:13:05</td>
                                  <td>2409:4053:2c9f:f4f::ad8b:d208</td>
                                </tr>
                                <tr>
                                  <td>368</td>
                                  <td>(C4407) Guru</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>174</td>
                                  <td>NO</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:13:05</td>
                                  <td>103.179.114.238</td>
                                </tr>
                                <tr>
                                  <td>369</td>
                                  <td>(C3591) Om shanti</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>290 </td>
                                  <td>46</td>
                                  <td>NO</td>
                                  <td>290</td>
                                  <td>290</td>
                                  <td>16-08-2022 23:13:06</td>
                                  <td>
                                    2401:4900:55bd:67d9:2578:2b5b:385a:cf13
                                  </td>
                                </tr>
                                <tr>
                                  <td>370</td>
                                  <td>(C3108) Tarun</td>
                                  <td>P SALT RUN</td>
                                  <td>0.9 </td>
                                  <td>500 </td>
                                  <td>47</td>
                                  <td>YES</td>
                                  <td>450</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:13:07</td>
                                  <td>2405:201:3007:f166:832:1412:9a1e:5a80</td>
                                </tr>
                                <tr>
                                  <td>371</td>
                                  <td>(C3514) Shivam</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>46</td>
                                  <td>NO</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:13:08</td>
                                  <td>
                                    2409:4053:50a:ea5b:61b4:9d84:86b8:8d0d
                                  </td>
                                </tr>
                                <tr>
                                  <td>372</td>
                                  <td>(C3469) Y kushwah</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>47</td>
                                  <td>YES</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:13:09</td>
                                  <td>
                                    2401:4900:1a59:50c2:abd5:aa1:a0f5:4749
                                  </td>
                                </tr>
                                <tr>
                                  <td>373</td>
                                  <td>(C3756) PRASHANT</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>47</td>
                                  <td>YES</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:13:10</td>
                                  <td>2409:4053:d94:4adb::4008:2c10</td>
                                </tr>
                                <tr>
                                  <td>374</td>
                                  <td>(C3537) New bhola</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>47</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:13:12</td>
                                  <td>2409:4043:2c82:d946::9a09:c811</td>
                                </tr>
                                <tr>
                                  <td>375</td>
                                  <td>(C4261) Tony 2 b</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>46</td>
                                  <td>NO</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:13:12</td>
                                  <td>2409:4053:2e0f:ba3d::528b:340b</td>
                                </tr>
                                <tr>
                                  <td>376</td>
                                  <td>(C3993) Jain</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>46</td>
                                  <td>NO</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:13:12</td>
                                  <td>2402:8100:2292:95e5:0:1:574f:4501</td>
                                </tr>
                                <tr>
                                  <td>377</td>
                                  <td>(C2664) Akash ji</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>250 </td>
                                  <td>47</td>
                                  <td>YES</td>
                                  <td>250</td>
                                  <td>250</td>
                                  <td>16-08-2022 23:13:15</td>
                                  <td>2409:4043:40a:31a8::27cb:70ac</td>
                                </tr>
                                <tr>
                                  <td>378</td>
                                  <td>(C3921) TANNU</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>47</td>
                                  <td>YES</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:13:17</td>
                                  <td>106.66.3.140</td>
                                </tr>
                                <tr>
                                  <td>379</td>
                                  <td>(C3806) Deepak</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>47</td>
                                  <td>YES</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:13:17</td>
                                  <td>
                                    2401:4900:1f3a:50b0:c48b:20d4:f044:9f30
                                  </td>
                                </tr>
                                <tr>
                                  <td>380</td>
                                  <td>(C3896) Sumit</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>46</td>
                                  <td>NO</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:13:18</td>
                                  <td>171.48.29.164</td>
                                </tr>
                                <tr>
                                  <td>381</td>
                                  <td>(C3579) Sarman</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>47</td>
                                  <td>YES</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:13:21</td>
                                  <td>2409:4043:2c12:77a::dd49:3d03</td>
                                </tr>
                                <tr>
                                  <td>382</td>
                                  <td>(C1413) Lodi</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>46</td>
                                  <td>NO</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:13:26</td>
                                  <td>106.76.75.9</td>
                                </tr>
                                <tr>
                                  <td>383</td>
                                  <td>(C2092) Ramveer</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>46</td>
                                  <td>NO</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:13:29</td>
                                  <td>2401:4900:1b24:6cd5:2:1:cc70:3436</td>
                                </tr>
                                <tr>
                                  <td>384</td>
                                  <td>(C4367) Big B</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>47</td>
                                  <td>YES</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:13:32</td>
                                  <td>
                                    2409:4043:2486:95bb:6811:f0e4:7589:740f
                                  </td>
                                </tr>
                                <tr>
                                  <td>385</td>
                                  <td>(C4193) Chiku</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>47</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:13:34</td>
                                  <td>27.63.184.72</td>
                                </tr>
                                <tr>
                                  <td>386</td>
                                  <td>(C1889) Mr.singh</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>47</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:13:35</td>
                                  <td>2409:4043:4b18:39f6::3c09:2607</td>
                                </tr>
                                <tr>
                                  <td>387</td>
                                  <td>(C4261) Tony 2 b</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>174</td>
                                  <td>NO</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:13:38</td>
                                  <td>2409:4053:2e0f:ba3d::528b:340b</td>
                                </tr>
                                <tr>
                                  <td>388</td>
                                  <td>(C3435) Khatu baba 2</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>20000 </td>
                                  <td>174</td>
                                  <td>NO</td>
                                  <td>20000</td>
                                  <td>20000</td>
                                  <td>16-08-2022 23:13:45</td>
                                  <td>103.81.154.11</td>
                                </tr>
                                <tr>
                                  <td>389</td>
                                  <td>(C4114) Man 6428</td>
                                  <td>P SALT RUN</td>
                                  <td>0.9 </td>
                                  <td>500 </td>
                                  <td>47</td>
                                  <td>YES</td>
                                  <td>450</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:13:50</td>
                                  <td>2409:4043:992:5f0c::2e7:60a5</td>
                                </tr>
                                <tr>
                                  <td>390</td>
                                  <td>(C3537) New bhola</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>49</td>
                                  <td>NO</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:14:11</td>
                                  <td>2409:4043:2c82:d946::9a09:c811</td>
                                </tr>
                                <tr>
                                  <td>391</td>
                                  <td>(C4248) Bhrt bk</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>49</td>
                                  <td>NO</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:14:16</td>
                                  <td>45.251.43.161</td>
                                </tr>
                                <tr>
                                  <td>392</td>
                                  <td>(C4341) Sachin</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>50</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:14:16</td>
                                  <td>2402:8100:2290:57f3:0:19:7292:4401</td>
                                </tr>
                                <tr>
                                  <td>393</td>
                                  <td>(C2834) N k</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>176</td>
                                  <td>NO</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:14:23</td>
                                  <td>
                                    2409:4041:2d1d:2d71:d9e6:7d80:ec4:5924
                                  </td>
                                </tr>
                                <tr>
                                  <td>394</td>
                                  <td>(C4116) Jeet</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.15 </td>
                                  <td>200 </td>
                                  <td>49</td>
                                  <td>NO</td>
                                  <td>200</td>
                                  <td>230</td>
                                  <td>16-08-2022 23:14:24</td>
                                  <td>2409:4041:e18:7841::f04a:b505</td>
                                </tr>
                                <tr>
                                  <td>395</td>
                                  <td>(C4261) Tony 2 b</td>
                                  <td>J BUTTLER RUN</td>
                                  <td>0.8 </td>
                                  <td>100 </td>
                                  <td>37</td>
                                  <td>YES</td>
                                  <td>80</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:14:25</td>
                                  <td>2409:4053:2e0f:ba3d::528b:340b</td>
                                </tr>
                                <tr>
                                  <td>396</td>
                                  <td>(C3735) agdhhcg</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>0.85 </td>
                                  <td>5000 </td>
                                  <td>49</td>
                                  <td>YES</td>
                                  <td>4250</td>
                                  <td>5000</td>
                                  <td>16-08-2022 23:14:25</td>
                                  <td>
                                    2409:4043:2b00:ecad:586f:f553:3cb9:f761
                                  </td>
                                </tr>
                                <tr>
                                  <td>397</td>
                                  <td>(C2563) GOWDA</td>
                                  <td>1ST WKT RUNS MO</td>
                                  <td>0.9 </td>
                                  <td>100 </td>
                                  <td>64</td>
                                  <td>YES</td>
                                  <td>90</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:14:27</td>
                                  <td>
                                    2409:4041:e1b:3379:f1ef:a02a:5987:cc30
                                  </td>
                                </tr>
                                <tr>
                                  <td>398</td>
                                  <td>(C3469) Y kushwah</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.15 </td>
                                  <td>200 </td>
                                  <td>49</td>
                                  <td>NO</td>
                                  <td>200</td>
                                  <td>230</td>
                                  <td>16-08-2022 23:14:28</td>
                                  <td>
                                    2401:4900:1a59:50c2:abd5:aa1:a0f5:4749
                                  </td>
                                </tr>
                                <tr>
                                  <td>399</td>
                                  <td>(C4261) Tony 2 b</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>178</td>
                                  <td>NO</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:14:44</td>
                                  <td>2409:4053:2e0f:ba3d::528b:340b</td>
                                </tr>
                                <tr>
                                  <td>400</td>
                                  <td>(C3404) Annaaa</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>52</td>
                                  <td>YES</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:14:47</td>
                                  <td>2409:4043:30e:fb9d:438d:d73c:e89:fab3</td>
                                </tr>
                                <tr>
                                  <td>401</td>
                                  <td>(C2773) Vivek jiii</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>51</td>
                                  <td>NO</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:14:50</td>
                                  <td>2409:4043:59b:8235::223a:60a4</td>
                                </tr>
                                <tr>
                                  <td>402</td>
                                  <td>(C1859) Alok</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1500 </td>
                                  <td>51</td>
                                  <td>NO</td>
                                  <td>1500</td>
                                  <td>1500</td>
                                  <td>16-08-2022 23:14:52</td>
                                  <td>2409:4043:4e1b:6bd3::8c8:9d08</td>
                                </tr>
                                <tr>
                                  <td>403</td>
                                  <td>(C4094) Love</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>51</td>
                                  <td>NO</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:14:54</td>
                                  <td>
                                    2401:4900:5c42:210f:d44:1884:e9a9:af48
                                  </td>
                                </tr>
                                <tr>
                                  <td>404</td>
                                  <td>(C4248) Bhrt bk</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>51</td>
                                  <td>NO</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:14:55</td>
                                  <td>45.251.43.161</td>
                                </tr>
                                <tr>
                                  <td>405</td>
                                  <td>(C4415) Rencho</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>51</td>
                                  <td>NO</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:14:56</td>
                                  <td>
                                    2409:4053:70e:21b8:a5cd:8054:ae2c:7b6d
                                  </td>
                                </tr>
                                <tr>
                                  <td>406</td>
                                  <td>(C3429) Sudi</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>51</td>
                                  <td>NO</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:14:57</td>
                                  <td>2409:4043:2099:7ea:34e3:47d2:e8c3:713</td>
                                </tr>
                                <tr>
                                  <td>407</td>
                                  <td>(C3530) Rajendra</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1290 </td>
                                  <td>51</td>
                                  <td>NO</td>
                                  <td>1290</td>
                                  <td>1290</td>
                                  <td>16-08-2022 23:14:59</td>
                                  <td>
                                    2401:4900:447e:7279:874:87ed:8ec5:a15e
                                  </td>
                                </tr>
                                <tr>
                                  <td>408</td>
                                  <td>(C3025) Balaji</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>51</td>
                                  <td>NO</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:15:00</td>
                                  <td>
                                    2405:201:3002:e162:ec44:f202:feeb:e705
                                  </td>
                                </tr>
                                <tr>
                                  <td>409</td>
                                  <td>(C4267) Sanju</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>52</td>
                                  <td>YES</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:15:00</td>
                                  <td>2409:4053:2c9f:f4f::ad8b:d208</td>
                                </tr>
                                <tr>
                                  <td>410</td>
                                  <td>(C3993) Jain</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>52</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:15:00</td>
                                  <td>2402:8100:2292:95e5:0:1:574f:4501</td>
                                </tr>
                                <tr>
                                  <td>411</td>
                                  <td>(C2099) Sunel</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>51</td>
                                  <td>NO</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:15:00</td>
                                  <td>2401:4900:414a:671a:0:1d:dadf:2101</td>
                                </tr>
                                <tr>
                                  <td>412</td>
                                  <td>(C4345) Ankesh</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>25000 </td>
                                  <td>52</td>
                                  <td>YES</td>
                                  <td>25000</td>
                                  <td>25000</td>
                                  <td>16-08-2022 23:15:01</td>
                                  <td>2402:8100:2297:6e1:0:d:3be9:5a01</td>
                                </tr>
                                <tr>
                                  <td>413</td>
                                  <td>(C2536) Roxsatar</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>52</td>
                                  <td>YES</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:15:04</td>
                                  <td>2409:4043:2b9b:1fc8::528a:8615</td>
                                </tr>
                                <tr>
                                  <td>414</td>
                                  <td>(C1882) Kuldeep bundela</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>52</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:15:04</td>
                                  <td>
                                    2409:4043:220c:41f3:b94b:5cdc:9cbc:947a
                                  </td>
                                </tr>
                                <tr>
                                  <td>415</td>
                                  <td>(C1889) Mr.singh</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>52</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:15:05</td>
                                  <td>2409:4043:4b18:39f6::3c09:2607</td>
                                </tr>
                                <tr>
                                  <td>416</td>
                                  <td>(C3313) Monty</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>180 </td>
                                  <td>52</td>
                                  <td>YES</td>
                                  <td>180</td>
                                  <td>180</td>
                                  <td>16-08-2022 23:15:06</td>
                                  <td>2402:8100:2065:1f3a::d7a0:b14b</td>
                                </tr>
                                <tr>
                                  <td>417</td>
                                  <td>(C3537) New bhola</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>52</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:15:07</td>
                                  <td>2409:4043:2c82:d946::9a09:c811</td>
                                </tr>
                                <tr>
                                  <td>418</td>
                                  <td>(C3405) Ramkarn</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>178</td>
                                  <td>NO</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:15:07</td>
                                  <td>
                                    2402:8100:2398:64d3:778:5634:1232:5476
                                  </td>
                                </tr>
                                <tr>
                                  <td>419</td>
                                  <td>(C4414) Amitabh</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>52</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:15:08</td>
                                  <td>
                                    2401:4900:472d:94ef:9559:964:8e58:96bc
                                  </td>
                                </tr>
                                <tr>
                                  <td>420</td>
                                  <td>(C4415) Rencho</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>178</td>
                                  <td>NO</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:15:11</td>
                                  <td>
                                    2409:4053:70e:21b8:a5cd:8054:ae2c:7b6d
                                  </td>
                                </tr>
                                <tr>
                                  <td>421</td>
                                  <td>(C3469) Y kushwah</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>52</td>
                                  <td>YES</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:15:13</td>
                                  <td>
                                    2401:4900:1a59:50c2:abd5:aa1:a0f5:4749
                                  </td>
                                </tr>
                                <tr>
                                  <td>422</td>
                                  <td>(C3404) Annaaa</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>52</td>
                                  <td>YES</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:15:15</td>
                                  <td>2409:4043:30e:fb9d:438d:d73c:e89:fab3</td>
                                </tr>
                                <tr>
                                  <td>423</td>
                                  <td>(C4381) Atul 2</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>52</td>
                                  <td>YES</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:15:17</td>
                                  <td>
                                    2401:4900:51c2:9f43:3df3:32bb:8625:85c8
                                  </td>
                                </tr>
                                <tr>
                                  <td>424</td>
                                  <td>(C3108) Tarun</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>0.8 </td>
                                  <td>1000 </td>
                                  <td>54</td>
                                  <td>YES</td>
                                  <td>800</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:15:39</td>
                                  <td>2405:201:3007:f166:832:1412:9a1e:5a80</td>
                                </tr>
                                <tr>
                                  <td>425</td>
                                  <td>(C4267) Sanju</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>0.8 </td>
                                  <td>300 </td>
                                  <td>54</td>
                                  <td>YES</td>
                                  <td>240</td>
                                  <td>300</td>
                                  <td>16-08-2022 23:15:39</td>
                                  <td>2409:4053:2c9f:f4f::ad8b:d208</td>
                                </tr>
                                <tr>
                                  <td>426</td>
                                  <td>(C4199) ANNU BHAI</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>0.8 </td>
                                  <td>4000 </td>
                                  <td>54</td>
                                  <td>YES</td>
                                  <td>3200</td>
                                  <td>4000</td>
                                  <td>16-08-2022 23:15:39</td>
                                  <td>2409:4053:c99:d9d::ad88:500a</td>
                                </tr>
                                <tr>
                                  <td>427</td>
                                  <td>(C3794) Rohan</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>181</td>
                                  <td>NO</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:15:40</td>
                                  <td>
                                    2405:201:5c0a:7204:c573:4a1c:c5f3:736b
                                  </td>
                                </tr>
                                <tr>
                                  <td>428</td>
                                  <td>(C3735) agdhhcg</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>0.8 </td>
                                  <td>5000 </td>
                                  <td>54</td>
                                  <td>YES</td>
                                  <td>4000</td>
                                  <td>5000</td>
                                  <td>16-08-2022 23:15:41</td>
                                  <td>
                                    2409:4043:2b00:ecad:586f:f553:3cb9:f761
                                  </td>
                                </tr>
                                <tr>
                                  <td>429</td>
                                  <td>(C4127) Bablu</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.2 </td>
                                  <td>500 </td>
                                  <td>54</td>
                                  <td>NO</td>
                                  <td>500</td>
                                  <td>600</td>
                                  <td>16-08-2022 23:15:51</td>
                                  <td>2409:4043:4e98:2a2f::2c9:fd03</td>
                                </tr>
                                <tr>
                                  <td>430</td>
                                  <td>(C3564) Shanshnk bhiya</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>181</td>
                                  <td>NO</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:15:52</td>
                                  <td>
                                    2405:201:301c:d8c8:a047:bf96:6eec:c4c8
                                  </td>
                                </tr>
                                <tr>
                                  <td>431</td>
                                  <td>(C3025) Balaji</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>181</td>
                                  <td>NO</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:15:54</td>
                                  <td>
                                    2405:201:3002:e162:ec44:f202:feeb:e705
                                  </td>
                                </tr>
                                <tr>
                                  <td>432</td>
                                  <td>(C3435) Khatu baba 2</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>20000 </td>
                                  <td>181</td>
                                  <td>NO</td>
                                  <td>20000</td>
                                  <td>20000</td>
                                  <td>16-08-2022 23:15:56</td>
                                  <td>103.81.154.11</td>
                                </tr>
                                <tr>
                                  <td>433</td>
                                  <td>(C3765) Rahul k</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>3000 </td>
                                  <td>181</td>
                                  <td>NO</td>
                                  <td>3000</td>
                                  <td>3000</td>
                                  <td>16-08-2022 23:15:57</td>
                                  <td>
                                    2401:4900:1a5c:641a:c04b:b3d7:8ceb:ca81
                                  </td>
                                </tr>
                                <tr>
                                  <td>434</td>
                                  <td>(C3537) New bhola</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>54</td>
                                  <td>NO</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:15:59</td>
                                  <td>2409:4043:2c82:d946::9a09:c811</td>
                                </tr>
                                <tr>
                                  <td>435</td>
                                  <td>(C4261) Tony 2 b</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>54</td>
                                  <td>NO</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:16:02</td>
                                  <td>2409:4053:2e0f:ba3d::528b:340b</td>
                                </tr>
                                <tr>
                                  <td>436</td>
                                  <td>(C3129) Manoj</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>54</td>
                                  <td>NO</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:16:02</td>
                                  <td>
                                    2409:4063:2101:6078:b800:faff:fea0:c431
                                  </td>
                                </tr>
                                <tr>
                                  <td>437</td>
                                  <td>(C1856) Deepae</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>183</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:16:03</td>
                                  <td>
                                    2409:4043:4d10:d93b:e515:85ff:c980:b9fb
                                  </td>
                                </tr>
                                <tr>
                                  <td>438</td>
                                  <td>(C4405) Yuvi</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>181</td>
                                  <td>NO</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:16:04</td>
                                  <td>2409:4043:2b88:1f6d::cb49:800d</td>
                                </tr>
                                <tr>
                                  <td>439</td>
                                  <td>(C3404) Annaaa</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>55</td>
                                  <td>YES</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:16:04</td>
                                  <td>2409:4043:30e:fb9d:438d:d73c:e89:fab3</td>
                                </tr>
                                <tr>
                                  <td>440</td>
                                  <td>(C4251) Rocky</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>54</td>
                                  <td>NO</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:16:05</td>
                                  <td>
                                    2401:4900:1c64:5804:b46b:cd43:8a89:a833
                                  </td>
                                </tr>
                                <tr>
                                  <td>441</td>
                                  <td>(C1413) Lodi</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>54</td>
                                  <td>NO</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:16:06</td>
                                  <td>106.76.75.9</td>
                                </tr>
                                <tr>
                                  <td>442</td>
                                  <td>(C2092) Ramveer</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>54</td>
                                  <td>NO</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:16:07</td>
                                  <td>2401:4900:1b24:6cd5:2:1:cc70:3436</td>
                                </tr>
                                <tr>
                                  <td>443</td>
                                  <td>(C3435) Khatu baba 2</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>20000 </td>
                                  <td>183</td>
                                  <td>YES</td>
                                  <td>20000</td>
                                  <td>20000</td>
                                  <td>16-08-2022 23:16:08</td>
                                  <td>103.81.154.11</td>
                                </tr>
                                <tr>
                                  <td>444</td>
                                  <td>(C4261) Tony 2 b</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>181</td>
                                  <td>NO</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:16:09</td>
                                  <td>2409:4053:2e0f:ba3d::528b:340b</td>
                                </tr>
                                <tr>
                                  <td>445</td>
                                  <td>(C3514) Shivam</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>180</td>
                                  <td>NO</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:16:30</td>
                                  <td>
                                    2409:4053:50a:ea5b:61b4:9d84:86b8:8d0d
                                  </td>
                                </tr>
                                <tr>
                                  <td>446</td>
                                  <td>(C4088) Raj bhai</td>
                                  <td>1ST WKT RUNS MO</td>
                                  <td>0.9 </td>
                                  <td>500 </td>
                                  <td>72</td>
                                  <td>YES</td>
                                  <td>450</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:16:34</td>
                                  <td>2405:204:a591:d4b1::b13:38a5</td>
                                </tr>
                                <tr>
                                  <td>447</td>
                                  <td>(C4406) Udi</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>180</td>
                                  <td>NO</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:16:36</td>
                                  <td>
                                    2401:4900:1c48:96cf:85a0:43c3:6920:4b7b
                                  </td>
                                </tr>
                                <tr>
                                  <td>448</td>
                                  <td>(C3533) Bhanu</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>53</td>
                                  <td>YES</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:16:39</td>
                                  <td>27.63.18.57</td>
                                </tr>
                                <tr>
                                  <td>449</td>
                                  <td>(C4251) Rocky</td>
                                  <td>25 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>53</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:16:39</td>
                                  <td>
                                    2401:4900:1c64:5804:b46b:cd43:8a89:a833
                                  </td>
                                </tr>
                                <tr>
                                  <td>450</td>
                                  <td>(C3514) Shivam</td>
                                  <td>1ST WKT RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>72</td>
                                  <td>NO</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:16:43</td>
                                  <td>
                                    2409:4053:50a:ea5b:61b4:9d84:86b8:8d0d
                                  </td>
                                </tr>
                                <tr>
                                  <td>451</td>
                                  <td>(C3405) Ramkarn</td>
                                  <td>1ST WKT RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>5000 </td>
                                  <td>72</td>
                                  <td>NO</td>
                                  <td>5000</td>
                                  <td>5000</td>
                                  <td>16-08-2022 23:16:44</td>
                                  <td>
                                    2402:8100:2398:64d3:778:5634:1232:5476
                                  </td>
                                </tr>
                                <tr>
                                  <td>452</td>
                                  <td>(C4388) Aaaaa</td>
                                  <td>1ST WKT RUNS MO</td>
                                  <td>0.8 </td>
                                  <td>672 </td>
                                  <td>72</td>
                                  <td>YES</td>
                                  <td>537.6</td>
                                  <td>672</td>
                                  <td>16-08-2022 23:16:44</td>
                                  <td>
                                    2401:4900:1c08:3af3:5441:cbbb:6ea9:335e
                                  </td>
                                </tr>
                                <tr>
                                  <td>453</td>
                                  <td>(C3414) Sonu</td>
                                  <td>P SALT RUN</td>
                                  <td>0.9 </td>
                                  <td>100 </td>
                                  <td>47</td>
                                  <td>YES</td>
                                  <td>90</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:16:45</td>
                                  <td>
                                    2401:4900:5d8b:1049:5d06:23c4:b9ff:3219
                                  </td>
                                </tr>
                                <tr>
                                  <td>454</td>
                                  <td>(C3721) Rahul bhai 2</td>
                                  <td>30 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>59</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:17:12</td>
                                  <td>
                                    2409:4043:4b9a:9b7d:147e:20f8:f253:8cf6
                                  </td>
                                </tr>
                                <tr>
                                  <td>455</td>
                                  <td>(C2835) Man 2</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>178</td>
                                  <td>NO</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:17:12</td>
                                  <td>2409:4043:4e14:79a::4c48:4b0e</td>
                                </tr>
                                <tr>
                                  <td>456</td>
                                  <td>(C3896) Sumit</td>
                                  <td>30 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>59</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:17:15</td>
                                  <td>171.48.29.164</td>
                                </tr>
                                <tr>
                                  <td>457</td>
                                  <td>(C3106) Daru bala</td>
                                  <td>30 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>59</td>
                                  <td>YES</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:17:16</td>
                                  <td>
                                    2409:4052:4d1c:9f23:5b66:6f89:8ee8:5490
                                  </td>
                                </tr>
                                <tr>
                                  <td>458</td>
                                  <td>(C3670) Monish</td>
                                  <td>30 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>59</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:17:16</td>
                                  <td>103.211.53.70</td>
                                </tr>
                                <tr>
                                  <td>459</td>
                                  <td>(C3108) Tarun</td>
                                  <td>30 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>59</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:17:17</td>
                                  <td>2405:201:3007:f166:832:1412:9a1e:5a80</td>
                                </tr>
                                <tr>
                                  <td>460</td>
                                  <td>(C2225) Laxman</td>
                                  <td>30 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>59</td>
                                  <td>YES</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:17:17</td>
                                  <td>49.35.159.115</td>
                                </tr>
                                <tr>
                                  <td>461</td>
                                  <td>(C1882) Kuldeep bundela</td>
                                  <td>30 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>59</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:17:18</td>
                                  <td>
                                    2409:4043:220c:41f3:b94b:5cdc:9cbc:947a
                                  </td>
                                </tr>
                                <tr>
                                  <td>462</td>
                                  <td>(C3406) Mahte</td>
                                  <td>30 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>130 </td>
                                  <td>59</td>
                                  <td>YES</td>
                                  <td>130</td>
                                  <td>130</td>
                                  <td>16-08-2022 23:17:19</td>
                                  <td>
                                    2401:4900:55b2:78e5:f948:5c1b:dfd2:5fe4
                                  </td>
                                </tr>
                                <tr>
                                  <td>463</td>
                                  <td>(C4246) Jitendra</td>
                                  <td>30 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>59</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:17:20</td>
                                  <td>223.227.73.55</td>
                                </tr>
                                <tr>
                                  <td>464</td>
                                  <td>(C3618) Adety</td>
                                  <td>J BUTTLER BOUNDARIES</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>8</td>
                                  <td>YES</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:17:24</td>
                                  <td>2409:4043:99e:d5d5::2425:98ad</td>
                                </tr>
                                <tr>
                                  <td>465</td>
                                  <td>(C2772) Bhola</td>
                                  <td>30 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>59</td>
                                  <td>YES</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:17:24</td>
                                  <td>2401:4900:30de:ebe2:0:4b:78d4:b801</td>
                                </tr>
                                <tr>
                                  <td>466</td>
                                  <td>(C4261) Tony 2 b</td>
                                  <td>30 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>58</td>
                                  <td>NO</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:17:27</td>
                                  <td>2409:4053:2e0f:ba3d::528b:340b</td>
                                </tr>
                                <tr>
                                  <td>467</td>
                                  <td>(C2568) SURESH J</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2050 </td>
                                  <td>180</td>
                                  <td>YES</td>
                                  <td>2050</td>
                                  <td>2050</td>
                                  <td>16-08-2022 23:17:30</td>
                                  <td>27.63.247.65</td>
                                </tr>
                                <tr>
                                  <td>468</td>
                                  <td>(C3404) Annaaa</td>
                                  <td>30 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>59</td>
                                  <td>YES</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:17:31</td>
                                  <td>2409:4043:30e:fb9d:438d:d73c:e89:fab3</td>
                                </tr>
                                <tr>
                                  <td>469</td>
                                  <td>(C1859) Alok</td>
                                  <td>30 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>2050 </td>
                                  <td>59</td>
                                  <td>YES</td>
                                  <td>2050</td>
                                  <td>2050</td>
                                  <td>16-08-2022 23:17:32</td>
                                  <td>2409:4043:4e1b:6bd3::8c8:9d08</td>
                                </tr>
                                <tr>
                                  <td>470</td>
                                  <td>(C4258) Saurabh</td>
                                  <td>1ST WKT RUNS MO</td>
                                  <td>0.9 </td>
                                  <td>150 </td>
                                  <td>72</td>
                                  <td>YES</td>
                                  <td>135</td>
                                  <td>150</td>
                                  <td>16-08-2022 23:17:32</td>
                                  <td>
                                    2405:201:6800:719b:fdf0:b5ab:1062:4f1a
                                  </td>
                                </tr>
                                <tr>
                                  <td>471</td>
                                  <td>(C4414) Amitabh</td>
                                  <td>30 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>59</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:17:33</td>
                                  <td>
                                    2401:4900:472d:94ef:9559:964:8e58:96bc
                                  </td>
                                </tr>
                                <tr>
                                  <td>472</td>
                                  <td>(C2225) Laxman</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>300 </td>
                                  <td>93</td>
                                  <td>YES</td>
                                  <td>300</td>
                                  <td>300</td>
                                  <td>16-08-2022 23:17:39</td>
                                  <td>49.35.159.115</td>
                                </tr>
                                <tr>
                                  <td>473</td>
                                  <td>(C4193) Chiku</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>93</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:17:40</td>
                                  <td>27.63.184.72</td>
                                </tr>
                                <tr>
                                  <td>474</td>
                                  <td>(C4421) Rahul</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>93</td>
                                  <td>YES</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:17:40</td>
                                  <td>2409:4043:2187:934::2582:60a4</td>
                                </tr>
                                <tr>
                                  <td>475</td>
                                  <td>(C3921) TANNU</td>
                                  <td>30 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>59</td>
                                  <td>YES</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:17:41</td>
                                  <td>106.66.3.140</td>
                                </tr>
                                <tr>
                                  <td>476</td>
                                  <td>(C4267) Sanju</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>400 </td>
                                  <td>93</td>
                                  <td>YES</td>
                                  <td>400</td>
                                  <td>400</td>
                                  <td>16-08-2022 23:17:41</td>
                                  <td>2409:4053:2c9f:f4f::ad8b:d208</td>
                                </tr>
                                <tr>
                                  <td>477</td>
                                  <td>(C2169) Aarab</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>225 </td>
                                  <td>178</td>
                                  <td>NO</td>
                                  <td>225</td>
                                  <td>225</td>
                                  <td>16-08-2022 23:17:44</td>
                                  <td>2401:4900:5c4d:81e7::3e:5745</td>
                                </tr>
                                <tr>
                                  <td>478</td>
                                  <td>(C3537) New bhola</td>
                                  <td>30 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>59</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:17:53</td>
                                  <td>2409:4043:2c82:d946::9a09:c811</td>
                                </tr>
                                <tr>
                                  <td>479</td>
                                  <td>(C4345) Ankesh</td>
                                  <td>30 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>3800 </td>
                                  <td>59</td>
                                  <td>YES</td>
                                  <td>3800</td>
                                  <td>3800</td>
                                  <td>16-08-2022 23:17:54</td>
                                  <td>2402:8100:2297:6e1:0:d:3be9:5a01</td>
                                </tr>
                                <tr>
                                  <td>480</td>
                                  <td>(C3763) Bunty</td>
                                  <td>P SALT RUN</td>
                                  <td>1.1 </td>
                                  <td>1000 </td>
                                  <td>47</td>
                                  <td>NO</td>
                                  <td>1000</td>
                                  <td>1100</td>
                                  <td>16-08-2022 23:17:54</td>
                                  <td>2409:4053:228b:d414::84:8b1</td>
                                </tr>
                                <tr>
                                  <td>481</td>
                                  <td>(C3756) PRASHANT</td>
                                  <td>30 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>59</td>
                                  <td>YES</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:17:56</td>
                                  <td>2409:4053:d94:4adb::4008:2c10</td>
                                </tr>
                                <tr>
                                  <td>482</td>
                                  <td>(C3794) Rohan</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>178</td>
                                  <td>NO</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:17:57</td>
                                  <td>
                                    2405:201:5c0a:7204:c573:4a1c:c5f3:736b
                                  </td>
                                </tr>
                                <tr>
                                  <td>483</td>
                                  <td>(C2773) Vivek jiii</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>178</td>
                                  <td>NO</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:17:59</td>
                                  <td>2409:4043:59b:8235::223a:60a4</td>
                                </tr>
                                <tr>
                                  <td>484</td>
                                  <td>(C2569) GUNTAGANI</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>93</td>
                                  <td>YES</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:17:59</td>
                                  <td>2402:3a80:13a2:44f9::7577:b649</td>
                                </tr>
                                <tr>
                                  <td>485</td>
                                  <td>(C4381) Atul 2</td>
                                  <td>30 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>300 </td>
                                  <td>59</td>
                                  <td>YES</td>
                                  <td>300</td>
                                  <td>300</td>
                                  <td>16-08-2022 23:18:01</td>
                                  <td>
                                    2401:4900:51c2:9f43:3df3:32bb:8625:85c8
                                  </td>
                                </tr>
                                <tr>
                                  <td>486</td>
                                  <td>(C2099) Sunel</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>93</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:18:03</td>
                                  <td>2401:4900:414a:671a:0:1d:dadf:2101</td>
                                </tr>
                                <tr>
                                  <td>487</td>
                                  <td>(C2083) Tanmay</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>600 </td>
                                  <td>93</td>
                                  <td>YES</td>
                                  <td>600</td>
                                  <td>600</td>
                                  <td>16-08-2022 23:18:04</td>
                                  <td>
                                    2405:201:3014:102c:dde2:7df9:bac0:972b
                                  </td>
                                </tr>
                                <tr>
                                  <td>488</td>
                                  <td>(C4377) Manish</td>
                                  <td>30 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>59</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:18:05</td>
                                  <td>
                                    2409:4043:2b87:7d7c:810c:c444:ab5a:7b2
                                  </td>
                                </tr>
                                <tr>
                                  <td>489</td>
                                  <td>(C3219) Hemandra</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>184</td>
                                  <td>YES</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:19:29</td>
                                  <td>
                                    2409:4063:4d9d:cbab:9132:ca4b:9f38:d543
                                  </td>
                                </tr>
                                <tr>
                                  <td>490</td>
                                  <td>(C4267) Sanju</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>184</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:19:37</td>
                                  <td>2409:4053:2c9f:f4f::ad8b:d208</td>
                                </tr>
                                <tr>
                                  <td>491</td>
                                  <td>(C3133) Mannu khare</td>
                                  <td>30 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>62</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:19:41</td>
                                  <td>2401:4900:1b22:8d89:2:2:c5df:95b5</td>
                                </tr>
                                <tr>
                                  <td>492</td>
                                  <td>(C3735) agdhhcg</td>
                                  <td>30 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>10000 </td>
                                  <td>62</td>
                                  <td>YES</td>
                                  <td>10000</td>
                                  <td>10000</td>
                                  <td>16-08-2022 23:19:41</td>
                                  <td>
                                    2409:4043:2b00:ecad:586f:f553:3cb9:f761
                                  </td>
                                </tr>
                                <tr>
                                  <td>493</td>
                                  <td>(C2061) dewasis</td>
                                  <td>30 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>62</td>
                                  <td>YES</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:19:42</td>
                                  <td>223.239.60.96</td>
                                </tr>
                                <tr>
                                  <td>494</td>
                                  <td>(C3537) New bhola</td>
                                  <td>30 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>61</td>
                                  <td>NO</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:19:42</td>
                                  <td>2409:4043:2c82:d946::9a09:c811</td>
                                </tr>
                                <tr>
                                  <td>495</td>
                                  <td>(C4415) Rencho</td>
                                  <td>30 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>61</td>
                                  <td>NO</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:19:46</td>
                                  <td>
                                    2409:4053:70e:21b8:a5cd:8054:ae2c:7b6d
                                  </td>
                                </tr>
                                <tr>
                                  <td>496</td>
                                  <td>(C4341) Sachin</td>
                                  <td>30 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>62</td>
                                  <td>YES</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:19:46</td>
                                  <td>2402:8100:2290:57f3:0:19:7292:4401</td>
                                </tr>
                                <tr>
                                  <td>497</td>
                                  <td>(C4254) Rishab</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>5000 </td>
                                  <td>95</td>
                                  <td>NO</td>
                                  <td>5000</td>
                                  <td>5000</td>
                                  <td>16-08-2022 23:19:46</td>
                                  <td>27.63.190.37</td>
                                </tr>
                                <tr>
                                  <td>498</td>
                                  <td>(C3219) Hemandra</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>96</td>
                                  <td>YES</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:19:47</td>
                                  <td>
                                    2409:4063:4d9d:cbab:9132:ca4b:9f38:d543
                                  </td>
                                </tr>
                                <tr>
                                  <td>499</td>
                                  <td>(C4267) Sanju</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>96</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:19:47</td>
                                  <td>2409:4053:2c9f:f4f::ad8b:d208</td>
                                </tr>
                                <tr>
                                  <td>500</td>
                                  <td>(C1688) Anil</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>3500 </td>
                                  <td>95</td>
                                  <td>NO</td>
                                  <td>3500</td>
                                  <td>3500</td>
                                  <td>16-08-2022 23:19:47</td>
                                  <td>106.207.225.229</td>
                                </tr>
                                <tr>
                                  <td>501</td>
                                  <td>(C2092) Ramveer</td>
                                  <td>30 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>61</td>
                                  <td>NO</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:19:48</td>
                                  <td>2401:4900:1b24:6cd5:2:1:cc70:3436</td>
                                </tr>
                                <tr>
                                  <td>502</td>
                                  <td>(C4383) Vishal</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>95</td>
                                  <td>NO</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:19:49</td>
                                  <td>
                                    2401:4900:c0f:204f:c52b:c624:2978:46f3
                                  </td>
                                </tr>
                                <tr>
                                  <td>503</td>
                                  <td>(C1688) Anil</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>10000 </td>
                                  <td>182</td>
                                  <td>NO</td>
                                  <td>10000</td>
                                  <td>10000</td>
                                  <td>16-08-2022 23:19:58</td>
                                  <td>106.207.225.229</td>
                                </tr>
                                <tr>
                                  <td>504</td>
                                  <td>(C2092) Ramveer</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>96</td>
                                  <td>YES</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:20:14</td>
                                  <td>2401:4900:1b24:6cd5:2:1:cc70:3436</td>
                                </tr>
                                <tr>
                                  <td>505</td>
                                  <td>(C3564) Shanshnk bhiya</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>95</td>
                                  <td>NO</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:20:14</td>
                                  <td>
                                    2405:201:301c:d8c8:a047:bf96:6eec:c4c8
                                  </td>
                                </tr>
                                <tr>
                                  <td>506</td>
                                  <td>(C3398) Bata</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>96</td>
                                  <td>YES</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:20:15</td>
                                  <td>2409:4053:e1b:1498::a0cb:f606</td>
                                </tr>
                                <tr>
                                  <td>507</td>
                                  <td>(C4276) Kuldeep</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>382 </td>
                                  <td>96</td>
                                  <td>YES</td>
                                  <td>382</td>
                                  <td>382</td>
                                  <td>16-08-2022 23:20:15</td>
                                  <td>
                                    2409:4052:239a:e934:1242:5fd2:34e6:bb84
                                  </td>
                                </tr>
                                <tr>
                                  <td>508</td>
                                  <td>(C4199) ANNU BHAI</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>7500 </td>
                                  <td>96</td>
                                  <td>YES</td>
                                  <td>7500</td>
                                  <td>7500</td>
                                  <td>16-08-2022 23:20:15</td>
                                  <td>2409:4053:c99:d9d::ad88:500a</td>
                                </tr>
                                <tr>
                                  <td>509</td>
                                  <td>(C3765) Rahul k</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>95</td>
                                  <td>NO</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:20:16</td>
                                  <td>
                                    2401:4900:1a5c:641a:c04b:b3d7:8ceb:ca81
                                  </td>
                                </tr>
                                <tr>
                                  <td>510</td>
                                  <td>(C4232) Jai bhai</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>600 </td>
                                  <td>96</td>
                                  <td>YES</td>
                                  <td>600</td>
                                  <td>600</td>
                                  <td>16-08-2022 23:20:16</td>
                                  <td>117.99.31.179</td>
                                </tr>
                                <tr>
                                  <td>511</td>
                                  <td>(C2536) Roxsatar</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>400 </td>
                                  <td>96</td>
                                  <td>YES</td>
                                  <td>400</td>
                                  <td>400</td>
                                  <td>16-08-2022 23:20:17</td>
                                  <td>2409:4043:2b9b:1fc8::528a:8615</td>
                                </tr>
                                <tr>
                                  <td>512</td>
                                  <td>(C3025) Balaji</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>400 </td>
                                  <td>96</td>
                                  <td>YES</td>
                                  <td>400</td>
                                  <td>400</td>
                                  <td>16-08-2022 23:20:17</td>
                                  <td>
                                    2405:201:3002:e162:ec44:f202:feeb:e705
                                  </td>
                                </tr>
                                <tr>
                                  <td>513</td>
                                  <td>(C4371) Sugreeve</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>135 </td>
                                  <td>96</td>
                                  <td>YES</td>
                                  <td>135</td>
                                  <td>135</td>
                                  <td>16-08-2022 23:20:18</td>
                                  <td>2409:4043:790:cfd8:d687:4c5:7917:1143</td>
                                </tr>
                                <tr>
                                  <td>514</td>
                                  <td>(C4390) Mk002</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>96</td>
                                  <td>YES</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:20:18</td>
                                  <td>
                                    2405:205:1304:cbaf:dee2:484c:1142:edb9
                                  </td>
                                </tr>
                                <tr>
                                  <td>515</td>
                                  <td>(C3945) Tannu</td>
                                  <td>1ST WKT RUNS MO</td>
                                  <td>0.9 </td>
                                  <td>600 </td>
                                  <td>80</td>
                                  <td>YES</td>
                                  <td>540</td>
                                  <td>600</td>
                                  <td>16-08-2022 23:20:19</td>
                                  <td>2409:4043:796:6f5c::7d6:70a5</td>
                                </tr>
                                <tr>
                                  <td>516</td>
                                  <td>(C4116) Jeet</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>95</td>
                                  <td>NO</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:20:20</td>
                                  <td>2409:4041:e18:7841::f04a:b505</td>
                                </tr>
                                <tr>
                                  <td>517</td>
                                  <td>(C3108) Tarun</td>
                                  <td>J BUTTLER RUN</td>
                                  <td>0.8 </td>
                                  <td>500 </td>
                                  <td>50</td>
                                  <td>YES</td>
                                  <td>400</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:21:25</td>
                                  <td>2405:201:3007:f166:832:1412:9a1e:5a80</td>
                                </tr>
                                <tr>
                                  <td>518</td>
                                  <td>(C3721) Rahul bhai 2</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>96</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:21:26</td>
                                  <td>
                                    2409:4043:4b9a:9b7d:147e:20f8:f253:8cf6
                                  </td>
                                </tr>
                                <tr>
                                  <td>519</td>
                                  <td>(C3795) Ashok k</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>96</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:21:27</td>
                                  <td>2402:8100:3847:eb81:1:1:db6e:8433</td>
                                </tr>
                                <tr>
                                  <td>520</td>
                                  <td>(C4193) Chiku</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>128 </td>
                                  <td>96</td>
                                  <td>YES</td>
                                  <td>128</td>
                                  <td>128</td>
                                  <td>16-08-2022 23:21:28</td>
                                  <td>27.63.184.72</td>
                                </tr>
                                <tr>
                                  <td>521</td>
                                  <td>(C2536) Roxsatar</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>185</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:21:28</td>
                                  <td>2409:4043:2b9b:1fc8::528a:8615</td>
                                </tr>
                                <tr>
                                  <td>522</td>
                                  <td>(C2584) DEEPAK R</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>96</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:21:28</td>
                                  <td>2409:4071:4e84:4aa2::278a:5d01</td>
                                </tr>
                                <tr>
                                  <td>523</td>
                                  <td>(C4095) Poste</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>2730 </td>
                                  <td>95</td>
                                  <td>NO</td>
                                  <td>2730</td>
                                  <td>2730</td>
                                  <td>16-08-2022 23:21:29</td>
                                  <td>2409:4053:2e02:b11a::4b0a:90f</td>
                                </tr>
                                <tr>
                                  <td>524</td>
                                  <td>(C1983) Vikrant</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>400 </td>
                                  <td>96</td>
                                  <td>YES</td>
                                  <td>400</td>
                                  <td>400</td>
                                  <td>16-08-2022 23:21:30</td>
                                  <td>157.39.32.195</td>
                                </tr>
                                <tr>
                                  <td>525</td>
                                  <td>(C4285) Mula bhai</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>95</td>
                                  <td>NO</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:21:31</td>
                                  <td>2409:4043:104:cbf9::1cb8:10a5</td>
                                </tr>
                                <tr>
                                  <td>526</td>
                                  <td>(C2591) BEEREGOWDA</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>96</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:21:31</td>
                                  <td>
                                    2401:4900:61ba:28d9:5fad:9024:a1d3:4e13
                                  </td>
                                </tr>
                                <tr>
                                  <td>527</td>
                                  <td>(C3404) Annaaa</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>96</td>
                                  <td>YES</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:21:31</td>
                                  <td>2409:4043:30e:fb9d:438d:d73c:e89:fab3</td>
                                </tr>
                                <tr>
                                  <td>528</td>
                                  <td>(C4301) Dinesh</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>5000 </td>
                                  <td>185</td>
                                  <td>YES</td>
                                  <td>5000</td>
                                  <td>5000</td>
                                  <td>16-08-2022 23:21:33</td>
                                  <td>
                                    2401:4900:55c4:4509:cc34:10e0:7ffa:4365
                                  </td>
                                </tr>
                                <tr>
                                  <td>529</td>
                                  <td>(C3133) Mannu khare</td>
                                  <td>1ST WKT RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>5000 </td>
                                  <td>84</td>
                                  <td>NO</td>
                                  <td>5000</td>
                                  <td>5000</td>
                                  <td>16-08-2022 23:21:33</td>
                                  <td>2401:4900:1b22:8d89:2:2:c5df:95b5</td>
                                </tr>
                                <tr>
                                  <td>530</td>
                                  <td>(C2546) Golu bhai</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>96</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:21:34</td>
                                  <td>
                                    2409:4043:2c9c:15e9:19fa:1314:3f69:c9bb
                                  </td>
                                </tr>
                                <tr>
                                  <td>531</td>
                                  <td>(C3564) Shanshnk bhiya</td>
                                  <td>1ST WKT RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>84</td>
                                  <td>NO</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:21:34</td>
                                  <td>
                                    2405:201:301c:d8c8:a047:bf96:6eec:c4c8
                                  </td>
                                </tr>
                                <tr>
                                  <td>532</td>
                                  <td>(C3313) Monty</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>800 </td>
                                  <td>96</td>
                                  <td>YES</td>
                                  <td>800</td>
                                  <td>800</td>
                                  <td>16-08-2022 23:21:34</td>
                                  <td>2402:8100:2065:1f3a::d7a0:b14b</td>
                                </tr>
                                <tr>
                                  <td>533</td>
                                  <td>(C3219) Hemandra</td>
                                  <td>1ST WKT RUNS MO</td>
                                  <td>0.8 </td>
                                  <td>100 </td>
                                  <td>84</td>
                                  <td>YES</td>
                                  <td>80</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:21:35</td>
                                  <td>
                                    2409:4063:4d9d:cbab:9132:ca4b:9f38:d543
                                  </td>
                                </tr>
                                <tr>
                                  <td>534</td>
                                  <td>(C1856) Deepae</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>96</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:21:37</td>
                                  <td>
                                    2409:4043:4d10:d93b:e515:85ff:c980:b9fb
                                  </td>
                                </tr>
                                <tr>
                                  <td>535</td>
                                  <td>(C4285) Mula bhai</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>183</td>
                                  <td>NO</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:21:38</td>
                                  <td>2409:4043:104:cbf9::1cb8:10a5</td>
                                </tr>
                                <tr>
                                  <td>536</td>
                                  <td>(C4241) Shyam gb</td>
                                  <td>J BUTTLER RUN</td>
                                  <td>0.8 </td>
                                  <td>800 </td>
                                  <td>50</td>
                                  <td>YES</td>
                                  <td>640</td>
                                  <td>800</td>
                                  <td>16-08-2022 23:21:40</td>
                                  <td>
                                    2409:4053:284:8ea1:640a:a1ff:fe2e:ce3e
                                  </td>
                                </tr>
                                <tr>
                                  <td>537</td>
                                  <td>(C2291) Rahul 2</td>
                                  <td>1ST WKT RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>84</td>
                                  <td>NO</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:21:41</td>
                                  <td>
                                    2401:4900:51c3:deee:f8c5:17a0:e532:b6c3
                                  </td>
                                </tr>
                                <tr>
                                  <td>538</td>
                                  <td>(C3537) New bhola</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>183</td>
                                  <td>NO</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:21:41</td>
                                  <td>2409:4043:2c82:d946::9a09:c811</td>
                                </tr>
                                <tr>
                                  <td>539</td>
                                  <td>(C4170) Irfan</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>183</td>
                                  <td>NO</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:21:41</td>
                                  <td>
                                    2409:4070:4e0a:474b:c509:11cb:ebc1:143d
                                  </td>
                                </tr>
                                <tr>
                                  <td>540</td>
                                  <td>(C4246) Jitendra</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>96</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:21:43</td>
                                  <td>223.227.73.55</td>
                                </tr>
                                <tr>
                                  <td>541</td>
                                  <td>(C4414) Amitabh</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>96</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:21:44</td>
                                  <td>
                                    2401:4900:5ab2:7263:6345:f20d:378c:e735
                                  </td>
                                </tr>
                                <tr>
                                  <td>542</td>
                                  <td>(C2515) SUNIL</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>600 </td>
                                  <td>96</td>
                                  <td>YES</td>
                                  <td>600</td>
                                  <td>600</td>
                                  <td>16-08-2022 23:21:48</td>
                                  <td>27.63.245.196</td>
                                </tr>
                                <tr>
                                  <td>543</td>
                                  <td>(C3765) Rahul k</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>184</td>
                                  <td>NO</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:21:49</td>
                                  <td>
                                    2401:4900:1a5c:641a:c04b:b3d7:8ceb:ca81
                                  </td>
                                </tr>
                                <tr>
                                  <td>544</td>
                                  <td>(C3721) Rahul bhai 2</td>
                                  <td>35 BALLS RUN MO</td>
                                  <td>0.85 </td>
                                  <td>1000 </td>
                                  <td>70</td>
                                  <td>YES</td>
                                  <td>850</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:21:50</td>
                                  <td>
                                    2409:4043:4b9a:9b7d:147e:20f8:f253:8cf6
                                  </td>
                                </tr>
                                <tr>
                                  <td>545</td>
                                  <td>(C2664) Akash ji</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>250 </td>
                                  <td>96</td>
                                  <td>YES</td>
                                  <td>250</td>
                                  <td>250</td>
                                  <td>16-08-2022 23:21:51</td>
                                  <td>2409:4043:40a:31a8::27cb:70ac</td>
                                </tr>
                                <tr>
                                  <td>546</td>
                                  <td>(C2274) Ashish</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>96</td>
                                  <td>YES</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:21:54</td>
                                  <td>2409:4043:4e08:9b21::83cb:d600</td>
                                </tr>
                                <tr>
                                  <td>547</td>
                                  <td>(C2772) Bhola</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>96</td>
                                  <td>YES</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:21:56</td>
                                  <td>2401:4900:30de:ebe2:0:4b:78d4:b801</td>
                                </tr>
                                <tr>
                                  <td>548</td>
                                  <td>(C3735) agdhhcg</td>
                                  <td>35 BALLS RUN MO</td>
                                  <td>0.85 </td>
                                  <td>10000 </td>
                                  <td>70</td>
                                  <td>YES</td>
                                  <td>8500</td>
                                  <td>10000</td>
                                  <td>16-08-2022 23:21:56</td>
                                  <td>
                                    2409:4043:2b00:ecad:586f:f553:3cb9:f761
                                  </td>
                                </tr>
                                <tr>
                                  <td>549</td>
                                  <td>(C3629) Surandj</td>
                                  <td>1ST WKT RUNS MO</td>
                                  <td>0.8 </td>
                                  <td>500 </td>
                                  <td>84</td>
                                  <td>YES</td>
                                  <td>400</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:21:59</td>
                                  <td>2409:4043:4d12:e009::2608:520d</td>
                                </tr>
                                <tr>
                                  <td>550</td>
                                  <td>(C4267) Sanju</td>
                                  <td>35 BALLS RUN MO</td>
                                  <td>0.85 </td>
                                  <td>400 </td>
                                  <td>70</td>
                                  <td>YES</td>
                                  <td>340</td>
                                  <td>400</td>
                                  <td>16-08-2022 23:22:00</td>
                                  <td>2409:4053:2c9f:f4f::ad8b:d208</td>
                                </tr>
                                <tr>
                                  <td>551</td>
                                  <td>(C1688) Anil</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>5000 </td>
                                  <td>184</td>
                                  <td>NO</td>
                                  <td>5000</td>
                                  <td>5000</td>
                                  <td>16-08-2022 23:22:00</td>
                                  <td>106.207.225.229</td>
                                </tr>
                                <tr>
                                  <td>552</td>
                                  <td>(C4246) Jitendra</td>
                                  <td>35 BALLS RUN MO</td>
                                  <td>0.85 </td>
                                  <td>500 </td>
                                  <td>70</td>
                                  <td>YES</td>
                                  <td>425</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:22:01</td>
                                  <td>223.227.73.55</td>
                                </tr>
                                <tr>
                                  <td>553</td>
                                  <td>(C3765) Rahul k</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>95</td>
                                  <td>NO</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:22:06</td>
                                  <td>
                                    2401:4900:1a5c:641a:c04b:b3d7:8ceb:ca81
                                  </td>
                                </tr>
                                <tr>
                                  <td>554</td>
                                  <td>(C2274) Ashish</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>184</td>
                                  <td>NO</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:22:06</td>
                                  <td>2409:4043:4e08:9b21::83cb:d600</td>
                                </tr>
                                <tr>
                                  <td>555</td>
                                  <td>(C3921) TANNU</td>
                                  <td>35 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>70</td>
                                  <td>YES</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:22:07</td>
                                  <td>106.66.3.140</td>
                                </tr>
                                <tr>
                                  <td>556</td>
                                  <td>(C3108) Tarun</td>
                                  <td>35 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>70</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:22:08</td>
                                  <td>2405:201:3007:f166:832:1412:9a1e:5a80</td>
                                </tr>
                                <tr>
                                  <td>557</td>
                                  <td>(C4377) Manish</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>96</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:22:08</td>
                                  <td>
                                    2409:4043:2b87:7d7c:810c:c444:ab5a:7b2
                                  </td>
                                </tr>
                                <tr>
                                  <td>558</td>
                                  <td>(C2092) Ramveer</td>
                                  <td>35 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>70</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:22:10</td>
                                  <td>2401:4900:1b24:6cd5:2:1:cc70:3436</td>
                                </tr>
                                <tr>
                                  <td>559</td>
                                  <td>(C1916) Bholeshankar</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>184</td>
                                  <td>NO</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:22:11</td>
                                  <td>
                                    2405:201:3009:c864:9826:52c1:88f2:d23f
                                  </td>
                                </tr>
                                <tr>
                                  <td>560</td>
                                  <td>(C2584) DEEPAK R</td>
                                  <td>35 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>350 </td>
                                  <td>70</td>
                                  <td>YES</td>
                                  <td>350</td>
                                  <td>350</td>
                                  <td>16-08-2022 23:22:11</td>
                                  <td>2409:4071:4e84:4aa2::278a:5d01</td>
                                </tr>
                                <tr>
                                  <td>561</td>
                                  <td>(C4414) Amitabh</td>
                                  <td>35 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>70</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:22:11</td>
                                  <td>
                                    2401:4900:5ab2:7263:6345:f20d:378c:e735
                                  </td>
                                </tr>
                                <tr>
                                  <td>562</td>
                                  <td>(C3406) Mahte</td>
                                  <td>35 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>150 </td>
                                  <td>70</td>
                                  <td>YES</td>
                                  <td>150</td>
                                  <td>150</td>
                                  <td>16-08-2022 23:22:11</td>
                                  <td>
                                    2401:4900:55b2:78e5:f948:5c1b:dfd2:5fe4
                                  </td>
                                </tr>
                                <tr>
                                  <td>563</td>
                                  <td>(C3291) Deepak</td>
                                  <td>35 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>70</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:22:12</td>
                                  <td>2409:4050:ecf:f451::72c8:c302</td>
                                </tr>
                                <tr>
                                  <td>564</td>
                                  <td>(C3017) Momeen</td>
                                  <td>1ST WKT RUNS MO</td>
                                  <td>0.9 </td>
                                  <td>2000 </td>
                                  <td>84</td>
                                  <td>YES</td>
                                  <td>1800</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:22:26</td>
                                  <td>
                                    2409:4053:398:7e81:8857:2dff:fefa:571c
                                  </td>
                                </tr>
                                <tr>
                                  <td>565</td>
                                  <td>(C3133) Mannu khare</td>
                                  <td>35 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>69</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:22:28</td>
                                  <td>2401:4900:1b22:8d89:2:2:c5df:95b5</td>
                                </tr>
                                <tr>
                                  <td>566</td>
                                  <td>(C4341) Sachin</td>
                                  <td>35 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>69</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:22:29</td>
                                  <td>2402:8100:2290:57f3:0:19:7292:4401</td>
                                </tr>
                                <tr>
                                  <td>567</td>
                                  <td>(C4267) Sanju</td>
                                  <td>35 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>300 </td>
                                  <td>69</td>
                                  <td>YES</td>
                                  <td>300</td>
                                  <td>300</td>
                                  <td>16-08-2022 23:22:33</td>
                                  <td>2409:4053:2c9f:f4f::ad8b:d208</td>
                                </tr>
                                <tr>
                                  <td>568</td>
                                  <td>(C2061) dewasis</td>
                                  <td>35 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>69</td>
                                  <td>YES</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:22:34</td>
                                  <td>223.239.60.96</td>
                                </tr>
                                <tr>
                                  <td>569</td>
                                  <td>(C3735) agdhhcg</td>
                                  <td>35 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>5000 </td>
                                  <td>69</td>
                                  <td>YES</td>
                                  <td>5000</td>
                                  <td>5000</td>
                                  <td>16-08-2022 23:22:34</td>
                                  <td>
                                    2409:4043:2b00:ecad:586f:f553:3cb9:f761
                                  </td>
                                </tr>
                                <tr>
                                  <td>570</td>
                                  <td>(C4116) Jeet</td>
                                  <td>1ST WKT RUNS MO</td>
                                  <td>0.9 </td>
                                  <td>200 </td>
                                  <td>84</td>
                                  <td>YES</td>
                                  <td>180</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:22:41</td>
                                  <td>2409:4041:e18:7841::f04a:b505</td>
                                </tr>
                                <tr>
                                  <td>571</td>
                                  <td>(C4274) Kapil</td>
                                  <td>35 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>2400 </td>
                                  <td>68</td>
                                  <td>NO</td>
                                  <td>2400</td>
                                  <td>2400</td>
                                  <td>16-08-2022 23:22:57</td>
                                  <td>
                                    2409:4053:59d:4522:9e9a:db2f:9be1:6524
                                  </td>
                                </tr>
                                <tr>
                                  <td>572</td>
                                  <td>(C3429) Sudi</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>103 </td>
                                  <td>95</td>
                                  <td>YES</td>
                                  <td>103</td>
                                  <td>103</td>
                                  <td>16-08-2022 23:22:58</td>
                                  <td>2409:4043:2099:7ea:34e3:47d2:e8c3:713</td>
                                </tr>
                                <tr>
                                  <td>573</td>
                                  <td>(C3406) Mahte</td>
                                  <td>35 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>130 </td>
                                  <td>69</td>
                                  <td>YES</td>
                                  <td>130</td>
                                  <td>130</td>
                                  <td>16-08-2022 23:22:59</td>
                                  <td>
                                    2401:4900:55b2:78e5:f948:5c1b:dfd2:5fe4
                                  </td>
                                </tr>
                                <tr>
                                  <td>574</td>
                                  <td>(C3756) PRASHANT</td>
                                  <td>35 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>69</td>
                                  <td>YES</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:23:01</td>
                                  <td>2409:4053:d94:4adb::4008:2c10</td>
                                </tr>
                                <tr>
                                  <td>575</td>
                                  <td>(C3469) Y kushwah</td>
                                  <td>35 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>69</td>
                                  <td>YES</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:23:01</td>
                                  <td>
                                    2401:4900:1a59:50c2:abd5:aa1:a0f5:4749
                                  </td>
                                </tr>
                                <tr>
                                  <td>576</td>
                                  <td>(C4261) Tony 2 b</td>
                                  <td>1ST WKT RUNS MO</td>
                                  <td>0.9 </td>
                                  <td>108 </td>
                                  <td>85</td>
                                  <td>YES</td>
                                  <td>97.2</td>
                                  <td>108</td>
                                  <td>16-08-2022 23:23:01</td>
                                  <td>2409:4053:2e0f:ba3d::528b:340b</td>
                                </tr>
                                <tr>
                                  <td>577</td>
                                  <td>(C2536) Roxsatar</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>95</td>
                                  <td>YES</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:23:01</td>
                                  <td>2409:4043:2b9b:1fc8::528a:8615</td>
                                </tr>
                                <tr>
                                  <td>578</td>
                                  <td>(C2552) SHUBHAM GNGA</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>95</td>
                                  <td>YES</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:23:02</td>
                                  <td>
                                    2409:4071:e81:bb47:3e90:eb0e:7aec:6f4d
                                  </td>
                                </tr>
                                <tr>
                                  <td>579</td>
                                  <td>(C4127) Bablu</td>
                                  <td>1ST WKT RUNS MO</td>
                                  <td>0.9 </td>
                                  <td>1184 </td>
                                  <td>85</td>
                                  <td>YES</td>
                                  <td>1065.6</td>
                                  <td>1184</td>
                                  <td>16-08-2022 23:23:02</td>
                                  <td>2409:4043:4e98:2a2f::2c9:fd03</td>
                                </tr>
                                <tr>
                                  <td>580</td>
                                  <td>(C1688) Anil</td>
                                  <td>35 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>69</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:23:02</td>
                                  <td>106.207.225.229</td>
                                </tr>
                                <tr>
                                  <td>581</td>
                                  <td>(C4367) Big B</td>
                                  <td>35 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>69</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:23:02</td>
                                  <td>
                                    2409:4043:2486:95bb:6811:f0e4:7589:740f
                                  </td>
                                </tr>
                                <tr>
                                  <td>582</td>
                                  <td>(C3219) Hemandra</td>
                                  <td>J BUTTLER RUN</td>
                                  <td>0.8 </td>
                                  <td>100 </td>
                                  <td>50</td>
                                  <td>YES</td>
                                  <td>80</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:23:03</td>
                                  <td>
                                    2409:4063:4d9d:cbab:9132:ca4b:9f38:d543
                                  </td>
                                </tr>
                                <tr>
                                  <td>583</td>
                                  <td>(C4414) Amitabh</td>
                                  <td>35 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>69</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:23:03</td>
                                  <td>
                                    2401:4900:5ab2:7263:6345:f20d:378c:e735
                                  </td>
                                </tr>
                                <tr>
                                  <td>584</td>
                                  <td>(C4345) Ankesh</td>
                                  <td>35 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>7600 </td>
                                  <td>69</td>
                                  <td>YES</td>
                                  <td>7600</td>
                                  <td>7600</td>
                                  <td>16-08-2022 23:23:03</td>
                                  <td>2402:8100:2297:6e1:0:d:3be9:5a01</td>
                                </tr>
                                <tr>
                                  <td>585</td>
                                  <td>(C3398) Bata</td>
                                  <td>35 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>69</td>
                                  <td>YES</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:23:03</td>
                                  <td>2409:4053:e1b:1498::a0cb:f606</td>
                                </tr>
                                <tr>
                                  <td>586</td>
                                  <td>(C3670) Monish</td>
                                  <td>35 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>69</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:23:04</td>
                                  <td>103.211.53.70</td>
                                </tr>
                                <tr>
                                  <td>587</td>
                                  <td>(C4261) Tony 2 b</td>
                                  <td>J BUTTLER RUN</td>
                                  <td>0.8 </td>
                                  <td>200 </td>
                                  <td>50</td>
                                  <td>YES</td>
                                  <td>160</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:23:22</td>
                                  <td>2409:4053:2e0f:ba3d::528b:340b</td>
                                </tr>
                                <tr>
                                  <td>588</td>
                                  <td>(C3806) Deepak</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>94</td>
                                  <td>YES</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:23:23</td>
                                  <td>
                                    2401:4900:1f3a:50b0:c48b:20d4:f044:9f30
                                  </td>
                                </tr>
                                <tr>
                                  <td>589</td>
                                  <td>(C3896) Sumit</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>94</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:23:24</td>
                                  <td>171.48.29.164</td>
                                </tr>
                                <tr>
                                  <td>590</td>
                                  <td>(C4415) Rencho</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>600 </td>
                                  <td>184</td>
                                  <td>NO</td>
                                  <td>600</td>
                                  <td>600</td>
                                  <td>16-08-2022 23:23:24</td>
                                  <td>
                                    2409:4053:70e:21b8:a5cd:8054:ae2c:7b6d
                                  </td>
                                </tr>
                                <tr>
                                  <td>591</td>
                                  <td>(C4101) Ashu</td>
                                  <td>P SALT RUN</td>
                                  <td>0.9 </td>
                                  <td>2000 </td>
                                  <td>55</td>
                                  <td>YES</td>
                                  <td>1800</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:23:25</td>
                                  <td>
                                    2405:201:3020:9034:7844:5fd8:e45e:282a
                                  </td>
                                </tr>
                                <tr>
                                  <td>592</td>
                                  <td>(C2274) Ashish</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>94</td>
                                  <td>YES</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:23:30</td>
                                  <td>2409:4043:4e08:9b21::83cb:d600</td>
                                </tr>
                                <tr>
                                  <td>593</td>
                                  <td>(C1882) Kuldeep bundela</td>
                                  <td>35 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>67</td>
                                  <td>NO</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:23:31</td>
                                  <td>157.34.134.191</td>
                                </tr>
                                <tr>
                                  <td>594</td>
                                  <td>(C4269) Rajneesh</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>94</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:23:32</td>
                                  <td>
                                    2409:4055:514:fea6:a395:9462:7202:91e8
                                  </td>
                                </tr>
                                <tr>
                                  <td>595</td>
                                  <td>(C2083) Tanmay</td>
                                  <td>35 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>67</td>
                                  <td>NO</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:23:33</td>
                                  <td>
                                    2405:201:3014:102c:dde2:7df9:bac0:972b
                                  </td>
                                </tr>
                                <tr>
                                  <td>596</td>
                                  <td>(C2283) Raju</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>300 </td>
                                  <td>94</td>
                                  <td>YES</td>
                                  <td>300</td>
                                  <td>300</td>
                                  <td>16-08-2022 23:23:36</td>
                                  <td>
                                    2401:4900:55c3:4830:9f39:3bd6:9f3b:f8c0
                                  </td>
                                </tr>
                                <tr>
                                  <td>597</td>
                                  <td>(C3539) Chillu</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>94</td>
                                  <td>YES</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:23:41</td>
                                  <td>2401:4900:45c9:e7:595:69a9:bbd0:79e3</td>
                                </tr>
                                <tr>
                                  <td>598</td>
                                  <td>(C2092) Ramveer</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>177</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:24:32</td>
                                  <td>2401:4900:1b24:6cd5:2:1:cc70:3436</td>
                                </tr>
                                <tr>
                                  <td>599</td>
                                  <td>(C3537) New bhola</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>177</td>
                                  <td>YES</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:24:41</td>
                                  <td>2409:4043:2c82:d946::9a09:c811</td>
                                </tr>
                                <tr>
                                  <td>600</td>
                                  <td>(C3721) Rahul bhai 2</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>89</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:24:49</td>
                                  <td>
                                    2409:4043:4b9a:9b7d:147e:20f8:f253:8cf6
                                  </td>
                                </tr>
                                <tr>
                                  <td>601</td>
                                  <td>(C2225) Laxman</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>300 </td>
                                  <td>89</td>
                                  <td>YES</td>
                                  <td>300</td>
                                  <td>300</td>
                                  <td>16-08-2022 23:24:49</td>
                                  <td>
                                    2409:4043:4d0e:86d3:6068:b676:e9a1:5992
                                  </td>
                                </tr>
                                <tr>
                                  <td>602</td>
                                  <td>(C2092) Ramveer</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>89</td>
                                  <td>YES</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:24:51</td>
                                  <td>2401:4900:1b24:6cd5:2:1:cc70:3436</td>
                                </tr>
                                <tr>
                                  <td>603</td>
                                  <td>(C3896) Sumit</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>89</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:24:51</td>
                                  <td>171.48.29.164</td>
                                </tr>
                                <tr>
                                  <td>604</td>
                                  <td>(C2515) SUNIL</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>165 </td>
                                  <td>89</td>
                                  <td>YES</td>
                                  <td>165</td>
                                  <td>165</td>
                                  <td>16-08-2022 23:24:52</td>
                                  <td>27.63.245.196</td>
                                </tr>
                                <tr>
                                  <td>605</td>
                                  <td>(C3025) Balaji</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>177</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:24:54</td>
                                  <td>
                                    2405:201:3002:e162:ec44:f202:feeb:e705
                                  </td>
                                </tr>
                                <tr>
                                  <td>606</td>
                                  <td>(C4246) Jitendra</td>
                                  <td>40 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>73</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:25:06</td>
                                  <td>223.227.73.55</td>
                                </tr>
                                <tr>
                                  <td>607</td>
                                  <td>(C1882) Kuldeep bundela</td>
                                  <td>40 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>72</td>
                                  <td>NO</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:25:07</td>
                                  <td>
                                    2409:4043:220c:41f3:b94b:5cdc:9cbc:947a
                                  </td>
                                </tr>
                                <tr>
                                  <td>608</td>
                                  <td>(C3721) Rahul bhai 2</td>
                                  <td>40 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>73</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:25:09</td>
                                  <td>
                                    2409:4043:4b9a:9b7d:147e:20f8:f253:8cf6
                                  </td>
                                </tr>
                                <tr>
                                  <td>609</td>
                                  <td>(C2092) Ramveer</td>
                                  <td>40 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>1000 </td>
                                  <td>73</td>
                                  <td>YES</td>
                                  <td>1000</td>
                                  <td>1000</td>
                                  <td>16-08-2022 23:25:09</td>
                                  <td>2401:4900:1b24:6cd5:2:1:cc70:3436</td>
                                </tr>
                                <tr>
                                  <td>610</td>
                                  <td>(C3025) Balaji</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>89</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:25:14</td>
                                  <td>
                                    2405:201:3002:e162:ec44:f202:feeb:e705
                                  </td>
                                </tr>
                                <tr>
                                  <td>611</td>
                                  <td>(C3313) Monty</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>89</td>
                                  <td>YES</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:25:15</td>
                                  <td>2402:8100:2065:1f3a::d7a0:b14b</td>
                                </tr>
                                <tr>
                                  <td>612</td>
                                  <td>(C4341) Sachin</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>89</td>
                                  <td>YES</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:25:19</td>
                                  <td>2402:8100:2290:57f3:0:19:7292:4401</td>
                                </tr>
                                <tr>
                                  <td>613</td>
                                  <td>(C3133) Mannu khare</td>
                                  <td>40 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>73</td>
                                  <td>YES</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:25:21</td>
                                  <td>2401:4900:1b22:8d89:2:2:c5df:95b5</td>
                                </tr>
                                <tr>
                                  <td>614</td>
                                  <td>(C4246) Jitendra</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>89</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:25:23</td>
                                  <td>223.227.73.55</td>
                                </tr>
                                <tr>
                                  <td>615</td>
                                  <td>(C3291) Deepak</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>1300 </td>
                                  <td>89</td>
                                  <td>YES</td>
                                  <td>1300</td>
                                  <td>1300</td>
                                  <td>16-08-2022 23:25:23</td>
                                  <td>2409:4050:ecf:f451::72c8:c302</td>
                                </tr>
                                <tr>
                                  <td>616</td>
                                  <td>(C4382) BT</td>
                                  <td>40 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>100 </td>
                                  <td>73</td>
                                  <td>YES</td>
                                  <td>100</td>
                                  <td>100</td>
                                  <td>16-08-2022 23:25:24</td>
                                  <td>2401:4900:1bc8:576d:1:2:74e6:822f</td>
                                </tr>
                                <tr>
                                  <td>617</td>
                                  <td>(C4390) Mk002</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>89</td>
                                  <td>YES</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:25:25</td>
                                  <td>
                                    2405:205:1304:cbaf:dee2:484c:1142:edb9
                                  </td>
                                </tr>
                                <tr>
                                  <td>618</td>
                                  <td>(C3404) Annaaa</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>89</td>
                                  <td>YES</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:25:25</td>
                                  <td>2409:4043:30e:fb9d:438d:d73c:e89:fab3</td>
                                </tr>
                                <tr>
                                  <td>619</td>
                                  <td>(C4301) Dinesh</td>
                                  <td>100 BALLS RUNS MO</td>
                                  <td>1.00 </td>
                                  <td>9000 </td>
                                  <td>177</td>
                                  <td>YES</td>
                                  <td>9000</td>
                                  <td>9000</td>
                                  <td>16-08-2022 23:25:26</td>
                                  <td>
                                    2401:4900:55c4:4509:cc34:10e0:7ffa:4365
                                  </td>
                                </tr>
                                <tr>
                                  <td>620</td>
                                  <td>(C2099) Sunel</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>89</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:25:26</td>
                                  <td>2401:4900:414a:671a:0:1d:dadf:2101</td>
                                </tr>
                                <tr>
                                  <td>621</td>
                                  <td>(C1617) MDJI</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>20000 </td>
                                  <td>89</td>
                                  <td>YES</td>
                                  <td>20000</td>
                                  <td>20000</td>
                                  <td>16-08-2022 23:25:28</td>
                                  <td>103.108.4.152</td>
                                </tr>
                                <tr>
                                  <td>622</td>
                                  <td>(C4383) Vishal</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>89</td>
                                  <td>YES</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:25:28</td>
                                  <td>
                                    2401:4900:c0f:204f:c52b:c624:2978:46f3
                                  </td>
                                </tr>
                                <tr>
                                  <td>623</td>
                                  <td>(C1617) MDJI</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>20000 </td>
                                  <td>89</td>
                                  <td>YES</td>
                                  <td>20000</td>
                                  <td>20000</td>
                                  <td>16-08-2022 23:25:38</td>
                                  <td>103.108.4.152</td>
                                </tr>
                                <tr>
                                  <td>624</td>
                                  <td>(C4248) Bhrt bk</td>
                                  <td>40 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>72</td>
                                  <td>NO</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:25:38</td>
                                  <td>45.251.43.161</td>
                                </tr>
                                <tr>
                                  <td>625</td>
                                  <td>(C3533) Bhanu</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>3000 </td>
                                  <td>89</td>
                                  <td>YES</td>
                                  <td>3000</td>
                                  <td>3000</td>
                                  <td>16-08-2022 23:25:43</td>
                                  <td>27.63.18.57</td>
                                </tr>
                                <tr>
                                  <td>626</td>
                                  <td>(C3537) New bhola</td>
                                  <td>40 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>500 </td>
                                  <td>73</td>
                                  <td>YES</td>
                                  <td>500</td>
                                  <td>500</td>
                                  <td>16-08-2022 23:25:44</td>
                                  <td>2409:4043:2c82:d946::9a09:c811</td>
                                </tr>
                                <tr>
                                  <td>627</td>
                                  <td>(C2584) DEEPAK R</td>
                                  <td>40 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>150 </td>
                                  <td>73</td>
                                  <td>YES</td>
                                  <td>150</td>
                                  <td>150</td>
                                  <td>16-08-2022 23:25:50</td>
                                  <td>2409:4071:4e84:4aa2::278a:5d01</td>
                                </tr>
                                <tr>
                                  <td>628</td>
                                  <td>(C4116) Jeet</td>
                                  <td>50 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>200 </td>
                                  <td>89</td>
                                  <td>YES</td>
                                  <td>200</td>
                                  <td>200</td>
                                  <td>16-08-2022 23:25:56</td>
                                  <td>2409:4041:e18:7841::f04a:b505</td>
                                </tr>
                                <tr>
                                  <td>629</td>
                                  <td>(C3921) TANNU</td>
                                  <td>40 BALLS RUN MO</td>
                                  <td>1.00 </td>
                                  <td>2000 </td>
                                  <td>73</td>
                                  <td>YES</td>
                                  <td>2000</td>
                                  <td>2000</td>
                                  <td>16-08-2022 23:25:57</td>
                                  <td>106.66.3.140</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="col-md-2">
                            <table className="table table-bordered table-striped ">
                              <thead>
                                <tr>
                                  <th>RUNS</th>
                                  <th>Amount</th>
                                </tr>
                              </thead>
                              <tbody id="session_position">
                                <tr className="gradeX">
                                  <td>undefined</td>
                                  <td>
                                    <span style={{ color: "#007bff" }}>
                                      undefined
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </section>
      </>
    );
  }
}
