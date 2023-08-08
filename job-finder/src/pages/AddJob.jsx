import React from "react";
import { statusOptions, typeOptions } from "../constants";

import { addJob } from "../redux/jobSlice";

import { useDispatch } from "react-redux";

import { v4 } from "uuid";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const dataObj = Object.fromEntries(formData);

    dataObj.id = v4();

    dataObj.date = new Date().toLocaleDateString();

    axios.post("http://localhost:3030/jobs", dataObj).then(() => {
      dispatch(addJob(dataObj));
      navigate("/");
    });

    console.log(dataObj);
  };

  return (
    <div className="add-sec">
      <h2>Yeni iş ekle</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className="field">
          <label>Pozisyon</label>
          <input type="text" name="position" />
        </div>
        <div className="field">
          <label>Şirket</label>
          <input type="text" name="company" />
        </div>
        <div className="field">
          <label>Lokasyon</label>
          <input type="text" name="location" />
        </div>
        <div className="field">
          <label>Durum</label>
          <select name="status" id="">
            {statusOptions.map((opt) => (
              <option>{opt.label}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label>Tür</label>
          <select name="type" id="">
            {typeOptions.map((opt) => (
              <option>{opt.label}</option>
            ))}
          </select>
        </div>
        <button>Ekle</button>
      </form>
    </div>
  );
};

export default AddJob;
