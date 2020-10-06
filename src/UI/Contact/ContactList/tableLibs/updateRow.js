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
      <NavLink activeClassName="active" to="/contacts/main">
        {name}
      </NavLink>
    );
  }
  if (typeof newData.associatedCompany !== "object") {
    const company = newData.associatedCompany;
    newData.associatedCompany = (
      <NavLink activeClassName="active" to="/companies/main">
        {company}
      </NavLink>
    );
  }
  return newData;
};

export default updateRow;
