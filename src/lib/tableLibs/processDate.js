import generateArray from "./generateArray";

const MONTHSNUM = generateArray(1, 12);
const MONTHS = [
  "",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function processDate(data) {
  let result = "";
  let cur = data.toString();
  switch (cur.length) {
    case NaN:
    case "":
      break;
    case 1:
      result = { day: "0" + data };
      break;
    case 2:
      result = { day: data };
      break;
    case 3:
      let month = MONTHSNUM[MONTHS.indexOf(data) - 1];
      if (Number(month) <= 10) {
        month = "0" + month;
      }
      result = { month: month };
      break;
    case 4:
      result = { year: data };
      break;
    default:
      throw Error("Invalid input!");
  }
  return result;
}

export default processDate;