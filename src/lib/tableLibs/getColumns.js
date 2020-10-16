import getDate from "./getDate";
import { testPhoneNum, testEmailAddr, testDate } from "./validation";

function getColumns() {
  return [
    {
      title: "NAME",
      field: "name",
      initialEditValue: "",
      validate: (rowData) =>
        rowData.name === ""
          ? { isValid: false, helperText: "Name cannot be empty" }
          : true,
    },
    {
      title: "EMAIL",
      field: "email",
      validate: (rowData) =>
        testEmailAddr(rowData.email)
          ? true
          : { isValid: false, helperText: "Email address format incorrect" },
    },
    {
      title: "PHONE NUMBER",
      field: "phoneNumber",
      validate: (rowData) =>
        testPhoneNum(rowData.phoneNumber)
          ? true
          : { isValid: false, helperText: "Phone number format incorrect" },
    },

    { title: "CONTACT OWNER", field: "contactOwner", editable: "never", },
    { title: "ASSOCIATED COMPANY", field: "associatedCompany", editable: "never", },
    {
      title: "LAST ACTIVITY DATE",
      field: "lastActivityDate",
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
    {
      title: "LEAD STATUS",
      field: "leadStatus",
      lookup: {
        1: "New",
        2: "Open",
        3: "In progress",
        4: "Open deal",
        5: "Unqualified",
        6: "Attempted to contact",
        7: "Connected",
        8: "Bad timing",
      },
    },
    {
      title: "CREATE DATE",
      field: "createDate",
      editable: "never",
    },
  ];
}

export default getColumns;
