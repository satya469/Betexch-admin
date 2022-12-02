import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const MasterListModal = () => {
  const navigate = useNavigate();
  const [UidList, setUidList] = useState([]);
  let token = localStorage.getItem("token");
  let header = { "x-access-token": `${token}` };
  let options = { headers: header };
  const subAdminList = async () => {
    axios
      .get(`/admins/my-subadmins`, options)
      .then((res) => {
        console.log(res);
        const data = res.data.data;
        data.map((item) => {
          setUidList((prevNames) => [...prevNames, item.uid]);
        });
      })
      .catch((err) => {
        console.log(err.response.success);
      });
  };
  useEffect(() => {
    subAdminList();
  }, []);

  const GetFormData = async (e) => {
    e.preventDefault();
    console.log("getin form");
    const data = new FormData(e.target);
    const SelecteName = Object.fromEntries(data.entries());
    console.log("final body", SelecteName);
    if (SelecteName.uid) {
      e.target.reset();
      navigate("/master/create", { state: { SelecteName } });
    }
  };
  return (
    <>
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Select Sub Admin Name
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={(e) => GetFormData(e)}>
              <div class="modal-body">
                <label for="name" className="text-capitalize">
                  Select
                </label>
                <select
                  className="form-control"
                  width="100px"
                  // onChange={handleSelectList}
                  name="uid"
                  required
                >
                  <option value="">---------Select Option--------</option>
                  {UidList.length == 0 ? (
                    <></>
                  ) : (
                    UidList.map((item) => {
                      return (
                        <>
                          <option value={`${item}`}>{item}</option>
                        </>
                      );
                    })
                  )}
                </select>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  id="submitBtn"
                  name="submit"
                  class="btn btn-primary"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MasterListModal;
