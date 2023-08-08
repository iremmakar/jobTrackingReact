import React from "react";

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h3>İş Takip</h3>
      <div>
        <NavLink to={"/"}>İş Listesi</NavLink>
        <NavLink to={"/add-job"}>İş Ekle</NavLink>
      </div>
    </header>
  );
};

export default Header;