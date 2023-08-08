import React from "react";

import { sortOptions, typeOptions, statusOptions } from "../constants";

import { handleSearch, filterByStatus, filterByType } from "../redux/jobSlice";

import { useDispatch } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(handleSearch(e.target.value));
  };

  const handleStatus = (e) => {
    dispatch(filterByStatus(e.target.value));
  };

  const handleType = (e) => {
    dispatch(filterByType(e.target.value));
  };

  return (
    <section className="filter-sec">
      <h2>Filtreleme Formu</h2>
      <form action="">
        <div className="field">
          <label htmlFor="">Arama</label>
          <input type="text" onChange={handleChange} />
        </div>
        <div className="field">
          <label htmlFor="">Durum</label>
          <select onChange={handleStatus}>
            {statusOptions.map((opt) => (
              <option>{opt.label}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="">Tip</label>
          <select onChange={handleType}>
            {typeOptions.map((opt) => (
              <option>{opt.label}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="">Sırala</label>
          <select>
            {sortOptions.map((opt) => (
              <option>{opt}</option>
            ))}
          </select>
        </div>
        <button>Filtreleri Temizle</button>
      </form>
    </section>
  );
};

export default Filter;
