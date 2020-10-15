import getDate from "./getDate";
import { testPhoneNum, testDate } from "./validation";

function getColumns() {
  return [
    {
      title: "NAME",
      field: "name",
      type: "string",
      initialEditValue: "",
      validate: (rowData) =>
        rowData.name === ""
          ? { isValid: false, helperText: "Name cannot be empty" }
          : true,
    },
    
    {
      title: "PHONE NUMBER",
      field: "phoneNumber",
      type: "string",
      validate: (rowData) =>
        testPhoneNum(rowData.phoneNumber)
          ? true
          : { isValid: false, helperText: "Phone number format incorrect" },
    },
    { title: "COMPANY OWNER", field: "companyOwner", type: "string" },
    {
      title: "LAST ACTIVITY DATE",
      field: "lastActivityDate",
      type: "string",
      initialEditValue: getDate(),
      validate: (rowData) => {
        if (
          rowData.lastActivityDate === "" ||
          testDate(rowData.lastActivityDate)
        ) {
          return true;
        }
        return { isValid: false, helperText: "Date format incorrect" };
      },
    },
    { title: "CITY", field: "city", type: "string" },
    { title: "COUNTRY", field: "country", type: "string" },
    { title: "INDUSTRY", field: "industry", type: "string" },
    {
      title: "CREATE DATE",
      field: "createDate",
      type: "string",
      editable: "never",
    },
    // { title: 'ID', field: 'id', type: 'numeric' },
  ];
}

export default getColumns;
