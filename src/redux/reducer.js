/* eslint-disable no-fallthrough */
import store from "./store";

const globalState = {
  from: "RUB",
  to: "USD",
  fetchengCur: false,
  timeOutId: "",
  allCurrArray: [],
};

export default function reducer(state = globalState, action) {
  switch (action.type) {
    case "DID_MOUNT_GET_CURR":
      fetch("https://www.cbr-xml-daily.ru/latest.js")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data.rates);
          return { ...state, allCurrArray: data.rates };
        });
    case "ONCHANGE_INPUT_IHAVE":
      console.log(action.payload);
    case "ONCHANGE_INPUT_IWANT":
      console.log(action.payload);
    case "GET_CUR":
      console.log(action.payload);

    default:
      return state;
  }
}
