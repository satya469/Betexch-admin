import React, { Component } from "react";
import PageHeader from "../Components/PageHeader";

export default class SessionPMList extends Component {
  render() {
    return (
      <>
        <PageHeader title="Match & Session Plus Minus Report" />

        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <input
                    type="hidden"
                    name="market_id"
                    defaultValue="1.202052720"
                  />
                  <input type="hidden" name="page_name" defaultValue="match" />
                  <input type="hidden" name="type" defaultValue="b" />
                  <input type="hidden" name="type" defaultValue="b" />
                  <div className="card-header text-center">
                    <div className="container">
                      <div className="row">
                        <div className="col">
                          <h5>
                            <b>
                              SUPERADMIN OF :- MANCHESTER ORIGINALS WOMEN VS
                              WELSH FIRE WOMEN (T-20)
                            </b>
                          </h5>
                        </div>
                        <div className="col">
                          <button
                            type="submit"
                            onClick={() =>
                              (window.location.href = "/bet-details")
                            }
                            className="btn btn-primary"
                          >
                            Show
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    <div className="form-row">
                      <div className="col-md-8">
                        <table
                          align="left"
                          id="sessionsTable"
                          className="table table-striped  table-hover table-bordered"
                        >
                          <thead>
                            <tr>
                              <th width="15%">
                                <div align="center">
                                  <input
                                    type="checkbox"
                                    id="allSessions"
                                    defaultValue={1}
                                    defaultChecked
                                  />
                                </div>
                              </th>
                              <th>SESSION (POST DATE)</th>
                              <th>DECLARE</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox"
                                    defaultValue="217fdb86b8a6cec6b05182c64fbf23ce1c5318b9"
                                    id="217fdb86b8a6cec6b05182c64fbf23ce1c5318b9"
                                    name="session_array[]"
                                  />
                                </div>
                              </td>
                              <td>
                                1 TO 25 BALLS RUNS MO W (16-08-2022 19:06:46 )
                              </td>
                              <td>29</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox"
                                    defaultValue="e8ce1b33e6b7e2c682da29a750b342e9ce362cb6"
                                    id="e8ce1b33e6b7e2c682da29a750b342e9ce362cb6"
                                    name="session_array[]"
                                  />
                                </div>
                              </td>
                              <td>
                                LAMBI PARI RUNS MO W (16-08-2022 20:27:24 )
                              </td>
                              <td>156</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox"
                                    defaultValue="110cd4968141e84a18c7d225ec33b746c83c86e9"
                                    id="110cd4968141e84a18c7d225ec33b746c83c86e9"
                                    name="session_array[]"
                                  />
                                </div>
                              </td>
                              <td>1ST WKT RUNS MO W (16-08-2022 19:07:55 )</td>
                              <td>27</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox"
                                    defaultValue="30f1e5158b3b7d9223f62e6f5c4d9cecd3c5cc3e"
                                    id="30f1e5158b3b7d9223f62e6f5c4d9cecd3c5cc3e"
                                    name="session_array[]"
                                  />
                                </div>
                              </td>
                              <td>E LAMB RUN (16-08-2022 19:09:07 )</td>
                              <td>35</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox"
                                    defaultValue="82e3bd9178ba9939932adb2d30e424ff6d49cd64"
                                    id="82e3bd9178ba9939932adb2d30e424ff6d49cd64"
                                    name="session_array[]"
                                  />
                                </div>
                              </td>
                              <td>L LEE RUN (16-08-2022 19:09:58 )</td>
                              <td>3</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox"
                                    defaultValue="58b73486faa087e4c5134f051ef2844054428de6"
                                    id="58b73486faa087e4c5134f051ef2844054428de6"
                                    name="session_array[]"
                                  />
                                </div>
                              </td>
                              <td>L LEE BOUNDARIES (16-08-2022 19:10:20 )</td>
                              <td>0</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox"
                                    defaultValue="0ad5e1424fd713306b1510eb3efad0d7e890f020"
                                    id="0ad5e1424fd713306b1510eb3efad0d7e890f020"
                                    name="session_array[]"
                                  />
                                </div>
                              </td>
                              <td>E LAMB BOUNDARIES (16-08-2022 19:11:25 )</td>
                              <td>5</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox"
                                    defaultValue="369b0db4b1cf9c1f174cd6c789c648f40ea22769"
                                    id="369b0db4b1cf9c1f174cd6c789c648f40ea22769"
                                    name="session_array[]"
                                  />
                                </div>
                              </td>
                              <td>5 BALL RUN MO W (16-08-2022 19:28:05 )</td>
                              <td>2</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox"
                                    defaultValue="f9fa58b6c5f9a2db55a85b0c1e507ed10452d791"
                                    id="f9fa58b6c5f9a2db55a85b0c1e507ed10452d791"
                                    name="session_array[]"
                                  />
                                </div>
                              </td>
                              <td>
                                1 TO 10 BALL RUN MO W (16-08-2022 19:32:25 )
                              </td>
                              <td>11</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox"
                                    defaultValue="dbfe8d8adcece33b962017b85050fdc69df19451"
                                    id="dbfe8d8adcece33b962017b85050fdc69df19451"
                                    name="session_array[]"
                                  />
                                </div>
                              </td>
                              <td>
                                1 TO 15 BALL RUN MO W (16-08-2022 19:36:19 )
                              </td>
                              <td>19</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox"
                                    defaultValue="944a5be75ab154765f3f00d677dcd35b7e5a64f8"
                                    id="944a5be75ab154765f3f00d677dcd35b7e5a64f8"
                                    name="session_array[]"
                                  />
                                </div>
                              </td>
                              <td>
                                1 TO 20 BALL RUN MO W (16-08-2022 19:40:11 )
                              </td>
                              <td>27</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox"
                                    defaultValue="1fec368ba07c9caf069d650255307a6bac2e854e"
                                    id="1fec368ba07c9caf069d650255307a6bac2e854e"
                                    name="session_array[]"
                                  />
                                </div>
                              </td>
                              <td>2ND WKT RUNS MO W (16-08-2022 19:47:34 )</td>
                              <td>94</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox"
                                    defaultValue="117a9555d7dab391b3dddf1934e0d055d0a04b1a"
                                    id="117a9555d7dab391b3dddf1934e0d055d0a04b1a"
                                    name="session_array[]"
                                  />
                                </div>
                              </td>
                              <td>
                                1 TO 30 BALL RUN MO W (16-08-2022 19:50:53 )
                              </td>
                              <td>33</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox"
                                    defaultValue="e1233075bc378e59dd80c895fac8016a018d6e61"
                                    id="e1233075bc378e59dd80c895fac8016a018d6e61"
                                    name="session_array[]"
                                  />
                                </div>
                              </td>
                              <td>
                                1 TO 50 BALL RUN MO W (16-08-2022 20:03:36 )
                              </td>
                              <td>60</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox"
                                    defaultValue="93836908876795219c3e7861991798648bbb27b3"
                                    id="93836908876795219c3e7861991798648bbb27b3"
                                    name="session_array[]"
                                  />
                                </div>
                              </td>
                              <td>D DOTTIN RUN (16-08-2022 19:53:03 )</td>
                              <td>67</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox"
                                    defaultValue="96c57c002ec0d9549359f86aa22f1717dfea41e2"
                                    id="96c57c002ec0d9549359f86aa22f1717dfea41e2"
                                    name="session_array[]"
                                  />
                                </div>
                              </td>
                              <td>
                                D DOTTIN BOUNDARIES (16-08-2022 19:53:20 )
                              </td>
                              <td>10</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox"
                                    defaultValue="098913f713a292df35d7c57d9eda1c0ba14e7397"
                                    id="098913f713a292df35d7c57d9eda1c0ba14e7397"
                                    name="session_array[]"
                                  />
                                </div>
                              </td>
                              <td>
                                1 TO 35 BALL RUN MO W (16-08-2022 19:53:30 )
                              </td>
                              <td>36</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox"
                                    defaultValue="eb0b3934adc5fd357f20b232ae99751dd08164a3"
                                    id="eb0b3934adc5fd357f20b232ae99751dd08164a3"
                                    name="session_array[]"
                                  />
                                </div>
                              </td>
                              <td>
                                1 TO 40 BALL RUN MO W (16-08-2022 19:55:49 )
                              </td>
                              <td>47</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox"
                                    defaultValue="c8e7472784c3dad29987cf3c1ac019ae418fa452"
                                    id="c8e7472784c3dad29987cf3c1ac019ae418fa452"
                                    name="session_array[]"
                                  />
                                </div>
                              </td>
                              <td>
                                1 TO 45 BALL RUN MO W (16-08-2022 20:00:14 )
                              </td>
                              <td>53</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox"
                                    defaultValue="2f7679ac09062bd0c44eecf741861f52504749e8"
                                    id="2f7679ac09062bd0c44eecf741861f52504749e8"
                                    name="session_array[]"
                                  />
                                </div>
                              </td>
                              <td>55 BALL RUN MO W (16-08-2022 20:07:34 )</td>
                              <td>68</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox"
                                    defaultValue="ae55530235fc811cfd3be414f104c70ee7357f12"
                                    id="ae55530235fc811cfd3be414f104c70ee7357f12"
                                    name="session_array[]"
                                  />
                                </div>
                              </td>
                              <td>60 BALL RUN MO W (16-08-2022 20:11:00 )</td>
                              <td>81</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox"
                                    defaultValue="f5e554eda05a9b4b3a57c1db6dbe722fc1ff4584"
                                    id="f5e554eda05a9b4b3a57c1db6dbe722fc1ff4584"
                                    name="session_array[]"
                                  />
                                </div>
                              </td>
                              <td>65 BALL RUN MO W (16-08-2022 20:15:11 )</td>
                              <td>88</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox"
                                    defaultValue="9b6971f791510dae14d222b92d9448adebfd86a5"
                                    id="9b6971f791510dae14d222b92d9448adebfd86a5"
                                    name="session_array[]"
                                  />
                                </div>
                              </td>
                              <td>70 BALL RUN MO W (16-08-2022 20:18:19 )</td>
                              <td>95</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox"
                                    defaultValue="0b21546991c47dca2ec35fa1cef8426681a8c499"
                                    id="0b21546991c47dca2ec35fa1cef8426681a8c499"
                                    name="session_array[]"
                                  />
                                </div>
                              </td>
                              <td>3RD WKT RUNS MO W (16-08-2022 20:22:23 )</td>
                              <td>156</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox"
                                    defaultValue="f1e42087ace69cde0931b1f4a68f4c28c69e08a8"
                                    id="f1e42087ace69cde0931b1f4a68f4c28c69e08a8"
                                    name="session_array[]"
                                  />
                                </div>
                              </td>
                              <td>75 BALL RUN MO W (16-08-2022 20:22:53 )</td>
                              <td>102</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox"
                                    defaultValue="61185657c00d1e367032314b14f18afc465de978"
                                    id="61185657c00d1e367032314b14f18afc465de978"
                                    name="session_array[]"
                                  />
                                </div>
                              </td>
                              <td>80 BALL RUN MO W (16-08-2022 20:27:06 )</td>
                              <td>106</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox"
                                    defaultValue="4216ef8e5368f555035f75d3d6ce11c431f2400b"
                                    id="4216ef8e5368f555035f75d3d6ce11c431f2400b"
                                    name="session_array[]"
                                  />
                                </div>
                              </td>
                              <td>85 BALL RUN MO W (16-08-2022 20:29:32 )</td>
                              <td>116</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox"
                                    defaultValue="c5e11d22db40e1567e0e8acfc957717870f21dfe"
                                    id="c5e11d22db40e1567e0e8acfc957717870f21dfe"
                                    name="session_array[]"
                                  />
                                </div>
                              </td>
                              <td>90 BALL RUN MO W (16-08-2022 20:32:41 )</td>
                              <td>131</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox"
                                    defaultValue="78bd7f7b8edc916ff5962a25908cfc7db8e6727b"
                                    id="78bd7f7b8edc916ff5962a25908cfc7db8e6727b"
                                    name="session_array[]"
                                  />
                                </div>
                              </td>
                              <td>95 BALL RUN MO W (16-08-2022 20:35:40 )</td>
                              <td>142</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox"
                                    defaultValue="73428a4f695921df158f6543d41568bbe9fc770e"
                                    id="73428a4f695921df158f6543d41568bbe9fc770e"
                                    name="session_array[]"
                                  />
                                </div>
                              </td>
                              <td>5 BALL RUN WF W (16-08-2022 20:44:22 )</td>
                              <td>3</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox"
                                    defaultValue="931504890149e8245077e932b8220fcba8c41707"
                                    id="931504890149e8245077e932b8220fcba8c41707"
                                    name="session_array[]"
                                  />
                                </div>
                              </td>
                              <td>25 BALL RUN WF W (16-08-2022 20:55:19 )</td>
                              <td>32</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox"
                                    defaultValue="24c956563703921d016341a739d9ea55a1b7c769"
                                    id="24c956563703921d016341a739d9ea55a1b7c769"
                                    name="session_array[]"
                                  />
                                </div>
                              </td>
                              <td>10 BALL RUN WF W (16-08-2022 21:00:13 )</td>
                              <td>10</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox"
                                    defaultValue="4f58d194eba993637f7c37636a1814c09b07fcdb"
                                    id="4f58d194eba993637f7c37636a1814c09b07fcdb"
                                    name="session_array[]"
                                  />
                                </div>
                              </td>
                              <td>15 BALL RUN WF W (16-08-2022 21:02:57 )</td>
                              <td>19</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox"
                                    defaultValue="b980b7a95841870d5321a92d68f8f3a2630b63f6"
                                    id="b980b7a95841870d5321a92d68f8f3a2630b63f6"
                                    name="session_array[]"
                                  />
                                </div>
                              </td>
                              <td>20 BALL RUN WF W (16-08-2022 21:06:32 )</td>
                              <td>25</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox"
                                    defaultValue="927be76da0a4089df469619269559a663bfd1f9d"
                                    id="927be76da0a4089df469619269559a663bfd1f9d"
                                    name="session_array[]"
                                  />
                                </div>
                              </td>
                              <td>30 BALL RUN WF W (16-08-2022 21:12:17 )</td>
                              <td>39</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox"
                                    defaultValue="e9015f4c8da8bebf4bce4c911e335c7dca90272e"
                                    id="e9015f4c8da8bebf4bce4c911e335c7dca90272e"
                                    name="session_array[]"
                                  />
                                </div>
                              </td>
                              <td>50 BALL RUN WF W (16-08-2022 21:12:43 )</td>
                              <td>73</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox"
                                    defaultValue="ff6a20f2d2a8f02d0d78ac7584ded131d2ed190c"
                                    id="ff6a20f2d2a8f02d0d78ac7584ded131d2ed190c"
                                    name="session_array[]"
                                  />
                                </div>
                              </td>
                              <td>35 BALL RUN WF W (16-08-2022 21:16:28 )</td>
                              <td>47</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox"
                                    defaultValue="4a5c2700e9dd18c6de8a5897d2edcd89f993d950"
                                    id="4a5c2700e9dd18c6de8a5897d2edcd89f993d950"
                                    name="session_array[]"
                                  />
                                </div>
                              </td>
                              <td>40 BALL RUN WF W (16-08-2022 21:19:35 )</td>
                              <td>58</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox"
                                    defaultValue="6e5b76387a78c666534b56865a008e9891535480"
                                    id="6e5b76387a78c666534b56865a008e9891535480"
                                    name="session_array[]"
                                  />
                                </div>
                              </td>
                              <td>45 BALL RUN WF W (16-08-2022 21:23:16 )</td>
                              <td>66</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox"
                                    defaultValue="97d4955e8c8894b4803485002e8aa5ca69f9f515"
                                    id="97d4955e8c8894b4803485002e8aa5ca69f9f515"
                                    name="session_array[]"
                                  />
                                </div>
                              </td>
                              <td>55 BALL RUN WF W (16-08-2022 21:32:13 )</td>
                              <td>83</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="col-md-4">
                        <table
                          align="left"
                          id="clientTable"
                          className="table table-striped  table-hover table-bordered"
                        >
                          <thead>
                            <tr>
                              <th width="15%">
                                <div align="center">
                                  <input
                                    onclick="click()"
                                    type="checkbox"
                                    id="allClient"
                                    defaultValue={1}
                                    defaultChecked
                                  />
                                </div>
                              </th>
                              <th>ADMIN (CODE NAME)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox checkbox"
                                    defaultValue={1228}
                                    id="1228_user_id"
                                    name="downline_array[]"
                                  />
                                </div>
                              </td>
                              <td>DK JI(SUB1428)</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox checkbox"
                                    defaultValue={192}
                                    id="192_user_id"
                                    name="downline_array[]"
                                  />
                                </div>
                              </td>
                              <td>DK(SUB392)</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox checkbox"
                                    defaultValue={653}
                                    id="653_user_id"
                                    name="downline_array[]"
                                  />
                                </div>
                              </td>
                              <td>PANDIT JI(SUB853)</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox checkbox"
                                    defaultValue={92}
                                    id="92_user_id"
                                    name="downline_array[]"
                                  />
                                </div>
                              </td>
                              <td>NEW SUB(SUB292)</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox checkbox"
                                    defaultValue={435}
                                    id="435_user_id"
                                    name="downline_array[]"
                                  />
                                </div>
                              </td>
                              <td>GIRDHAR(SUB635)</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox checkbox"
                                    defaultValue={734}
                                    id="734_user_id"
                                    name="downline_array[]"
                                  />
                                </div>
                              </td>
                              <td>SONU JI(SUB934)</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox checkbox"
                                    defaultValue={553}
                                    id="553_user_id"
                                    name="downline_array[]"
                                  />
                                </div>
                              </td>
                              <td>LAKSHY(SUB753)</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox checkbox"
                                    defaultValue={204}
                                    id="204_user_id"
                                    name="downline_array[]"
                                  />
                                </div>
                              </td>
                              <td>DK2(SUB404)</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox checkbox"
                                    defaultValue={804}
                                    id="804_user_id"
                                    name="downline_array[]"
                                  />
                                </div>
                              </td>
                              <td>AVI(SUB1004)</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox checkbox"
                                    defaultValue={179}
                                    id="179_user_id"
                                    name="downline_array[]"
                                  />
                                </div>
                              </td>
                              <td>AUDI(SUB379)</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox checkbox"
                                    defaultValue={552}
                                    id="552_user_id"
                                    name="downline_array[]"
                                  />
                                </div>
                              </td>
                              <td>BJP(SUB752)</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox checkbox"
                                    defaultValue={652}
                                    id="652_user_id"
                                    name="downline_array[]"
                                  />
                                </div>
                              </td>
                              <td>SABAI BABA JI(SUB852)</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox checkbox"
                                    defaultValue={182}
                                    id="182_user_id"
                                    name="downline_array[]"
                                  />
                                </div>
                              </td>
                              <td>JWALA(SUB382)</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox checkbox"
                                    defaultValue={1227}
                                    id="1227_user_id"
                                    name="downline_array[]"
                                  />
                                </div>
                              </td>
                              <td>MORENA 2(SUB1427)</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox checkbox"
                                    defaultValue={181}
                                    id="181_user_id"
                                    name="downline_array[]"
                                  />
                                </div>
                              </td>
                              <td>ANMOL(SUB381)</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox checkbox"
                                    defaultValue={180}
                                    id="180_user_id"
                                    name="downline_array[]"
                                  />
                                </div>
                              </td>
                              <td>MONTU(SUB380)</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox checkbox"
                                    defaultValue={1098}
                                    id="1098_user_id"
                                    name="downline_array[]"
                                  />
                                </div>
                              </td>
                              <td>JHANSI JAIN(SUB1298)</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox checkbox"
                                    defaultValue={1223}
                                    id="1223_user_id"
                                    name="downline_array[]"
                                  />
                                </div>
                              </td>
                              <td>PRANSHU JI(SUB1423)</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox checkbox"
                                    defaultValue={183}
                                    id="183_user_id"
                                    name="downline_array[]"
                                  />
                                </div>
                              </td>
                              <td>SS G(SUB383)</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox checkbox"
                                    defaultValue={1205}
                                    id="1205_user_id"
                                    name="downline_array[]"
                                  />
                                </div>
                              </td>
                              <td>PRINCE(SUB1405)</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox checkbox"
                                    defaultValue={576}
                                    id="576_user_id"
                                    name="downline_array[]"
                                  />
                                </div>
                              </td>
                              <td>DEEPAK JI(SUB776)</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox checkbox"
                                    defaultValue={1168}
                                    id="1168_user_id"
                                    name="downline_array[]"
                                  />
                                </div>
                              </td>
                              <td>KESHRI(SUB1368)</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox checkbox"
                                    defaultValue={28}
                                    id="28_user_id"
                                    name="downline_array[]"
                                  />
                                </div>
                              </td>
                              <td>SAGAR(SUB78)</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox checkbox"
                                    defaultValue={340}
                                    id="340_user_id"
                                    name="downline_array[]"
                                  />
                                </div>
                              </td>
                              <td>BATTALION(SUB540)</td>
                            </tr>
                            <tr>
                              <td>
                                <div align="center">
                                  <input
                                    defaultChecked
                                    type="checkbox"
                                    className="custom-checkbox checkbox"
                                    defaultValue={654}
                                    id="654_user_id"
                                    name="downline_array[]"
                                  />
                                </div>
                              </td>
                              <td>ROCKY(SUB854)</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
