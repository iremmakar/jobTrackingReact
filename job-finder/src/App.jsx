import { useState } from "react";

import "./style.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import JobList from "./pages/JobList";
import AddJob from "./pages/AddJob";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<JobList />}></Route>
        <Route path="/add-job" element={<AddJob />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
