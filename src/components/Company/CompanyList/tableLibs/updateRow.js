import getDate from "./getDate";
import React from "react";
import { NavLink } from "react-router-dom";

const updateRow = (newData) => {
  newData.createDate = getDate();
  if (newData.contactOwner === "") {
    newData.contactOwner = "Unassigned";
  }
  if (typeof newData.name !== "object") {
    const name = newData.name;
    newData.name = (
      <NavLink activeClassName="active" to="/companies/main">
        {name}
      </NavLink>
    );
  }
  return newData;
};

export default updateRow;
